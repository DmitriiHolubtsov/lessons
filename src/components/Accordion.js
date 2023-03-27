import { useState, useRef } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(-1);
    const divEl = useRef();

    const handleClick = (nextIndex) => {
        setExpandedIndex((currentExpandedIndex) => {
            if(currentExpandedIndex === nextIndex) {
                return -1;
            } else {
                return nextIndex;
            }
        })

        document.addEventListener("click", setExpandedIndex, true);

        return () => {
            document.removeEventListener("click", setExpandedIndex);
          };
    }

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        const icon = <span className='text-xl'>
                {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
            </span>;

        return (
            <div key={item.id} ref={divEl}>
                <div className='flex justify-between p-3 bg-gray-100 border-b items-center cursor-pointer' onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className='border-b p-5'>{item.content}</div>}
            </div>
        )
    });

    return (
        <div className='border-x border-t rounded max-w-sm'>{renderedItems}</div>
    );
}

export default Accordion;