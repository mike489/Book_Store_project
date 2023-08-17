import React from "react";
import Footer from "../components/Footer";
import Button from "../components/Button";
import NavBar from "../components/NavBar";
import BookCard from "../components/BookCard";
import { books } from "../TempData";

const Home = () => {
  return (
    <div className="">
      <NavBar />

      <main className="container ">
        <div className="w-full min-h-screen bg-gradient-to-r from-gray-600 via-gray-500 to-white flex items-center justify-center">
          <div className="flex flex-col items-center justify-center space-y-5 h-full pr-[400px] pb-[300px]">
            <p className="text-teal-50 text-[55px] font-mono">
              Where your search ends?
            </p>
            <div className="flex items-start self-start">
              <Button onClick={() => alert("clicked")} primary>
                Order online
              </Button>
            </div>
          </div>
        </div>
      </main>
      <div className="flex flex-col items-start w-full max-w-7xl mx-auto p-3 ">
        <div className="flex justify-between items-center pb-3  w-full">
          <p className="font-bold text-[20px] font-mono">Featured Items</p>
          <span
            className="transform transition-transform cursor-pointer"
            onClick={() => alert("Clicked")}
          >
            Show All
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 xl:grid-cols-6">
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

      <div className=" flex flex-col items-start w-full max-w-7xl mx-auto p-3 mt-24">
        <div className="flex justify-between items-center pb-3  w-full">
          <p className=" flex text-[20px] font-bold font-mono">
            Best Seller in Your Area
          </p>
          <span
            className="transform transition-transform cursor-pointer"
            onClick={() => alert("Clicked")}
          >
            Show All
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 xl:grid-cols-6">
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
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
