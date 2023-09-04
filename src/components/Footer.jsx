// import React from "react";
// import { BiPhone, BiMap } from "react-icons/bi";
// import { AiOutlineMail } from "react-icons/ai";
// import Button from "./Button";
// import { Link } from "react-router-dom";
// const Footer = () => {
//   return (
//     <div>
//       <footer className="bg-white py-4 mt-8 text-black pl-10 font-primary">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
//           <div className="flex flex-col items-start space-y-5">
//             <p className="font-bold">Contact</p>
//             <ul>
//               <li>
//                 <div className="flex items-center">
//                   <BiMap />
//                   <Link href="#">221 B Santa Monica, Los Angeles</Link>
//                 </div>
//               </li>
//               <li>
//                 <div className="flex items-center">
//                   <BiPhone />
//                   <Link href="#">+923234122</Link>
//                 </div>
//               </li>
//               <li>
//                 <div className="flex items-center">
//                   <AiOutlineMail />
//                   <Link href="#">contact@tanahairstudio.com</Link>
//                 </div>
//               </li>
//             </ul>
//           </div>
//           <div className="flex flex-col items-start space-y-5">
//             <p className="font-bold">Company</p>
//             <ul>
//               <li>
//                 <Link href="#">About Us</Link>
//               </li>
//               <li>
//                 <Link href="#">Contact Us</Link>
//               </li>
//               <li>
//                 <Link href="#">Privacy & Poilicy</Link>
//               </li>
//               <li>
//                 <Link href="#">Payment Method</Link>
//               </li>
//             </ul>
//           </div>
//           <div className="flex flex-col items-start space-y-3 w-full">
//             <h1 className="font-bold">Join Our Newsletter</h1>
//             <p className="text-gray-400 "> Your Email </p>

//             <input
//               className="px-4 py-2  rounded-lg border border-gray-300 focus:outline-none "
//               type="text"
//               placeholder="Enter Your Email"
//             />

//             <Button onClick={() => alert("clicked")} primary>
//               Subscribe
//             </Button>
//           </div>
//         </div>
//         <div className="text-gray-400">
//           &copy; {new Date().getFullYear()} My Bookstore. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import { BiPhone, BiMap } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import Button from "./Button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white py-4 mt-8 text-black pl-4 md:pl-10 font-primary">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-start space-y-5">
            <p className="font-bold">Contact</p>
            <ul>
              <li>
                <div className="flex items-center">
                  <BiMap />
                  <Link to="#">221 B Santa Monica, Los Angeles</Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <BiPhone />
                  <Link to="#">+923234122</Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <AiOutlineMail />
                  <Link to="#">contact@tanahairstudio.com</Link>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start space-y-5">
            <p className="font-bold">Company</p>
            <ul>
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">Contact Us</Link>
              </li>
              <li>
                <Link to="#">Privacy & Policy</Link>
              </li>
              <li>
                <Link to="#">Payment Method</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start space-y-3 w-full">
            <h1 className="font-bold">Join Our Newsletter</h1>
            <p className="text-gray-400">Your Email</p>
            <div className="flex flex-col items-start">
              <input
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
                type="text"
                placeholder="Enter Your Email"
              />
              <Button
                onClick={() => alert("clicked")}
                primary
                className={"mt-5"}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="text-gray-400 text-center mt-4">
          &copy; {new Date().getFullYear()} My Bookstore. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
