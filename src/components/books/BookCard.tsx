import React from 'react';
import { motion } from 'framer-motion';
import styles from './BookCard.module.css';

interface BookCardProps {
  title: string;
  author: string;
  year: string;
  publisher: string;
  accentColor: 'camus-red' | 'ernaux-blue';
  catalogNumber: string;
  coverImage?: string;
  onOpen?: () => void;
  index?: number;
}

export default function BookCard({ 
  title, 
  author, 
  year, 
  publisher, 
  accentColor, 
  catalogNumber, 
  coverImage,
  onOpen,
  index = 0
}: BookCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={styles.card}
      onClick={onOpen}
    >
      <div className={`${styles.accentBar} ${styles[`accent-${accentColor}`]}`}></div>
      
      <div className={styles.catalogNumber}>{catalogNumber}</div>
      
      <div className={styles.coverContainer}>
        {coverImage ? (
          <img src={coverImage} alt={`Portada de ${title}`} className={styles.coverImage} />
        ) : (
          <div className={styles.coverPlaceholder}>
            <div className={styles.coverTitle}>{title}</div>
            <div className={styles.coverAuthor}>{author}</div>
          </div>
        )}
      </div>
      
      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.author}>{author}</div>
        <div className={styles.meta}>
          <span>{publisher}</span>
          <span>{year}</span>
        </div>
      </div>
    </motion.div>
  );
}
