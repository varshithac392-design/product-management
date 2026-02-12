import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Register() {

  const navigate = useNavigate()

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user"
  })

  const handleRegister = () => {
    axios.post("http://localhost:5000/api/auth/register", data)
      .then(() => {
        alert("Registered Successfully")
        navigate("/")
      })
      .catch(() => {
        alert("Registration Failed")
      })
  }

  return (
    <div className="card p-4 shadow">

      <h3 className="text-center mb-3">Register</h3>

      <input
        className="form-control mb-3"
        placeholder="Username"
        onChange={e => setData({...data, username: e.target.value})}
      />

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

      <select
        className="form-select mb-3"
        onChange={e => setData({...data, role: e.target.value})}
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <button
        className="btn btn-success w-100"
        onClick={handleRegister}
      >
        Register
      </button>

    </div>
  )
}

export default Register