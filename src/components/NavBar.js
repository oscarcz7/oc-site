// src/components/NavBar.js
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`bg-${theme}-500 p-4`}>
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-2xl font-bold">
          Your Project
        </Link>
        <div className="flex space-x-4">
          <NavLink
            to="/"
            className="text-white hover:underline"
            activeClassName="underline"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-white hover:underline"
            activeClassName="underline"
          >
            About
          </NavLink>
        </div>
        <button
          onClick={toggleTheme}
          className="text-white hover:underline focus:outline-none"
        >
          Toggle Theme
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
