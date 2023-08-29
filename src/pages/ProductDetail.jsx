import React, { useState } from 'react';
import NavBar from "../components/NavBar";
import Nav2 from "../components/Nav2";
import BookCard from '../components/BookCard';
import Footer from '../components/Footer';


export default function ProductDetail() {
  const [number, setNumber] = useState(1);
  const [activeSection, setActiveSection] = useState('Description'); // Default active section
  const toggleSection = (section) => {
    setActiveSection(section);
  };
  

  return (
    <div className=''>
      <NavBar/>
      <Nav2/>
  
    <div className="product-detail pl-20 pt-20">
      
      <div className="product-upper flex gap-2">
        <img
          src="https://th.bing.com/th/id/OIP.E4PmFhr75cB9b1ZbhsF5pwHaLM?pid=ImgDet&rs=1"
          alt=""
          className="w-520 h-605 "
        />
        <div className="buttons flex flex-col gap-4 w-1/2 m-20">
          <div className="min-buttons flex flex-col gap-7">
            <h1 className="text-4xl font-bold">Simple way of piece life</h1>
            <div className="flex items-center gap-2">
              <span className="text-red-500 font-semibold line-through text-2xl ">-15%</span>
              <span className="font-semibold text-2xl">15 Birr</span>
            </div>
            <b className="text-green-700 text-3xl">300 Birr</b>
          </div>
          <div className="cart-controller flex items-center gap-4 w-40 h-16 bg-gray-50 rounded-md">
            <button
              onClick={() => setNumber(Math.max(number - 1, 1))}
              className="w-16 h-16 bg-gray-300 text-2xl rounded"
            >
              -
            </button>
            <h4 className="text-xl font-bold">{number}</h4>
            <button onClick={() => setNumber(number + 1)}
              className="w-16 h-16 bg-green-300 text-2xl rounded"
            >
              +
            </button>
          </div>
          <div className="main-buttons flex flex-col justify-start w-608">
            <button variant="contained" className="w-full h-16 text-xl font-bold bg-green-500">
              Add to cart
              
            </button>
            <button variant="outlined" className="w-full h-16 text-green-500 border-2 border-green-500 mt-4">
              Save
            </button>
          </div>
          <p className="text-xs text-gray-400">$10.00 cart minimum to order</p>
        </div>
      </div>




      <div className="bottom-buttons p-4 w-1/3 border rounded border-gray-300">
        <div className=" product-bottom flex gap-4"></div>
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
      <div className="bottom-content flex-1 p-4 text-gray-600 text-sm">
        {activeSection === 'description' && (
          <p>
            {/* Description content */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur consequuntur adipisci amet debitis odit iste eum molestias repell
            at, facilis eos tenetur aliquam! Nulla, rem possimus praesentium ducimus porro omnis. atibus illum aperiam sunt a, delenitssssssi dolore tempore, dolorem laborum aut non.
          </p>
        )}
        {activeSection === 'nutritional' && (
          <p>
            {/* Nutritional Facts content */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestias animi saepe ea voluptates. Eligendi modi consequ
            untur sed eos assumenda! Repellendus corporis ea quibusdam. Ipsa ducimus vitae voluptate suscipit sunt. atibus illum aperiam sunt a, deleniti dolore  aaaatempore, dolorem laborum aut non.
          </p>
        )}
        {activeSection === 'features' && (
          <p>
            atibus illum aperiam sunt a, deleniti dolore tempore, dolorem laborum aut non.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, a voluptatibus. Delectus aperiam culpa tenetur deleniti necessitatibus 
            repellendus architecto minus ab maiores officia id, a eius, reprehenderit dolorum repudiandae quia!
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
      
      
      <BookCard/>
     
    </div>
    <Footer/>
    </div>
    
  );
}