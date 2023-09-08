import React, { useState, useEffect } from 'react';
import NavBar from "../components/NavBar";
import Nav2 from "../components/Nav2";
import BookCard from '../components/BookCard';
import Footer from '../components/Footer';
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/Cart/cartSlice";
import { Link, useParams } from 'react-router-dom';

export default function ProductDetail() {
  const [number, setNumber] = useState(1);
  const [activeSection, setActiveSection] = useState('Description'); // Default active section.
  const toggleSection = (section) => {
    setActiveSection(section);
  };
  const dispatch = useDispatch();
  const books = useSelector((state) => state.cart.books);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.totalPrice);
  const { id } = useParams();


  const specificBook = books.find((book) => book.id === parseInt(id));

  // Maintain a state for the cart count of each product
  const [productCounts, setProductCounts] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  if (!specificBook) {
    // Handle the case where the book with the specified ID is not found
    return (
      <div>
        <NavBar />
        <p>Book not found</p>
      </div>
    );
  }

  const handleAddToCart = (bookId) => {
    dispatch(addToCart(bookId));
    
    // Increment the cart count for the specific product
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [bookId]: (prevCounts[bookId] || 0) + 1,
    }));
  };

  return (
    <div className=''>
      <NavBar />
      <Nav2 />
      <div className="product-detail">
        <div className="product-upper flex mx-auto md:pl-40 ">
          <img src={specificBook.imageSrc} alt="" className="w-2/5 " />
          <div className="buttons flex flex-col gap-4 w-1/2 md:m-20 md:pr-20">
            <div className="min-buttons flex flex-col gap-7 pb-16">
              <h1 className="text-5xl font-bold">{specificBook.name}</h1>
              <div className="flex items-center gap-2 ">
                <span className="text-red-500 font-semibold line-through text-2xl bg-red-50 ">-15%</span>
                <span className="font-semibold text-2xl"> 15 off</span>
              </div>
              <b className="text-green-700 text-3xl ">{specificBook.price} dollar</b>
            </div>
            <div className="cart-controller flex items-center gap-4 w-40 h-16 bg-gray-50 rounded-md pb-10 ">
              <button
                onClick={() => {
                  const newNumber = Math.max(number - 1, 1);
                  setNumber(newNumber);
                  if (newNumber === 1) {
                    // Reset cart count for the specific product to 0
                    setProductCounts((prevCounts) => ({
                      ...prevCounts,
                      [specificBook.id]: 0,
                    }));
                  }
                }}
                className="w-16 h-16 bg-gray-300 text-2xl rounded"
              >
                -
              </button>
              <h4 className="text-xl font-bold">{number}</h4>
              <button
                onClick={() => {
                  setNumber(number + 1);
                  // Increment the cart count for the specific product
                  setProductCounts((prevCounts) => ({
                    ...prevCounts,
                    [specificBook.id]: (prevCounts[specificBook.id] || 0) + 1,
                  }));
                }}
                className="w-16 h-16 bg-green-300 text-2xl rounded"
              >
                +
              </button>
            </div>
            <div className="main-buttons flex flex-col justify-start w-100">
              <button
                variant="contained"
                className="w-4/5 h-16 text-xl font-bold bg-[#237943] text-white hover:text-black transition-colors duration-300 rounded-lg"
                onClick={() => handleAddToCart(specificBook.id)}
              >
                Add to Cart
              </button>
              <button
                variant="outlined"
                className="w-4/5 h-16 text-green-500 border-2 border-green-500 mt-4 hover:text-black hover:bg-gray-100 border-green-600 transition-colors duration-300 rounded-lg"
              >
                Save
              </button>
            </div>
            <p className="text-xl text-gray-400 ">$10.00 cart minimum to order</p>
          </div>
        </div>



    <div className="flex md:ml-40  pb-20 gap-5" >
      <div className="bottom-buttons md:p-10  w-1/3 font-bold border rounded border-gray-300 text-center relative">
        <div className=" product-bottom flex gap-15 "></div>
        <button onClick={() => toggleSection('description')} className="mb-2 text-lg font-bold text-gray-800">
          Description
        </button>
        <hr className="my-2 border-t border-gray-400" />
        <button onClick={() => toggleSection('nutritional')} className="mb-2 text-lg  text-gray-800">
          Nutritional Facts
        </button>
        <hr className="my-2 border-t border-gray-400" />
        <button onClick={() => toggleSection('features')} className="mb-2 text-lg  text-gray-800">
          Features
        </button>
        <hr className="my-2 border-t border-gray-400" />
        <button onClick={() => toggleSection('producers')} className="mb-2 text-lg  text-gray-800">
          Producers
        </button>
       </div>
       <div className="bottom-content flex text-gray-600 text-lg  w-3/5 ">
        {activeSection === 'description' && (
          <p>
            {/* Description content */}
            The "Simple Way of Peaceful Life" describes a straightforward and uncomplicated approach to living that emphasizes the pursuit of inner peace and harmony. It involves simplifying one's daily routines, reducing stressors, and cultivating a serene and contented existence.
            <br/> This way of life encourages mindfulness, gratitude, and a deep appreciation for the little things that bring joy and tranquility. By adhering to a simple and peaceful lifestyle, individuals can often experience a heightened sense of well-being and fulfillment.

Please clarify if you intended a different interpretation or if you have specific context in mind for this phrase.
          </p>
        )}
        {activeSection === 'nutritional' && (
          <p>
            {/* Nutritional Facts content */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestias animi saepe ea voluptates. Eligendi modi consequ
            untur sed eos assumenda! Repellendu<br/>s corporis ea quibusdam. Ipsa ducimus vitae voluptate suscipit sunt. atibus illum aperiam sunt a, deleniti dolore  aaaatempore, dolorem laborum aut non.
          </p>
        )}
        {activeSection === 'features' && (
          <p>
            atibus illum aperiam sunt a, deleniti dolore tempore, dolorem laborum aut non.
            Lorem ipsum dolor sit, amet consecbteLorem ipsum dolor sit amet consectetur adipisicing elit.Aliquid pariatur consequuntur adipisci amet debitis odit iste eum molestias repell
            at, facilis eos te Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur consequuntur adipisci amet debitis odit iste eum molestias repell
            at, facilis eos tm dolor sit amet consectetur adipisicing elit.Aliquid pariatur consequuntur adipisci amet debitis odit iste eum molestias repell
            fficia id, a eius, reprehenderit dolorum repudiandae quia!
            {/* Features content */} ssssss
          </p>
        )}
        {activeSection === 'producers' && (
          <p>
            
        atibus illum aperiam sunt a, deleniti dolore tempore, dolorem laborum aut non.
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis culpa nostrum illum numquam expedita corporis d
       oloribus saepe amet animi. Velit placeat doloribus cum magni, voluptas voluptate! Facere commodi cupiditate odio!
          </p>
        )}
        
       </div>
       </div>
       <div className="flex justify-between items-center pb-3 ml-20 mr-20 mt-10 font-primary">
      <p className="font-bold text-[20px] font-mono">Featured Items</p>
      <Link
        to="/Search" // Replace with the actual route you want to link to
        className="transform transition-transform cursor-pointer"
      >
        Show All
      </Link>
    </div>
       <div className=" col-span-1 lg:col-span-4 w-full mt-[30px] mb-[50px]   ">
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
        <div className="flex justify-between items-center pb-3 ml-20 mr-20 mt-10 font-primary">
      <p className="font-bold text-[20px] font-mono">People also Search</p>
      <Link
        to="/Search" // Replace with the actual route you want to link to
        className="transform transition-transform cursor-pointer"
      >
        Show All
      </Link>
    </div>
       <div className=" col-span-1 lg:col-span-4 w-full mt-30 mb-50  ">
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
      <div className="mt-20">
        <Footer />
      </div>
     </div>
    
  );
}