import React, { useState, useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

function EditProduct({ product, closeEdit }) {

  const { updateProduct, fetchProducts } =
    useContext(ProductContext)

  const [formData, setFormData] = useState(product)

  const handleSubmit = () => {
    updateProduct(product._id, formData).then(() => {
      alert("Updated")
      fetchProducts()
      closeEdit()
    })
  }

  return (
    <div className="card p-3 mt-3">

      <h4>Edit Product</h4>

      <input
        className="form-control mb-2"
        value={formData.name}
        onChange={e => setFormData({...formData, name: e.target.value})}
      />

      <input
        className="form-control mb-2"
        value={formData.category}
        onChange={e => setFormData({...formData, category: e.target.value})}
      />

      <input
        className="form-control mb-2"
        value={formData.price}
        onChange={e => setFormData({...formData, price: e.target.value})}
      />

      <input
        className="form-control mb-2"
        value={formData.quantity}
        onChange={e => setFormData({...formData, quantity: e.target.value})}
      />

      <input
        className="form-control mb-2"
        value={formData.imageUrl}
        onChange={e => setFormData({...formData, imageUrl: e.target.value})}
      />

      <button className="btn btn-primary me-2" onClick={handleSubmit}>
        Update
      </button>

      <button className="btn btn-secondary" onClick={closeEdit}>
        Cancel
      </button>

    </div>
  )
}

export default EditProduct