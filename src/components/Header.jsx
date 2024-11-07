import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import DarkModeSwitch from './DarkModeSwitch'
import Navbar from './Navbar'

const Header = () => {

    
  const location = useLocation();

  const getBackground = () => {
    switch (location.pathname) {
      case '/Contact':
        return { backgroundColor: 'var(--color-gray1)' };
    }
  };
  
  return (
    <>
    <header className="header"  style={getBackground()}>
        <div className="container">
            
            <Link id="logo" to="/"><img src="/src/Image/Silicon.svg" alt="logga Silicon"/></Link>
            
            <Link id="logo-dark" to="/"><img src="/src/Image/Dark/solid.svg" alt="logga Silicon"/></Link>

            <nav id="main-menu" className="navbar"> 
                <NavLink className="nav-link" to="/Feature">Features</NavLink>
            </nav>

            <nav id="main-menu" className="navbar"> 
                <NavLink className="nav-link" to="/Contact">Contact</NavLink>
            </nav>

            <DarkModeSwitch />

            <a id="auth-signin" href="#" className="btn-primary">
                <img src="/src/Image/icon-l.svg" alt="User"/>
                <span>sign / up</span>
            </a>

            <Navbar />
            

        </div>

    </header>
    </>
  )
}

export default Header