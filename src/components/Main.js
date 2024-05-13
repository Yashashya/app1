import React, { useEffect } from 'react'
import { Header } from './Header'
import { SideBar } from './sideBar'
import { Outlet } from 'react-router-dom'

export const Main = () => {

  useEffect(() => {
    
  
    document.body.className = document.body.className.replace("login-page","sidebar-mini");
    return () => {
      
    }
  }, []);
  
  return (
    <>
    <Header />
    <SideBar />

    <Outlet />

    </>
  )
}
