import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, getBooks } from '../redux/books/booksSlice';

// eslint-disable-next-line camelcase
const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(book.item_id)).then(() => {
      dispatch(getBooks());
    });
  };
  // eslint-disable-next-line camelcase
  if (!book.item_id) {
    return null; // or render a loading state
  }
  return (
    <div>
      <div key={book.item_id}>
        <h3>{book.title}</h3>
        <p>
          Author:
          {' '}
          {book.author}
        </p>
        <p>
          Category:
          {' '}
          {book.category}
        </p>
        <button type="button" onClick={handleRemoveBook}>
          Remove
        </button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
export default Book;
