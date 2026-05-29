import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './HeroStratigraphic.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function HeroStratigraphic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInnerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const strata = gsap.utils.toArray<HTMLElement>('.stratum-layer');
    
    // Initial entrance animation
    gsap.from(strata, {
      yPercent: 100,
      duration: 1.5,
      stagger: 0.1,
      ease: 'power3.out',
      delay: 0.2
    });

    gsap.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: 'power2.out',
      delay: 1
    });

    // Parallax on scroll
    strata.forEach((stratum, i) => {
      // Skip the base layer for parallax
      if (i === 0) return;
      
      const speed = i * 0.15; // Higher layers move faster
      
      gsap.to(stratum, {
        y: () => -(window.innerHeight * speed),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });
    });

    // Fade out title on scroll
    gsap.to(titleRef.current, {
      opacity: 0,
      y: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'center top',
        scrub: true,
      }
    });

  }, { scope: containerRef });

  return (
    <div className={styles.hero} ref={containerRef}>
      
      <div className={`${styles.stratum} ${styles.layer0} stratum-layer`}>
        {/* Base layer */}
      </div>
      
      <div className={styles.titleContainer} ref={titleRef}>
        <div ref={titleInnerRef}>
          <h1 className={styles.title}>Paleoentomología<br/>& Literatura</h1>
          <p className={styles.subtitle}>Ecosistemas lagunares de la alta montaña colombiana</p>
        </div>
      </div>

      <div className={`${styles.stratum} ${styles.layer1} stratum-layer`}>
        <div className={styles.stratumContent}>
          <span className={styles.stratumLabel}>ESTRATO I: EL LUGAR</span>
          Páramo de Frontino. 4080 msnm.
        </div>
      </div>
      
      <div className={`${styles.stratum} ${styles.layer2} stratum-layer`}>
        <div className={styles.stratumContent}>
          <span className={styles.stratumLabel}>ESTRATO II: EL CLIMA</span>
          Radiación UV intensa, temperaturas oscilantes.
        </div>
      </div>
      
      <div className={`${styles.stratum} ${styles.layer3} stratum-layer`}>
        <div className={styles.stratumContent}>
          <span className={styles.stratumLabel}>ESTRATO III: LA MEMORIA</span>
          "Ce lieu était tout pour lui." — A. Ernaux
        </div>
      </div>
      
      <div className={`${styles.stratum} ${styles.layer4} stratum-layer`}>
        <div className={styles.stratumContent}>
          <span className={styles.stratumLabel}>ESTRATO IV: EL SOL</span>
          "Le ciel était bleu et or, [...] le soleil m'écrasait." — A. Camus
        </div>
      </div>
      
      <div className={`${styles.stratum} ${styles.layer5} stratum-layer`}>
        <div className={styles.scrollIndicator}>
          <span>Descender</span>
          <div className={styles.scrollLine}></div>
        </div>
      </div>

    </div>
  );
}
