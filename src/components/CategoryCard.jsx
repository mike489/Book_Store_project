import React, { useState } from 'react';

const CategoryCard = ({ mainTitle, categoryTitles, onCheckboxChange }) => {
  const [categoryStates, setCategoryStates] = useState(
    categoryTitles.reduce((acc, title) => {
      acc[title] = false;
      return acc;
    }, {})
  );

  const toggleCheckbox = (title) => {
    setCategoryStates((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };

  const handleCheckboxChange = (title) => {
    toggleCheckbox(title);
    onCheckboxChange(title, categoryStates[title]);
  };

  return (
    <div className="bg-white px-3 shadow-sm">
      <div className="flex justify-between items-center mx-2 mb-3 cursor-pointer">
        {mainTitle}
      </div>
      <div className="flex flex-col gap-3 ml-3">
        {categoryTitles.map((title, index) => (
          <div key={index} className="inline-flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="h-4 w-4 text-green-600 rounded border-gray-400 focus:ring-green-500"
                checked={categoryStates[title]}
                onChange={() => handleCheckboxChange(title)}
              />
              <span>{title}</span>
            </label>
          </div>
        ))}
        <div className="border-b-2 border-emerald-100 mr-6 mb-3"></div>
      </div>
    </div>
  );
};

export default CategoryCard;
