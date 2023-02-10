import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import searchImages from './services/api'
import ImagesList from './components/ImagesList';

const ApiApp = () => {
    const [images, setImages] = useState('');

    const handleSubmit = async (term) => {
        const result = await searchImages(term);
        setImages(result);
    }

    return (
        <div>
            <SearchBar onSubmit={handleSubmit}/>
            <ImagesList images={images} />
        </div>
    )
}

export default ApiApp;