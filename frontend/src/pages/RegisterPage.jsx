import React from 'react'
import Register from '../components/Register'
import { Link } from 'react-router-dom'

function RegisterPage() {
  return (
    <div className="container mt-5">

      <h2 className="text-center mb-4">Product Management - Register</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">

          <Register />

          <p className="text-center mt-3">
            Already have an account?{" "}
            <Link to="/">Login Here</Link>
          </p>

        </div>
      </div>

    </div>
  )
}

export default RegisterPage