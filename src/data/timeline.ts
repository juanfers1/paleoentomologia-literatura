// src/data/timeline.ts
// Línea temporal que integra eventos geológicos, paleontológicos, literarios e históricos

export type TimelineCategory =
  | 'geological'
  | 'paleontological'
  | 'literary'
  | 'historical';

export interface TimelineEvent {
  year: number; // Negativo para años antes del presente (BP)
  label: string;
  description: string;
  category: TimelineCategory;
  relatedCross?: string;
}

export const timeline: TimelineEvent[] = [
  // === Eventos geológicos y paleontológicos ===
  {
    year: -50000,
    label: 'Inicio del registro sedimentario de Frontino',
    description:
      'Las lagunas glaciares del Páramo de Frontino comienzan a acumular sedimentos que preservarán el registro paleoambiental de los próximos 50.000 años.',
    category: 'geological',
  },
  {
    year: -30000,
    label: 'Registro sedimentario del Cocuy',
    description:
      'Los sedimentos más antiguos datados en las lagunas de la Sierra Nevada del Cocuy documentan condiciones glaciares plenas del Pleistoceno tardío.',
    category: 'geological',
  },
  {
    year: -21000,
    label: 'Último Máximo Glacial (UMG)',
    description:
      'El Último Máximo Glacial alcanza su punto culminante. Los glaciares de la Sierra Nevada del Cocuy descienden hasta los 3.200 m. Los páramos se contraen y la vegetación de alta montaña se desplaza a altitudes menores.',
    category: 'geological',
    relatedCross: 'camus-02-indiferencia',
  },
  {
    year: -14000,
    label: 'Inicio de la deglaciación andina',
    description:
      'El calentamiento post-glacial inicia la retracción de los glaciares andinos. Los páramos comienzan a expandirse altitudinalmente. Nuevos hábitats disponibles para la colonización por insectos.',
    category: 'paleontological',
  },
  {
    year: -11700,
    label: 'Inicio del Holoceno',
    description:
      'Transición del Pleistoceno al Holoceno. Las condiciones climáticas se estabilizan. Los ecosistemas paramunos adquieren una configuración más cercana a la actual.',
    category: 'geological',
  },
  {
    year: -8000,
    label: 'Óptimo climático del Holoceno temprano',
    description:
      'Período de temperaturas más cálidas que las actuales. Los límites superiores del bosque ascienden. Las comunidades de insectos del páramo se reorganizan en respuesta al calentamiento.',
    category: 'paleontological',
    relatedCross: 'camus-01-sol',
  },
  {
    year: -5000,
    label: 'Estabilización de los páramos modernos',
    description:
      'Los ecosistemas paramunos alcanzan una configuración similar a la actual. Las comunidades de insectos reflejan ensamblajes comparables a los modernos en los registros sedimentarios.',
    category: 'paleontological',
  },
  {
    year: -2000,
    label: 'Primeras evidencias de impacto humano',
    description:
      'Incremento de partículas de carbón en los sedimentos del páramo indica quemas asociadas a actividades humanas. Primeras alteraciones antrópicas detectables en el registro paleoecológico.',
    category: 'historical',
  },
  {
    year: -500,
    label: 'Pequeña Edad de Hielo (inicio)',
    description:
      'Enfriamiento climático global. Los glaciares andinos avanzan nuevamente. Las comunidades de insectos del páramo experimentan reorganizaciones asociadas al descenso de temperaturas.',
    category: 'geological',
  },

  // === Eventos literarios e históricos ===
  {
    year: 1913,
    label: 'Nacimiento de Albert Camus',
    description:
      'Albert Camus nace el 7 de noviembre en Mondovi (hoy Dréan), Argelia francesa. Hijo de un obrero agrícola muerto en la Primera Guerra Mundial y una madre analfabeta.',
    category: 'literary',
  },
  {
    year: 1940,
    label: 'Nacimiento de Annie Ernaux',
    description:
      'Annie Ernaux nace el 1 de septiembre en Lillebonne, Normandía. Crece en Yvetot, en el café-tienda de sus padres, entre la clase obrera y la pequeña burguesía comerciante.',
    category: 'literary',
  },
  {
    year: 1942,
    label: 'Publicación de L\'étranger',
    description:
      'Albert Camus publica L\'étranger (El extranjero) en Gallimard. La novela se convertirá en una de las obras más leídas del siglo XX y en el texto fundacional de la literatura del absurdo.',
    category: 'literary',
    relatedCross: 'camus-03-extranjero',
  },
  {
    year: 1957,
    label: 'Premio Nobel de Camus',
    description:
      'Albert Camus recibe el Premio Nobel de Literatura «por su importante producción literaria, que con seriedad penetrante ilumina los problemas de la conciencia humana de nuestro tiempo».',
    category: 'literary',
  },
  {
    year: 1960,
    label: 'Muerte de Albert Camus',
    description:
      'Albert Camus muere el 4 de enero en un accidente automovilístico en Villeblevin, Francia, a los 46 años. En su cartera se encontró el manuscrito inacabado de Le premier homme.',
    category: 'literary',
    relatedCross: 'camus-04-muerte',
  },
  {
    year: 1967,
    label: 'Thomas van der Hammen: estudios palinológicos',
    description:
      'Thomas van der Hammen consolida sus estudios pioneros sobre la palinología y paleoecología de los Andes colombianos, estableciendo las bases para la reconstrucción de los cambios vegetacionales de alta montaña.',
    category: 'paleontological',
  },
  {
    year: 1979,
    label: 'Bourdieu: La distinction',
    description:
      'Pierre Bourdieu publica La distinction: Critique sociale du jugement, obra fundamental para comprender las dinámicas de clase que Ernaux explorará en La place.',
    category: 'historical',
    relatedCross: 'ernaux-03-distancia',
  },
  {
    year: 1983,
    label: 'Publicación de La place',
    description:
      'Annie Ernaux publica La place (El lugar) en Gallimard. El libro, escrito en «écriture plate», es un retrato sociológico del padre y una reflexión sobre la distancia de clase producida por la educación.',
    category: 'literary',
    relatedCross: 'ernaux-01-lugar',
  },
  {
    year: 1984,
    label: 'Premio Renaudot para La place',
    description:
      'La place recibe el Prix Renaudot, uno de los principales premios literarios franceses, consolidando la reputación de Ernaux como escritora de la autoetnografía social.',
    category: 'literary',
  },
  {
    year: 2004,
    label: 'Coope: estabilidad de especies de insectos',
    description:
      'G. R. Coope publica su influyente estudio sobre la estabilidad morfológica de especies de coleópteros a lo largo de millones de años, demostrando que muchas especies cuaternarias son identificables con especies vivientes.',
    category: 'paleontological',
    relatedCross: 'camus-02-indiferencia',
  },
  {
    year: 2010,
    label: 'Elias: Advances in Quaternary Entomology',
    description:
      'Scott A. Elias publica Advances in Quaternary Entomology, obra de referencia que sintetiza el estado del arte de la paleoentomología cuaternaria a nivel global.',
    category: 'paleontological',
  },
  {
    year: 2022,
    label: 'Premio Nobel de Annie Ernaux',
    description:
      'Annie Ernaux recibe el Premio Nobel de Literatura «por el coraje y la agudeza clínica con que descubre las raíces, los extrañamientos y las restricciones colectivas de la memoria personal».',
    category: 'literary',
    relatedCross: 'ernaux-04-memoria',
  },
];

export default timeline;
