import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const base = import.meta.env.BASE_URL;
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.ornament}></div>
        
        <div className={styles.content}>
          <div className={styles.author}>Adaptación Intouchables</div>
          <div className={styles.affiliation}>Clase de Apreciación del Arte</div>
          <div className={styles.course}>Cátedra de contexto: Cine, clase y escritura</div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.year}>&copy; 2024</div>
          
          <div className={styles.links}>
            <a href={base}>Inicio</a>
            <a href={`${base}charla/`}>La Película</a>
            <a href={`${base}cruces/`}>Cruces</a>
            <a href={`${base}referencias/`}>Referencias</a>
          </div>

          <div className={styles.stamp}>ARCHIVO</div>
        </div>
      </div>
    </footer>
  );
}
