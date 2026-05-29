// src/data/timeline.ts
// Línea temporal que integra eventos de la película, literarios e históricos

export type TimelineCategory =
  | 'film'
  | 'friendship'
  | 'literary'
  | 'historical';

export interface TimelineEvent {
  year: number;
  label: string;
  description: string;
  category: TimelineCategory;
  relatedCross?: string;
}

export const timeline: TimelineEvent[] = [
  // === Eventos de la película ===
  {
    year: 1993,
    label: 'Accidente de Philippe',
    description:
      'Philippe Pozzo di Borgo, en cuya historia real se basa la película, sufre un accidente de parapente que lo deja tetrapléjico. La película Iniciará con este evento como punto de quiebre.',
    category: 'film',
  },
  {
    year: 2010,
    label: 'Encuentro Philippe — Driss (historia real)',
    description:
      'Philippe Pozzo di Borgo contrata a Abdel Sellou, un joven de origen argelino del que nacerá el personaje de Driss. La relación auténtica entre ambos inspirará la película.',
    category: 'film',
    relatedCross: 'camus-01-autenticidad',
  },
  {
    year: 2011,
    label: 'Estreno de Intouchables',
    description:
      'La película se estrena en Francia el 2 de noviembre de 2011. Dirigida por Olivier Nakache y Éric Toledano, se convierte en uno de los mayores éxitos del cine francés.',
    category: 'film',
    relatedCross: 'ernaux-01-distancia',
  },

  // === Eventos literarios ===
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
    label: "Publicación de L'étranger",
    description:
      "Albert Camus publica L'étranger (El extranjero) en Gallimard. La novela se convertirá en una de las obras más leídas del siglo XX y en el texto fundacional de la literatura del absurdo.",
    category: 'literary',
    relatedCross: 'camus-03-libertad',
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
      'Albert Camus muere el 4 de enero en un accidente automovilístico en Villeblevin, Francia, a los 46 años.',
    category: 'literary',
  },
  {
    year: 1979,
    label: 'Bourdieu: La distinction',
    description:
      'Pierre Bourdieu publica La distinction: Critique sociale du jugement, obra fundamental para comprender las dinámicas de clase que Ernaux explorará en La place y que la película escenifica en cada interacción entre Philippe y Driss.',
    category: 'historical',
    relatedCross: 'ernaux-03-codigos',
  },
  {
    year: 1983,
    label: 'Publicación de La place',
    description:
      'Annie Ernaux publica La place (El lugar) en Gallimard. El libro, escrito en «écriture plate», es un retrato sociológico del padre y una reflexión sobre la distancia de clase producida por la educación.',
    category: 'literary',
    relatedCross: 'ernaux-01-distancia',
  },
  {
    year: 1984,
    label: 'Premio Renaudot para La place',
    description:
      'La place recibe el Prix Renaudot, uno de los principales premios literarios franceses, consolidando la reputación de Ernaux como escritora de la autoetnografía social.',
    category: 'literary',
  },
  {
    year: 2011,
    label: 'El fenómeno Intouchables',
    description:
      'La película recauda más de 400 millones de dólares en taquilla mundial y se convierte en la película francesa más vista internacionalmente. Su éxito trasciende fronteras de clase y cultura.',
    category: 'film',
    relatedCross: 'ernaux-04-transfuga',
  },
  {
    year: 2022,
    label: 'Premio Nobel de Annie Ernaux',
    description:
      'Annie Ernaux recibe el Premio Nobel de Literatura «por el coraje y la agudeza clínica con que descubre las raíces, los extrañamientos y las restricciones colectivas de la memoria personal».',
    category: 'literary',
    relatedCross: 'ernaux-02-lugar-destino',
  },
];

export default timeline;
