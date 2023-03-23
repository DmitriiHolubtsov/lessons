import { useState } from 'react';

function Dropdown({ options }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Select...');

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setIsOpen(false);
        setSelectedOption(option.label);
    };

    const renderedOptions = options.map((option) => {
        return <div onClick={() => handleOptionClick(option)} key={option.value}>
            {option.label}
        </div>
    });

    return (
        <div>
            <div onClick={handleClick}>{selectedOption}</div>
            {isOpen && <div>{renderedOptions}</div>}
        </div>
    )
}

export default Dropdown;