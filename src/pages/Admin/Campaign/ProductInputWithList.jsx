import React, { useState } from 'react'

export default function ProductInputWithList({ isDarkMode }) {
  const [showProductList, setShowProductList] = useState(false)
  const [selectedProducts, setSelectedProducts] = useState([])
  const productList = [
    {
      id: 1,
      value: 1,
      name: 'Product 1',
      imageUrl: 'product1.jpg',
      actualPrice: 100,
      discountPrice: 80,
      discountType: 'Percentage',
    },
    {
      id: 2,
      value: 2,
      name: 'Product 2',
      imageUrl: 'product2.jpg',
      actualPrice: 120,
      discountPrice: 100,
      discountType: 'Amount',
    },
    // Add more products as needed
  ]

  const handleInputClick = () => {
    setShowProductList(!showProductList)
  }

  const handleProductSelection = product => {
    const index = selectedProducts.findIndex(p => p.id === product.id)
    if (index === -1) {
      setSelectedProducts([
        ...selectedProducts,
        { ...product, editedDiscountPrice: product.discountPrice },
      ])
    } else {
      const updatedProducts = [...selectedProducts]
      updatedProducts.splice(index, 1)
      setSelectedProducts(updatedProducts)
    }
  }

  const handleDeleteSelectedProduct = product => {
    const updatedProducts = selectedProducts.filter(p => p.id !== product.id)
    setSelectedProducts(updatedProducts)
  }

  const handleDiscountPriceChange = (product, value) => {
    const updatedProducts = selectedProducts.map(p => {
      if (p.id === product.id) {
        return { ...p, editedDiscountPrice: value }
      }
      return p
    })
    setSelectedProducts(updatedProducts)
  }

  const handleDiscountTypeChange = (product, value) => {
    const updatedProducts = selectedProducts.map(p => {
      if (p.id === product.id) {
        return { ...p, discountType: value }
      }
      return p
    })
    setSelectedProducts(updatedProducts)
  }

  return (
    <div className="mb-4 lg:w-full relative">
      <label
        htmlFor="Products"
        className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
      >
        Products
      </label>
      <input
        type="text"
        id="Products"
        name="Products"
        placeholder="Enter Products"
        value={selectedProducts.map(product => product.name).join(', ')}
        onClick={handleInputClick}
        options={productList}
        className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-gray-400'}`}
      />
      {showProductList && (
        <div className="absolute z-10 mt-1 w-full bg-white shadow-md rounded-md">
          <ul>
            {productList.map(product => (
              <li
                key={product.id}
                onClick={() => handleProductSelection(product)}
                className={`cursor-pointer py-2 px-4 hover:bg-gray-100 ${selectedProducts.some(p => p.id === product.id) && 'bg-gray-200'}`}
              >
                {product.name}
              </li>
            ))}
          </ul>
        </div>
      )}
      {selectedProducts.length > 0 && (
        <div className="mt-2">
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Actual Price</th>
                <th className="px-4 py-2">Discount Price</th>
                <th className="px-4 py-2">Discount Type</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {selectedProducts.map(product => (
                <tr key={product.id}>
                  <td className="border px-4 py-2">{product.name}</td>
                  <td className="border px-4 py-2">${product.actualPrice}</td>
                  <td className="border px-4 py-2">
                    <input
                      type="number"
                      value={product.editedDiscountPrice}
                      onChange={e =>
                        handleDiscountPriceChange(product, e.target.value)
                      }
                      className="w-full py-1 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primaryColor"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <select
                      value={product.discountType}
                      onChange={e =>
                        handleDiscountTypeChange(product, e.target.value)
                      }
                      className="w-full py-1 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primaryColor"
                    >
                      <option value="Percentage">Percentage</option>
                      <option value="Amount">Amount</option>
                    </select>
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleDeleteSelectedProduct(product)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
