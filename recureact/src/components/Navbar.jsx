import React from 'react'
import {NavLink} from 'react-router-dom'
import { useUserContext } from '../context/UserContext'

const Navbar = () => {
    const { user } = useUserContext()
    console.log(user)
  return (
    <nav className='navbar'>
        <div className='navbar-options'>
            <NavLink to='/' className='navbar-option'>
                Maps
            </NavLink>
            <NavLink to='/characters' className='navbar-option'>
                Characters
            </NavLink>
            <NavLink to='/weapons' className='navbar-option'>
                Weapons
            </NavLink>
        </div>

        <div className='user-options'>
        {user ? (
          <NavLink to='/weapons' className='user-option'>
            Profile
          </NavLink>
        ) : (
          
          <NavLink to='/register' className='user-option'>
            Register
          </NavLink>
        )}
      </div>
    </nav>
  )
}

export default Navbar