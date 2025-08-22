import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Navigate to={"/admin-dashboard"} />} />
        <Route path='/login' element={ <Login /> } />
      </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App