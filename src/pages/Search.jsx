/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import BookCard from "../components/BookCard";
import CategoryCard from "../components/CategoryCard";
import { categories } from "../TempData";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/Cart/cartSlice";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const search = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.cart.books);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.totalPrice);

  const handleAddToCart = (bookId) => {
    dispatch(addToCart(bookId));
    console.log(bookId);
    console.log(cartItems);
    console.log(total);
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div className=" bg-white">
      <NavBar />

      <div className=" grid grid-cols-1 overflow-hidden lg:grid-cols-5 bg-white  m-[50px] gap-2 ">
        <div className=" col-span-1 flex flex-col   lg:flex-col  !h-fit border-[1px]  bg-white">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              mainTitle={category.mainTitle}
              categoryTitles={category.categoryTitles}
            />
          ))}
        </div>
        <div className=" col-span-1 lg:col-span-4 w-full mt-[300px] mb-[50px]   ">
          <div className=" flex gap-2  flex-wrap items-center justify-center w-full ">
            {books.map((book) => (
              // eslint-disable-next-line react/jsx-key
              <div>
                <BookCard
                  key={book.id}
                  imageSrc={book.imageSrc}
                  price={book.price}
                  name={book.name}
                ></BookCard>
                <div className=" mx-5 w-100%">
                  <Button
                    primary
                    onClick={() => handleAddToCart(book.id)}
                    width="100%"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default search;
