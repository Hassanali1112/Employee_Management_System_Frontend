import React from 'react'
import { useAuth } from '../../context/AuthContext'

const AdminDashbord = () => {

  const {user} = useAuth()
  console.log(user)
  const userfromLocalStorage = JSON.parse(localStorage.getItem("user"));
  console.log("user :", userfromLocalStorage)
  return (
    <div>AdminDashbord { userfromLocalStorage.name}</div>
  )
}

export default AdminDashbord