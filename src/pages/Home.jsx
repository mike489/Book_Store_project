import React from "react";
import Footer from "../components/Footer";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-white text-2xl font-semibold">My Bookstore</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search books..."
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2"></button>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-white hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  Books
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#footer" className="text-white hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container ">
        <div className="w-full min-h-screen bg-gradient-to-r from-gray-600 via-gray-500 to-white flex items-center justify-center">
          <div className="flex flex-col items-center justify-center space-y-5 h-full pr-[400px] pb-[300px]">
            <p className="text-teal-50 text-[55px] font-mono">Where your search ends?</p>
            <div className="flex items-start self-start">
              <Button onClick={() => alert("clicked")} primary>Order online</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
