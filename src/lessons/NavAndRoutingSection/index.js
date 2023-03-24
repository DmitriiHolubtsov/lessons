import { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import { itemsAccordion, selectColorOptions, selectSizeOptions } from './date'

function NavAndRoutingSection() {
  const [selectionColor, setSelectionColor] = useState(null);
  const [selectionSize, setSelectionSize] = useState(null);


  const handleSelectColor = (option) => {
    setSelectionColor(option)
  }

  const handleSelectSize = (option) => {
    setSelectionSize(option)
  }

    return (
        <>
          <Accordion items={itemsAccordion} />
          <div className="flex">
            <Dropdown 
              options={selectColorOptions} 
              value={selectionColor} 
              onChange={handleSelectColor}
              selectLabel="Select color:"
            />
            <Dropdown 
              options={selectSizeOptions} 
              value={selectionSize} 
              onChange={handleSelectSize}
              selectLabel="Select size:"
            />
          </div>
        </>
    );
}

export default NavAndRoutingSection;