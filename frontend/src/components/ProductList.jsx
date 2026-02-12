import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../context/ProductContext'
import { AuthContext } from '../context/AuthContext'
import EditProduct from './EditProduct'
import PlaceOrder from './PlaceOrder'
function ProductList() {

  const { products, totalPages, fetchProducts, deleteProduct } =
    useContext(ProductContext)

  const { role } = useContext(AuthContext)

  const [selectedProduct, setSelectedProduct] = useState(null)

  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("")

  useEffect(() => {
    fetchProducts(page, search, sort)
  }, [page, search, sort, fetchProducts])

  return (
    <div className="card p-4 shadow">

      <h3>Products</h3>

      <div className="row mb-3">

        <div className="col-md-4">
          <input
            className="form-control"
            placeholder="Search"
            onChange={e => {
              setSearch(e.target.value)
              setPage(1)
            }}
          />
        </div>

        <div className="col-md-4">
          <select
            className="form-select"
            onChange={e => {
              setSort(e.target.value)
              setPage(1)
            }}
          >
            <option value="">Sort By Price</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>

      </div>

      <div className="row">
        {products.map(p => (
          <div className="col-md-4 mb-3" key={p._id}>
            <div className="card p-3">

              <img
                src={p.imageUrl}
                alt="product"
                style={{ height: "150px", objectFit: "cover" }}
              />

              <h5>{p.name}</h5>
              <p>{p.category}</p>
              <p>Price: ₹{p.price}</p>
              {role !== "admin" && (
  <PlaceOrder product={p} />
)}
              {role === "admin" && (
                <>
                  <button
                    className="btn btn-warning btn-sm mb-2"
                    onClick={() => setSelectedProduct(p)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteProduct(p._id)}
                  >
                    Delete
                  </button>
                </>
              )}

            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION UI */}
      <div className="d-flex justify-content-center mt-3">

        <button
          className="btn btn-secondary me-2"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>

        <span className="align-self-center">
          Page {page} of {totalPages}
        </span>

        <button
          className="btn btn-secondary ms-2"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>

      </div>

      {selectedProduct && (
        <EditProduct
          product={selectedProduct}
          closeEdit={() => setSelectedProduct(null)}
        />
      )}

    </div>
  )
}

export default ProductList