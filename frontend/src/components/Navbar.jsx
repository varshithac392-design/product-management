import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

function Navbar() {

  const { role, logout } = useContext(AuthContext)

  return (
    <nav className="navbar navbar-dark bg-dark p-3">

      <div className="container-fluid">

        <Link className="navbar-brand" to="/dashboard">
          MERN Shop
        </Link>

        <div>

          <Link className="btn btn-light me-2" to="/dashboard">
            Products
          </Link>

          {role === "admin" && (
            <Link className="btn btn-light me-2" to="/admin-orders">
              Manage Orders
            </Link>
          )}

          <Link className="btn btn-light me-2" to="/my-orders">
            My Orders
          </Link>

          <button className="btn btn-danger" onClick={logout}>
            Logout
          </button>

        </div>

      </div>

    </nav>
  )
}

export default Navbar