import { useState, useEffect, useRef } from "react";
import Panel from "./Panel";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

function Dropdown({ options, value, onChange, selectLabel }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative mt-10 mr-4">
      <label className="text-lg">{selectLabel}</label>
      <Panel
        className="flex justify-between items-center cursor-pointer mt-1"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        {isOpen ? (
          <GoChevronUp className="text-lg" />
        ) : (
          <GoChevronDown className="text-lg" />
        )}
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
