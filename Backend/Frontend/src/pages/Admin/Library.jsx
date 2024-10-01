import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

const Library = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("/api/v1/library/getall");
      setBooks(response.data.books);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const addBook = async (book) => {
    try {
      const response = await axios.post("/api/v1/library/books", {
        bookname: book.title,
        author: book.author,
      });
      setBooks([...books, response.data]);
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  const handleBookPick = async (bookId, studentId) => {
    // Implement logic to record when a student picks a book
  };

  const handleBookReturn = async (bookId, studentId) => {
    // Implement logic to mark when a student returns a book
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 pl-64 p-6">
        <h1 className="text-2xl font-bold mb-4">Library Management</h1>

        <form
          className="bg-white shadow-md rounded pl-32 pr-8 pt-6 pb-8 mb-4"
          onSubmit={(e) => {
            e.preventDefault();
            const book = {
              id: Math.random().toString(36).substr(2, 9),
              title: e.target.title.value,
              author: e.target.author.value,
            };
            addBook(book);
            e.target.reset();
          }}
        >
          <h2 className="text-xl font-semibold mb-4">Add New Book</h2>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="title"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="author"
            >
              Author:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="author"
              required
            />
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Book
          </button>
        </form>

        <h2 className="text-xl font-semibold mb-4">Books</h2>

        <ul className="space-y-4">
          {books.map((book) => (
            <li key={book._id} className="p-4 bg-gray-100 rounded-lg shadow">
              <h3 className="text-lg font-semibold">{book.bookname}</h3>
              <p className="text-gray-700 mb-2">by {book.author}</p>

              <div className="flex space-x-4">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded"
                  onClick={() => handleBookPick(book._id, "student123")}
                >
                  Pick
                </button>

                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
                  onClick={() => handleBookReturn(book._id, "student123")}
                >
                  Return
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Library;
