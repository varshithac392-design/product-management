import React, { useState, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Login() {

  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const handleLogin = () => {
    axios.post("http://localhost:5000/api/auth/login", data)
      .then(res => {
        login(res.data.token, res.data.role)
        navigate("/dashboard")
      })
      .catch(() => {
        alert("Invalid Credentials")
      })
  }

  return (
    <div className="card p-4 shadow">

      <h3 className="text-center mb-3">Login</h3>

      <input
        className="form-control mb-3"
        placeholder="Email"
        onChange={e => setData({...data, email: e.target.value})}
      />

      <input
        type="password"
        className="form-control mb-3"
        placeholder="Password"
        onChange={e => setData({...data, password: e.target.value})}
      />

      <button
        className="btn btn-primary w-100"
        onClick={handleLogin}
      >
        Login
      </button>

    </div>
  )
}

export default Login