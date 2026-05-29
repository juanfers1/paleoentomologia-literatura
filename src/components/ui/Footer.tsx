import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const base = import.meta.env.BASE_URL;
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.ornament}></div>
        
        <div className={styles.content}>
          <div className={styles.author}>Gonzalo Abril Ramírez</div>
          <div className={styles.affiliation}>Facultad de Ciencias Agrarias, Escuela de Biociencias</div>
          <div className={styles.course}>Cátedra de contexto: Investigación en el aula</div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.year}>&copy; 2024</div>
          
          <div className={styles.links}>
            <a href={base}>Inicio</a>
            <a href={`${base}charla`}>Charla</a>
            <a href={`${base}cruces`}>Cruces</a>
            <a href={`${base}referencias`}>Referencias</a>
          </div>

          <div className={styles.stamp}>ARCHIVO</div>
        </div>
      </div>
    </footer>
  );
}
