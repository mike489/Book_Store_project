import React from "react";
import BookCard from "../components/BookCard";
import CategoryCard from "../components/CategoryCard";
import { categories, books } from "../TempData";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const search = () => {
  return (
    <div className=" bg-white">
      <NavBar/>
      <div className=" grid grid-cols-1 lg:grid-cols-5 bg-white  m-[50px] gap-2 ">
        <div className=" col-span-1 flex flex-row   lg:flex-col max-h-[5] w-full border-[1px]  bg-white">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              mainTitle={category.mainTitle}
              categoryTitles={category.categoryTitles}
            />
          ))}
        </div>
        <div className=" col-span-1 lg:col-span-4 w-full mt-[300px] mb-[50px]   ">
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
      <Footer/>
    </div>
  );
};

export default search;