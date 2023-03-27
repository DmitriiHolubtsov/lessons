import { useState } from 'react';
import Dropdown from '../../../components/Dropdown';
import { selectColorOptions, selectSizeOptions } from '../../../content/date'

function DropdownPage() {
  const [selectionColor, setSelectionColor] = useState(null);
  const [selectionSize, setSelectionSize] = useState(null);


  const handleSelectColor = (option) => {
    setSelectionColor(option)
  }

  const handleSelectSize = (option) => {
    setSelectionSize(option)
  }

    return (
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
    );
}

export default DropdownPage;