import React, { useContext, useEffect, useState } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import rehypeHighlight from "rehype-highlight";
import Markdown from "react-markdown";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";
// import vsDark from "prism-react-renderer/themes/vsDark";


const Main = ({
  handleFunction,
  code,
  buttonText,
  buttonBg,
  response,
  setCode,
  codeFeature,
  hoverBg,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { selectedLanguage, setSelectedLanguage } = useContext(AppContext);
  const{token} = useContext(AppContext)

  useEffect(() => {
    prism.highlightAll();
  }, [response]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleCopy = () => {
    if (response) {
      navigator.clipboard
        .writeText(response)
        .then(() => {
          toast.success("Copied to clipboard!");
        })
        .catch((err) => {
          toast.error("Failed to copy!");
          console.log(err);
        });
    }
  };
  return (
    <div className={`min-h-screen md:h-screen w-full bg-[#141414] p-4 ${token?'mt-18':''}`}>
      <main className={`h-screen w-full flex flex-col md:flex-row gap-[1rem] ${token?'md:h-[88vh]':'md:h-full'}`}>
        {/* Code Editor Section */}
        <div className="left bg-[#000000] h-1/2 md:h-full w-full md:w-1/2 relative border-2 border-white rounded-xl overflow-auto">
          <div className="code h-full w-full ">
            <Editor
              value={code} 
               onValueChange={(newCode) => setCode(newCode)}
               highlight={(code) => prism.highlight(code, prism.languages.javascript, "javascript")}
               padding={10}
               style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                borderRadius: "5px",
                height: "100%",
                width: "100%",
                fontSize: "16px",
                color: "white",
                backgroundColor: "#282c34",
                overflow: "auto",
              }}
            />
          </div>
          {buttonText === "Convert Language" && (
            <div
              className="absolute top-4 right-4 bg-gray-700 px-2 py-2 lg:px-4 lg:py-2  text-white rounded-md cursor-pointer 
       font-semibold text-sm lg:text-xl"
            >
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="bg-transparent text-white border-none  outline-none"
              >
                <option className="text-black text-lg" value="JavaScript">
                  JavaScript
                </option>
                <option className="text-black text-lg" value="Python">
                  Python
                </option>
                <option className="text-black text-lg" value="Java">
                  Java
                </option>
                <option className="text-black text-lg" value="C">
                  C
                </option>
                <option className="text-black text-lg" value="C++">
                  C++
                </option>
                <option className="text-black text-lg" value="C#">
                  C#
                </option>
                <option className="text-black text-lg" value="TypeScript">
                  TypeScript
                </option>
                <option className="text-black text-lg" value="PHP">
                  PHP
                </option>
                <option className="text-black text-lg" value="Kotlin">
                  Kotlin
                </option>
                <option className="text-black text-lg" value="Rust">
                  Rust
                </option>
              </select>
            </div>
          )}
          <div
            onClick={handleFunction}
            className={`absolute bottom-4 right-4 ${buttonBg} px-6 py-2 text-white rounded-md cursor-pointer font-semibold text-xl
           hover:${hoverBg} transition`}
          >
            {buttonText}
          </div>
        </div>

        {/* Response Display Section */}
        <div
          className="right h-1/2 md:h-full w-full md:w-1/2 bg-[#343434] text-white text-[1rem] p-4 overflow-auto border-2
                    border-gray-200 rounded-xl relative"
        >
          <div className="output">
            {response ? (
              <div>
                <div
                  onClick={handleCopy}
                  className="absolute top-6 right-8 cursor-pointer text-white hover:text-gray-400"
                  title="Copy to clipboard"
                >
                  <i className="ri-clipboard-fill text-xl text-white"></i>
                </div>
                <button
                  onClick={toggleCollapse}
                  className="bg-gray-600 text-white p-2 rounded-md mb-4 hover:bg-gray-700 transition"
                >
                  {isCollapsed
                    ? `Expand ${codeFeature}`
                    : `Collapse ${codeFeature}`}
                </button>
                <div className={isCollapsed ? "hidden" : ""}>
                  <Markdown rehypePlugins={[rehypeHighlight]}>
                    {response}
                  </Markdown>
                </div>
              </div>
            ) : (
              <div className="text-center text-white">
                No {codeFeature} yet. Click on {buttonText}.
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
