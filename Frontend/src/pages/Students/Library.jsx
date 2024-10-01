// LibrarySection.js
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

const LibrarySection = () => {
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

  const handleBorrowBook = (id) => {
    // Implement borrow book functionality here
    console.log(`Book with ID ${id} has been borrowed.`);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 pl-64 p-6">
        <h1 className="text-2xl font-bold mb-4">Library</h1>
        <div className="space-y-4">
          {books.map((book) => (
            <div key={book._id} className="border p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold">{book.bookname}</h2>
              <p className="text-gray-600">Author: {book.author}</p>
              <button
                onClick={() => handleBorrowBook(book._id)}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Borrow
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LibrarySection;
