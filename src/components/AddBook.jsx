import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook, getBooks } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const addBookToList = (e) => {
    e.preventDefault();
    // const uniqueID = ;
    // console.log('uniqueID', uniqueID);
    const book = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addBook(book)).then(() => {
      dispatch(getBooks());
    });
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  const Categories = [
    'Fiction', 'Nonfiction', 'Mystery', 'Novel', 'Thriller', 'Graphic Novels', 'Other',
  ];

  return (
    <section className="add-book-section">
      <div className="form-title">ADD NEW BOOK</div>
      <form onSubmit={addBookToList}>
        <input type="text" name="title" id="name" value={title} placeholder="Book title" onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" name="author" id="author" value={author} placeholder="Book author" onChange={(e) => setAuthor(e.target.value)} required />
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="" disabled>Select a category</option>
          {Categories.map((categorie) => (
            <option key={categorie} value={categorie}>{categorie}</option>
          ))}
        </select>
        <button className="add-btn" type="submit"> Add Book </button>
      </form>
    </section>
  );
};

export default AddBook;
