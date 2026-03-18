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
          className='hidden sm:flex ml-10 relative bg-gray-300 dark:bg-gray-700 rounded-full p-1 w-56 transition-colors'
          title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          <div className={`absolute top-1 left-1 right-1 bottom-1 rounded-full bg-white dark:bg-gray-800 transition-all duration-300 ${isDark ? 'translate-x-28' : 'translate-x-0'}`} />
          
          <div className='relative flex w-full items-center justify-between px-4 py-2 text-sm font-semibold'>
            <span className={`flex items-center gap-2 z-10 transition-colors ${!isDark ? 'text-gray-700' : 'text-gray-400'}`}>
              <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1h0zm4.323 2.677a1 1 0 00-1.414 0l-.707.707a1 1 0 101.414 1.414l.707-.707a1 1 0 000-1.414h0zM16 10a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm2.323-7.677a1 1 0 00-1.414 0l-.707.707a1 1 0 001.414 1.414l.707-.707a1 1 0 000-1.414zM16 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm5.657 9.193a1 1 0 001.414-1.414l-.707-.707a1 1 0 10-1.414 1.414l.707.707zM5 10a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM3.464 13.536a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707z' clipRule='evenodd' />
              </svg>
              LIGHT
            </span>
            
            <span className={`flex items-center gap-2 z-10 transition-colors ${isDark ? 'text-gray-200' : 'text-gray-400'}`}>
              DARK
              <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
              </svg>
            </span>
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
            className='ml-4 relative bg-gray-300 dark:bg-gray-700 rounded-full p-1 w-40 transition-colors'
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <div className={`absolute top-1 left-1 right-1 bottom-1 rounded-full bg-white dark:bg-gray-800 transition-all duration-300 ${isDark ? 'translate-x-20' : 'translate-x-0'}`} />
            
            <div className='relative flex w-full items-center justify-between px-3 py-1.5 text-xs font-semibold'>
              <span className={`flex items-center gap-1 z-10 transition-colors ${!isDark ? 'text-gray-700' : 'text-gray-400'}`}>
                <svg className='w-3 h-3' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1h0zm4.323 2.677a1 1 0 00-1.414 0l-.707.707a1 1 0 101.414 1.414l.707-.707a1 1 0 000-1.414h0zM16 10a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm2.323-7.677a1 1 0 00-1.414 0l-.707.707a1 1 0 001.414 1.414l.707-.707a1 1 0 000-1.414zM16 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm5.657 9.193a1 1 0 001.414-1.414l-.707-.707a1 1 0 10-1.414 1.414l.707.707zM5 10a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM3.464 13.536a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707z' clipRule='evenodd' />
                </svg>
              </span>
              
              <span className={`flex items-center gap-1 z-10 transition-colors ${isDark ? 'text-gray-200' : 'text-gray-400'}`}>
                <svg className='w-3 h-3' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
                </svg>
              </span>
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
