import React, { useState } from "react";

const BookEdit = ({ book, onSubmit }) => {
    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(book.id, title);
    }

    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title</label>
            <input value={title} onChange={handleChange} className="input"></input>
            <button className="button is-primary" >
                Save
            </button>
        </form>
    );
};

export default BookEdit