import React, { useContext, useState } from "react";
import Main from "../../components/Common/Main";
import axios from "axios";
import { AppContext } from "../../context/AppContext";

const CodeRefactor = () => {
  const [code, setCode] = useState(`function sum() { return 1 + 1; }`);
  const [refactoredCode, setRefactoredCode] = useState("");
  const { backendUrl } = useContext(AppContext);
  const {saveHistory} = useContext(AppContext)

  async function handleRefactor() {
    try {
      const response = await axios.post(backendUrl + "/ai/code-refactoring", {
        code,
      });
        const result = response.data;
      setRefactoredCode(result);
        saveHistory({
      feature: "Code Refactor",
      input: code,
      output: result,
    })
    } catch (error) {
      console.error("Error refactoring code:", error);
    }
  }

  return (
    <>
      <Main
        handleFunction={handleRefactor}
        code={code}
        response={refactoredCode}
        setCode={setCode}
        buttonText="Refactor Code"
        buttonBg="bg-indigo-500"
        codeFeature="Refactored Code"
        hoverBg="bg-indigo-600"
      />
    </>
  );
};

export default CodeRefactor;
