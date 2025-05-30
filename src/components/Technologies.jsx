import React from "react";

const Technologies = () => {
  return (
    <section className="text-white h-auto w-full flex items-center justify-center flex-col bg-black/70 py-10 space-y-6">
      <h2 className="bg-black text-green-300 border-green-300 border-2 rounded px-5 py-3 md:text-2xl lg:text-3xl ">
        Technologies
      </h2>
      <div className="border-2 flex flex-wrap justify-center items-center">
        <div className="border-2 border-green-300">React</div>
        <div>Express JS</div>
        <div>Node JS</div>
        <div>Mongo DB</div>
      </div>
    </section>
  );
};

export default Technologies;

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
//       </div>
//     </motion.div>
//   );
// };
