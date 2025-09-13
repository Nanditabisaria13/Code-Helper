import React from "react";
import { assets } from "../../assets/assets";

const AboutUs = () => {
  return (
    <section className=" py-12 px-6 cursor-pointer" id="about-us">
      <h1 className="text-7xl font-bold text-center text-white mb-12">
        About Us{" "}
      </h1>

      <div className="container bg-transparent  drop-shadow-md rounded-xl  mx-auto px-4 py-3">
        <h1 className="text-2xl font-semibold text-white mb-4">
          Welcome to
          <span className="text-purple-500 text-4xl text-bold">
            {" "}
            Code Helper
          </span>
        </h1>

        <section className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2 mb-6 md:mb-0 p-3 text-white">
            <p className="text-lg leading-relaxed mb-4 ">
              Welcome to <strong>Code Helper</strong>, the ultimate code
              assistant built to enhance your coding workflow! Whether you're a
              beginner or a seasoned developer, our platform leverages the power
              of the latest technology to offer a range of features designed to
              help you write cleaner, more efficient code in no time.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              We are passionate about making coding more accessible, efficient,
              and error-free. Our mission is to provide developers with a
              comprehensive tool that supports multiple aspects of the
              development process. With the integration of the Google Gemini
              API.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src={assets.aboutSectionImage}
              alt="Code Assistant Image"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-10 mt-10">
          <div className=" mb-6 md:mb-0 p-3 text-white">
            <p className="text-2xl leading-relaxed mb-4">
              we offer AI-powered solutions for:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-base leading-relaxed mb-6">
              <div className="flex items-start space-x-3">
                <span className="font-bold bg-purple-500 rounded-xl p-2 hover:bg-purple-700">
                  Code Review:
                </span>
                <span className="font-bold bg-purple-400 rounded-xl p-2 hover:bg-purple-700">
                  Get detailed feedback on your code, ensuring best practices
                  and optimal performance.
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="font-bold bg-purple-500 rounded-xl p-2 hover:bg-purple-700">
                  Code Optimization:
                </span>
                <span className="font-bold bg-purple-400 rounded-xl p-2 hover:bg-purple-700 ">
                  Let our platform suggest ways to improve the speed and
                  efficiency of your code.
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="font-bold bg-purple-500 rounded-xl p-2 hover:bg-purple-700">
                  Language Conversion:
                </span>
                <span className="font-bold bg-purple-400 rounded-xl p-2 hover:bg-purple-700 ">
                  Need to switch programming languages? We provide easy and
                  accurate code conversion between various languages.
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="font-bold bg-purple-500 rounded-xl p-2 hover:bg-purple-700">
                  Code Refactoring:
                </span>
                <span className="font-bold bg-purple-400 rounded-xl p-2 hover:bg-purple-700">
                  Streamline your code to improve readability and
                  maintainability without changing its functionality.
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="font-bold bg-purple-500 rounded-xl p-2 hover:bg-purple-700">
                  Bug Detection:
                </span>
                <span className="font-bold bg-purple-400 rounded-xl p-2 hover:bg-purple-700">
                  Our AI scans your code to identify and help you fix potential
                  bugs, ensuring a smoother development process.
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="font-bold bg-purple-500 rounded-xl p-2 hover:bg-purple-700">
                  Algorithm Explanation:
                </span>
                <span className="font-bold bg-purple-400 rounded-xl p-2 hover:bg-purple-700">
                  Struggling to understand complex algorithms? We break them
                  down into simpler, easy-to-understand explanations.
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="font-bold bg-purple-500 rounded-xl p-2 hover:bg-purple-700">
                  Code Documentation:
                </span>
                <span className="font-bold bg-purple-400 rounded-xl p-2 hover:bg-purple-700">
                  Automatically generate clear and concise documentation for
                  your code, saving you time and effort.
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="font-bold bg-purple-500 rounded-xl p-2 hover:bg-purple-700">
                  Unit Test Generation:
                </span>
                <span className="font-bold bg-purple-400 rounded-xl p-2 hover:bg-purple-700">
                  Easily create unit tests for your code, ensuring your projects
                  are thoroughly tested and reliable.
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutUs;
