import React, { useState } from 'react';
import { products } from '../../../../data/searchdata';
import { allCategories } from '../../../../data/allCategories';
import { FaRegHeart } from 'react-icons/fa';
import { MdEuroSymbol } from 'react-icons/md';
import { SearchBuyNowButton } from '../../../common/Button/Button';
import { HiFire } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { IoFilter } from "react-icons/io5";
import { IoClose } from 'react-icons/io5'; // Import the close icon

export default function SearchPage() {
  const [showCategoryProduct, setShowCategoryProduct] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Calculate the index of the first and last product to be displayed
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  // Determine the products to display
  const currentProducts = showCategoryProduct
    ? products.slice(indexOfFirstProduct, indexOfLastProduct)
    : selectedCategory.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculate the total number of pages
  const totalPages = Math.ceil(
    (showCategoryProduct ? products.length : selectedCategory.length) / productsPerPage
  );

  // Handlers for pagination controls
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const getCategoryData = (categoryName, subcategoryName) => {
    const category = allCategories.find(
      cat => cat.category_name.toLowerCase() === categoryName.toLowerCase()
    );
    if (!category) return [];

    const subcategory = category.subcategories.find(
      sub => sub.subcategory_name.toLowerCase() === subcategoryName.toLowerCase()
    );
    if (!subcategory) return [];

    setShowCategoryProduct(false);
    setSelectedCategory(subcategory.products);
    setCurrentPage(1); // Reset to first page of the new category
    setDrawerOpen(false); // Close the sidebar
  };

  const toggleDrawer = () => {
    setDrawerOpen(prev => !prev);
  };

  return (
    <section className="relative">
      {/* Floating Filter Button */}
      <div className=' bg-black z-50 py-2 flex items-center gap-2 justify-center px-5 text-center' onClick={toggleDrawer}>
        <button className="text-white rounded-full shadow-lg">
          Filters
        </button>
        <div className='flex justify-center'>
          <IoFilter className='text-white' />
        </div>
      </div>

      {/* Drawer Sidebar */}
      <aside
        className={`abosolute w-full bg-white shadow-md h-full ${drawerOpen ? 'absolute top-0 left-0' : 'hidden'} scroll-auto `}
        style={{ zIndex: 9999 }}
      >
        <div className="p-4 relative">
          {/* Close Button */}
          <button
            onClick={() => setDrawerOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          >
            <IoClose className="text-xl" />
          </button>

          {/* Men category box */}
          <div>
            <button
              onClick={() => getCategoryData('Men', 'Men New Arrivals')}
              className="w-full text-left text-sm font-bold border-b py-2"
            >
              Men Collections
            </button>
            <div className="pl-4 text-xs sm:text-sm md:text-base pt-3 sm:pt-4">
              {['Men New Arrivals', 'Tees', 'Hoodies And Sweaters', 'Pants', 'Shoes', 'Outwear', 'Men Accessories'].map(subcategory => (
                <label key={subcategory} className=" cursor-pointer flex ">
                  <input
                    type="radio"
                    name="category"
                    className="mr-2"
                    onClick={() => getCategoryData('Men', subcategory)}
                  />
                  <p>{subcategory}</p>
                </label>
              ))}
            </div>
          </div>

          {/* Women category box */}
          <div className="mt-4 ">
            <button
              onClick={() => getCategoryData('Women', 'Women New Arrivals')}
              className="w-full text-left text-sm font-bold border-b py-2"
            >
              Women Collections
            </button>
            <div className="pl-4 text-xs sm:text-sm md:text-base pt-3 sm:pt-4">
              {['Women New Arrivals', 'Tees', 'Hoodies And Sweaters', 'Pants', 'Shoes', 'Outerwear', 'Women Accessories'].map(subcategory => (
                <label key={subcategory} className="flex cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    className="mr-2"
                    onClick={() => getCategoryData('Women', subcategory)}
                  />
                  <p>{subcategory}</p>
                </label>
              ))}
            </div>
          </div>

          {/* Accessories category box */}
          <div className="mt-4">
            <button
              onClick={() => getCategoryData('Accessories', 'New Arrivals')}
              className="w-full text-left text-sm font-bold border-b py-2"
            >
              Accessories
            </button>
            <div className="pl-4 text-xs sm:text-sm md:text-base pt-3 sm:pt-4">
              <label className="flex cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  className="mr-2"
                  onClick={() => getCategoryData('Accessories', 'Accessories')}
                />
                <p>Accessories</p>
              </label>
            </div>
          </div>
        </div>
      </aside>

      <main className={`p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16 transition-all ${drawerOpen ? 'ml-64' : 'ml-0'} ${drawerOpen ? 'md:ml-0' : ''}`}>
        {/* Products show all sections */}
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {currentProducts.map((product, index) => (
            <div key={index} className="relative bg-[#B7B7B7] product-card  overflow-hidden shadow-md">
              <Link to={`hotSale/${product.slug}`}>
                <img
                  src={product.img}
                  alt={product.product_title}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover"
                />
              </Link>

              <button
                style={{ fontSize: '24px' }}
                className="absolute top-2 left-2 text-white"
              >
                <FaRegHeart />
              </button>

              <button
                style={{ fontSize: '24px' }}
                className="absolute top-2 right-2 text-white"
              >
                <HiFire className="text-red-700 transition-colors duration-500 animate-pulse" />
              </button>

              <h3 className="text-white bg-black p-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                {product.product_title}
              </h3>
              <div className="bg-black text-white flex justify-between items-center p-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                <div className="flex items-center">
                  <MdEuroSymbol /> {product.price}
                </div>
                <div>
                  <SearchBuyNowButton buttonText="Buy Now" />
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Pagination controls */}
        <div className="flex flex-col items-center mt-6">
          <div className="flex flex-wrap gap-2 mb-2">
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
      </main>
    </section>
  );
}
