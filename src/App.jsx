import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import AdminDashbord from './pages/admin/AdminDashbord'
import Dashboard from './components/dashboard/Dashboard'
import Employee from './components/dashboard/Employee'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/admin-dashboard"} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminDashbord />}>
            <Route index element={<Dashboard />} />
            <Route path="/admin-dashboard/employee" element={<Employee />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App