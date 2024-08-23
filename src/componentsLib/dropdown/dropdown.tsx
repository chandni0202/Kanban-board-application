import { useState, useRef } from 'react';
import useOutsideClick from '../../customHook/useOutsideClick';
import NestedDropdown from './nestedDropdown';
import './dropdown.css';


const Dropdown: React.FC<{
  selectedGrouping: string;
  selectedOrdering: string;
  onGroupChange: (group: string) => void;
  onOrderChange: (order: string) => void;
}> = ({ selectedGrouping, selectedOrdering, onGroupChange, onOrderChange }) => {
  const [isCardVisible, setIsCardVisible] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClick(dropdownRef, () => setIsCardVisible(false));

  return (
    <div className="nested-dropdown" ref={dropdownRef}>
      <div className='button-container' onClick={() => setIsCardVisible(!isCardVisible)}>
      <button className="main-btn">
        <img src="/display.svg" alt="display-dropdown" width='16px' height='16px' />
        <div>Display</div>
        <img src="/down.svg" alt="display-dropdown" width='16px' height='16px' />
      </button>
      </div>
      {isCardVisible && (
        <div className="card-dropdown" >
          <div className="dropdown-group">
            Grouping
            <NestedDropdown
              label={selectedGrouping}
              options={['Status', 'User', 'Priority']}
              onSelect={onGroupChange}
            />
          </div>
          <div className="dropdown-group">
            Ordering
            <NestedDropdown
              label={selectedOrdering}
              options={['Priority', 'Title']}
              onSelect={onOrderChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
