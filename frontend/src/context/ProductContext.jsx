import React, { createContext, useState, useCallback } from 'react'
import axios from 'axios'

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState([])
  const [totalPages, setTotalPages] = useState(1)

  const getConfig = () => ({
    headers: {
      "auth-token": localStorage.getItem("token")
    }
  })

  const fetchProducts = useCallback((page = 1, search = "", sort = "") => {

    axios.get(
      `http://localhost:5000/api/products?page=${page}&search=${search}&sort=${sort}`,
      getConfig()
    )
      .then(res => {
        setProducts(res.data.products)
        setTotalPages(res.data.totalPages)
      })

  }, [])

  const addProduct = (data) => {
    return axios.post(
      "http://localhost:5000/api/products",
      data,
      getConfig()
    )
  }

  const updateProduct = (id, data) => {
    return axios.put(
      `http://localhost:5000/api/products/${id}`,
      data,
      getConfig()
    )
  }

  const deleteProduct = (id) => {
    return axios.delete(
      `http://localhost:5000/api/products/${id}`,
      getConfig()
    )
  }

  return (
    <ProductContext.Provider value={{
      products,
      totalPages,
      fetchProducts,
      addProduct,
      updateProduct,
      deleteProduct
    }}>
      {children}
    </ProductContext.Provider>
  )
}