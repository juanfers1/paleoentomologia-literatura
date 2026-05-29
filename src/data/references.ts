export interface Reference {
  id: string;
  type: 'book' | 'chapter' | 'conference' | 'journal';
  citation: string;
  category: 'primary-literary' | 'critical-literary' | 'scientific' | 'methodological';
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
  
  // Scientific
  {
    id: 'coope-2004',
    type: 'journal',
    category: 'scientific',
    year: '2004',
    citation: "Coope, G. R. (2004). Several million years of stability among insect species because of, or in spite of, Ice Age climatic instability? Philosophical Transactions of the Royal Society of London B, 359, 209–214."
  },
  {
    id: 'rangel-2000',
    type: 'book',
    category: 'scientific',
    year: '2000',
    citation: "Rangel-Ch., J. O. (Ed.). (2000). Colombia diversidad biótica III: La región de vida paramuna. Universidad Nacional de Colombia."
  },
  {
    id: 'vanderhammen-1986',
    type: 'chapter',
    category: 'scientific',
    year: '1986',
    citation: "van der Hammen, T., & Cleef, A. M. (1986). Development of the high Andean páramo flora and vegetation. En F. Vuilleumier & M. Monasterio (Eds.), High altitude tropical biogeography (pp. 153–201). Oxford University Press."
  },
  {
    id: 'abril-2023',
    type: 'conference',
    category: 'scientific',
    year: '2023',
    citation: "Abril Ramírez, G. (2023). Paleoentomología de los ecosistemas lagunares de la alta montaña colombiana. Páramo de Frontino y Sierra Nevada del Cocuy. [Ponencia]. Facultad de Ciencias Agrarias, Universidad Nacional de Colombia."
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
