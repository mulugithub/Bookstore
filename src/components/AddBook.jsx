import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddBook = (props) => {
  const { addBooks } = props;

  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
  });

  const handleChange = (e) => {
    setNewBook({
      ...newBook,
      [e.target.name]: e.target.value,
    });
  };

  const addBookToList = (e) => {
    e.preventDefault();
    addBooks(newBook.title, newBook.author);
    setNewBook({
      title: '',
      author: '',
    });
  };

  return (
    <section>
      <form>
        <div>
          <input type="text" name="title" id="name" value={newBook.title} placeholder="Title" onChange={handleChange} required />
          <input type="text" name="author" id="author" value={newBook.author} placeholder="Author" onChange={handleChange} required />
        </div>
        <button type="submit" onClick={addBookToList}> Add Book </button>
      </form>
    </section>
  );
};

AddBook.propTypes = {
  addBooks: PropTypes.func.isRequired,
};

export default AddBook;
