import React, {useEffect, useState } from 'react'




const DarkModeSwitch = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        
        const hasDarkMode = localStorage.getItem('darkmode');
        if (hasDarkMode === 'on') {
          enableDarkMode();
        } else if (hasDarkMode === 'off') {
          disableDarkMode();
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          enableDarkMode();
        }
      }, []);
    
      const enableDarkMode = () => {
        setDarkMode(true);
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkmode', 'on');
      };
    
      const disableDarkMode = () => {
        setDarkMode(false);
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkmode', 'off');
      };
    
      const toggleDarkMode = () => {
        if (darkMode) {
          disableDarkMode();
        } else {
          enableDarkMode();
        }
      };
    

  return (
    <div id="darkmode-toggle-switch" className="btn-toggle-switch">
                <span className="label">Dark mode</span>
                <label htmlFor="darkmode-switch" className="toggle-switch">
                    <input id="darkmode-switch" type="checkbox" checked={darkMode} onChange={toggleDarkMode}/>
                    <span className="slider round"></span>
                </label>
            </div>
  )
}

export default DarkModeSwitch