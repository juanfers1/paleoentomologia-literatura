import { useState, useEffect, type RefObject } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FragmentReveal.module.css';

interface FragmentRevealProps {
  text: string;
  source: string;
  triggerRef: RefObject<HTMLElement | null>;
}

export default function FragmentReveal({ text, source, triggerRef }: FragmentRevealProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = triggerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { rootMargin: '-10% 0px -30% 0px', threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [triggerRef]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          className={styles.container}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 80 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          aria-label={`Anotación marginal: ${source}`}
        >
          {/* Pin icon */}
          <svg
            className={styles.pin}
            viewBox="0 0 14 14"
            fill="currentColor"
            aria-hidden="true"
          >
            <circle cx="7" cy="5" r="4" />
            <line x1="7" y1="9" x2="7" y2="14" stroke="currentColor" strokeWidth="1.5" />
          </svg>

          <p className={styles.text}>«{text}»</p>
          <span className={styles.source}>— {source}</span>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
