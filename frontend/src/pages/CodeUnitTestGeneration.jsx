import React, { useContext, useState } from "react";
import axios from "axios";
import Main from "../components/Main";
import { AppContext } from "../context/AppContext";

const CodeUnitTestGeneration = () => {
  const [code, setCode] = useState(`function sum(){
    return 1 + 1;
  }`);
  const [unitTests, setUnitTests] = useState("");
  const { backendUrl } = useContext(AppContext);

  const handleGenerateUnitTests = async () => {
    try {
      const response = await axios.post(
        backendUrl + "/ai/code-generateUnitTest",
        { code }
      );
      setUnitTests(response.data);
    } catch (err) {
      console.error("Error in generate unit test:", err);
    }
  };

  return (
    <>
      <Main
        handleFunction={handleGenerateUnitTests}
        code={code}
        response={unitTests}
        setCode={setCode}
        buttonText="Generate Unit Tests"
        buttonBg="bg-lime-500"
        codeFeature="Unit Tests"
        hoverBg="bg-lime-600"
      />
      <div className="bg-"></div>
    </>
  );
};

export default CodeUnitTestGeneration;
