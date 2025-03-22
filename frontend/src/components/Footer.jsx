import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer
      className="bg-white px-2  py-3 cursor-pointer rounded-lg"
      id="footer"
    >
      <h1 className="text-2xl px-2 font-semibold mb-6 ">
        <span className="text-4xl text-purple-500 font-bold">C</span>ode Helper
      </h1>
      <div className="px-8 mb-2">
        <div className="flex flex-col gap-3 md:flex-row items-center justify-between ">
          <div className="flex flex-col justify-center list-none">
            <li className="text-black font-medium text-base hover:text-purple-900">
              <Link to="hero" smooth={true} offset={0} duration={500}>
                Home{" "}
              </Link>
            </li>
            <li className="text-black font-medium text-base hover:text-purple-900">
              <Link to="features" smooth={true} offset={-80} duration={500}>
                Features
              </Link>
            </li>
            <li className="text-black font-medium text-base hover:text-purple-900">
              <Link to="about-us" smooth={true} offset={-90} duration={500}>
                About Us{" "}
              </Link>{" "}
            </li>
            <li className="text-black font-medium text-base hover:text-purple-900">
              <Link to="footer" smooth={true} offset={-260} duration={500}>
                Contact{" "}
              </Link>
            </li>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <h1 className="text-xl font-semibold text-neutral-900">
              Contact Us:
            </h1>
            <h1 className="text-lg font-base text-neutral-900">Get in Touch</h1>
            <div className="flex flex-col sm:flex-row  gap-2 items-center justify-between ">
              <div className="flex gap-2 w-full md:w-[30%] justify-center ">
                <i className="ri-phone-fill text-lg font-base"></i>
                <h1 className="text-purple-500 text-base font-base">
                  123457890
                </h1>
              </div>
              <div className="flex gap-2 w-full md:w-[30%] justify-center ">
                <i className="ri-mail-unread-fill text-lg font-base"></i>
                <h1 className="text-purple-500 text-base font-base">
                  code_helper_work@email.com
                </h1>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center ">
            <h1 className="text-neutral-900 text-xl font-semibold">
              {" "}
              Social Links:
            </h1>
            <div className="flex items-center justify-center gap-4 py-3">
              <i className="ri-linkedin-box-fill text-3xl font-semibold hover:text-purple-600"></i>
              <i className="ri-instagram-fill text-3xl font-semibold hover:text-purple-600"></i>
              <i className="ri-youtube-fill text-3xl font-semibold hover:text-purple-600"></i>
              <i className="ri-facebook-circle-fill text-3xl font-semibold hover:text-purple-600"></i>
            </div>
          </div>
        </div>

        <div className="  border-t-2 border-black flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-gray-800">
            &copy; {new Date().getFullYear()} Code Helper. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-2">
            <li className="text-base font-normal">Terms Of Services</li>
            <li className="text-base font-normal">Privacy Policies</li>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
