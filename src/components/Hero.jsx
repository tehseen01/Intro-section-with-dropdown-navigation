import React from "react";

import makerIcon from "../images/client-maker.svg";
import meetIcon from "../images/client-meet.svg";
import databiz from "../images/client-databiz.svg";
import audiophileIcon from "../images/client-audiophile.svg";
import heroDesktop from "../images/image-hero-desktop.png";
import heroMobile from "../images/image-hero-mobile.png";
const Hero = () => {
  return (
    <main className=" min-[1025px]:w-4/5 m-auto max-sm:w-full">
      <section className="grid grid-cols-2 my-8 max-sm:grid-cols-1 max-sm:my-2">
        <div className="min-[641px]:hidden">
          <img src={heroMobile} alt="" />
        </div>
        <article className="min-[1025px]:pt-32 min-[641px]:pt-20 pl-12 max-sm:pt-6 max-sm:text-center max-sm:pl-0">
          <h1 className="text-7xl font-bold max-sm:text-4xl">
            <span className="block max-sm:inline">Make</span> remote work
          </h1>
          <p className="w-85 my-8 text-lg text-medium-gray max-sm:w-full max-sm:px-3 max-sm:my-3 max-sm:text-base">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="bg-almost-black py-3 px-5 border border-black rounded-lg text-white font-medium hover:bg-white hover:text-almost-black hover:border-almost-black my-8 max-sm:my-3">
            Learn More
          </button>
          <div className="flex justify-between items-center pr-12 max-sm:mt-6 max-sm:pl-2 max-sm:pr-2">
            <img src={databiz} alt="" />
            <img src={audiophileIcon} alt="" />
            <img src={makerIcon} alt="" />
            <img src={meetIcon} alt="" />
          </div>
        </article>

        <article className="max-sm:hidden">
          <img src={heroDesktop} alt="" className="w-3/4 mx-auto mr-12 " />
        </article>
      </section>
    </main>
  );
};

export default Hero;
