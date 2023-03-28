import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar-options'>
            <NavLink to='/' className='navbar-option'>
                Home
            </NavLink>
            <NavLink to='/characters' className='navbar-option'>
                Characters
            </NavLink>
            <NavLink to='/weapons' className='navbar-option'>
                Weapons
            </NavLink>
        </div>
    </nav>
  )
}

export default Navbar