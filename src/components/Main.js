import React from 'react'
import { Header } from './Header'
import { SideBar } from './sideBar'
import { Outlet } from 'react-router-dom'

export const Main = () => {
  return (
    <>
    <Header />
    <SideBar />

    <Outlet />

    </>
  )
}
