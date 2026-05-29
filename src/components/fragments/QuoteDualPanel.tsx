import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import styles from './QuoteDualPanel.module.css';

gsap.registerPlugin(ScrollTrigger);

interface QuoteDualPanelProps {
  quote: string;
  quoteAuthor: string;
  quoteSource: string;
  filmText: string;
  filmSource: string;
  author: 'camus' | 'ernaux';
}

export default function QuoteDualPanel({
  quote,
  quoteAuthor,
  quoteSource,
  filmText,
  filmSource,
  author,
}: QuoteDualPanelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const filmRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!quoteRef.current || !filmRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'top 40%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.fromTo(
        quoteRef.current,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out' }
      ).fromTo(
        filmRef.current,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out' },
        '-=0.5'
      );
    },
    { scope: containerRef }
  );

  const panelAccentClass =
    author === 'camus' ? styles.quotePanelCamus : styles.quotePanelErnaux;
  const markClass =
    author === 'camus' ? styles.quoteMarkCamus : styles.quoteMarkErnaux;

  return (
    <section
      ref={containerRef}
      className={styles.container}
      aria-label={`Cruce entre cita de ${quoteAuthor} y escena de la película`}
    >
      {/* Quote panel */}
      <div ref={quoteRef} className={`${styles.quotePanel} ${panelAccentClass}`}>
        <span className={`${styles.quoteMark} ${markClass}`} aria-hidden="true">
          «
        </span>
        <blockquote className={styles.quoteText}>
          {quote}
        </blockquote>
        <p className={styles.quoteAttribution}>
          {quoteAuthor} — <em>{quoteSource}</em>
        </p>
      </div>

      {/* Film panel */}
      <div ref={filmRef} className={styles.sciencePanel}>
        <p className={styles.scienceText}>{filmText}</p>
        <span className={styles.scienceSource}>{filmSource}</span>
      </div>
    </section>
  );
}
