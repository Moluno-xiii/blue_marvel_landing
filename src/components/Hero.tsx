// import { useState } from "react";

export default function Hero() {
  // const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="flex flex-col">
      <div className="relative h-[450px]">
        <img
          className="bg h-full w-full bg-cover"
          src="/hero1.jpg"
          alt="hero-image"
        />
        <div className="absolute left-10 top-1/4 flex flex-col gap-y-5 font-bold text-white md:left-[100px]">
          <span className="text-lg md:text-2xl">Volume 31 | October 2024</span>
          <span className="text-3xl md:text-6xl">Technology Radar</span>
          <span className="text-2l">
            An opinionated guide to today's technology landscape
          </span>
          <button className="self-start bg-tertiary p-3 text-xl transition duration-300 hover:bg-opacity-75 md:p-5">
            Explore the latest edition
          </button>
        </div>
      </div>
    </div>
  );
}
