
import React from 'react';
import {  NavLink, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', icon: 'ri-dashboard-line', label: 'Dashboard' },
  { to: '/features-page', icon: 'ri-focus-2-line', label: 'Features'},
   { to: '/history-page', icon: 'ri-calendar-schedule-fill', label: 'History' },
  { to: '/userProfile-page', icon: 'ri-user-line', label: 'Profile' },
];


const Sidebar = ({ isOpen,toggleSidebar }) => {

  
  return (
    <aside
    className={`bg-white dark:bg-[#1c1c1c] border-r border-gray-200 dark:border-gray-700 min-h-screen fixed  top-0 left-0 z-50 transform ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } md:translate-x-0 md:w-64 w-64 px-4 py-3 transition-transform duration-300 ease-in-out`}
    >
     <div className='flex items-center justify-between gap-4'>
     <h1 className="text-lg font-bold text-gray-800 dark:text-white"><span className='text-3xl font-bold text-purple-500'>C</span>ode Helper</h1>
     <i
          onClick={toggleSidebar}
          className="ri-close-fill text-2xl dark:text-white md:hidden"
        ></i>
     </div>
      <nav className="flex flex-col mt-5 py-2 gap-2">
        
         {navLinks.map(({ to, icon, label }) => {
          const location = useLocation();

  const isHistoryActive =
    to === "/history-page" &&
    (location.pathname.startsWith("/history-page") ||
      location.pathname.startsWith("/view-history"));

      const isFeatureActive =
     to === "/features-page" &&
       (
      location.pathname.startsWith("/code-reviewer") ||
      location.pathname.startsWith("/code-refactoring") ||
      location.pathname.startsWith("/code-documentation") ||
      location.pathname.startsWith("/code-optimization") ||
      location.pathname.startsWith("/code-bugDetection") ||
      location.pathname.startsWith("/code-generateUnitTests") ||
      location.pathname.startsWith("/code-languageConversion") ||
      location.pathname.startsWith("/code-algorithmExplanation")
    );


          return(
          <NavLink
            key={to}
            to={to}
            className={ ({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md text-sm transition-colors ${
             isActive|| isHistoryActive || isFeatureActive
                  ? 'bg-purple-600 text-white font-semibold'
                  : 'text-gray-300  hover:bg-purple-800'
              }`
            }
          >

            <i className={icon}></i>
            {label}
          </NavLink>)}
        )}

      </nav>
    </aside>
  )};
  

export default Sidebar;
