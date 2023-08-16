import React from 'react'

const BookCard = ({ imageSrc, price, name }) => {
  return (
   
 
    <div>
      <div>
        <img src={imageSrc} alt="" className="object-cover object-center h-[280px] w-full" />
      </div>
      <div className="text-[18px] font-bold text-[#237943] ml-3 flex flex-col gap-[2px]">
        {`$${price}`}
        <span className="text-[16px] font-semibold text-[#29292E]">{name}</span>
      </div>
      <div className="bg-[#237943]  text-white mx-3 rounded-md text-center px-1 py-2">
        Add To Cart
      </div>
    </div>
  );
};


export default BookCard
