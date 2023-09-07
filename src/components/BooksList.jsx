import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import Book from './Book';

const BooksList = () => {
  const books = useSelector((state) => state.books.booksList);

  return (
    <div>
      {books.map((book) => (
        <>
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        </>
      ))}
      <AddBook />
    </div>
  );
};

export default BooksList;
