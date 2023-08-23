import React from "react";

const BookCard = ({ imageSrc, price, name }) => {
  return (
    <div>
      <div>
        <img
          src={imageSrc}
          alt=""
          className="object-cover object-center h-[280px] w-full"
        />
      </div>
      <div className="text-[18px] font-bold text-[#237943] ml-5 flex flex-col gap-[2px]">
        {`$${price}`}
        <span className="text-[16px] font-semibold text-[#29292E]">{name}</span>
      </div>
    </div>
  );
};

export default BookCard;
