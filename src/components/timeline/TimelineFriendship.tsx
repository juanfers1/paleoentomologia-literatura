import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { timeline } from '../../data/timeline';
import styles from './TimelineFriendship.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function TimelineFriendship() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !lineRef.current) return;

    // Animate the central line growing as we scroll
    gsap.fromTo(lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true
        }
      }
    );

    // Animate each event revealing as it enters viewport
    const events = gsap.utils.toArray<HTMLElement>('.timeline-event');
    events.forEach((event) => {
      gsap.fromTo(event,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: event,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.lineWrapper}>
        <div className={styles.lineBase}></div>
        <div className={styles.lineFill} ref={lineRef}></div>
      </div>

      <div className={styles.events}>
        {timeline.map((event, index) => {
          const isLeft = index % 2 === 0;
          
          return (
            <div 
              key={`${event.year}-${index}`} 
              className={`${styles.event} ${isLeft ? styles.eventLeft : styles.eventRight} timeline-event`}
            >
              <div className={styles.dot}></div>
              
              <div className={`${styles.content} ${styles[`category-${event.category}`]}`}>
                <div className={styles.meta}>
                  <span className={styles.year}>
                    {event.year > 0 ? event.year : `${Math.abs(event.year)} a.C.`}
                  </span>
                  <span className={styles.categoryLabel}>
                    {event.category === 'film' ? 'Cine' : 
                     event.category === 'biographical' ? 'Biográfico' : 
                     event.category === 'historical' ? 'Histórico' : 'Literario'}
                  </span>
                </div>
                
                <h3 className={styles.label}>{event.label}</h3>
                <p className={styles.description}>{event.description}</p>
                
                {event.relatedCross && (
                  <div className={styles.crossLink}>
                    <span className={styles.crossIcon}>↬</span>
                    <a href={`${import.meta.env.BASE_URL}cruces/#${event.relatedCross}`}>
                      Ver cruce relacionado
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
