import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './SceneGallery.module.css';

interface Scene {
  id: string;
  title: string;
  moment: string;
  location: string;
  significance: string;
  catalogNumber: string;
  imagePath: string;
  imageAlt: string;
}

const scenes: Scene[] = [
  {
    id: 'scene-interview',
    title: 'La entrevista',
    moment: 'Inicio',
    location: 'Mansión (Distrito 7)',
    significance: 'Driss irrumpe buscando una firma para el paro, sin mostrar piedad. Su franqueza brutal contrasta con la actitud condescendiente de los demás candidatos, captando la atención de Philippe.',
    catalogNumber: 'ESC-001',
    imagePath: 'images/scenes/scene-interview.png',
    imageAlt: 'Escena de la entrevista: Driss frente a Philippe y Magalie'
  },
  {
    id: 'scene-opera',
    title: 'La ópera',
    moment: 'Desarrollo',
    location: 'Teatro',
    significance: 'Driss ríe incontrolablemente ante un cantante disfrazado de árbol cantando en alemán. La escena desnuda los códigos de comportamiento de la alta cultura como convenciones artificiales.',
    catalogNumber: 'ESC-002',
    imagePath: 'images/scenes/scene-opera.png',
    imageAlt: 'Escena de la ópera: Driss riendo a carcajadas'
  },
  {
    id: 'scene-painting',
    title: 'Pintura abstracta',
    moment: 'Desarrollo',
    location: 'Mansión (Distrito 7)',
    significance: 'Driss cuestiona el valor de una mancha roja que cuesta miles de euros, y luego pinta su propio cuadro. Philippe lo vende por 11,000 euros inventando una historia, revelando cómo funciona el capital cultural.',
    catalogNumber: 'ESC-003',
    imagePath: 'images/scenes/scene-painting.png',
    imageAlt: 'Escena del arte abstracto: Driss pintando su lienzo'
  },
  {
    id: 'scene-dancing',
    title: 'El baile',
    moment: 'Desarrollo',
    location: 'Mansión (Cumpleaños)',
    significance: 'Frente al cuarteto de cuerdas clásico, Driss impone a Earth, Wind & Fire. Su cuerpo se mueve libremente en un espacio de cuerpos constreñidos, rompiendo la rigidez aristocrática.',
    catalogNumber: 'ESC-004',
    imagePath: 'images/scenes/scene-dancing.png',
    imageAlt: 'Escena del baile de cumpleaños al ritmo de Boogie Wonderland'
  },
  {
    id: 'scene-paragliding',
    title: 'El parapente',
    moment: 'Clímax',
    location: 'Montañas',
    significance: 'Philippe enfrenta el origen de su trauma llevando a Driss a volar. La vulnerabilidad compartida y el riesgo devuelven a Philippe la sensación de estar vivo.',
    catalogNumber: 'ESC-005',
    imagePath: 'images/scenes/scene-paragliding.png',
    imageAlt: 'Escena del parapente sobre las montañas'
  },
  {
    id: 'scene-reunion',
    title: 'El reencuentro',
    moment: 'Desenlace',
    location: 'Restaurante en la costa',
    significance: 'Driss lleva a Philippe a una cita a ciegas con Éléonore y lo deja allí. El acto final de cuidado no es físico, sino devolverle la agencia sobre su propia vida romántica.',
    catalogNumber: 'ESC-006',
    imagePath: 'images/scenes/scene-reunion.png',
    imageAlt: 'Escena final en el restaurante frente al mar'
  }
];

export default function SceneGallery() {
  const [selectedScene, setSelectedScene] = useState<Scene | null>(null);

  // Close modal on escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedScene(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (selectedScene) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedScene]);

  return (
    <div className={styles.gallery}>
      <div className={styles.grid}>
        {scenes.map((scene) => (
          <motion.div 
            key={scene.id}
            className={styles.card}
            onClick={() => setSelectedScene(scene)}
            layoutId={`card-container-${scene.id}`}
          >
            <div className={styles.imageContainer}>
              <div className={styles.catalogNumber}>{scene.catalogNumber}</div>
              <motion.img 
                src={`${import.meta.env.BASE_URL}${scene.imagePath}`} 
                alt={scene.imageAlt}
                className={styles.image}
                layoutId={`image-${scene.id}`}
              />
            </div>
            
            <motion.div className={styles.info} layoutId={`info-${scene.id}`}>
              <h4 className={styles.name}>{scene.title}</h4>
              <div className={styles.meta}>
                <span>{scene.moment}</span>
                <span>{scene.location}</span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedScene && (
          <motion.div 
            className={styles.lightboxOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedScene(null)}
          >
            <motion.div 
              className={styles.lightboxContent}
              layoutId={`card-container-${selectedScene.id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.lightboxClose} onClick={() => setSelectedScene(null)}>×</button>
              
              <div className={styles.lightboxImage}>
                <motion.img 
                  src={`${import.meta.env.BASE_URL}${selectedScene.imagePath}`} 
                  alt={selectedScene.imageAlt}
                  className={styles.imageFull}
                  layoutId={`image-${selectedScene.id}`}
                />
              </div>

              <motion.div className={styles.lightboxInfo} layoutId={`info-${selectedScene.id}`}>
                <h3 className={styles.lightboxName}>{selectedScene.title}</h3>

                <div className={styles.lightboxDetails}>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Escena</span>
                    <span className={styles.detailValue}>{selectedScene.catalogNumber}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Momento</span>
                    <span className={styles.detailValue}>{selectedScene.moment}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Locación</span>
                    <span className={styles.detailValue}>{selectedScene.location}</span>
                  </div>
                </div>

                <div className={styles.lightboxDescription}>
                  {selectedScene.significance}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
