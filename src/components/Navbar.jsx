import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-white dark:bg-primary shadow-sm dark:shadow-none" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-gray-900 dark:text-white text-[18px] font-bold cursor-pointer flex '>
            Scott &nbsp;
            <span className='sm:block hidden'> </span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-purple-500 dark:text-white" : "text-gray-700 dark:text-secondary"
              } hover:text-purple-500 dark:hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <button
          onClick={toggleTheme}
          className='hidden sm:flex ml-10 relative bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-800 rounded-full p-1.5 w-80 h-14 transition-all duration-300 items-center shadow-lg dark:shadow-2xl hover:shadow-xl dark:hover:shadow-lg/50'
          title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {/* Animated background pill with gradient */}
          <div className={`absolute top-2 bottom-2 w-1/2 rounded-full bg-gradient-to-br ${!isDark ? 'from-white to-gray-100 shadow-xl' : 'from-gray-400 to-gray-500 shadow-2xl'} transition-all duration-300 ${isDark ? 'left-[calc(50%-4px)]' : 'left-2'}`} />
          
          {/* Content */}
          <div className='relative flex w-full items-center justify-between px-8'>
            {/* Light mode section */}
            <div className={`flex items-center gap-3 transition-all duration-300`}>
              <div className={`p-2 rounded-full transition-all duration-300 ${!isDark ? 'bg-yellow-100 scale-110' : 'bg-transparent scale-100'}`}>
                <svg className={`w-7 h-7 flex-shrink-0 transition-colors duration-300 ${!isDark ? 'text-yellow-500' : 'text-gray-400'}`} fill='currentColor' viewBox='0 0 24 24'>
                  <circle cx='12' cy='12' r='5' />
                  <rect x='11' y='1' width='2' height='3' />
                  <rect x='11' y='20' width='2' height='3' />
                  <rect x='1' y='11' width='3' height='2' />
                  <rect x='20' y='11' width='3' height='2' />
                  <rect x='3.86' y='3.86' width='2.12' height='2.12' transform='rotate(45 4.92 4.92)' />
                  <rect x='17.02' y='17.02' width='2.12' height='2.12' transform='rotate(45 18.08 18.08)' />
                  <rect x='3.86' y='17.02' width='2.12' height='2.12' transform='rotate(-45 4.92 18.08)' />
                  <rect x='17.02' y='3.86' width='2.12' height='2.12' transform='rotate(-45 18.08 4.92)' />
                </svg>
              </div>
              <span className={`font-bold text-sm tracking-wider transition-colors duration-300 ${!isDark ? 'text-gray-800' : 'text-gray-400'}`}>LIGHT</span>
            </div>
            
            {/* Dark mode section */}
            <div className={`flex items-center gap-3 transition-all duration-300`}>
              <span className={`font-bold text-sm tracking-wider transition-colors duration-300 ${isDark ? 'text-gray-100' : 'text-gray-500'}`}>DARK</span>
              <div className={`p-2 rounded-full transition-all duration-300 ${isDark ? 'bg-blue-900 scale-110' : 'bg-transparent scale-100'}`}>
                <svg className={`w-7 h-7 flex-shrink-0 transition-colors duration-300 ${isDark ? 'text-blue-300' : 'text-gray-400'}`} fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M21.23 15.07c-1.76-4.8-6.78-8.07-12.23-8.07-2.35 0-4.58.67-6.46 1.84 1.87 1.24 3.46 3.09 4.4 5.23.94 2.14.94 4.52 0 6.66-.94 2.14-2.53 3.99-4.4 5.23 1.88 1.17 4.11 1.84 6.46 1.84 5.45 0 10.47-3.27 12.23-8.07.46-1.25.7-2.57.7-3.95s-.24-2.7-.7-3.95Z' />
                </svg>
              </div>
            </div>
          </div>
        </button>

        <div className='sm:hidden flex flex-1 justify-end items-center gap-4'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <button
            onClick={toggleTheme}
            className='ml-4 relative bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-800 rounded-full p-1 w-64 h-11 transition-all duration-300 items-center flex shadow-lg dark:shadow-2xl hover:shadow-xl dark:hover:shadow-lg/50'
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {/* Animated background pill with gradient */}
            <div className={`absolute top-1.5 bottom-1.5 w-1/2 rounded-full bg-gradient-to-br ${!isDark ? 'from-white to-gray-100 shadow-lg' : 'from-gray-400 to-gray-500 shadow-xl'} transition-all duration-300 ${isDark ? 'left-[calc(50%-3px)]' : 'left-1.5'}`} />
            
            {/* Content */}
            <div className='relative flex w-full items-center justify-between px-6'>
              {/* Light mode section */}
              <div className={`flex items-center gap-2 transition-all duration-300`}>
                <div className={`p-1.5 rounded-full transition-all duration-300 ${!isDark ? 'bg-yellow-100 scale-110' : 'bg-transparent scale-100'}`}>
                  <svg className={`w-5 h-5 flex-shrink-0 transition-colors duration-300 ${!isDark ? 'text-yellow-500' : 'text-gray-400'}`} fill='currentColor' viewBox='0 0 24 24'>
                    <circle cx='12' cy='12' r='5' />
                    <rect x='11' y='1' width='2' height='3' />
                    <rect x='11' y='20' width='2' height='3' />
                    <rect x='1' y='11' width='3' height='2' />
                    <rect x='20' y='11' width='3' height='2' />
                    <rect x='3.86' y='3.86' width='2.12' height='2.12' transform='rotate(45 4.92 4.92)' />
                    <rect x='17.02' y='17.02' width='2.12' height='2.12' transform='rotate(45 18.08 18.08)' />
                    <rect x='3.86' y='17.02' width='2.12' height='2.12' transform='rotate(-45 4.92 18.08)' />
                    <rect x='17.02' y='3.86' width='2.12' height='2.12' transform='rotate(-45 18.08 4.92)' />
                  </svg>
                </div>
                <span className={`font-bold text-xs transition-colors duration-300 ${!isDark ? 'text-gray-800' : 'text-gray-400'}`}>LIGHT</span>
              </div>
              
              {/* Dark mode section */}
              <div className={`flex items-center gap-2 transition-all duration-300`}>
                <span className={`font-bold text-xs transition-colors duration-300 ${isDark ? 'text-gray-100' : 'text-gray-500'}`}>DARK</span>
                <div className={`p-1.5 rounded-full transition-all duration-300 ${isDark ? 'bg-blue-900 scale-110' : 'bg-transparent scale-100'}`}>
                  <svg className={`w-5 h-5 flex-shrink-0 transition-colors duration-300 ${isDark ? 'text-blue-300' : 'text-gray-400'}`} fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M21.23 15.07c-1.76-4.8-6.78-8.07-12.23-8.07-2.35 0-4.58.67-6.46 1.84 1.87 1.24 3.46 3.09 4.4 5.23.94 2.14.94 4.52 0 6.66-.94 2.14-2.53 3.99-4.4 5.23 1.88 1.17 4.11 1.84 6.46 1.84 5.45 0 10.47-3.27 12.23-8.07.46-1.25.7-2.57.7-3.95s-.24-2.7-.7-3.95Z' />
                  </svg>
                </div>
              </div>
            </div>
          </button>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
