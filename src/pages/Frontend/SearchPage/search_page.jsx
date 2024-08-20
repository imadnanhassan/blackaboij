import React, { useState } from 'react'
import { products } from '../../../../data/searchdata'
import { FaRegHeart } from 'react-icons/fa'
import { MdEuroSymbol } from 'react-icons/md'
import { SearchBuyNowButton } from '../../../common/Button/Button'
import { HiFire } from 'react-icons/hi'
import { Link } from 'react-router-dom'

export default function SearchPage() {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 8

  // Calculate the index of the first and last product to be displayed
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  )

  // Calculate the total number of pages
  const totalPages = Math.ceil(products.length / productsPerPage)

  // Handlers for pagination controls
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1)
    }
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1)
    }
  }

  return (
    <section>
      <p className="p-2 pl-4 md:pl-10 py-3 md:py-5">
        Blackaboij solutions{' '}
        <span className="text-sm">(17871 products available)</span>
      </p>
      <section className="flex ">
        {/* left side related category button */}
        <aside className="pl-4 md:pl-10">
          <div className="w-[15vw] h-[100vh] bg-white">
            {/* Men category box */}
            <div className="border py-1 pl-2 md:pl-4 text-sm font-bold">
              <p>Men Collections</p>
            </div>
            <div className="text-sm border border-t-transparent pl-1 md:pl-4 space-y-1 md:space-y-1 md:py-2 py-1 cursor-pointer">
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="category" className="mr-2" />
                <p>Men New Arrivals</p>
              </label>
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="category" className="mr-2" />
                <p>Tees</p>
              </label>
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="category" className="mr-2" />
                <p>Hoodies And Sweaters</p>
              </label>
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="category" className="mr-2" />
                <p>Pants</p>
              </label>
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="category" className="mr-2" />
                <p>Shoes</p>
              </label>
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="category" className="mr-2" />
                <p>Outwear</p>
              </label>
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="category" className="mr-2" />
                <p>Accessories</p>
              </label>
            </div>

            {/* Women category box */}
            <div className="border py-1 pl-2 md:pl-4 text-sm font-bold mt-5 md:mt-10">
              <p>Women Collections</p>
            </div>
            <div className="text-sm border border-t-transparent pl-1 md:pl-4 space-y-1 md:space-y-1 md:py-2 py-1 cursor-pointer">
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="category" className="mr-2" />
                <p>Women New Arrivals</p>
              </label>
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="category" className="mr-2" />
                <p>Tees</p>
              </label>
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="category" className="mr-2" />
                <p>Hoodies And Sweaters</p>
              </label>
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="category" className="mr-2" />
                <p>Pants</p>
              </label>
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="category" className="mr-2" />
                <p>Shoes</p>
              </label>
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="category" className="mr-2" />
                <p>Outwear</p>
              </label>
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="category" className="mr-2" />
                <p>Accessories</p>
              </label>
            </div>

            {/* Accessories category box */}
            <div className="border py-1 pl-2 md:pl-4 text-sm font-bold mt-5 md:mt-10">
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="category" className="mr-2" />
                <p>Accessories</p>
              </label>
            </div>
          </div>
        </aside>

        {/* products show all sections */}
        <div className="grid md:grid-cols-3 xl:grid-cols-4 grid-cols-2 md:gap-[15px] gap-[5px] md:mx-[50px] mx-[20px] md:mb-[50px] mb-[20px]">
          {currentProducts.map((product, index) => (
            <div key={index} className="relative">
              <div className="bg-[#B7B7B7] product-card font-custom relative">
                <Link to={`hotSale/${product.slug}`}>
                  <img
                    src={product.img}
                    alt={product.product_title}
                    className="front-img w-full object-cover"
                  />
                </Link>
                <Link to={`hotSale/${product.slug}`}>
                  <img
                    src={product.backImg}
                    alt={product.product_title}
                    className="absolute top-0 opacity-0 hover:opacity-100 transition-opacity duration-1000 ease-in-out w-full object-cover"
                  />
                </Link>

                <button
                  style={{ fontSize: '30px' }}
                  className="absolute top-2 left-2 text-white"
                >
                  <FaRegHeart />
                </button>

                <button
                  style={{ fontSize: '30px' }}
                  className="absolute top-2 right-2 text-white"
                >
                  <HiFire className="text-red-700 transition-colors duration-700 ease-in-out animate-pulse" />
                </button>

                <h3 className="pl-2 md:pl-4 md:py-4 py-1 md:text-md bg-black text-[16px] text-white">
                  {product.product_title}
                </h3>
                <div className="md:pb-4 pb-1 px-2 md:px-4 md:text-[15px] text-[12px] bg-black text-white flex justify-between">
                  <div className="flex justify-center items-center">
                    <MdEuroSymbol /> {product.price}
                  </div>
                  <div>
                    <SearchBuyNowButton buttonText="Buy Now" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Pagination controls */}
      <div className="flex flex-col items-center md:mb-[50px] mb-[20px]">
        <div className="flex mb-2">
          <button
            onClick={handlePrevious}
            className={`px-4 py-2 border rounded ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'bg-black text-white'}`}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-2 mx-1 border rounded ${currentPage === index + 1 ? 'bg-black text-white' : 'bg-white text-black'}`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={handleNext}
            className={`px-4 py-2 border rounded ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : 'bg-black text-white'}`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
      </div>
    </section>
  )
}
