import React, { useContext, useState } from "react";
import axios from "axios";
import Main from "../components/Main";
import { AppContext } from "../context/AppContext";

const CodeBugDetection = () => {
  const { backendUrl } = useContext(AppContext);
  const [code, setCode] = useState(`function sum(a, b) {
        return a + b;
    }`);

  const [bugReport, setBugReport] = useState(""); // For bug report

  async function handleBugDetection() {
    try {
      const response = await axios.post(backendUrl + "/ai/code-bugDetection", {
        code,
      });
      setBugReport(response.data);
    } catch (err) {
      console.error("Error during bug detection:", err);
    }
  }

  return (
    <>
      <Main
        handleFunction={handleBugDetection}
        code={code}
        response={bugReport}
        setCode={setCode}
        buttonText="Detect Bug"
        buttonBg="bg-red-500"
        codeFeature="Bug Report"
        hoverBg="bg-red-600"
      />
    </>
  );
};

export default CodeBugDetection;
