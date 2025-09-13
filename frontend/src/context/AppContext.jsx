import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { UserContext } from "./UserContext";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
   const [token, setToken] = useState(
          localStorage.getItem("token")?localStorage.getItem("token"):""
      )
  const [selectedLanguage, setSelectedLanguage] = useState("Python");



    // Save to history
      const saveHistory = async(data)=>{
        if(token){
           try {
           await axios.post(backendUrl + "/history/save", data, {headers: { Authorization: `Bearer ${token}` }});
         } catch (error) {
          console.log("error")
          console.log(error.response?.data  || error.message)
         }
        }
       
      }

  const value = {
    backendUrl,
    token,setToken,
    selectedLanguage,
    setSelectedLanguage,
    saveHistory,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
