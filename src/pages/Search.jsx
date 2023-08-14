import React from "react";
import BookCard from "../components/BookCard";
import CategoryCard from "../components/CategoryCard";
import { categories, books } from "../TempData";

const search = () => {
  return (
    <div className=" bg-white">
      <div className=" grid grid-cols-6 bg-white  m-[50px] gap-2 ">
        <div className=" col-span-2 max-h-[510px] w-full border-[1px]  bg-white">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              mainTitle={category.mainTitle}
              categoryTitles={category.categoryTitles}
            />
          ))}
        </div>
        <div className=" col-span-4 w-full   ">
          <div className=" flex gap-2  flex-wrap ml-3">
            {books.map((book) => (
              <BookCard
                key={book.id}
                imageSrc={book.imageSrc}
                price={book.price}
                name={book.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default search;
