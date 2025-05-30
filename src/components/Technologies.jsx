import React from "react";

const Technologies = () => {
  return (
    <section className="text-white h-auto w-full flex items-center justify-center flex-col bg-black/70 py-10 space-y-6">
      <div className="bg-black text-green-300 border-green-300 border-2 rounded px-5 py-3 md:text-2xl lg:text-3xl ">
        Technologies
      </div>
      <div className="flex flex-wrap">
        <div>React</div>
        <div>Express JS</div>
        <div>Node JS</div>
        <div>Mongo DB</div>
      </div>
    </section>
  );
};

export default Technologies;
