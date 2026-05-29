import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ReferenceTooltip.module.css';

interface ReferenceTooltipProps {
  number: number;
  citation: string;
  referenceId: string;
}

export default function ReferenceTooltip({
  number,
  citation,
  referenceId,
}: ReferenceTooltipProps) {
  const [visible, setVisible] = useState(false);

  const showTooltip = useCallback(() => setVisible(true), []);
  const hideTooltip = useCallback(() => setVisible(false), []);

  const scrollToRef = () => {
    const el = document.getElementById(referenceId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      scrollToRef();
    }
  };

  return (
    <span
      className={styles.wrapper}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      <button
        className={styles.number}
        onClick={scrollToRef}
        onKeyDown={handleKeyDown}
        aria-label={`Referencia ${number}: ${citation}`}
        aria-describedby={visible ? `tooltip-${referenceId}` : undefined}
      >
        [{number}]
      </button>

      <AnimatePresence>
        {visible && (
          <motion.div
            id={`tooltip-${referenceId}`}
            className={styles.tooltip}
            role="tooltip"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
          >
            <p className={styles.tooltipText}>{citation}</p>
            <div className={styles.arrow} aria-hidden="true" />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
