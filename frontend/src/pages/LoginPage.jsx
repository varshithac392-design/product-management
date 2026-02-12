import React from 'react'
import Login from '../components/Login'
import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <div className="container mt-5">

      <h2 className="text-center mb-4">Product Management - Login</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">

          <Login />

          <p className="text-center mt-3">
            Don't have an account?{" "}
            <Link to="/register">Register Here</Link>
          </p>

        </div>
      </div>

    </div>
  )
}

export default LoginPage