import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    setIsDeleted(true);
  };

  if (isDeleted) {
    return null;
  }

  return (
    <div>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button type="button" onClick={handleDelete}>Delete</button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
