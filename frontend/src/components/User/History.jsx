import axios from 'axios';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppContext';

const History = ({data,setData}) => {
  
     const navigate = useNavigate()
       const {backendUrl,token} = useContext(AppContext)

     const deleteHistory = async (id) => {
     try {
       await axios.delete(backendUrl + `/history/delete/${id}`,{headers: { Authorization: `Bearer ${token}` }} );
       setData(data.filter(h => h._id !== id));
     } catch (error) {
       console.log("error")
       console.log(error.response?.data  || error.message)
     }
  };

  return (
   
    <>
     {data.map((item) => (
          <div key={item._id} className="p-4 border rounded-lg shadow max-w-4xl h-52 flex flex-col  bg-transparent border-[#535353]">
            <div className="flex-1 flex justify-between items-center gap-4">
              <h3 className="font-medium truncate max-w-[70%] ">{item.feature}</h3>
              <button
                onClick={() => deleteHistory(item._id)}
                className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-sm">
               Delete
              </button>
            </div>
            <p className="flex-1 text-sm text-gray-300">Created: {new Date(item.createdAt).toLocaleString()}</p>
            <button onClick={()=>navigate(`/view-history/${item._id}`,{state:{item}})}
           className=" bg-white rounded-md text-neutral-900 text-lg hover:scale-95 transition-all duration-300 font-medium px-3 py-2 w-full">View History</button>
           
          </div>
         
        ))}
    </>
  )
}

export default History


