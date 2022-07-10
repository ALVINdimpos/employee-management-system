import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from "./pages/Employee";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Dashboard from './pages/Dashboard';
import EmpDashboard from './pages/EmpDashboard';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Employee" element={<Employee />} />
        <Route path="Admin" element={<Admin />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="EmpDashboard" element={<EmpDashboard />} />
      
      
    </Routes>
  </BrowserRouter>
  )
}

export default App