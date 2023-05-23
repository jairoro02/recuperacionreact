import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import UserProvider from '../context/UserContext'


const LayoutPublic = () => {
  return (
  <UserProvider>
      <div>
          <Navbar />
          <Outlet />  
      </div>
    </UserProvider>
  )
}

export default LayoutPublic