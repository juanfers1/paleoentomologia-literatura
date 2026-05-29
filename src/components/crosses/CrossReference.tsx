import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './CrossReference.module.css';

gsap.registerPlugin(ScrollTrigger);

interface Reference {
  id: string;
  citation: string;
}

interface CrossReferenceProps {
  filmContent: string;
  literaryContent: string;
  quote?: string;
  analysis: string;
  author: 'camus' | 'ernaux';
  catalogNumber: string;
  references?: Reference[];
}

export default function CrossReference({
  filmContent,
  literaryContent,
  quote,
  analysis,
  author,
  catalogNumber,
  references
}: CrossReferenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax tension effect on scroll
    gsap.fromTo(leftPanelRef.current, 
      { y: 30 },
      { 
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
    );

    gsap.fromTo(rightPanelRef.current, 
      { y: -30 },
      { 
        y: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
    );
  }, { scope: containerRef });

  return (
    <div className={styles.wrapper} ref={containerRef}>
      <div className={styles.catalogStamp}>{catalogNumber}</div>
      
      <div className={styles.panels}>
        <div className={styles.connector}>
          <div className={styles.connectorDot}></div>
        </div>

        <div className={`${styles.panel} ${styles.sciencePanel}`} ref={leftPanelRef}>
          <div className={styles.panelLabel}>Escena de la película</div>
          <div className={styles.content}>{filmContent}</div>
        </div>

        <div className={`${styles.panel} ${styles.literaryPanel} ${styles[author]}`} ref={rightPanelRef}>
          <div className={styles.panelLabel}>Registro Literario</div>
          <div className={styles.content}>{literaryContent}</div>
          {quote && (
            <div className={styles.quote}>"{quote}"</div>
          )}
        </div>
      </div>

      <div className={styles.analysisFooter}>
        <h3 className={styles.analysisTitle}>Análisis del cruce</h3>
        <div className={styles.analysisContent}>
          <p className="drop-cap">{analysis.charAt(0)}</p>
          <p>{analysis.substring(1)}</p>
        </div>
        
        {references && references.length > 0 && (
          <div className={styles.references}>
            {references.map((ref, idx) => (
              <div key={idx} className={styles.refItem}>{ref.citation}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
