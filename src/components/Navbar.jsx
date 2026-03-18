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
                <svg className={`w-6 h-6 flex-shrink-0 transition-colors duration-300 ${!isDark ? 'text-yellow-600' : 'text-gray-400'}`} fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1h0zm4.323 2.677a1 1 0 00-1.414 0l-.707.707a1 1 0 101.414 1.414l.707-.707a1 1 0 000-1.414h0zM16 10a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm2.323-7.677a1 1 0 00-1.414 0l-.707.707a1 1 0 001.414 1.414l.707-.707a1 1 0 000-1.414zM16 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm5.657 9.193a1 1 0 001.414-1.414l-.707-.707a1 1 0 10-1.414 1.414l.707.707zM5 10a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM3.464 13.536a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707z' clipRule='evenodd' />
                </svg>
              </div>
              <span className={`font-bold text-sm tracking-wider transition-colors duration-300 ${!isDark ? 'text-gray-800' : 'text-gray-400'}`}>LIGHT</span>
            </div>
            
            {/* Dark mode section */}
            <div className={`flex items-center gap-3 transition-all duration-300`}>
              <span className={`font-bold text-sm tracking-wider transition-colors duration-300 ${isDark ? 'text-gray-100' : 'text-gray-500'}`}>DARK</span>
              <div className={`p-2 rounded-full transition-all duration-300 ${isDark ? 'bg-blue-900 scale-110' : 'bg-transparent scale-100'}`}>
                <svg className={`w-6 h-6 flex-shrink-0 transition-colors duration-300 ${isDark ? 'text-blue-400' : 'text-gray-400'}`} fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
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
                  <svg className={`w-4 h-4 flex-shrink-0 transition-colors duration-300 ${!isDark ? 'text-yellow-600' : 'text-gray-400'}`} fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1h0zm4.323 2.677a1 1 0 00-1.414 0l-.707.707a1 1 0 101.414 1.414l.707-.707a1 1 0 000-1.414h0zM16 10a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm2.323-7.677a1 1 0 00-1.414 0l-.707.707a1 1 0 001.414 1.414l.707-.707a1 1 0 000-1.414zM16 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm5.657 9.193a1 1 0 001.414-1.414l-.707-.707a1 1 0 10-1.414 1.414l.707.707zM5 10a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM3.464 13.536a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707z' clipRule='evenodd' />
                  </svg>
                </div>
                <span className={`font-bold text-xs transition-colors duration-300 ${!isDark ? 'text-gray-800' : 'text-gray-400'}`}>LIGHT</span>
              </div>
              
              {/* Dark mode section */}
              <div className={`flex items-center gap-2 transition-all duration-300`}>
                <span className={`font-bold text-xs transition-colors duration-300 ${isDark ? 'text-gray-100' : 'text-gray-500'}`}>DARK</span>
                <div className={`p-1.5 rounded-full transition-all duration-300 ${isDark ? 'bg-blue-900 scale-110' : 'bg-transparent scale-100'}`}>
                  <svg className={`w-4 h-4 flex-shrink-0 transition-colors duration-300 ${isDark ? 'text-blue-400' : 'text-gray-400'}`} fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
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
