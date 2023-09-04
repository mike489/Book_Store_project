// import React from "react";
// import BlockHero from "../../assets/block-hero-carousel-1-pattern.cefc31e.jpg";
// import HeroImg from "../../assets/img1-12.png";
// import Button from "../Button";

// const Hero = () => {
//   return (
//     <main
//       style={{
//         backgroundImage: ` url(${BlockHero})`,
//         backgroundPosition: "center",
//         width: "100%",
//         minHeight: "600px",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         position: "relative",
//       }}
//     >
//       <div className="absolute top-1/4 left-0 p-10 md:left-20 flex flex-col md:flex-row items-center justify-center md:justify-between ">
//         <div className="flex flex-col items-center justify-between space-y-5 h-full ">
//           <p className="text-teal-800 text-[50px] font-bold">
//             Where your search ends?
//           </p>
//           <div className="flex items-start self-start">
//             <Button onClick={() => alert("clicked")} primary>
//               Order online
//             </Button>
//           </div>
//         </div>
//         <img src={HeroImg} alt="" className="h-64 pl-0 md:pl-20" />
//       </div>
//     </main>
//   );
// };

// export default Hero;

import React from "react";
import BlockHero from "../../assets/block-hero-carousel-1-pattern.cefc31e.jpg";
import HeroImg from "../../assets/img1-12.png";
import Button from "../Button";

const Hero = () => {
  return (
    <main
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BlockHero})` }}
    >
      <div className="container mx-auto relative min-h-screen flex flex-col md:flex-row items-center justify-center p-5 md:p-10">
        <div className="flex flex-col items-center justify-center text-center md:text-left md:space-y-5 md:w-1/2">
          <p className="text-teal-800 text-4xl md:text-5xl font-bold">
            Where Your Search Ends
          </p>
          <div className="mt-5">
            <Button onClick={() => alert("clicked")} primary>
              Order Online
            </Button>
          </div>
        </div>
        <img src={HeroImg} alt="" className="h-64 mt-10 md:mt-0 md:ml-10" />
      </div>
    </main>
  );
};

export default Hero;
