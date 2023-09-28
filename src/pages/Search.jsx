/* eslint-disable react-hooks/rules-of-hooks */

import BookCard from "../components/BookCard";
import CategoryCard from "../components/CategoryCard";
import Footer from "../components/Footer"
import { categories } from "../TempData";
import Button from "../components/Button";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/Cart/cartSlice';
import { fetchbooks } from '../features/Book/booksSlice';


import NavBar from "../components/Navbar";
import { useEffect , useState } from "react";

const search = () => {
  const dispatch = useDispatch();
  // const books = useSelector(state => state.cart.books);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total= useSelector ((state)=>state.cart.totalPrice)
  const books = useSelector(state => state.books.books);
  const status = useSelector(state => state.books.status);
  const error = useSelector(state => state.books.error);
  const [selectedCategories, setSelectedCategories] = useState("All");

  console.log(selectedCategories)

  useEffect(() => {
    dispatch(fetchbooks());
  }, [dispatch]);

  console.log(books);
  
  
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error loading products: {error}</div>;
  }




  console.log(selectedCategories)

  const handleCategoryCheckboxChange = (categoryTitle, isChecked) => {
    if (!isChecked) {
      // If the checkbox is checked, add the category to selectedCategories
      setSelectedCategories(categoryTitle);
    } 
  };
  const filteredBooks = selectedCategories === "All"
    ? books // Show all books if no categories are selected
    :books.filter((book) => book.genre === selectedCategories);

  const handleAddToCart = (bookId) => {
    dispatch(addToCart({bookId , books}));
    console.log(bookId);
    console.log('Books:', books);
    console.log(cartItems);
    console.log(total);
  };

  return (
    <div className=" bg-white">
      <NavBar/>
    
        <div className=" grid grid-cols-1 overflow-hidden lg:grid-cols-5 bg-white  m-[50px] gap-2 ">
          <div className=" col-span-1 flex flex-col   lg:flex-col  !h-fit border-[1px]  bg-white">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                mainTitle={category.mainTitle}
                categoryTitles={category.categoryTitles}
                onCheckboxChange={handleCategoryCheckboxChange}
                
              />
            ))}
          </div>
          <div className=" col-span-1 lg:col-span-4 w-full  mb-[50px]   ">
            <div className=" flex gap-2  flex-wrap items-center justify-center w-full ">
              {filteredBooks.map((book) => (
                // eslint-disable-next-line react/jsx-key
                <div>
                  <BookCard
                    key={book._id}
                    imageSrc={`https://res.cloudinary.com/dmeqlpc2o/image/upload/${book.image}`}
                    price={book.price}
                    name={book.name}
                  ></BookCard>
                  <div className=" mx-5 w-100%">
                    <Button primary 
                     onClick={() => handleAddToCart(book._id)}
                    width="100%">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer/>
      
    </div>
  );
};

export default search;
