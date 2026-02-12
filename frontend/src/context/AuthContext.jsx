import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

  const [token, setToken] = useState(localStorage.getItem("token"))
  const [role, setRole] = useState(localStorage.getItem("role"))

  const login = (t, r) => {
    localStorage.setItem("token", t)
    localStorage.setItem("role", r)
    setToken(t)
    setRole(r)
  }

  const logout = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <AuthContext.Provider value={{ token, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}