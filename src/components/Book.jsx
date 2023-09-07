import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = (props) => {
  const {
    id, title, author, category,
  } = props;
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      <div key={id}>
        <h3>{title}</h3>
        <p>
          Author:
          {' '}
          {author}
        </p>
        <p>
          Category:
          {' '}
          {category}
        </p>
        <button type="button" onClick={handleRemoveBook}>
          Remove
        </button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
