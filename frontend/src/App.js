import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Dashboard from './pages/Dashboard'
import MyOrders from './pages/MyOrders'
import AdminOrders from './pages/AdminOrders'

import { AuthContext } from './context/AuthContext'

function App() {

  const { token } = useContext(AuthContext)

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={!token ? <LoginPage /> : <Navigate to="/dashboard" />} />

        <Route path="/register" element={!token ? <RegisterPage /> : <Navigate to="/dashboard" />} />

        <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/" />} />

        <Route path="/my-orders" element={token ? <MyOrders /> : <Navigate to="/" />} />

        <Route path="/admin-orders" element={token ? <AdminOrders /> : <Navigate to="/" />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App