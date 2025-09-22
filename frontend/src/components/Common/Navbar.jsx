import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
// import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
  const [showMenu, SetShowMenu] = useState(false);
  // const {openSignIn} = useClerk()
  const navigate = useNavigate()
 
  return (
    <nav className="w-full p-3 fixed top-0 left-0  z-50 bg-[#000] cursor-pointer drop-shadow-md">
      <div className="navbar flex items-start justify-between">
        <div className="logo text-xl text-white font-medium">
          <Link to="/">
            <span className="text-3xl font-bold text-purple-500">C</span>ode
            Helper
          </Link>
        </div>
        <ul className="nav-links hidden md:flex items-center justify-between gap-5">
          <li className="text-xl text-white font-normal hover:text-purple-600">
            <Link to="hero" smooth={true} offset={0} duration={500}>
              Home{" "}
            </Link>
          </li>
          <li className="text-xl text-white font-normal hover:text-purple-600">
            <Link to="features" smooth={true} offset={-80} duration={500}>
              Features
            </Link>
          </li>
          <li className="text-xl text-white font-normal hover:text-purple-600">
            <Link to="about-us" smooth={true} offset={-90} duration={500}>
              About Us{" "}
            </Link>{" "}
          </li>
          <li className="text-xl text-white font-normal hover:text-purple-600">
            <Link to="footer" smooth={true} offset={-260} duration={500}>
              Contact{" "}
            </Link>
          </li>
        </ul>

        <div className="flex items-center justify-between gap-3">
        <i
          className="ri-menu-3-line w-6 text-white text-2xl md:hidden"
          onClick={() => SetShowMenu(true)}
        ></i>
        <div onClick={()=>navigate('/signup')}>
          <button  className='hidden  bg-transparent text-white sm:flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm sm:text-base border border-white rounded-xl hover:bg-white hover:text-black '>
        Get Started 
       </button>
        <i className="ri-login-box-line text-3xl text-neutral-800 dark:text-white block sm:hidden"></i>
     </div>

        </div>
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
