import React from 'react'
import { Navigate } from 'react-router-dom'

const Dashboard = () => {
    const token=localStorage.getItem("token")
    if(!token){
        return <Navigate to='/login'/>
    }
    
    const logout=()=>{
        localStorage.removeItem("token")
        alert("Logout successfully")
        window.location='/'
    }

  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <button onClick={logout}>logout</button>
    </div>
  )
}

export default Dashboard
