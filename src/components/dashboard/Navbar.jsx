import React from 'react'
import { useAuth } from '../../context/AuthProvider'

const Navbar = () => {
  const {user, logout} = useAuth()
  return (
    <div className='flex justify-between items-center bg-teal-600 px-3 py-2 text-white fixed to-0% w-full '>
      <h2 className='text-xl '>Welcome, {user.name.split(" ")[0]} </h2>
      <button onClick={logout} className='bg-red-500 px-2 py-1 rounded '>Logout</button>
    </div>
  )
}

export default Navbar