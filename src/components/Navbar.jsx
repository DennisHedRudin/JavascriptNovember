import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

const Navbar= () => {
    const [ShowMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!ShowMenu)
    } 


  return (
    <>
    <button className="btn-mobile"  onClick={toggleMenu}>
                <img src="/src/Image/Button - Toggle navigation.svg" alt="Toggle-nav"/>
    </button>    
        <div className={`${!ShowMenu ? 'hideNav' : ''}`}>
            <nav className="nav-links">
                <NavLink className="nav-link" to="/Feature">Features</NavLink>
                <NavLink className="nav-link" to="/FAQ">FAQ</NavLink>
                <NavLink className="nav-link" to="/Contact">Contact</NavLink>
            </nav>

        </div>
    
    </>


  )
}

export default Navbar