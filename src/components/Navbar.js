import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const activeLinkStyle = {
    color: '#2dd4bf',
    borderBottom: '2px solid #2dd4bf'
  };

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-center space-x-4 md:space-x-8">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
            className="text-gray-300 hover:text-teal-400 font-medium pb-1 transition duration-200"
          >
            Market
          </NavLink>

          <NavLink
            to="/news"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
            className="text-gray-300 hover:text-teal-400 font-medium pb-1 transition duration-200"
          >
            News
          </NavLink>

          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
            className="text-gray-300 hover:text-teal-400 font-medium pb-1 transition duration-200"
          >
            About
          </NavLink>

          {/* Added here: Exchanges link */}
          <NavLink
            to="/exchanges"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
            className="text-gray-300 hover:text-teal-400 font-medium pb-1 transition duration-200"
          >
            Exchanges
          </NavLink>

          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
            className="text-gray-300 hover:text-teal-400 font-medium pb-1 transition duration-200"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
