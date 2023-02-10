import React from 'react';
import ImageShow from './ImageShow';
import './ImagesList.css';

function ImagesList({ images }) {
    const renderedImages = Array.from(images).map((image) => {
        return (
            <div key={image.id}>
                <ImageShow image={image} />
            </div>
        )
    })

    return <div className="image-list">{renderedImages}</div>;
}

export default ImagesList;