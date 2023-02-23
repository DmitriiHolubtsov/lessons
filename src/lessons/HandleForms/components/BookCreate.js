import { useState } from 'react';
import useBooksContext from '../../../hooks/use-books-context';
import './index.css';

const BookCreate = () => {
    const [title, setTitle] = useState('');
    const { handleCreateBook } = useBooksContext();

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleCreateBook(title);
        setTitle('');
    }

    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange} />
                <button className="button">Create!</button>
            </form>
        </div>
    )
}

export default BookCreate;