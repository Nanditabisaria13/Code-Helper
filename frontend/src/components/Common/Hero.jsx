import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div
      className="bg-[url(./assets/heroimage.jpg)] bg-no-repeat border border-black h-screen bg-cover flex flex-col items-center
                 justify-center cursor-pointer relative"
      id="hero"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#232323]  to-[#2e2b2b] opacity-50"></div>
      <div className="hero-content flex flex-col items-center justify-center gap-4 z-40 p-3 cursor-pointer">
        <p className="text-6xl sm:text-7xl text-center font-bold text-white">
          Your Smart Coding Assistant
        </p>
        <p className="text-xl sm:text-2xl text-center font-normal text-gray-100">
          Automated code reviews, bug detection, optimization, and more
        </p>
        <button className="cta-btn px-3 py-2 bg-white text-black text-xl font-normal rounded-lg cursor-pointer">
          <Link to="features" smooth={true} offset={-10} duration={500}>
            Get Started
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
