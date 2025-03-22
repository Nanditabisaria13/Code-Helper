import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showMenu, SetShowMenu] = useState(false);

  return (
    <nav className="w-full p-3 sticky top-0 left-0 -mt-2 z-50 bg-[#000] cursor-pointer drop-shadow-md">
      <div className="navbar flex items-start justify-between">
        <div className="logo text-xl text-white font-medium">
          <Link to="/">
            <span className="text-3xl font-bold text-purple-500">C</span>ode
            Helper
          </Link>
        </div>
        <ul className="nav-links hidden md:flex items-center justify-between gap-5">
          <li className="text-lg text-white font-normal hover:text-purple-600">
            <Link to="hero" smooth={true} offset={0} duration={500}>
              Home{" "}
            </Link>
          </li>
          <li className="text-lg text-white font-normal hover:text-purple-600">
            <Link to="features" smooth={true} offset={-80} duration={500}>
              Features
            </Link>
          </li>
          <li className="text-lg text-white font-normal hover:text-purple-600">
            <Link to="about-us" smooth={true} offset={-90} duration={500}>
              About Us{" "}
            </Link>{" "}
          </li>
          <li className="text-lg text-white font-normal hover:text-purple-600">
            <Link to="footer" smooth={true} offset={-260} duration={500}>
              Contact{" "}
            </Link>
          </li>
        </ul>
        <i
          className="ri-menu-3-line w-6 text-white text-2xl md:hidden"
          onClick={() => SetShowMenu(true)}
        ></i>
      </div>

      {/* mobile menu */}
      <div
        className={`${showMenu ? "block" : "hidden"} 
           fixed -right-0 top-0 bottom-0 z-50 overflow-hidden bg-white transition-all duration-300 h-screen w-72`}
      >
        <div className="flex items-center justify-between px-5 py-6">
          <i
            className="ri-close-large-line w-7"
            onClick={() => SetShowMenu(false)}
          ></i>
        </div>
        <ul className="nav-links flex flex-col  items-center justify-between gap-5">
          <li className="text-2xl text-black font-semibold hover:text-purple-600">
            <Link to="hero" smooth={true} offset={0} duration={500}>
              Home{" "}
            </Link>
          </li>
          <li className="text-2xl text-black font-semibold hover:text-purple-600">
            <Link to="features" smooth={true} offset={-80} duration={500}>
              Features
            </Link>
          </li>
          <li className="text-2xl text-black font-semibold hover:text-purple-600">
            <Link to="about-us" smooth={true} offset={-90} duration={500}>
              About Us{" "}
            </Link>{" "}
          </li>
          <li className="text-2xl text-black font-semibold hover:text-purple-600">
            <Link to="footer" smooth={true} offset={-260} duration={500}>
              Contact{" "}
            </Link>
          </li>
        </ul>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
