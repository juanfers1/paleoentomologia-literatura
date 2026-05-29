import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FossilGallery.module.css';

interface Specimen {
  id: string;
  name: string;
  classification: string;
  age: string;
  location: string;
  significance: string;
  catalogNumber: string;
  image: string;
}

const base = import.meta.env.BASE_URL;

const specimens: Specimen[] = [
  {
    id: 'coleoptera-1',
    name: 'Coleoptera sp.',
    classification: 'Orden: Coleoptera',
    age: 'Pleistoceno tardío',
    location: 'Laguna de Puente Largo',
    significance: 'Exoesqueleto excepcionalmente conservado. Indica la presencia de vegetación arbustiva en áreas actualmente desprovistas de ella debido al cambio altitudinal de los ecosistemas.',
    catalogNumber: 'FOS-001',
    image: `${base}fossil_beetle_1780023375706.png`
  },
  {
    id: 'chironomidae-1',
    name: 'Chironomidae',
    classification: 'Familia: Chironomidae',
    age: 'Holoceno temprano',
    location: 'Laguna de la Plaza',
    significance: 'Las cápsulas cefálicas de estos dípteros son indicadores paleoecológicos precisos de la temperatura del agua y el nivel freático durante la deglaciación.',
    catalogNumber: 'FOS-002',
    image: `${base}fossil_plate_1780023411673.png`
  },
  {
    id: 'oribatida-1',
    name: 'Oribatida',
    classification: 'Suborden: Oribatida',
    age: 'Holoceno medio',
    location: 'Páramo de Frontino',
    significance: 'Ácaros del suelo que atestiguan el desarrollo de perfiles edáficos ricos en materia orgánica tras el retroceso glaciar.',
    catalogNumber: 'FOS-003',
    image: `${base}lagoon_detail_1780023460679.png`
  }
];

export default function FossilGallery() {
  const [selectedSpecimen, setSelectedSpecimen] = useState<Specimen | null>(null);

  // Close modal on escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedSpecimen(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (selectedSpecimen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedSpecimen]);

  return (
    <div className={styles.gallery}>
      <div className={styles.grid}>
        {specimens.map((specimen) => (
          <motion.div 
            key={specimen.id}
            className={styles.card}
            onClick={() => setSelectedSpecimen(specimen)}
            layoutId={`card-container-${specimen.id}`}
          >
            <div className={styles.imageContainer}>
              <div className={styles.catalogNumber}>{specimen.catalogNumber}</div>
              <motion.img 
                src={specimen.image} 
                alt={specimen.name} 
                layoutId={`image-${specimen.id}`}
              />
            </div>
            
            <motion.div className={styles.info} layoutId={`info-${specimen.id}`}>
              <h4 className={styles.name}>{specimen.name}</h4>
              <div className={styles.classification}>{specimen.classification}</div>
              <div className={styles.meta}>
                <span>{specimen.age}</span>
                <span>{specimen.location}</span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedSpecimen && (
          <motion.div 
            className={styles.lightboxOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSpecimen(null)}
          >
            <motion.div 
              className={styles.lightboxContent}
              layoutId={`card-container-${selectedSpecimen.id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.lightboxClose} onClick={() => setSelectedSpecimen(null)}>×</button>
              
              <div className={styles.lightboxImage}>
                <motion.img 
                  src={selectedSpecimen.image} 
                  alt={selectedSpecimen.name} 
                  layoutId={`image-${selectedSpecimen.id}`}
                />
              </div>

              <motion.div className={styles.lightboxInfo} layoutId={`info-${selectedSpecimen.id}`}>
                <h3 className={styles.lightboxName}>{selectedSpecimen.name}</h3>
                <div className={styles.classification} style={{ fontSize: '1rem' }}>
                  {selectedSpecimen.classification}
                </div>

                <div className={styles.lightboxDetails}>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Catálogo</span>
                    <span className={styles.detailValue}>{selectedSpecimen.catalogNumber}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Edad Geológica</span>
                    <span className={styles.detailValue}>{selectedSpecimen.age}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Ubicación</span>
                    <span className={styles.detailValue}>{selectedSpecimen.location}</span>
                  </div>
                </div>

                <div className={styles.lightboxDescription}>
                  {selectedSpecimen.significance}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
