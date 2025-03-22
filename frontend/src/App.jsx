import React from "react";
import { Route, Routes } from "react-router-dom";
import CodeReviewer from "./pages/CodeReviewer";
import CodeDocumentation from "./pages/CodeDocumentation";
import CodeRefactor from "./pages/CodeRefactor";
import CodeLanguageConversion from "./pages/CodeLanguageConversion";
import CodeBugDetection from "./pages/CodeBugDetection";
import CodeUnitTestGeneration from "./pages/CodeUnitTestGeneration";
import CodeAlgorithmExplanation from "./pages/CodeAlgorithmExplanation";
import CodeOptimization from "./pages/CodeOptimization";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className=" w-full bg-[#000] p-2">
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/code-reviewer" element={<CodeReviewer />} />
        <Route path="/code-documentation" element={<CodeDocumentation />} />
        <Route path="/code-refactoring" element={<CodeRefactor />} />
        <Route
          path="/code-languageConversion"
          element={<CodeLanguageConversion />}
        />
        <Route path="/code-bugDetection" element={<CodeBugDetection />} />
        <Route
          path="/code-generateUnitTests"
          element={<CodeUnitTestGeneration />}
        />
        <Route
          path="/code-algorithmExplanation"
          element={<CodeAlgorithmExplanation />}
        />
        <Route path="/code-optimization" element={<CodeOptimization />} />
      </Routes>
    </div>
  );
};

export default App;
