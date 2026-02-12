import React, { createContext } from 'react'
import axios from 'axios'

export const OrderContext = createContext()

export const OrderProvider = ({ children }) => {

  const getConfig = () => ({
    headers: {
      "auth-token": localStorage.getItem("token")
    }
  })

  const placeOrder = (data) => {
    return axios.post(
      "http://localhost:5000/api/orders",
      data,
      getConfig()
    )
  }

  const getMyOrders = () => {
    return axios.get(
      "http://localhost:5000/api/orders/my",
      getConfig()
    )
  }

  const getAllOrders = () => {
    return axios.get(
      "http://localhost:5000/api/orders",
      getConfig()
    )
  }

  const updateStatus = (id, status) => {
    return axios.put(
      `http://localhost:5000/api/orders/${id}`,
      { status },
      getConfig()
    )
  }

  const cancelOrder = (id) => {
    return axios.delete(
      `http://localhost:5000/api/orders/${id}`,
      getConfig()
    )
  }

  return (
    <OrderContext.Provider value={{
      placeOrder,
      getMyOrders,
      getAllOrders,
      updateStatus,
      cancelOrder
    }}>
      {children}
    </OrderContext.Provider>
  )
}