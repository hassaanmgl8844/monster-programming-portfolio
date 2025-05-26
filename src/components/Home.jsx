"use client";
import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-16 text-white">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        {/* LEFT SIDE */}
        <div className="max-w-xl text-center md:text-left mt-10 md:mt-0">
          <p className="bg-green-800 text-sm px-4 py-2 rounded-md w-fit mx-auto md:mx-0 mb-4">
            👋🏼 Hi There!! I’m Monster Programming
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

        <div className="mt-10 md:mt-0 w-full flex justify-center md:justify-end">
          <Image
            src="/home.png"
            alt="Hero Illustration"
            width={1000}
            height={1000}
            priority
            className="w-full max-w-[800px]"
          />
        </div>
      </div>
    </section>
  );
}
