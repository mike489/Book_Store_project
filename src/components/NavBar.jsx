
import { FaSearch, FaRegUserCircle } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from "react-router-dom";
import {  useSelector } from 'react-redux';
const NavBar = () => {
  const total= useSelector ((state)=>state.cart.totalPrice)
  const formattedTotalPrice = `$${total.toFixed(2)}`;
  return (
    <nav className="bg-white sticky top-0 shadow-sm z-50">
      <div className="container mx-auto flex items-center justify-between gap-10 py-4">
        <div className="pl-[50px] flex justify-center items-center gap-10">
          {" "}
          {/* Reduced left padding */}
          <button className="text-black">
            <BiMenuAltLeft size={32} />
          </button>
          <div className="text-lg font-bold text-black">
            <span>Logo</span>
          </div>
        </div>
        <div className="relative  w-full flex items-center flex-auto ">
          {/* <div className="relative flex items-center"> */}
          <FaSearch size={16} className=" absolute left-3 text-gray-600" />
          <input
            type="text"
            className="bg-[#F6F6F6] flex flex-auto text-[18px] font-normal text-black py-2 pl-10 pr-3  focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Search books..."
          />
          {/* </div> */}
        </div>

        <div className="flex items-center mr-[100px] gap-10">
          <div className="mr-2">
           <Link to="/Login"> <button className="flex gap-3 justify-between items-center ">
              <FaRegUserCircle size={20} />
              SignIn
            </button></Link>
          </div>
          <button className=" flex gap-3 justify-center items-center">
            <CiHeart size={20} className="flex gap-2" />
            Wishlist
          </button>
          <Link to="/cart">
          <button className="flex  gap-3 justify-center items-center">
            <AiOutlineShoppingCart className="flex  gap-2" />
            {formattedTotalPrice}
          </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
