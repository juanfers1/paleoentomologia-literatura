import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './LagoonMap.module.css';

interface Ecosystem {
  id: string;
  name: string;
  department: string;
  elevation: string;
  coordinatesText: string;
  // Positioning on the custom SVG map (percentages)
  x: number;
  y: number;
}

const ecosystems: Ecosystem[] = [
  {
    id: 'frontino',
    name: 'Páramo de Frontino',
    department: 'Antioquia',
    elevation: '4080 msnm',
    coordinatesText: '6°28\'N 76°05\'W',
    x: 35,
    y: 38
  },
  {
    id: 'cocuy',
    name: 'Sierra Nevada del Cocuy',
    department: 'Boyacá',
    elevation: '4000-5000 msnm',
    coordinatesText: '6°25\'N 72°17\'W',
    x: 65,
    y: 42
  }
];

export default function LagoonMap() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <div 
      className={styles.mapContainer} 
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      <div className={styles.gridLines}></div>
      
      <div className={styles.coordinates}>
        {hoveredId ? ecosystems.find(e => e.id === hoveredId)?.coordinatesText : 'COORDENADAS: ESPERANDO...'}
      </div>

      <svg 
        className={styles.compass} 
        viewBox="0 0 100 100" 
        style={{ transform: `rotate(${mousePos.x * 20}deg)` }}
      >
        <circle cx="50" cy="50" r="45" fill="none" stroke="var(--bone)" strokeWidth="1"/>
        <path d="M50 10 L55 45 L90 50 L55 55 L50 90 L45 55 L10 50 L45 45 Z" fill="var(--bone)"/>
        <text x="50" y="8" fontSize="8" textAnchor="middle" fill="var(--bone)" fontFamily="var(--font-mono)">N</text>
      </svg>

      {/* Abstracted Colombia Map SVG */}
      <motion.svg 
        className={styles.mapSvg} 
        viewBox="0 0 100 120"
        animate={{ 
          x: mousePos.x * -20, 
          y: mousePos.y * -20 
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        {/* Simplified abstract shape resembling Colombia */}
        <path d="M30 0 L50 5 L70 20 L80 40 L75 60 L85 80 L70 100 L50 115 L40 100 L20 80 L10 60 L15 30 Z" />
      </motion.svg>

      {/* Markers */}
      {ecosystems.map((eco) => (
        <div 
          key={eco.id}
          className={styles.marker}
          style={{ 
            left: `calc(${eco.x}% + ${mousePos.x * -10}px)`, 
            top: `calc(${eco.y}% + ${mousePos.y * -10}px)` 
          }}
          onMouseEnter={() => setHoveredId(eco.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <motion.div 
            className={styles.markerPulse}
            animate={{ scale: [1, 2, 2.5], opacity: [0.6, 0.2, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
          <div className={styles.markerDot}></div>

          <AnimatePresence>
            {hoveredId === eco.id && (
              <motion.div 
                className={styles.tooltip}
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className={styles.tooltipTitle}>{eco.name}</div>
                <div className={styles.tooltipDept}>{eco.department}</div>
                <div className={styles.tooltipMeta}>
                  <span>{eco.elevation}</span>
                  <span>{eco.coordinatesText}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
