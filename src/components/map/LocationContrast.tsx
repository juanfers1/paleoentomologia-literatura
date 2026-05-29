import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { locations } from '../../data/locations';
import styles from './LocationContrast.module.css';

export default function LocationContrast() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeLoc, setActiveLoc] = useState<string | null>(null);

  return (
    <div className={styles.mapContainer} ref={containerRef}>
      
      {/* Abstract Map Graphic (Replaces Colombia SVG) */}
      <div className={styles.mapGraphic}>
        <svg viewBox="0 0 800 600" className={styles.svgMap}>
          {/* Decorative lines representing the Seine River */}
          <path 
            d="M 100 500 Q 300 450 400 300 T 700 100" 
            fill="none" 
            stroke="var(--bone)" 
            strokeWidth="4" 
            strokeDasharray="8 8" 
            opacity="0.3"
          />
          {/* Abstract boundaries */}
          <circle cx="336" cy="270" r="150" fill="none" stroke="var(--philippe)" strokeWidth="1" opacity="0.2" />
          <circle cx="544" cy="210" r="120" fill="none" stroke="var(--driss)" strokeWidth="1" opacity="0.2" />
        </svg>

        {locations.map((loc) => (
          <div 
            key={loc.id}
            className={`${styles.marker} ${activeLoc === loc.id ? styles.active : ''}`}
            style={{ 
              left: `${loc.x}%`, 
              top: `${loc.y}%` 
            }}
            onMouseEnter={() => setActiveLoc(loc.id)}
            onMouseLeave={() => setActiveLoc(null)}
          >
            <div className={styles.pulse}></div>
            <div className={styles.dot}></div>
            
            <motion.div 
              className={styles.tooltip}
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: activeLoc === loc.id ? 1 : 0,
                y: activeLoc === loc.id ? 0 : 10,
                pointerEvents: activeLoc === loc.id ? 'auto' : 'none'
              }}
            >
              <h4>{loc.name}</h4>
              <div className={styles.coordinates}>{loc.district}</div>
              <p>{loc.description}</p>
              
              <div className={styles.dataGrid}>
                {loc.keyFeatures.map((feature, idx) => (
                  <div key={idx} className={styles.dataItem}>
                    <span className={styles.dataLabel}>Característica {idx + 1}</span>
                    <span className={styles.dataValue}>{feature}</span>
                  </div>
                ))}
              </div>

              <div className={styles.tooltipFooter}>
                <strong>Simbolismo:</strong> {loc.symbolism}
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <div className={styles.legend}>
        <h3 className={styles.legendTitle}>Los Mundos de Intouchables</h3>
        <div className={styles.legendItems}>
          <div className={styles.legendItem}>
            <div className={styles.legendColor} style={{ backgroundColor: 'var(--philippe)' }}></div>
            <span>La Mansión (Centro)</span>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendColor} style={{ backgroundColor: 'var(--driss)' }}></div>
            <span>La Banlieue (Periferia)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
