import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import styles from './BookModal.module.css';

interface Fragment {
  original: string;
  translation: string;
  source: string;
}

interface Book {
  id: string;
  title: string;
  author: string;
  year: string;
  publisher: string;
  translatedTitle: string;
  translatedYear: string;
  synopsis: string;
  accentColor: 'camus-red' | 'ernaux-blue';
  fragments: Fragment[];
}

interface BookModalProps {
  isOpen: boolean;
  onClose: () => void;
  book: Book | null;
}

export default function BookModal({ isOpen, onClose, book }: BookModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!book) return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className={styles.modal}
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`${styles.accentBar} ${styles[`accent-${book.accentColor}`]}`}></div>
            <button className={styles.closeBtn} onClick={onClose} aria-label="Cerrar">×</button>
            
            <div className={styles.content}>
              <div className={styles.mainInfo}>
                <div className={styles.header}>
                  <h2 className={styles.title}>{book.title}</h2>
                  <div className={styles.author}>{book.author}</div>
                </div>
                
                <div className={styles.meta}>
                  {book.publisher}, {book.year} <br/>
                  Traducción: {book.translatedTitle} ({book.translatedYear})
                </div>
                
                <div className={styles.synopsis}>
                  {book.synopsis}
                </div>
              </div>

              <div className={styles.fragmentsSection}>
                <h3 className={styles.fragmentsTitle}>Fragmentos clave</h3>
                {book.fragments.map((frag, idx) => (
                  <div key={idx} className={styles.fragment}>
                    <div className={styles.original}>"{frag.original}"</div>
                    <div className={styles.translation}>{frag.translation}</div>
                    <div className={styles.source}>— {frag.source}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Use portal to render at root level to avoid z-index/overflow issues
  if (typeof document !== 'undefined') {
    return createPortal(modalContent, document.body);
  }
  
  return null;
}
