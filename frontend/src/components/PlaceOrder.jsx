import React, { useState, useContext } from 'react'
import { OrderContext } from '../context/OrderContext'

function PlaceOrder({ product }) {

  const { placeOrder } = useContext(OrderContext)

  const [quantity, setQuantity] = useState(1)

  const submit = () => {
    placeOrder({
      productId: product._id,
      quantity: quantity
    }).then(() => {
      alert("Order Placed Successfully")
    })
  }

  return (
    <div className="mt-2">

      <input
        type="number"
        className="form-control mb-2"
        value={quantity}
        min="1"
        onChange={e => setQuantity(e.target.value)}
      />

      <button className="btn btn-success w-100" onClick={submit}>
        Place Order (COD)
      </button>

    </div>
  )
}

export default PlaceOrder