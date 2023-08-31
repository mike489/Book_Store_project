import React from "react";
import Footer from "../components/Footer";
import Button from "../components/Button";
import NavBar from "../components/NavBar";
import BookCard from "../components/BookCard";
import { booksData, responsive } from "../TempData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Home = () => {
  const Product = booksData.map((book) => (
    <Link to={`/ProductDetail/${book.id}`} key={book.id}>
      <BookCard
        imageSrc={book.imageSrc}
        price={book.price}
        name={book.name}
      />
    </Link>
  ));
  

  return (
    <div className="">
      <NavBar />

      <main className="container ">
        <div className="w-full min-h-screen bg-gradient-to-r from-gray-600 via-gray-500 to-white flex items-center justify-center">
          <div className="flex flex-col items-center justify-center space-y-5 h-full pr-[400px] pb-[300px]">
            <p className="text-teal-50 text-[55px] font-primary">
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
      <div className=" flex-col items-start w-full max-w-7xl mx-auto p-3 font-primary">
        <div className="flex flex-row items-center justify-between mt-10 ">
          {Array(3)
            .fill()
            .map((item) => (
              <div className="w-[400px] h-[280px] bg-black bg-opacity-40 rounded-lg text-white">
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="text-2xl tracking-tight">
                    Buy 5 or more Save $1 each
                  </p>
                  <button className="inline-flex items-center self-start space-x-2 p-5 px-16">
                    Shop Now
                    <BiChevronRight />
                  </button>
                </div>
              </div>
            ))}
          {/* <div className="w-[400px] h-[280px] bg-black bg-opacity-40 rounded-lg"></div>
          <div className="w-[400px] h-[280px] bg-black bg-opacity-40 rounded-lg"></div> */}
        </div>
        <div className="flex justify-between items-center pb-3 w-full mt-10 font-primary">
          <p className="font-bold text-[20px] font-mono">Featured Items</p>
          <Link
        to="/Search" // Replace with the actual route you want to link to
        className="transform transition-transform cursor-pointer"
      >
        Show All
      </Link>
        </div>

        <Carousel
          infinite
          responsive={responsive}
          customRightArrow={
            <div className="absolute arrow-btn left-1 text-center cursor-pointer bg-main-green-color rounded-full">
              <BiChevronLeft className="h-8 md:h-9  text-white w-full" />
            </div>
          }
          customLeftArrow={
            <div className="absolute arrow-btn right-1 text-center  cursor-pointer  bg-main-green-color rounded-full ">
              <BiChevronRight className="h-8 md:h-9 text-white  w-full" />
            </div>
          }
        >
          {Product}
        </Carousel>
      </div>

      <div className="  flex-col items-start w-full max-w-7xl mx-auto p-3 mt-24 font-primary">
        <div className="flex justify-between items-center pb-3  w-full">
          <p className=" flex text-[20px] font-bold font-mono">
            Best Seller in Your Area
          </p>
          <Link
        to="/Search" // Replace with the actual route you want to link to
        className="transform transition-transform cursor-pointer"
      >
        Show All
      </Link>
        </div>
        <Carousel
          infinite
          responsive={responsive}
          customRightArrow={
            <div className="absolute arrow-btn left-1 text-center cursor-pointer bg-main-green-color rounded-full">
              <BiChevronLeft className=" h-8 md:h-9  text-white w-full" />
            </div>
          }
          customLeftArrow={
            <div className="absolute arrow-btn right-1 text-center  cursor-pointer  bg-main-green-color rounded-full ">
              <BiChevronRight className="h-8 md:h-9  text-white  w-full" />
            </div>
          }
        >
          {Product}
        </Carousel>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
