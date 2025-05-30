import React from "react";

const Technologies = () => {
  return (
    <section className="text-white h-auto w-full flex items-center justify-center flex-col bg-black/70 py-10 space-y-6">
      <h2 className="bg-black text-green-300 border-green-300 border-2 rounded px-5 py-3 md:text-2xl lg:text-3xl ">
        Technologies
      </h2>
      <div className="h-full ">
        <div className="border-2 flex flex-wrap justify-center items-center">
          <div className="border-2 border-green-300">React</div>
          <div>Express JS</div>
          <div>Node JS</div>
          <div>Mongo DB</div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;

// use client";

// import React, { useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { FaReact, FaSass } from "react-icons/fa";
// import { TbPolygon } from "react-icons/tb";
// import { SiSolidity, SiTypescript } from "react-icons/si";
// import { IoLogoFigma, IoLogoJavascript } from "react-icons/io5";
// import { DiMongodb } from "react-icons/di";
// import { FaNodeJs, FaAngular } from "react-icons/fa";
// import style from "@/styles/language.module.scss";

// const Languages = () => {
//   const controls = useAnimation();

//   const handleScroll = () => {
//     const scrollY = window.scrollY;
//     const windowHeight = window.innerHeight;

//     // Adjust this threshold based on your preference
//     const triggerPoint = windowHeight * 0.7;

//     if (scrollY > triggerPoint) {
//       controls.start({ rotate: 0, opacity: 1 });
//     } else {
//       controls.start({ rotate: -180, opacity: 0 });
//     }
//   };

//   useEffect(() => {
//     controls.start({ rotate: -180, opacity: 0 });
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   },);

//   return (
//     <motion.div
//       className={style.technology}
//       initial={{ rotate: -180, opacity: 0 }}
//       animate={controls}
//       transition={{duration: .3}}
//     >
//       <h2>TECHNOLOGIES</h2>
//       <div className={style.tech}>
//         <div>
//           <FaReact className={style.icons}  />
//           <p> React</p>
//         </div>
//         <div>
//           <FaAngular className={style.icons}  />
//           <p> Angular</p>
//         </div>
//         <div>
//           <FaNodeJs className={style.icons}  />
//           <p> Node</p>
//         </div>
//         <div>
//           <DiMongodb className={style.icons}  />
//           <p> MongoDB</p>
//         </div>
//         <div>
//           <IoLogoJavascript className={style.icons}  />
//           <p>   Javascript</p>
//         </div>
//         <div>
//           <IoLogoFigma className={style.icons}  />
//           <p>  Figma</p>
//         </div>
//         <div>
//           <FaSass className={style.icons}  />
//           <p> Sass</p>
//         </div>
//         <div>
//           <SiTypescript className={style.icons}  />
//           <p> Typescript</p>
//         </div>
//         <div>
//           <SiSolidity className={style.icons}  />
//           <p>  Solidity</p>
//         </div>
//         <div>
//           <TbPolygon className={style.icons}  />
//           <p> Polygon</p>
//         </div>
//       </div>
//     </motion.div>
//   );
// }; 