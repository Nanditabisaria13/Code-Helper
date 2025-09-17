import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
    
 const Feature = ({features})=>{
      const {handlePinToggle,pinnedFeatures} = useContext(UserContext)
       
  return (
   <>
     {features.map((feature) => (
          <div
            key={feature.id}

            className="p-5 bg-transparent drop-shadow-md border max-w-4xl flex flex-col  flex-shrink-0 border-[#535353] rounded-2xl  hover:shadow-lg transition cursor-pointer"
          >

            <div className='flex-1 flex items-center justify-between gap-4'>
  
            <i className={`${feature.icon}  text-3xl text-purple-400 mb-3`} />
             <button
              onClick={(e) => {
                e.stopPropagation();
                handlePinToggle(feature);
              }}
              className={` ${
               pinnedFeatures.some(f => f.id === feature.id)
                  ? "text-yellow-500"
                  : "text-gray-400 hover:text-yellow-500"
              }`}
            >
               <i className="ri-pushpin-line text-xl"></i> 
              
            </button>
            </div>
          
            <h3 className="flex-1 text-lg font-bold">{feature.name}</h3>
            <p className="flex-1 text-gray-300  max-w-full">{feature.description}</p>

         
  
             <a
              href={feature.link}
              className="mt-4 inline-block text-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Try Now
            </a>
          </div>
        ))}

   </>
   
  )
}

export default Feature