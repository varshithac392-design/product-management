import React, { useState, useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

function AddProduct() {

  const { addProduct, fetchProducts } =
    useContext(ProductContext)

  const [form, setForm] = useState({})

  const submit = () => {
    addProduct(form).then(() => {
      alert("Product Added")
      fetchProducts()
    })
  }

  return (
    <div className="card p-4 shadow mb-4">

      <h3>Add Product</h3>

      <input
        className="form-control mb-2"
        placeholder="Name"
        onChange={e => setForm({...form, name: e.target.value})}
      />

      <input
        className="form-control mb-2"
        placeholder="Category"
        onChange={e => setForm({...form, category: e.target.value})}
      />

      <input
        className="form-control mb-2"
        placeholder="Price"
        onChange={e => setForm({...form, price: e.target.value})}
      />

      <input
        className="form-control mb-2"
        placeholder="Quantity"
        onChange={e => setForm({...form, quantity: e.target.value})}
      />

      <input
        className="form-control mb-2"
        placeholder="Image URL"
        onChange={e => setForm({...form, imageUrl: e.target.value})}
      />

      <button className="btn btn-success" onClick={submit}>
        Add Product
      </button>

    </div>
  )
}

export default AddProduct