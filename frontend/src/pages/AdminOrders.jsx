import React, { useEffect, useState, useContext, useCallback } from 'react'
import { OrderContext } from '../context/OrderContext'
import { AuthContext } from '../context/AuthContext'
import Navbar from '../components/Navbar'

function AdminOrders() {

  const { getAllOrders, updateStatus } = useContext(OrderContext)
  const { role } = useContext(AuthContext)

  const [orders, setOrders] = useState([])

  const loadOrders = useCallback(() => {
    getAllOrders().then(res => setOrders(res.data))
  }, [getAllOrders])

  useEffect(() => {
    loadOrders()
  }, [loadOrders])

  const changeStatus = (id, status) => {
    updateStatus(id, status).then(() => {
      alert("Order Status Updated")
      loadOrders()
    })
  }

  if (role !== "admin") {
    return <h3 className="text-center mt-5">Access Denied</h3>
  }

  return (
    <div>

      <Navbar />

      <div className="container mt-4">

        <h3>All Orders (Admin)</h3>

        <div className="card p-3 shadow">

          <table className="table table-bordered mt-3">

            <thead className="table-dark">
              <tr>
                <th>User</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {orders.map(o => (
                <tr key={o._id}>
                  <td>{o.userId?.username}</td>
                  <td>{o.productId?.name}</td>
                  <td>{o.quantity}</td>
                  <td>{o.totalPrice}</td>
                  <td>{o.status}</td>

                  <td>
                    <select
                      className="form-select"
                      onChange={e => changeStatus(o._id, e.target.value)}
                    >
                      <option>Change Status</option>
                      <option value="Pending">Pending</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>
    </div>
  )
}

export default AdminOrders