import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const pillLinkClass = ({ isActive }) =>
    isActive
      ? 'inline-block border border-steel rounded py-1 px-3 bg-steel text-offwhite'
      : 'inline-block border border-offwhite rounded hover:border-softblue text-steel hover:bg-softblue py-1 px-3';
  //just a simple pill link nav bar is what its called 
  return (
    <nav className="bg-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between">
  
          <div className="flex items-center">
            <img
              src="/DW.png" 
              alt="Logo"
              className="w-13 h-12"
            />
          </div>
        <ul className="flex justify-end space-x-3">

          <li>
            <NavLink to="/" className={pillLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Education" className={pillLinkClass}>
             Education & Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/Projects" className={pillLinkClass}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact" className={pillLinkClass}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
};

export default NavBar;
