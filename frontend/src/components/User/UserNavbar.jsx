import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext';
import { assets } from '../../assets/assets';
import { AppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';

export const UserNavbar = ({toggleSidebar}) => {

    const {  getMyProfile, user,  } = useContext(UserContext);
     const {  token, setToken  } = useContext(AppContext);
     const navigate = useNavigate()
  
   const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/");
  };
   
  useEffect(() => {
      getMyProfile();
  }, [token]);

  return (
    <div className="flex items-center w-full fixed top-0 left-0 justify-between px-4 py-2 z-40 dark:bg-[#1c1c1c] shadow-md">

          <div className="flex items-center gap-3">
        <button onClick={toggleSidebar} className="text-xl text-gray-800 dark:text-white md:hidden">
          <i className="ri-menu-line"></i>
        </button>
      </div>
      
    
       <div className='flex gap-2 jusitfy-end items-center'>

          <div className="flex gap-2 p-2 items-center">
            <div className="w-12 h-12 rounded-full border-[3px] border-green-600">
              <img
                src={user?.image || assets.uploadImage}
                alt=""
                className="w-full h-full rounded-full"
              />
            </div>

            <div className="hidden lg:flex flex-col gap-1">
              <h1 className="text-base font-normal text-neutral-900 dark:text-white">
                {user
                  ? `${user.fullName.firstName} ${user.fullName.lastName}`
                  : "UserName"}
              </h1>
             
            </div>
          </div>
          <div onClick={logout}>
            <i className="ri-logout-box-r-line text-white text-xl font-medium block sm:hidden"></i>
           <button className='bg-red-500 text-white px-4 py-2 hidden sm:block rounded-md'>LogOut</button>
          </div>
       
     </div>
   
 
    </div>
  )
}
