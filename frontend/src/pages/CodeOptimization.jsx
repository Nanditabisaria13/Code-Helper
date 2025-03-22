import React, { useContext, useState } from "react";
import axios from "axios";
import Main from "../components/Main";
import { AppContext } from "../context/AppContext";

const CodeOptimization = () => {
  const { backendUrl } = useContext(AppContext);
  const [code, setCode] = useState(`function sum(a, b) {
        return a + b;
    }`);

  const [optimizedCode, setOptimizedCode] = useState("");

  const handleGenerateExplanation = async () => {
    try {
      const response = await axios.post(
        backendUrl + "/ai/code-codeOptimization",
        { code }
      );
      setOptimizedCode(response.data);
    } catch (error) {
      console.error("Error generating optimization explanation:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Main
        handleFunction={handleGenerateExplanation}
        code={code}
        response={optimizedCode}
        setCode={setCode}
        buttonText="Otimize Code"
        buttonBg="bg-orange-500"
        codeFeature="Opitimized Code"
        hoverBg="bg-orange-600"
      />
    </>
  );
};

export default CodeOptimization;
