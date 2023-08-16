import React, { useState } from 'react';
import { BsCaretUp , BsCaretDown} from 'react-icons/bs';

const CategoryCard = ({ mainTitle, categoryTitles }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-white px-3 shadow-sm">
      <div className="flex justify-between items-center mx-2 mb-3 cursor-pointer" onClick={toggleDropdown}>
        {mainTitle} <span className="transform transition-transform">{isDropdownOpen ? <BsCaretUp size={20} /> : <BsCaretDown size={20} />}</span>
      </div>
      {isDropdownOpen && (
        <div className="flex flex-col gap-3 ml-3">
          {categoryTitles.map((title, index) => (
            <div key={index} className="inline-flex items-center space-x-4">
              <input
                type="checkbox"
                className="h-3 w-3 align-top rounded-sm appearance-none border-2 border-green-500 checked:bg-transparent focus:outline-none focus:border-green-600"
              />
              <span className="text-gray-700 text-[16px]">{title}</span>
            </div>
          ))}
          <div className="border-b-2 border-emerald-100 mr-6 mb-3"></div>
        </div>
      )}
    </div>
  );
};

export default CategoryCard;
