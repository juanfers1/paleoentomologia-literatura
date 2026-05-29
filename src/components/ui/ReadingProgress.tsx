import React, { useState, useEffect } from 'react';
import styles from './ReadingProgress.module.css';

interface Section {
  id: string;
  label: string;
}

interface ReadingProgressProps {
  sections: Section[];
}

export default function ReadingProgress({ sections }: ReadingProgressProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSectionId, setActiveSectionId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall scroll progress (0 to 100)
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      const scrollTop = window.scrollY;
      
      const maxScroll = documentHeight - windowHeight;
      const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Intersection Observer for active section
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSectionId(entry.target.id);
        }
      });
    }, {
      rootMargin: '-20% 0px -60% 0px' // Adjust detection area to middle of screen
    });

    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className={styles.progressContainer}>
      <div className={styles.track}>
        <div 
          className={styles.indicator} 
          style={{ height: `${scrollProgress}%` }} 
        />
        <div className={styles.sections}>
          {sections.map((section, index) => {
            // Distribute dots evenly for demo, in reality they'd map to actual page positions
            const topPosition = `${(index / (Math.max(1, sections.length - 1))) * 100}%`;
            return (
              <div 
                key={section.id} 
                className={`${styles.sectionDot} ${activeSectionId === section.id ? styles.active : ''}`}
                style={{ top: topPosition }}
              >
                <div className={styles.sectionLabel}>{section.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
