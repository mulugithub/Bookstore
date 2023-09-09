import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  booksList: [],
  isLoading: false,
};
const appId = 'gBldcgpIZbj2Co7SeNa1';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`;

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Oops! Something went wrong.');
  }
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  // eslint-disable-next-line no-unused-vars
  await axios.post(url, book).then((response) => book).catch(() => 'Unable to add a book');
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  const response = await axios.delete(`${url}/${id}`);
  return response.data;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = 'succeeded';
        const Books = Object.keys(action.payload).map((key) => {
          action.payload[key][0].item_id = key;
          const book = action.payload[key];
          return book;
        });
        state.booksList = [...Books];
      })
      .addCase(getBooks.rejected, (state) => {
        state.isLoading = false;
        state.status = 'failed';
        state.error = 'Failed to fetch books. Please try again later.';
      })
      .addCase(addBook.fulfilled, (state, action) => {
        const book = action.payload; // Assuming the response data is the book object
        if (book) {
          state.status = 'succeeded';
          state.error = null;
          state.booksList = [...state.booksList, book];
        } else {
          state.status = 'failed';
          state.error = 'Unable to add record!';
        }
      })
      .addCase(addBook.rejected, (state) => {
        state.isLoading = false;
        state.status = 'failed';
        state.error = 'Failed to add book. Please try again later.';
      })
      .addCase(removeBook.pending, (state) => {
        state.isLoading = true;
        state.status = 'loading';
        state.error = null;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = 'succeeded';
        const bookId = action.payload;
        state.booksList = state.booksList.filter((item) => item.id !== bookId);
      })
      .addCase(removeBook.rejected, (state) => {
        state.isLoading = false;
        state.status = 'failed';
        state.error = 'Failed to remove book. Please try again later.';
      });
  },
});

export default booksSlice.reducer;
