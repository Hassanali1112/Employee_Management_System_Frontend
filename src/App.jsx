import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import AdminDashbord from './pages/admin/AdminDashbord'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Navigate to={"/admin-dashboard"} />} />
        <Route path='/login' element={ <Login /> } />
        <Route path="/admin-dashboard" element={<AdminDashbord />} />
      </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App