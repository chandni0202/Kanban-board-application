import { useState, useRef } from 'react';
import useOutsideClick from '../../customHook/useOutsideClick';

interface NestedDropdownProps {
    label: string;
    options: string[];
    onSelect: (option: string) => void;
  }
  
  const NestedDropdown: React.FC<NestedDropdownProps> = ({ label, options, onSelect }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
  
    useOutsideClick(dropdownRef, () => setIsOpen(false));
  
    return (
      <div className="dropdown" ref={dropdownRef}>
        <button onClick={() => setIsOpen(!isOpen)} className="dropdown-btn">
          {label}
          <img src="/down.svg" alt="display-dropdown" width='16px' height='16px' />
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            {options.map((option, index) => (
              <div
                key={index}
                className="dropdown-item"
                onClick={() => {
                  onSelect(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  export default NestedDropdown;