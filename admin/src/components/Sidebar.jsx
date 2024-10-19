import React from 'react';
import { NavLink } from 'react-router-dom';
import { add_icon_green, add_icon_white } from '../../../frontend/public/assets';

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen bg-gray-800 text-white">
      <div className="pt-12  flex flex-col gap-5">
        <NavLink 
          to="/add" 
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-l-lg hover:bg-orange-400 transition-all duration-300 ${
              isActive ? 'bg-orange-500' : ''
            }`
          }
        >
          <img src={add_icon_white} alt="Add" className="w-5 h-5" />
          <p className="hidden md:block text-lg">Add Items</p>
        </NavLink>
       
        <NavLink 
          to="/order" 
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-l-lg hover:bg-orange-400 transition-all duration-300 ${
              isActive ? 'bg-orange-500' : ''
            }`
          }
        >
          <img src={add_icon_white} alt="Orders" className="w-5 h-5" />
          <p className="hidden md:block text-lg">Orders</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
