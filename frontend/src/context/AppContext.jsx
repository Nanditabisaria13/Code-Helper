import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [selectedLanguage, setSelectedLanguage] = useState("Python");

  const value = {
    backendUrl,
    selectedLanguage,
    setSelectedLanguage,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
