import React from "react";
import Footer from "../components/Footer";
// import Button from "../components/Button";
import NavBar from "../components/NavBar";
import BookCard from "../components/BookCard";
import { booksData, responsive } from "../TempData";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import Hero from "../components/hero/Hero";

import SimpleCard from "../components/card/Card";

const Home = () => {
  const Product = booksData.map((book) => (
    <BookCard
      key={book.id}
      imageSrc={book.imageSrc}
      price={book.price}
      name={book.name}
    />
  ));

  return (
    <>
      <NavBar />
      <Hero />
      <SimpleCard />

      <div className="flex-col items-start w-full max-w-7xl mx-auto p-3 mt-10 font-primary">
        <div className="flex justify-between items-center pb-3  w-full">
          <p className=" flex text-[20px] font-bold ">Featured Items</p>
          <Link to="/Search">
            <span className="transform transition-transform cursor-pointer ">
              Show All
            </span>
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

      <div className="flex-col items-start w-full max-w-7xl mx-auto p-3 mt-24 font-primary">
        <div className="flex justify-between items-center pb-3  w-full">
          <p className=" flex text-[20px] font-bold">
            Best Seller in Your Area
          </p>
          <Link to="/Search">
            <span className="transform transition-transform cursor-pointer ">
              Show All
            </span>
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
    </>
  );
};

export default Home;
