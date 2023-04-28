import React, { useState } from 'react';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-700 p-6 w-full z-10 top-0">
<div className="flex items-center flex-shrink-0 mr-6">
  {/* <svg
    className="fill-current h-6 w-6 mr-2"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg> */}
  <span className="font-semibold text-xl text-white tracking-tight">GrowView</span>
</div>
      <div className="block lg:hidden">
        <button
          id="nav-toggle"
          className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
          onClick={handleNavToggle}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
          isNavOpen ? '' : 'hidden'
        } pt-6 lg:pt-0`}
        id="nav-content"
      >
        <ul className="lg:flex items-center justify-end flex-1">
          <li className="mr-3">
            <a
              href="#home"
              className="block lg:inline-block text-white hover:text-gray-300 mr-4"
            >
              Home
            </a>
          </li>
          <li className="mr-3">
            <a
              href="#about"
              className="block lg:inline-block text-white hover:text-gray-300 mr-4"
            >
              About
            </a>
          </li>
          <li className="mr-3">
            <a
              href="#contact"
              className="block lg:inline-block text-white hover:text-gray-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
