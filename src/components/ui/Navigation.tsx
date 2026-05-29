import React, { useState, useEffect } from 'react';
import styles from './Navigation.module.css';

interface NavigationProps {
  currentSection?: string;
}

export default function Navigation({ currentSection = '000' }: NavigationProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const base = import.meta.env.BASE_URL;
  const links = [
    { href: base, label: 'Inicio' },
    { href: `${base}charla/`, label: 'La Película' },
    { href: `${base}cruces/`, label: 'Cruces' },
    { href: `${base}escenarios/`, label: 'Escenarios' },
    { href: `${base}fragmentos/`, label: 'Fragmentos' },
    { href: `${base}referencias/`, label: 'Referencias' },
  ];

  return (
    <nav className={`${styles.nav} ${!isVisible ? styles.navHidden : ''}`}>
      <div className={styles.container}>
        <a href={base} className={styles.title}>Intouchables & Literatura</a>

        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.catalogIndicator}>
          CAT. {currentSection}
        </div>
      </div>
    </nav>
  );
}
