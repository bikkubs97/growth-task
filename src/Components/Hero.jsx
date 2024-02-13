import React from "react";

export default function Hero() {
  return (
    <div className="md:mx-28 md:flex">
      <img src="./images/image-hero-mobile.png" className="md:hidden"/>
      <div className="md:ml-24 text-center md:text-left">
        <h1 className="font-extrabold text-6xl mt-24">
          Make
          <br />
          remote work
        </h1>
        <p className="mt-14 text-medium-gray font-semibold p-5 md:p-0 md:w-3/4 ">
          Get your team is sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="mt-14 bg-almost-black text-white font-semibold text-xl p-4 px-8 rounded-2xl hover:animate-bounce">
          Learn More
        </button>
        <div className="flex gap-6 mt-24 md:pr-36 justify-center md:justify-normal mb-24 md:mb-0">
          <img src="./images/client-databiz.svg " className="h-5 hover:animate-pulse hover:cursor-pointer" />
          <img src="./images/client-audiophile.svg" className="h-5 hover:animate-pulse hover:cursor-pointer"/>
          <img src="./images/client-meet.svg"className="h-5 hover:animate-pulse hover:cursor-pointer" />
          <img src="./images/client-maker.svg"className="h-5 hover:animate-pulse hover:cursor-pointer" />
        </div>
      </div>
      <img src="./images/image-hero-desktop.png" className="w-[40%] md:block hidden" />
    </div>
  );
}
