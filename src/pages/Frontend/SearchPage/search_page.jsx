import React, { useEffect, useState } from 'react';
import { products } from '../../../../data/searchdata';
import { allCategories } from '../../../../data/allCategories';
import { FaRegHeart } from 'react-icons/fa';
import { MdEuroSymbol } from 'react-icons/md';
import { SearchBuyNowButton } from '../../../common/Button/Button';
import { HiFire } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { IoFilter } from "react-icons/io5";
import { IoClose } from 'react-icons/io5'; // Import the close icon
import { Fade } from 'react-awesome-reveal';
import { useGetSearchProductQuery } from '../../../redux/features/api/searchProduct/searchProductApi';
import { baseUrl } from '../../../hooks/useThumbnailImage';
import { useGetMenuCategoryQuery } from '../../../redux/features/api/category/categoryApi';
import { useGetsearchCategoryApiQuery } from '../../../redux/features/api/subCategorySearchProducts/subCategorySearchProducts';








export default function SearchPage() {


  const [drawerOpen, setDrawerOpen] = useState(false);

  // get categoires list 
  const { data: categories } = useGetMenuCategoryQuery()
  const categoryList = categories?.categories ?? []

  const { data, isLoading } = useGetSearchProductQuery("a");
  const serachProducts = data?.products?.data;
  console.log(categoryList)

  const [subCategoryProducts, setSubCategoryProducts] = useState(null);

  // Fetch data based on subCategoryProducts
  const { data: searchByCategory, error } = useGetsearchCategoryApiQuery(subCategoryProducts, {
    skip: !subCategoryProducts, // Skip the query if subCategoryProducts is null
  });

  useEffect(() => {
    if (subCategoryProducts) {
      console.log(searchByCategory, "hello data");
    }
    if (error) {
      console.error("Error fetching data:", error);
    }
  }, [searchByCategory, error, subCategoryProducts]);

  const handleCategoryProduct = (id) => {
    setSubCategoryProducts(id);
    console.log(id, "selected category ID");
  };

  console.log(subCategoryProducts, "check");

  if (isLoading) {
    return <p>Loading</p>
  }


  const toggleDrawer = () => {
    setDrawerOpen(prev => !prev);
  };

  return (
    <section className="relative">
      {/* Floating Filter Button */}
      <div className=' bg-black z-50 py-2 flex items-center gap-2 justify-center px-5 text-center' onClick={toggleDrawer} >
        <button className="text-white rounded-full shadow-lg">
          Filters
        </button>
        <div className='flex justify-center'>
          <IoFilter className='text-white' />
        </div>
      </div>


      {/* Sidebar */}
      {drawerOpen && (
        <aside className="w-full h-[100dvh]  absolute top-0 left-0 bg-gray-900 bg-opacity-75 flex z-50">
          <div className="w-full bg-white  h-full shadow-xl overflow-auto sm:pl-8">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-medium">Filter Categories</h2>
              <button onClick={toggleDrawer} className="text-gray-700">
                <IoClose size={24} />
              </button>
            </div>
            <ul className="">
              {categoryList.map((category) => (
                <li key={category.id} className="lg:my-8 my-4 border lg:py-4 lg:px-6 w-[25vw] ">
                  <h5 className='font-semibold text-xl '>{category.name}</h5>
                  <ul className=" mt-2">
                    {category.sub_categories.map((subcategory) => (
                      <li key={subcategory.id} className="text-gray-500 text-base" onClick={() => handleCategoryProduct(subcategory.id)}>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="subcategory"
                            value={subcategory.id}
                            className="mr-2"
                          />
                          {subcategory.name}

                        </label>

                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

          </div>
        </aside>
      )}

      {/* className={`p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16 transition-all ${drawerOpen ? 'ml-64' : 'ml-0'} ${drawerOpen ? 'md:ml-0' : ''}`} */}
      <main className={`p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16 transition-all ${drawerOpen ? 'ml-64' : 'ml-0'} ${drawerOpen ? 'md:ml-0' : ''}`}>
        {/* Products show all sections */}
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {serachProducts.map((product, index) => (
            <div key={index} className="relative bg-[#B7B7B7] product-card  overflow-hidden shadow-md">
              <Link to={`hotSale/${product.slug}`}>
                <img
                  src={`${baseUrl}/products/${product.thumbnail_image}`}
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


              <h3 className="text-white bg-black p-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                {product.product_title}
              </h3>
              <div className="bg-black text-white flex justify-between items-center p-2 lg:p-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
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
        {/* <div className="flex flex-col items-center mt-6">
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
        </div> */}
      </main>
    </section>

  );
}
