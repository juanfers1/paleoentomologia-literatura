// src/data/locations.ts
// Datos de las locaciones de Intouchables — los dos mundos de París

export interface Location {
  id: string;
  name: string;
  district: string;
  description: string;
  keyFeatures: string[];
  symbolism: string;
  // Positioning on the SVG map (percentages)
  x: number;
  y: number;
}

export const locations: Location[] = [
  {
    id: 'mansion',
    name: 'Hôtel particulier — Distrito 7',
    district: 'Rive Gauche, VIIe arrondissement',
    description:
      'La mansión de Philippe, un hôtel particulier del siglo XVIII en uno de los barrios más exclusivos de París. Salones con molduras, cuadros de maestros, música clásica, una biblioteca inmensa. Un espacio donde el refinamiento cultural es el aire que se respira — y también la jaula dorada de un hombre paralizado.',
    keyFeatures: [
      'Arquitectura neoclásica, jardín interior',
      'Colección de arte: pintura moderna, escultura',
      'Ópera y música clásica como paisaje sonoro',
      'Servicio doméstico, protocolos, distancia',
      'El cuerpo inmóvil en un espacio diseñado para la contemplación',
    ],
    symbolism: 'La cultura legítima como privilegio y como prisión. El lugar que Ernaux nunca habitó y que Driss profana con su presencia.',
    x: 42,
    y: 45,
  },
  {
    id: 'banlieue',
    name: 'La banlieue — Cité',
    district: 'Banlieue nord de Paris',
    description:
      'El barrio de Driss en la periferia parisina: bloques de vivienda social, escaleras ruidosas, música a todo volumen, la vida comunitaria en los pasillos. Un espacio que la sociedad mira con desconfianza pero que bulle de vitalidad, humor y códigos propios. De aquí se viene, y a aquí siempre se puede volver.',
    keyFeatures: [
      'Grands ensembles: bloques de hormigón de los años 60-70',
      'Música: Earth, Wind & Fire, Boogie Wonderland',
      'Familia extendida, solidaridad y conflicto',
      'Mirada policial, sospecha, control social',
      'El cuerpo libre en un espacio que lo confina socialmente',
    ],
    symbolism: 'El "lugar" de Ernaux trasladado a la periferia contemporánea. El origen que marca, el espacio del que se es — no el que se elige.',
    x: 68,
    y: 35,
  },
];

export default locations;
