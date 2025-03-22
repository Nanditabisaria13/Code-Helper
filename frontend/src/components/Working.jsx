import React from "react";
import { assets } from "../assets/assets";

const Working = () => {
  return (
    <section id="how-it-works" className="cursor-pointer">
      <div className="max-w-7xl mx-auto text-center flex flex-col gap-10">
        <p className="text-7xl text-white font-bold">How It Works</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div
            className="bg-transparent p-6 rounded-lg drop-shadow-md border border-[#535353] hover:scale-105 transition-all duration-300 
    flex flex-col justify-between"
          >
            <p className="text-xl text-purple-400 font-semibold mb-4">
              1. Paste Your Code
            </p>
            <p className="text-lg text-white font-normal">
              Simply paste your code into our platform.
            </p>
            <div className="flex justify-center mb-4">
              <img
                src={assets.pasteCode}
                className="w-20 h-20 rounded-full"
                alt=""
              />
            </div>
          </div>
          <div
            className="bg-transparent p-6 rounded-lg drop-shadow-md border border-[#535353] hover:scale-105 transition-all duration-300
     flex flex-col justify-between"
          >
            <p className="text-xl  text-purple-400  font-semibold mb-4">
              2. Select Features
            </p>
            <p className="text-lg text-white font-normal">
              Choose the features you want to use (e.g., review, refactor,
              optimize).
            </p>
            <div className="flex justify-center mb-4">
              <img
                src={assets.choseFeature}
                className="w-20 h-20 rounded-full"
                alt=""
              />
            </div>
          </div>
          <div
            className="bg-transparent p-6 rounded-lg drop-shadow-md border border-[#535353] hover:scale-105 transition-all duration-300
     flex flex-col justify-between"
          >
            <p className="text-xl  text-purple-400  font-semibold mb-4">
              3. Get Results
            </p>
            <p className="text-lg text-white font-normal">
              Receive optimized code, bug fixes, or documentation instantly.
            </p>
            <div className="flex justify-center mb-4">
              <img
                src={assets.getResult}
                className="w-20 h-20 rounded-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Working;
