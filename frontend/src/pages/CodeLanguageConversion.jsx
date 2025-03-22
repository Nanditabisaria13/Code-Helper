import React, { useContext, useState } from "react";
import axios from "axios";
import Main from "../components/Main";
import { AppContext } from "../context/AppContext";

const CodeLanguageConversion = () => {
  const [code, setCode] = useState(`function sum(a, b) {
        return a + b;
    }`);

  const [convertedCode, setConvertedCode] = useState("");
  const { selectedLanguage, backendUrl } = useContext(AppContext);

  async function handleCodeConversion() {
    const response = await axios.post(
      backendUrl + "/ai/code-languageConversion",
      { code, targetLanguage: selectedLanguage }
    );
    setConvertedCode(response.data);
    console.log(response.data);
  }

  return (
    <>
      <Main
        handleFunction={handleCodeConversion}
        code={code}
        response={convertedCode}
        setCode={setCode}
        buttonText="Convert Language"
        buttonBg="bg-purple-500"
        codeFeature="Language Conversion"
        hoverBg="bg-purple-600"
      />
    </>
  );
};

export default CodeLanguageConversion;
