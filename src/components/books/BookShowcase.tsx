import React, { useState } from 'react';
import BookCard from './BookCard';
import BookModal from './BookModal';
import { books } from '../../data/books';

export default function BookShowcase() {
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);

  const selectedBook = books.find(b => b.id === selectedBookId) || null;

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
        {books.map((book, index) => (
          <BookCard 
            key={book.id}
            title={book.title}
            author={book.author}
            year={book.year}
            publisher={book.publisher}
            accentColor={book.accentColor as 'camus-red' | 'ernaux-blue'}
            catalogNumber={`CAT. B-${index + 1}`}
            coverImage={book.coverImage}
            index={index}
            onOpen={() => setSelectedBookId(book.id)}
          />
        ))}
      </div>

      <BookModal 
        isOpen={!!selectedBookId} 
        onClose={() => setSelectedBookId(null)} 
        book={selectedBook} 
      />
    </>
  );
}
