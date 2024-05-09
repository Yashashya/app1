import React from 'react'
import { AdminDashboard } from './AdminDashboard'
import { UserDashboard } from './UserDashboard'

export const Dashboard = (props) => {

  props = "DELHI";
  console.log(props);
  return (
    <>
        {props}
    {
      
        // userType == "ADMIN"?<AdminDashboard />:<UserDashboard />
    }



    </>
  )
}
