import React, { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, getBooks } from '../redux/books/booksSlice';
import 'react-circular-progressbar/dist/styles.css';

// eslint-disable-next-line camelcase
const Book = ({ book }) => {
  const dispatch = useDispatch();
  const [percent, setPercent] = useState(64);

  const handleProgress = () => {
    setPercent(percent + 4);
  };
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
    <div key={book.item_id} className="book-card">
      <div className="book-detail">
        <p className="book-category">
          {book.category}
        </p>
        <span className="book-title">
          {book.title}
        </span>
        <span className="author">{book.author}</span>
        <div className="book-actions-container">
          <button className="comments" type="button">Comments</button>
          <div className="actions-separate-line" />
          <button className="remove" type="button" onClick={handleRemoveBook}>
            Remove
          </button>
          <div className="actions-separate-line" />
          <button className="edit" type="button">Edit</button>
        </div>
      </div>
      <div className="book-progress">
        <div style={{ height: 50, width: 50 }}><CircularProgressbar value={percent} /></div>
        <div className="text-peogress">
          <span className="Percent-Complete">
            {`${percent}%`}
          </span>
          <span className="Complete-text ">Completed</span>
        </div>
      </div>
      <div className="line" />
      <div className="book-chapter">
        <span className="current-chapter">Current Chapter</span>
        <h2 className="current-lesson">Chapter 17</h2>
        <button className="update-progress" onClick={handleProgress} type="button">Update Progress</button>
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
