"use client";
import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-16 text-white">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        {/* LEFT SIDE */}
        <div className="max-w-2xl text-center md:text-left space-y-4">
          <p className="bg-green-800 bg-opacity-30 text-green-400 px-4 py-2 inline-block rounded-md text-sm font-mono tracking-wider">
            👋🏼 Hi There!! I'm Monster Programming
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            A <span className="text-green-400">Frontend Engineer</span>. I Help
            Startups
            <span className="text-green-400"> Launch And Grow</span> Their
            Products.
          </h1>

          <p className="text-gray-300 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo enim
            nobis ad laboriosam sit architecto corporis nostrum. Iusto fugiat
            dolorem reprehenderit veritatis aliquid. Recusandae provident
            consequatur totam repellendus fugiat magnam.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="mt-10 md:mt-0 md:ml-10">
          <Image
            src="/home.png"
            alt="Hero Illustration"
            width={800} 
            height={800} 
            priority
          />
        </div>
      </div>
    </section>
  );
}