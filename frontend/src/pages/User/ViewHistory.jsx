import React from 'react'
import { useLocation } from 'react-router-dom'
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import { toast } from 'react-toastify';

const ViewHistory = () => {

   const location = useLocation()

   const output = location.state.item.output;
   const input = location.state.item.input;

    const handleCopy = () => {
       if (output) {
         navigator.clipboard
           .writeText(output)
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
     <div className="min-h-screen md:h-screen w-full bg-[#141414] p-4 mt-18">
      <main className="h-screen md:h-[88vh] w-full flex flex-col md:flex-row gap-[1rem]">
     
        <div className="left  h-1/2 md:h-full w-full md:w-1/2 bg-[#343434] text-white relative border-2 border-white rounded-xl overflow-auto">
            <div className="h-full w-full p-4">
             <Markdown rehypePlugins={[rehypeHighlight]}>
            {`\`\`\`
${input}
\`\`\``}
             </Markdown>
             
              
          </div> 
       
          
       </div>

        {/* Response Display Section */}
        <div
          className="right h-1/2 md:h-full w-full md:w-1/2 bg-[#343434] text-white text-[1rem] p-4 overflow-auto border-2
                    border-gray-200 rounded-xl relative"
        >
          <div className="output">
            {output && (
              <div>
                <div
                  onClick={handleCopy}
                  className="absolute top-6 right-8 cursor-pointer text-white hover:text-gray-400"
                  title="Copy to clipboard"
                >
                  <i className="ri-clipboard-fill text-xl text-white"></i>
                </div>
               
                <div>
                  <Markdown rehypePlugins={[rehypeHighlight]}>
                    {output} 
                  </Markdown>
                </div>
              </div>
            ) }
          </div>
        </div>
      </main>
    </div>
   
  )
}

export default ViewHistory



