'use client'

import { useEffect, useState } from 'react';
import { FaMoon} from 'react-icons/fa'
import { FiSun } from "react-icons/fi";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<string>('light');
    const [isMounted, setIsMounted] = useState<boolean>(false); // Track if the component is mounted
  
    useEffect(() => {
      // Mark as mounted
      setIsMounted(true);
  
      // Retrieve the user's theme preference from localStorage
      const storedTheme = localStorage.getItem('theme') || 'light';
      setTheme(storedTheme);
    }, []);
  
    useEffect(() => {
      const root = document.documentElement;
  
      if (theme === 'dark') {
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }, [theme]);
  
    const toggleTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    };
  
    if (!isMounted) return null; // Prevent rendering until mounted
  
    return (
      <button 
        onClick={toggleTheme} 
        className="pl-1 rounded-full focus:outline-none transition-all duration-700 ease-in-out"
      >
        {theme === 'dark' ? (
          <FaMoon className=" w-4 h-4" />
        ) : (
          <FiSun className="w-4 h-4" />
        )}
      </button>
    );
  }