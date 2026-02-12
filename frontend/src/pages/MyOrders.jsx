import React, { useEffect, useState, useContext, useCallback } from 'react'
import { OrderContext } from '../context/OrderContext'
import Navbar from '../components/Navbar'

function MyOrders() {

  const { getMyOrders, cancelOrder } = useContext(OrderContext)

  const [orders, setOrders] = useState([])

  const loadOrders = useCallback(() => {
    getMyOrders().then(res => setOrders(res.data))
  }, [getMyOrders])

  useEffect(() => {
    loadOrders()
  }, [loadOrders])

  const handleCancel = (id) => {
    cancelOrder(id).then(() => {
      alert("Order Cancelled")
      loadOrders()
    })
  }

  return (
    <div>

      <Navbar />

      <div className="container mt-4">

        <h3 className="mb-3">My Orders</h3>

        <div className="card p-3 shadow">

          <table className="table table-striped">

            <thead className="table-dark">
              <tr>
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
                  <td>{o.productId?.name}</td>
                  <td>{o.quantity}</td>
                  <td>₹{o.totalPrice}</td>
                  <td>{o.status}</td>

                  <td>
                    {o.status === "Pending" && (
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleCancel(o._id)}
                      >
                        Cancel Order
                      </button>
                    )}
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

export default MyOrders