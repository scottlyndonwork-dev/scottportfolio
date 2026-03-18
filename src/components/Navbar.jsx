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
          className='hidden sm:flex ml-10 relative bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-800 rounded-full p-1 w-64 h-11 transition-all duration-300 items-center shadow-lg dark:shadow-2xl hover:shadow-xl dark:hover:shadow-lg/50'
          title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {/* Animated background pill with gradient */}
          <div className={`absolute top-1.5 bottom-1.5 w-1/2 rounded-full bg-gradient-to-br ${!isDark ? 'from-white to-gray-100 shadow-xl' : 'from-gray-400 to-gray-500 shadow-2xl'} transition-all duration-300 ${isDark ? 'left-[calc(50%-3px)]' : 'left-1.5'}`} />
          
          {/* Content */}
          <div className='relative flex w-full items-center justify-between px-6'>
            {/* Light mode section */}
            <span className={`font-bold text-sm tracking-wider transition-colors duration-300 ${!isDark ? 'text-gray-800' : 'text-gray-400'}`}>LIGHT</span>
            
            {/* Dark mode section */}
            <span className={`font-bold text-sm tracking-wider transition-colors duration-300 ${isDark ? 'text-gray-100' : 'text-gray-500'}`}>DARK</span>
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
            className='ml-4 relative bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-800 rounded-full p-1 w-48 h-9 transition-all duration-300 items-center flex shadow-lg dark:shadow-2xl hover:shadow-xl dark:hover:shadow-lg/50'
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {/* Animated background pill with gradient */}
            <div className={`absolute top-1 bottom-1 w-1/2 rounded-full bg-gradient-to-br ${!isDark ? 'from-white to-gray-100 shadow-lg' : 'from-gray-400 to-gray-500 shadow-xl'} transition-all duration-300 ${isDark ? 'left-[calc(50%-2px)]' : 'left-1'}`} />
            
            {/* Content */}
            <div className='relative flex w-full items-center justify-between px-4'>
              {/* Light mode section */}
              <span className={`font-bold text-xs tracking-wider transition-colors duration-300 ${!isDark ? 'text-gray-800' : 'text-gray-400'}`}>LIGHT</span>
              
              {/* Dark mode section */}
              <span className={`font-bold text-xs tracking-wider transition-colors duration-300 ${isDark ? 'text-gray-100' : 'text-gray-500'}`}>DARK</span>
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
