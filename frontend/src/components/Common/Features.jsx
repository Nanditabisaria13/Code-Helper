import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <section id="features" className="py-10 features">
      <div className="max-w-7xl mx-auto text-center flex flex-col gap-4 cursor-pointer">
        <p className="text-7xl font-bold pt-5 text-white">What We Offer</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-10">
          {/* Feature 1 - Code Review */}
          <div className="bg-transparent p-6 rounded-lg shadow-lg drop-shadow-md border border-[#535353] flex flex-col gap-1 justify-between">
            <div className="flex justify-center mb-4">
              <span role="img" aria-label="Code Review" className="text-4xl">
                📝
              </span>
            </div>
            <p className="text-2xl font-semibold mb-4 text-purple-400">
              Code Review
            </p>
            <p className="text-white text-base">
              Automatically review your code for quality and best practices.
            </p>
            <Link
              to="/code-reviewer"
              className="px-4 py-2 rounded-md bg-white text-black text-lg font-medium  border border-[#1a1a1a]
              hover:scale-95 transition-all duration"
            >
              Try Now
            </Link>
          </div>
          {/* Feature 2 - Bug Detection */}
          <div className="bg-transparent p-6 rounded-lg shadow-lg drop-shadow-md border border-[#535353] flex flex-col gap-1 justify-between">
            <div className="flex justify-center mb-4">
              <span role="img" aria-label="Bug Detection" className="text-4xl">
                🐛
              </span>
            </div>
            <p className="text-2xl font-semibold mb-4 text-purple-400">
              Bug Detection
            </p>
            <p className="text-white text-base">
              Catch bugs before they cause problems in production.
            </p>
            <Link
              to="/code-bugDetection"
              className="px-4 py-2 rounded-md bg-white text-black text-lg font-medium  border border-[#1a1a1a]
              hover:scale-95 transition-all duration-300"
            >
              Try Now
            </Link>
          </div>
          {/* Feature 3 - Code Refactor */}
          <div className="bg-transparent p-6 rounded-lg shadow-lg drop-shadow-md border border-[#535353] flex flex-col gap-1 justify-between">
            <div className="flex justify-center mb-4">
              <span role="img" aria-label="Refactor" className="text-4xl">
                ♻️
              </span>
            </div>
            <p className="text-2xl font-semibold mb-4 text-purple-400">
              Code Refactor
            </p>
            <p className="text-white text-base">
              Improve code readability and structure with automatic refactoring.
            </p>
            <Link
              to="/code-refactoring"
              className="px-4 py-2 rounded-md bg-white text-black text-lg font-medium  border border-[#1a1a1a]
              hover:scale-95 transition-all duration-300"
            >
              Try Now
            </Link>
          </div>
          {/* Feature 4 - Code Documentation */}
          <div className="bg-transparent p-6 rounded-lg shadow-lg drop-shadow-md border border-[#535353] flex flex-col gap-1 justify-between">
            <div className="flex justify-center mb-4">
              <span role="img" aria-label="Documentation" className="text-4xl">
                📄
              </span>
            </div>
            <p className="text-2xl font-semibold mb-4 text-purple-400">
              Code Documentation
            </p>
            <p className="text-white text-base">
              Automatically generate documentation for your code.
            </p>
            <Link
              to="/code-documentation"
              className="px-4 py-2 rounded-md bg-white text-black text-lg font-medium  border border-[#1a1a1a]
              hover:scale-95 transition-all duration-300"
            >
              Try Now
            </Link>
          </div>
          {/* Feature 5 - Algorithm Explanation */}
          <div className="bg-transparent p-6 rounded-lg shadow-lg drop-shadow-md border border-[#535353] flex flex-col gap-1 justify-between">
            <div className="flex justify-center mb-4">
              <span
                role="img"
                aria-label="Algorithm Explanation"
                className="text-4xl"
              >
                🔍
              </span>
            </div>
            <p className="text-2xl font-semibold mb-4 text-purple-400">
              Algorithm Explanation
            </p>
            <p className="text-white text-base">
              Get detailed explanations for algorithms in your code.
            </p>
            <Link
              to="/code-algorithmExplanation"
              className="px-4 py-2 rounded-md bg-white text-black text-lg font-medium  border
               border-[#1a1a1a] hover:scale-95 transition-all duration-300"
            >
              Try Now
            </Link>
          </div>
          {/* Feature 6 - Code Optimization */}
          <div className="bg-transparent p-6 rounded-lg shadow-lg drop-shadow-md border border-[#535353] flex flex-col gap-1 justify-between">
            <div className="flex justify-center mb-4">
              <span role="img" aria-label="Optimization" className="text-4xl">
                ⚡
              </span>
            </div>
            <p className="text-2xl font-semibold mb-4 text-purple-400">
              Code Optimization
            </p>
            <p className="text-white text-base">
              Optimize your code for better performance and efficiency.
            </p>
            <Link
              to="/code-optimization"
              className="px-4 py-2 rounded-md bg-white text-black text-lg font-medium  border 
              border-[#1a1a1a] hover:scale-95 transition-all duration-300"
            >
              Try Now
            </Link>
          </div>
          {/* Feature 7 - Language Conversion */}
          <div className="bg-transparent p-6 rounded-lg shadow-lg drop-shadow-md border border-[#535353] flex flex-col gap-1 justify-baseline">
            <div className="flex justify-center mb-4">
              <span
                role="img"
                aria-label="Language Conversion"
                className="text-4xl"
              >
                🌐
              </span>
            </div>
            <p className="text-2xl font-semibold mb-4 text-purple-400">
              Language Conversion
            </p>
            <p className="text-white text-base">
              Convert code between different programming languages effortlessly.
            </p>
            <Link
              to="/code-languageConversion"
              className="px-4 py-2 rounded-md bg-white text-black text-lg font-medium 
               border border-[#1a1a1a] hover:scale-95 transition-all duration-300"
            >
              Try Now
            </Link>
          </div>
          {/* Feature 8 - Unit Test Generation */}
          <div className="bg-transparent p-6 rounded-lg shadow-lg drop-shadow-md border border-[#535353] flex flex-col gap-1 justify-between">
            <div className="flex justify-center mb-4">
              <span
                role="img"
                aria-label="Unit Test Generation"
                className="text-4xl"
              >
                🧪
              </span>
            </div>
            <p className="text-2xl font-semibold mb-4 text-purple-400">
              Unit Test Generation
            </p>
            <p className="text-white text-base">
              Automatically generate unit tests for your code to ensure quality.
            </p>
            <Link
              to="/code-generateUnitTests"
              className="px-4 py-2 rounded-md bg-white text-black text-lg font-medium 
               border border-[#1a1a1a] hover:scale-95 transition-all duration-300"
            >
              Try Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
