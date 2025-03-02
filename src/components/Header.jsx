import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.png';

export const Header = () => {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "light");

  // Handle theme change effect
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));  
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <header>
      <div className='logo'>
        <img src={Logo} alt="Todo logo" />
        <span>ToDo</span>
      </div>

      <div className='themeSelector'>
        <button onClick={toggleTheme} className="themeButton">
          {/* Sun for light mode, Moon for dark mode */}
          {theme === "light" ? (
            <i className="bi bi-sun"></i> // Sun Icon for Light Theme
          ) : (
            <i className="bi bi-moon"></i> // Moon Icon for Dark Theme
          )}
        </button>
      </div>
    </header>
  );
};
