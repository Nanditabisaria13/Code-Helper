import React, { useContext, useState } from "react";
import axios from "axios";
import Main from "../../components/Common/Main";
import { AppContext } from "../../context/AppContext";

const CodeAlgorithmExplanation = () => {
  const { backendUrl } = useContext(AppContext);
  const [code, setCode] = useState(`function binarySearch(arr, target) {
      let left = 0;
      let right = arr.length - 1;
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
      }
      return -1;
    }`);
  const [algorithmExplanation, setAlgorithmExplanation] = useState("");
    const {saveHistory} = useContext(AppContext)

  const fetchAlgorithmExplanation = async () => {
    try {
      const response = await axios.post(
        backendUrl + "/ai/code-algorithmExplanation",
        { code }
      );
      const result = response.data
      setAlgorithmExplanation(result);
        saveHistory({
      feature: "Algorithm Explanation",
      input: code,
      output: result,
    })
    } catch (error) {
      console.error("Error in fetching algorithm explanation:", error);
    }
  };

  return (
    <>
      <Main
        handleFunction={fetchAlgorithmExplanation}
        code={code}
        response={algorithmExplanation}
        setCode={setCode}
        buttonText="Explain Algorithm"
        buttonBg="bg-green-500"
        codeFeature="Algorithm Explanation"
        hoverBg="bg-green-600"
      />
    </>
  );
};

export default CodeAlgorithmExplanation;
