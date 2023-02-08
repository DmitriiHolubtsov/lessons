import React, { useState } from 'react';
import AnimalShow from './AnimalShow';
import './AnimalShow.css';

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse', 'cat'];

    return animals[Math.floor(Math.random() * animals.length)]
}



const StateSystem = () => {
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        // animals.push(getRandomAnimal());
        setAnimals([...animals, getRandomAnimal()]);
    }

    const renderAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    })

    return (
        <div className="app">
            <button onClick={handleClick}>Add Animal</button>
            <div className="animal-list">{renderAnimals}</div>
        </div>
    );
}

export default StateSystem;