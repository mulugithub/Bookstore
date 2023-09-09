import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../redux/books/booksSlice';
import AddBook from './AddBook';
import Book from './Book';

const BooksList = () => {
  const books = useSelector((state) => state.books.booksList);
  const isLoading = useSelector((state) => state.books.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <section className="books-container">
      <ul className="books-card-wrapper">
        { Object.keys(books).length === 0
          && <h3>No books found.</h3>}
        {' '}
        {books.map((book) => (
          <Book
            key={book[0].item_id}
            book={{
              item_id: book[0].item_id,
              title: book[0].title,
              author: book[0].author,
              category: book[0].category,
            }}
          />
        ))}
      </ul>
      <hr />
      <AddBook />
    </section>
  );
};

export default BooksList;
