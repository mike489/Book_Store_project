import React from "react";
import { BiPhone, BiMap } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import Button from "./Button";
const Footer = () => {
  return (
    <div className="">
      <footer className="bg-white py-4 mt-8 text-black pl-10 font-mono">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          <div className="flex flex-col items-start space-y-5">
            <p className="font-bold">Contact</p>
            <ul>
              <li>
                <div className="flex items-center">
                  <BiMap />
                  <a href="#">221 B Santa Monica, Los Angeles</a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <BiPhone />
                  <a href="#">+923234122</a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <AiOutlineMail />
                  <a href="#">contact@tanahairstudio.com</a>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start space-y-5">
            <p className="font-bold">Company</p>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Privacy & Poilicy</a>
              </li>
              <li>
                <a href="#">Payment Method</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start space-y-3 w-full">
            <h1 className="font-bold">Join Our Newsletter</h1>
            <p className="text-gray-400 "> Your Email </p>

            <input
              className="px-4 py-2  rounded-lg border border-gray-300 focus:outline-none "
              type="text"
              placeholder="Enter Your Email"
            />
            {/* <button className="text-white font-medium p-2 px-5 rounded-md bg-[#237943]">
              Subscribe
            </button> */}
            <Button onClick={() => alert("clicked")} primary>
              Subscribe
            </Button>
          </div>
        </div>
        <div className="text-gray-400">
          &copy; {new Date().getFullYear()} My Bookstore. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
