// src/data/locations.ts
// Datos de los dos mundos: la mansión del distrito 7 y la banlieue parisina

export interface LocationData {
  id: string;
  name: string;
  fullName: string;
  description: string;
  keyFeatures: string[];
  socioContext: string;
}

export const locations: LocationData[] = [
  {
    id: 'mansion',
    name: 'Distrito 7',
    fullName: 'Mansión de Philippe, Distrito 7 de París',
    description:
      'El hôtel particulier de Philippe, en el aristocrático distrito 7 de París, es un universo de refinamiento y silencio. Los salones decorados con obras de arte, los muebles de época y la biblioteca de volúmenes antiguos constituyen el escenario de una vida marcada por la inmovilidad física y el privilegio económico. Aquí, la cultura "legítima" —la ópera, la pintura abstracta, la música clásica— es el aire que se respira.',
    keyFeatures: [
      'Salones decorados con arte moderno y mobiliario Luis XVI',
      'Galería privada de pintura (el cuadro vendido por 41.000 €)',
      'Biblioteca con primeras ediciones de literatura francesa',
      'Habitación médica equipada para tetraplejia',
      'Códigos estrictos de etiqueta y protocolo doméstico',
    ],
    socioContext: 'Aristocracia parisina, alta burguesía, herencia cultural legítima',
  },
  {
    id: 'banlieue',
    name: 'Banlieue',
    fullName: 'Banlieue parisina, entorno de Driss',
    description:
      'La banlieue de donde proviene Driss es el reverso social de la mansión. Torres de vivienda social, calles donde el Estado parece ausente y una economía de la supervivencia configuran el horizonte cotidiano. Sin embargo, este espacio también es territorio de solidaridades familiares, de humor popular, de una vitalidad que contrasta con la solemnidad del distrito 7. La banlieue no es solo carencia: es un lugar con sus propios códigos, su propia lengua, su propia dignidad.',
    keyFeatures: [
      'Torres de HLM (habitation à loyer modéré)',
      'Redes familiares extendidas y solidaridad vecinal',
      'Cultura callejera, hip-hop, lenguaje verlan',
      'Vida comunitaria en espacios públicos compartidos',
      'Frontera invisible con el París "oficial"',
    ],
    socioContext: 'Clase trabajadora, origen inmigrante, exclusión estructural',
  },
];

export default locations;
