import React, { useContext, useState } from "react";
import axios from "axios";
import Main from "../components/Main";
import { AppContext } from "../context/AppContext";

const CodeReviewer = () => {
  const [code, setCode] = useState(`function sum() {
    return 1+1 }`);
  const [review, setReview] = useState("");
  const { backendUrl } = useContext(AppContext);

  async function reviewCode() {
    try {
      const response = await axios.post(backendUrl + "/ai/get-review", {
        code,
      });
      setReview(response.data);
    } catch (err) {
      console.error("Error while review the code:", err);
    }
  }

  return (
    <>
      <Main
        handleFunction={reviewCode}
        code={code}
        response={review}
        setCode={setCode}
        buttonText="Review Code"
        buttonBg="bg-blue-500"
        codeFeature="Review Code"
        hoverBg="bg-blue-600"
      />
    </>
  );
};

export default CodeReviewer;
