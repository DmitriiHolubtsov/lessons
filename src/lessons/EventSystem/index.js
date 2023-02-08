import React from 'react';

const handleClick = () => {
    console.log('click');
}

const EventSystem = () => {
    return (
        <div>
            <button 
                style={{ 
                    border: '1px solid black', 
                    background: 'white',
                    textTransform: 'uppercase'
                }}
                onClick={handleClick}>Add Animal</button>
        </div>
    );
}

export default EventSystem;