import React, { useContext } from 'react'
import AddProduct from '../components/AddProduct'
import ProductList from '../components/ProductList'
import Navbar from '../components/Navbar'
import { AuthContext } from '../context/AuthContext'

function Dashboard() {

  const { role } = useContext(AuthContext)

  return (
    <div>

      <Navbar />

      <div className="container mt-4">

        {role === "admin" && <AddProduct />}

        <ProductList />

      </div>

    </div>
  )
}

export default Dashboard