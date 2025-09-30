import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import CodeReviewer from "./pages/Features/CodeReviewer";
import CodeDocumentation from "./pages/Features/CodeDocumentation";
import CodeRefactor from "./pages/Features/CodeRefactor";
import CodeLanguageConversion from "./pages/Features/CodeLanguageConversion";
import CodeBugDetection from "./pages/Features/CodeBugDetection";
import CodeUnitTestGeneration from "./pages/Features/CodeUnitTestGeneration";
import CodeAlgorithmExplanation from "./pages/Features/CodeAlgorithmExplanation";
import CodeOptimization from "./pages/Features/CodeOptimization";
import Home from "./pages/Common/Home";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import Sidebar from "./components/User/Sidebar";
import UserDashboard from "./pages/User/UserDashboard";
import { UserNavbar } from "./components/User/UserNavbar";
import SignUp from "./pages/Common/SignUp";
import Login from "./pages/Common/Login";
import FeatureSection from "./pages/User/FeatureSection";
import UserHistory from "./pages/User/UserHistory";
import ViewHistory from "./pages/User/ViewHistory";
import { AppContext } from "./context/AppContext";
import UserProfile from "./pages/User/UserProfile";

const App = () => {
   const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
   const {token} = useContext(AppContext)
 
  return(
    <div className=" flex items-start max-w-full bg-[#141414] min-h-screen">
      <ToastContainer theme="dark" />
       
      {
        token? (
        <div className="flex gap-5 w-full">
               <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar}/>
                <div  className="w-full flex-1">
              <UserNavbar toggleSidebar={toggleSidebar}/>
               <main className=" mt-14 md:ml-[16rem]">
               <Routes>
                 <Route path="/" element={<UserDashboard />} /> 
                 <Route path="/features-page" element={<FeatureSection/>} />
                 <Route path="/history-page" element={<UserHistory />} /> 
                 <Route path="/view-history/:id" element={<ViewHistory/>} /> 
                 <Route path="/userProfile-page" element={<UserProfile/>} /> 
        
                <Route path="/code-reviewer" element={<CodeReviewer />} />
                <Route path="/code-documentation" element={<CodeDocumentation />} />
                <Route path="/code-refactoring" element={<CodeRefactor />} />
                <Route path="/code-bugDetection" element={<CodeBugDetection />} />
               <Route path="/code-languageConversion" element={<CodeLanguageConversion />}   />
      
        <Route
          path="/code-generateUnitTests"
          element={<CodeUnitTestGeneration />}
        />
        <Route
          path="/code-algorithmExplanation"
          element={<CodeAlgorithmExplanation />}
        />
        <Route path="/code-optimization" element={<CodeOptimization />} />
               </Routes>
               </main>
                </div>
              
        </div>):
        (
        <div className="w-full">
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/code-reviewer" element={<CodeReviewer />} />
        <Route path="/code-documentation" element={<CodeDocumentation />} />
        <Route path="/code-refactoring" element={<CodeRefactor />} />
        <Route path="/code-bugDetection" element={<CodeBugDetection />} />
        <Route
          path="/code-languageConversion"
          element={<CodeLanguageConversion />}
        />
      
        <Route
          path="/code-generateUnitTests"
          element={<CodeUnitTestGeneration />}
        />
        <Route
          path="/code-algorithmExplanation"
          element={<CodeAlgorithmExplanation />}
        />
        <Route path="/code-optimization" element={<CodeOptimization />} />
         <Route path="/signup" element={<SignUp />} /> 
         <Route path="/login" element={<Login />} /> 
      </Routes>
        </div>
        )
    
      }

     


    </div>

  );



 
};

export default App;
