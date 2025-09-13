import React, { useEffect } from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { AppContext } from '../../context/AppContext';
import Feature from '../../components/User/Feature';



const FeatureSection = () => {

  
  const features = [
  { id: "reviewer", name: "Code Reviewer", description: "Get instant AI-powered code reviews.", icon: "ri-search-eye-line",link: "/code-reviewer" , },
  { id: "refactor", name: "Code Refactor", description: "Automatically refactor your code for best practices.", icon: "ri-loop-left-line",link: "/code-refactoring",  },
  { id: "docs", name: "Code Documentation", description: "Generate clean documentation for your functions.", icon: "ri-file-text-line",link: "/code-documentation" , },
  { id: "optimize", name: "Code Optimization", description: "Optimize your code for performance and readability.", icon: "ri-speed-up-line",link: "/code-optimization",  },
  { id: "tests", name: "Unit Test Generator", description: "Auto-generate unit tests with AI assistance.", icon: "ri-test-tube-line", link: "/code-generateUnitTests",  },
  { id: "bug", name: "Bug Detection", description: "Detect and highlight potential bugs.", icon: "ri-bug-line", link: "/code-bugDetection", },
  { id: "algo", name: "Algorithm Explanation", description: "Explain complex algorithms in plain language.", icon: "ri-brain-line",link: "/code-algorithmExplanation" , },
  { id: "converter", name: "Language Converter", description:"Convert the code into different languages", icon: "ri-translate-2",link: "/code-languageConversion" , }
];


  const [search, setSearch] = useState("");
  const {token} = useContext(AppContext)
  const {getPinnedFeatures,pinnedFeatures} = useContext(UserContext)

    
    useEffect(()=>{
       getPinnedFeatures()
    },[token])

  

  // Search filter
  const filteredFeatures = features.filter((f) =>
    f.name.toLowerCase().includes(search.toLowerCase()) ||
   f.id.toLowerCase().includes(search.toLowerCase())
  );

  // Sort pinned tools on top
  const sortedFeatures = [...filteredFeatures].sort((a, b) => {
    const aPinned = pinnedFeatures.some(f => f.id === a.id);
  const bPinned = pinnedFeatures.some(f => f.id === b.id);

  if (aPinned && !bPinned) return -1; 
  if (!aPinned && bPinned) return 1;  
  return 0; 
  });
   
  return (
      <div className="w-full mx-auto p-4 md:p-6 lg:p-8 min-h-screen text-white flex flex-col gap-8">
     
     <div className='mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
       <h1 className='text-2xl font-semibold'>All Features</h1>
   
      <div className=" flex itmes-center mb-6  sm:w-60 px-4 py-2 border rounded-md  w-full ">
    
        <input
          type="text"
          placeholder='Search features...'
          className=" outline-0 placeholder:text-gray-300  "
           value={search}
          onChange={(e) => setSearch(e.target.value)}
     />
      </div>
     </div>

      {/* Toolbox Grid */}
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
        <Feature features={sortedFeatures} />

      </div>
     
    </div>
   
  )
}

export default FeatureSection


 