import React, { useState } from 'react';
import { uuid } from 'uuidv4';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addBookToList = (e) => {
    e.preventDefault();
    dispatch(addBook({
      id: uuid,
      title,
      author,
      category: 'Fiction',
    }));

    setTitle('');
    setAuthor('');
  };

  return (
    <section>
      <form onSubmit={addBookToList}>
        <div>
          <input type="text" name="title" id="name" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} required />
          <input type="text" name="author" id="author" value={author} placeholder="Author" onChange={(e) => setAuthor(e.target.value)} required />
          <button type="submit"> Add Book </button>
        </div>
      </form>
    </section>
  );
};

export default AddBook;
