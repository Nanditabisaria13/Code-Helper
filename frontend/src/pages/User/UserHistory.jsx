import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../../context/AppContext";
import History from "../../components/User/History";

const UserHistory = () => {
  const [history, setHistory] = useState([]);
  const {backendUrl,token} = useContext(AppContext)

  const fetchHistory = async()=>{
       try {
          const response = await axios.get(backendUrl + "/history/getSavedResult", {headers: { Authorization: `Bearer ${token}` }})
           setHistory(response.data.history)
      } catch (error) {
          toast.error("Something went wrong");
          console.log(error.response?.data  || error.message)
        }
  }

  useEffect(() => {
     fetchHistory()
  }, []);

    if(!history)return <p className="text-white">Loading...</p>;
  
      

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4"> History / Saved Results</h2>
      <div className="space-y-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
         <History  data={history} setData={setHistory} />
      </div>
    </div>

  );
};

export default UserHistory;
