import React, { useState } from 'react';
import styles from './BibliographyList.module.css';

interface Reference {
  id: string;
  citation: string;
  category: string;
  year: string;
}

interface BibliographyListProps {
  references: Reference[];
}

export default function BibliographyList({ references }: BibliographyListProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRefs = references.filter(ref => 
    ref.citation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = [
    { id: 'primary-literary', title: 'Obras literarias primarias' },
    { id: 'critical-literary', title: 'Contexto literario y crítico' },
    { id: 'scientific', title: 'Contexto científico' },
    { id: 'methodological', title: 'Referencia metodológica' },
  ];

  return (
    <div className={styles.container}>
      <input 
        type="text" 
        className={styles.searchBox}
        placeholder="Buscar en la bibliografía..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {filteredRefs.length === 0 ? (
        <div className={styles.emptyState}>No se encontraron referencias.</div>
      ) : (
        categories.map(category => {
          const categoryRefs = filteredRefs.filter(r => r.category === category.id);
          if (categoryRefs.length === 0) return null;

          return (
            <div key={category.id} className={styles.categoryGroup}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.referenceList}>
                {categoryRefs.map(ref => (
                  <div key={ref.id} className={styles.referenceItem}>
                    {ref.citation}
                  </div>
                ))}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
