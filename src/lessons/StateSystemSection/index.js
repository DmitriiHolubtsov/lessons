import React, { useState } from 'react';
import AnimalShow from './AnimalShow';
import './AnimalShow.css';

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse', 'cat'];

    return animals[Math.floor(Math.random() * animals.length)]
}

    // let a = { x: 1, y: 2 };
    // let b = a;
    // b.x = 10;
    // console.log(a.x);

    // let c = {};
    // let d = {};
    // console.log(c===d);

    // for(let i=0; i<10; i++) {
    //  setTimeout(function() {
    //   console.log(i);
    //  }, 100);
    // }



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