import React, { useEffect, useState } from "react";
import { getBooks } from "../services/bookService";

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks().then(data => setBooks(data));
    }, []);

    return (
        <div>
            <h2>Danh sách sách</h2>
            <ul>
                {books.map(book => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
