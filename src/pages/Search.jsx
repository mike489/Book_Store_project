import React from "react";
import book16 from '../assets/book16 2.png';

const search = () => {
  return (
    <div className=" bg-white">
      <div className=" grid grid-cols-6 bg-white  m-[50px] gap-2 ">
        <div className=" col-span-2 w-full border-[1px]  bg-white">
          <div>
            <div className=" flex justify-between items-center mx-3 mb-3">
              Departments <span className=" mr-3">A</span>
            </div>
            <div className="flex flex-col gap-3 ml-3 bg-white">
            
              <div className="inline-flex items-center space-x-4">
                <input
                  type="checkbox"
                  className="h-3 w-3 align-top rounded-sm appearance-none border-2 border-green-500 checked:bg-transparent  focus:outline-none focus:border-green-600"
                />
                <span className="text-gray-700 text-[16px]">Fruit & Vegitable</span>
              </div>
              <div className="inline-flex items-center space-x-4">
                <input
                  type="checkbox"
                  className="h-3 w-3 align-top  appearance-none border-2 border-green-500 checked:bg-transparent  focus:outline-none focus:border-green-600"
                />
                <span className="text-gray-700 text-[16px]">Pantry</span>
              </div>
              <div className="inline-flex items-center space-x-4">
                <input
                  type="checkbox"
                  className="h-3 w-3 align-top  appearance-none border-2 border-green-500 checked:bg-transparent  focus:outline-none focus:border-green-600"
                />
                <span className="text-gray-700 text-[16px]">Organic Shop</span>
              </div>
              <div className="inline-flex items-center space-x-4">
                <input
                  type="checkbox"
                  className="h-3 w-3 align-top  appearance-none border-2 border-green-500 checked:bg-transparent  focus:outline-none focus:border-green-600"
                />
                <span className="text-gray-700 text-[16px]">Health Snack</span>
              </div>
              <div className="inline-flex items-center space-x-4">
                <input
                  type="checkbox"
                  className="h-3 w-3 align-top  appearance-none border-2 border-green-500 checked:bg-transparent  focus:outline-none focus:border-green-600"
                />
                <span className="text-gray-700 text-[16px]">Kichine & Food Staff</span>
              </div>
              <div className="inline-flex items-center space-x-4">
                <input
                  type="checkbox"
                  className="h-3 w-3 align-top  appearance-none border-2 border-green-500 checked:bg-transparent  focus:outline-none focus:border-green-600"
                />
                <span className="text-gray-700 text-[16px]">Fruit & Vegitable</span>
              </div>
              <div className=" border-b-2 border-emerald-100 mr-6 mb-3"></div>
            </div>
          </div>
          <div>
            <div className=" flex justify-between items-center mx-3 mb-3">
              Departments <span className=" mr-3">A</span>
            </div>
            <div className="flex flex-col gap-3 ml-3 bg-white">
            
              <div className="inline-flex items-center space-x-4">
                <input
                  type="checkbox"
                  className="h-3 w-3 align-top rounded-sm appearance-none border-2 border-green-500 checked:bg-transparent  focus:outline-none focus:border-green-600"
                />
                <span className="text-gray-700 text-[16px]">Fruit & Vegitable</span>
              </div>
              <div className="inline-flex items-center space-x-4">
                <input
                  type="checkbox"
                  className="h-3 w-3 align-top  appearance-none border-2 border-green-500 checked:bg-transparent  focus:outline-none focus:border-green-600"
                />
                <span className="text-gray-700 text-[16px]">Pantry</span>
              </div>
              <div className="inline-flex items-center space-x-4">
                <input
                  type="checkbox"
                  className="h-3 w-3 align-top  appearance-none border-2 border-green-500 checked:bg-transparent  focus:outline-none focus:border-green-600"
                />
                <span className="text-gray-700 text-[16px]">Organic Shop</span>
              </div>
              <div className="inline-flex items-center space-x-4">
                <input
                  type="checkbox"
                  className="h-3 w-3 align-top  appearance-none border-2 border-green-500 checked:bg-transparent  focus:outline-none focus:border-green-600"
                />
                <span className="text-gray-700 text-[16px]">Health Snack</span>
              </div>
              <div className="inline-flex items-center space-x-4">
                <input
                  type="checkbox"
                  className="h-3 w-3 align-top  appearance-none border-2 border-green-500 checked:bg-transparent  focus:outline-none focus:border-green-600"
                />
                <span className="text-gray-700 text-[16px]">Kichine & Food Staff</span>
              </div>
              <div className="inline-flex items-center space-x-4">
                <input
                  type="checkbox"
                  className="h-3 w-3 align-top  appearance-none border-2 border-green-500 checked:bg-transparent  focus:outline-none focus:border-green-600"
                />
                <span className="text-gray-700 text-[16px]">Fruit & Vegitable</span>
              </div>
              <div className=" border-b-2 border-emerald-100 mr-6 mb-3"></div>
            </div>
          </div>
        </div>
        <div className=" col-span-4 w-full   ">
          <div className=" flex gap-2  flex-wrap ml-3">
            <div>
              <div>
                <img src={book16} alt=""  className="object-cover object-center h-[280px] w-[180px]"/>
              </div>
              <div className=" text-[18px] font-bold text-[#237943] ml-3 flex flex-col gap-[2px]">
                $4.89
                <span className=" text-[16px] font-semibold text-[#29292E]"> Cavendish Banana </span>
              </div>
              <div className=" bg-[#237943] w-full text-white mx-3 rounded-md  text-center px-1 py-2">
                 Add To Cart 
              </div>
            </div>
            <div>
              <div>
                <img src={book16} alt=""  className="object-cover object-center h-[280px] w-[180px]"/>
              </div>
              <div className=" text-[18px] font-bold text-[#237943] ml-3 flex flex-col gap-[2px]">
                $4.89
                <span className=" text-[16px] font-semibold text-[#29292E]"> Cavendish Banana </span>
              </div>
              <div className=" bg-[#237943] w-full text-white mx-3 rounded-md text-center px-1 py-2">
                 Add To Cart 
              </div>
            </div>
            <div>
              <div>
                <img src={book16} alt=""  className="object-cover object-center  h-[280px] w-[180px]"/>
              </div>
              <div className=" text-[18px] font-bold text-[#237943] ml-3 flex flex-col gap-[2px]">
                $4.89
                <span className=" text-[16px] font-semibold text-[#29292E]"> Cavendish Banana </span>
              </div>
              <div className=" bg-[#237943] w- text-white mx-3 rounded-md  text-center px-1 py-2">
                 Add To Cart 
              </div>
            </div>
            <div>
              <div>
                <img src={book16} alt=""  className="object-cover object-center h-[280px] w-[180px]"/>
              </div>
              <div className=" text-[18px] font-bold text-[#237943] ml-3 flex flex-col gap-[2px]">
                $4.89
                <span className=" text-[16px] font-semibold text-[#29292E]"> Cavendish Banana </span>
              </div>
              <div className=" bg-[#237943] w-full text-white mx-3 rounded-md text-center px-1 py-2">
                 Add To Cart 
              </div>
            </div>
            <div>
              <div>
                <img src={book16} alt=""  className="object-cover object-center h-[280px] w-[180px]"/>
              </div>
              <div className=" text-[18px] font-bold text-[#237943] ml-3 flex flex-col gap-[2px]">
                $4.89
                <span className=" text-[16px] font-semibold text-[#29292E]"> Cavendish Banana </span>
              </div>
              <div className=" bg-[#237943] w-[170px] text-white mx-3 rounded-md  text-center px-1 py-2">
                 Add To Cart 
              </div>
            </div>
           
            
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default search;
