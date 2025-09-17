import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import History from '../../components/User/History';
import Feature from '../../components/User/Feature';
import { UserContext } from '../../context/UserContext';
import { toast } from 'react-toastify';




const UserDashboard = () => {


   const [data, setData] = useState(null);
   const [recentHistory,setRecentHistory] = useState([])
  const {backendUrl,token} = useContext(AppContext)
    const {user} = useContext(UserContext)
  const navigate = useNavigate()
  
  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await axios.get( backendUrl+ '/users/get-dashboard', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setData(res.data.data);
        setRecentHistory(res.data.data.recentHistory)
      } catch (error) {
         toast.error("Something went wrong");
        console.error(error);
      }
    };
   fetchDashboard();
  }, [token]);

  if (!data) return <p className="text-white">Loading...</p>;


   // Map analytics to chartData
  const chartData = data.usageAnalytics.map((item) => {
    return { name: item._id, value: item.count };
  });

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f7f", "#00C49F", "#0088FE", "#FFBB28", "#FF8042"];

  
  return (

      <div className="px-4 py-2  space-y-4 text-white  w-full mx-auto">
       <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <div  className='w-full grid grid-cols-1 sm:grid-cols-3 gap-6' >
            <section className="p-4 py-4 rounded-lg bg-[#141414] border border-[#535353] drop-shadow-md">
            <h1 className="text-2xl font-bold mb-1">Hello, {user?.fullName?.firstName|| ' '}👋</h1>
             <p className="text-xl mt-2 text-gray-600 dark:text-gray-100">
               Welcome back, have a good day!
            </p>
          
           </section>

           {/* Activity Summary */}
      <section className="bg-transparent border border-[#535353] rounded-xl px-3 py-1 drop-shadow-md">
        <h2 className="text-xl font-bold mb-4">📊 Activity Summary</h2>
        <p className='font-semibold '>Most Used Feature: <span className="font-normal text-purple-500">{data.mostUsedFeature || " "}</span></p>
         <p className='font-semibold '>Recent Used Feature: <span className="font-normal text-purple-500">{data.mostUsedFeature || " "}</span></p>
      </section>

     {/*Quick Actions*/}
      <section className="bg-transparent border border-[#535353] rounded-xl p-5 drop-shadow-md">
        <h2 className="text-xl font-bold mb-4">⚡Quick Actions </h2>
        <div className="flex flex-wrap gap-3">
           <Link to="/features-page" className="bg-blue-600 px-4 py-2 rounded-lg">
            Features
            </Link>
             <Link to="/history-page" className="bg-purple-600 px-4 py-2 rounded-lg">
             History
           </Link>
            <Link to="/profile" className="bg-green-600 px-4 py-2 rounded-lg">
              Profile
           </Link> 
        </div>

      </section>

        </div>

 {/* Pinned Features */} 
     <h2 className="text-xl font-bold mb-4">📌 Pinned Features</h2>
       <section className="bg-transparent border max-w-full relative  border-[#535353] rounded-xl p-5 shadow-md">
  
        <div className='overflow-x-auto'>

          <div className=' flex  gap-4'>
        {data.pinnedFeatures.length > 0 ? (
         <Feature features={data.pinnedFeatures}/>
        ) : (
          <p className="text-gray-100 text-center">No pinned features yet.</p>
        )}
        </div>
        </div>
      </section>

     
      {/* History Shortcuts */}
       <h2 className="text-xl font-bold mb-4">🕒 Recent History</h2>
      <section className="bg-transparent max-w-full relative border border-[#535353] rounded-xl p-5 drop-shadow-md">
       
        <div className='overflow-x-auto'>

        <div className="flex gap-4 w-[100%]">
          {data.recentHistory.length>0?(
        <History data={recentHistory} setData={setRecentHistory} />
          ):(
          <p className="text-gray-100 text-center">No recent History yet.</p>
          )}
        </div>
        </div>
        {data.recentHistory.length>0 &&
        <div className='flex justify-center '>
        <button onClick={()=>navigate('/history-page')}
          className='bg-white rounded-md text-neutral-900 mt-3 text-lg hover:scale-95 transition-all duration-300 font-medium px-3 py-2 '
          >See All → </button>
          </div>
   }
      </section>
    
     {/* Usage Analytics */}
       <h2 className="text-lg font-semibold mb-4 mt-10">📊 Usage Analytics</h2>
      <div className="bg-transparent border border-[#535353] shadow rounded-xl h-full p-6">
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={120}
                dataKey="value"
              >
                {chartData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-gray-100">No usage data yet. Try some tools!</p>
        )}
      </div>
    
     
   
    </div>
  )
}

export default UserDashboard