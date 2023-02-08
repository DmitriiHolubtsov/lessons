import React from 'react';
import SearchBar from './components/SearchBar';
import ImagesList from './components/ImagesList';
import ImageShow from './components/ImageShow';

const ApiApp = () => {
    return (
        <div>
            <SearchBar />
            <ImagesList />
            <ImageShow />
        </div>
    )
}

export default ApiApp;