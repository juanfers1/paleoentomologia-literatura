export interface Reference {
  id: string;
  type: 'book' | 'chapter' | 'conference' | 'journal' | 'film';
  citation: string;
  category: 'primary-literary' | 'critical-literary' | 'film-critical' | 'methodological';
  year: string;
}

export const references: Reference[] = [
  // Primary Literary
  {
    id: 'camus-1942',
    type: 'book',
    category: 'primary-literary',
    year: '1942',
    citation: "Camus, A. (1942). L'étranger. Gallimard."
  },
  {
    id: 'ernaux-1983',
    type: 'book',
    category: 'primary-literary',
    year: '1983',
    citation: "Ernaux, A. (1983). La place. Gallimard."
  },
  
  // Critical Literary
  {
    id: 'camus-1942b',
    type: 'book',
    category: 'critical-literary',
    year: '1942',
    citation: "Camus, A. (1942). Le mythe de Sisyphe. Gallimard."
  },
  {
    id: 'moulin-1999',
    type: 'journal',
    category: 'critical-literary',
    year: '1999',
    citation: "Moulin, R. (1999). L'écriture plate chez Annie Ernaux. Revue des Lettres Modernes, 13-28."
  },
  
  // Film & Social Critical
  {
    id: 'intouchables-2011',
    type: 'film',
    category: 'film-critical',
    year: '2011',
    citation: "Nakache, O., & Toledano, É. (Directores). (2011). Intouchables [Película]. Quad Productions; Gaumont."
  },
  {
    id: 'bourdieu-1979',
    type: 'book',
    category: 'film-critical',
    year: '1979',
    citation: "Bourdieu, P. (1979). La distinction: Critique sociale du jugement. Éditions de Minuit."
  },
  {
    id: 'pozzo-2001',
    type: 'book',
    category: 'film-critical',
    year: '2001',
    citation: "Pozzo di Borgo, P. (2001). Le second souffle. Bayard."
  },

  // Methodological
  {
    id: 'latour-1991',
    type: 'book',
    category: 'methodological',
    year: '1991',
    citation: "Latour, B. (1991). Nous n'avons jamais été modernes: Essai d'anthropologie symétrique. La Découverte."
  }
];
