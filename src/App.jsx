import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import AdminDashbord from './pages/admin/AdminDashbord'
import Dashboard from './components/dashboard/Dashboard'
import Employee from './components/dashboard/Employee'
import Departments from './components/dashboard/Departments'
import AddDepartment from './components/dashboard/AddDepartment'
import AddEmployee from './pages/admin/AddEmployee'

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
            <Route path="/admin-dashboard/add-employee" element={<AddEmployee />} />
            <Route path="/admin-dashboard/departments" element={<Departments />} />
            <Route path="/admin-dashboard/add-department" element={<AddDepartment />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App