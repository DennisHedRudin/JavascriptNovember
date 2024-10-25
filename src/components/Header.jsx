import React from 'react'

const Header = () => {
  return (
    <>
    <header className="header">
        <div className="container">
            
            <a id="logo" href="Sida.html"><img src="/src/Image/Silicon.svg" alt="logga Silicon"/></a>
            
            <a id="logo-dark" href="Sida.html"><img src="/src/Image/Dark/solid.svg" alt="logga Silicon"/></a>

            <nav id="main-menu" className="navbar"> 
                <a className="nav-link" href="#features">Features</a>
            </nav>

            <nav id="main-menu" className="navbar"> 
                <a className="nav-link" href="#Contact">Contact</a>
            </nav>

            <div id="darkmode-toggle-switch" className="btn-toggle-switch">
                <span className="label">Dark mode</span>
                <label for="darkmode-switch" className="toggle-switch">
                    <input id="darkmode-switch" type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>

            <a id="auth-signin" href="#" className="btn-primary">
                <img src="/src/Image/icon-l.svg" alt="User"/>
                <span>sign / up</span>
            </a>

            <button className="btn-mobile">
                <img src="/src/Image/Button - Toggle navigation.svg" alt="Toggle-nav"/>
            </button>
            

        </div>

    </header>
    </>
  )
}

export default Header