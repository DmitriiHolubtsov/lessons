import { useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import useBooksContext from './hooks/use-books-context';

const Books = () => {
    const { fetchBooks } = useBooksContext();

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    return (
        <div className="app">
            <h1>Reading List</h1>
            <div className="pl-5 font-thin">Note: For adding or removing books you need to start json-server from new terminal window using 'npm run server' command.</div>
            <BookList />
            <BookCreate />
        </div>
    )
}

export default Books;