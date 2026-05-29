// src/data/timeline.ts
// Línea temporal que integra eventos biográficos, cinematográficos, literarios e históricos

export type TimelineCategory =
  | 'film'
  | 'biographical'
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
    label: "Publicación de L'étranger",
    description:
      "Albert Camus publica L'étranger (El extranjero) en Gallimard. La novela se convertirá en una de las obras más leídas del siglo XX y en el texto fundacional de la literatura del absurdo.",
    category: 'literary',
    relatedCross: 'camus-01-outsider',
  },
  {
    year: 1951,
    label: 'Nacimiento de Philippe Pozzo di Borgo',
    description:
      'Philippe Pozzo di Borgo nace en una familia aristocrática parisina. Heredero de una fortuna industrial, crecerá rodeado de los códigos de la alta burguesía francesa.',
    category: 'biographical',
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
  },
  {
    year: 1979,
    label: 'Bourdieu: La distinction',
    description:
      'Pierre Bourdieu publica La distinction: Critique sociale du jugement, obra clave para comprender las dinámicas de clase, el gusto y la «cultura legítima» que la película pondrá en escena.',
    category: 'historical',
    relatedCross: 'ernaux-03-codigos',
  },
  {
    year: 1983,
    label: 'Publicación de La place',
    description:
      "Annie Ernaux publica La place (El lugar) en Gallimard. El libro, escrito en «écriture plate», es un retrato sociológico del padre y una reflexión sobre la distancia de clase producida por la educación.",
    category: 'literary',
    relatedCross: 'ernaux-01-clase',
  },
  {
    year: 1993,
    label: 'El accidente de Philippe',
    description:
      'Philippe Pozzo di Borgo sufre un accidente de parapente que lo deja tetrapléjico. Su vida cambia radicalmente: del hombre de acción al cuerpo inmóvil.',
    category: 'biographical',
    relatedCross: 'camus-03-cuerpo',
  },
  {
    year: 1995,
    label: 'Abdel Yasmin Sellou entra en la vida de Philippe',
    description:
      'Abdel Sellou, joven de origen argelino criado en la banlieue parisina, se convierte en el auxiliar de vida de Philippe. Comienza la relación que inspirará la película.',
    category: 'biographical',
    relatedCross: 'ernaux-04-transfuga',
  },
  {
    year: 2001,
    label: 'Le second souffle',
    description:
      'Philippe Pozzo di Borgo publica su autobiografía Le second souffle, narrando su relación con Abdel. El libro llamará la atención de los cineastas Nakache y Toledano.',
    category: 'biographical',
  },
  {
    year: 2011,
    label: 'Estreno de Intouchables',
    description:
      'Olivier Nakache y Éric Toledano estrenan Intouchables. La película se convierte en un fenómeno: 19,4 millones de espectadores en Francia, tercera película francesa más taquillera de la historia.',
    category: 'film',
    relatedCross: 'camus-02-mirada',
  },
  {
    year: 2022,
    label: 'Premio Nobel de Annie Ernaux',
    description:
      'Annie Ernaux recibe el Premio Nobel de Literatura «por el coraje y la agudeza clínica con que descubre las raíces, los extrañamientos y las restricciones colectivas de la memoria personal».',
    category: 'literary',
    relatedCross: 'ernaux-02-lugar',
  },
];

export default timeline;
