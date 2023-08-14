import React from 'react';

const CategoryCard = ({ mainTitle, categoryTitles }) => {
  return (
    <div className="bg-white rounded-md p-3 shadow-md">
      <div className="flex justify-between items-center mx-3 mb-3">
        {mainTitle} <span className="mr-3">A</span>
      </div>
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
    </div>
  );
};

export default CategoryCard;
