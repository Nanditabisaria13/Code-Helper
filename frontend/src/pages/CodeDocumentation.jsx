import React, { useContext, useState } from "react";
import axios from "axios";
import Main from "../components/Main";
import { AppContext } from "../context/AppContext";

const CodeDocumentation = () => {
  const { backendUrl } = useContext(AppContext);
  const [code, setCode] = useState(`function sum() {
      return 1+1 }`);
  const [documentation, setDocumentation] = useState("");

  async function CodeDocumentation() {
    try {
      const response = await axios.post(backendUrl + "/ai/get-documentation", {
        code,
      });
      setDocumentation(response.data);
    } catch (error) {
      console.error("Error in code documentation:", error);
    }
  }

  return (
    <>
      <Main
        handleFunction={CodeDocumentation}
        code={code}
        response={documentation}
        setCode={setCode}
        buttonText="Get Documentation"
        buttonBg="bg-yellow-500"
        codeFeature="Documentation"
        hoverBg="bg-yellow-600"
      />
    </>
  );
};

export default CodeDocumentation;
