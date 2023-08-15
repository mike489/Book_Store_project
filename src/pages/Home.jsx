import React from "react";
import Footer from "../components/Footer";

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
                <a href="#" className="text-white hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto mt-8">
        {/* ... rest of the content ... */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
