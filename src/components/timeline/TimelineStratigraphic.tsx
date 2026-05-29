import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './TimelineStratigraphic.module.css';

gsap.registerPlugin(ScrollTrigger);

interface TimelineEvent {
  id: string;
  year: string;
  label: string;
  description: string;
  category: 'geological' | 'paleontological' | 'literary' | 'historical';
}

const timelineData: TimelineEvent[] = [
  {
    id: 'pleistoceno',
    year: '2.5M - 11k AP',
    label: 'Pleistoceno',
    description: 'Época de glaciaciones repetidas. Formación de los actuales ecosistemas de páramo durante los períodos interglaciares.',
    category: 'geological'
  },
  {
    id: 'ultimo-maximo',
    year: '21k AP',
    label: 'Último Máximo Glacial',
    description: 'Los glaciares andinos descienden a elevaciones menores. Los insectos se adaptan a condiciones extremas de frío.',
    category: 'paleontological'
  },
  {
    id: 'camus-born',
    year: '1913',
    label: 'Nacimiento de Camus',
    description: 'Albert Camus nace en Argelia. Su experiencia bajo el sol mediterráneo marcará profundamente su obra.',
    category: 'historical'
  },
  {
    id: 'letranger',
    year: '1942',
    label: "Publicación de L'étranger",
    description: 'Se publica la obra que cristaliza la filosofía del absurdo y la "tierna indiferencia del mundo".',
    category: 'literary'
  },
  {
    id: 'ernaux-born',
    year: '1940',
    label: 'Nacimiento de Ernaux',
    description: 'Annie Ernaux nace en Lillebonne. Crecerá en el café-tienda de sus padres en Yvetot.',
    category: 'historical'
  },
  {
    id: 'laplace',
    year: '1983',
    label: 'Publicación de La place',
    description: 'Ernaux desarrolla su "escritura plana" para registrar la vida de su padre como si fuera evidencia estratigráfica.',
    category: 'literary'
  },
  {
    id: 'frontino-core',
    year: 'Actualidad',
    label: 'Extracción de testigos',
    description: 'Investigadores extraen columnas de sedimento en Frontino y el Cocuy, leyendo miles de años en unos pocos metros de lodo.',
    category: 'paleontological'
  }
];

export default function TimelineStratigraphic() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const events = gsap.utils.toArray<HTMLElement>('.timeline-event');

    events.forEach((event) => {
      gsap.from(event, {
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: event,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
    });
  }, { scope: containerRef });

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.axis}></div>
      
      <div className={styles.events}>
        {timelineData.map((event) => (
          <div key={event.id} className={`${styles.event} ${styles[event.category]} timeline-event`}>
            <div className={styles.yearNode}></div>
            <div className={styles.yearLabel}>{event.year}</div>
            
            <div className={styles.content}>
              <div className={styles.category}>{event.category}</div>
              <h3 className={styles.label}>{event.label}</h3>
              <p className={styles.description}>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
