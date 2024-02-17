import { Edit } from 'lucide-react';
import { useState } from 'react';

// Define your component here

const CustomSelect = ({ jsonData, selectedCat, setSelectedCat, setSelectedSectionIndex }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block w-[50%] ">
      {/* Hidden original select box */}
      <select
        id="sectionDropdown"
        className="hidden"
        value={selectedCat !== null ? selectedCat : ""}
        onChange={(e) => {
          const selectedItem = e.target.value;
          setSelectedCat(selectedItem);
          const sectionIndex = e.target.selectedIndex + 1;
          setSelectedSectionIndex(sectionIndex);
        }}
      >
        {jsonData.flatMap((section, sectionIndex) =>
          Object.keys(section).map((item) => (
            <option
              data-selected={item}
              key={`${sectionIndex}-${item}`}
              value={item}
            >
              {item}
            </option>
          ))
        )}
      </select>

      {/* Custom select box */}
      <div
        className="relative flex flex-col items-start bg-white border border-gray-300 rounded-md p-2 space-y-2 "
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="cursor-pointer flex justify-between items-center w-full">
          <span>{selectedCat || "Select an option"}</span>
          <svg
            className={`w-4 h-4 transition-transform ${isOpen ? "transform rotate-180" : ""
              }`}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
        {isOpen && (
          <div className="absolute z-100 h-[200px] text-start overflow-scroll w-full top-full left-0 bg-white border border-gray-300 rounded-b-md overflow-hidden shadow-md">
            {jsonData.flatMap((section, sectionIndex) =>
              Object.keys(section).map((item) => {
                const newIndex = sectionIndex + 1;
                return (
                  <div
                    key={`${newIndex}-${item}`}
                    className={`p-2 gap-2 flex items-center ${selectedCat === item ? "bg-blue-500 text-white" : "hover:bg-gray-200"
                      }`}
              
                  >
                    <span className='flex-1 cursor-pointer' onClick={() => {
                      setSelectedCat(item);
                      setSelectedSectionIndex(newIndex);
                      setIsOpen(false); // Close the dropdown after selecting an option
                    }}>{item}</span>
                    <span className='cursor-pointer'><Edit size={15} /></span>
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;
