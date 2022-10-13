import React from 'react';
import './imageList.css';

const ImageList = (props) => {
    const images = props.images.map(({ id, urls, alt_description }) => {
        return (
            <img src={urls.regular} key={id} alt={alt_description} />
        )});

    return (
        <div className="image-list">{images}</div>
    )
}

export default ImageList;