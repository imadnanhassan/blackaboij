import React, { useEffect, useState } from 'react';
import { products } from '../../../../data/searchdata';
import { allCategories } from '../../../../data/allCategories';
import { FaRegHeart } from 'react-icons/fa';
import { MdEuroSymbol } from 'react-icons/md';
import { SearchBuyNowButton } from '../../../common/Button/Button';
import { HiFire } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import { IoFilter } from "react-icons/io5";
import { IoClose } from 'react-icons/io5'; // Import the close icon
import { Fade } from 'react-awesome-reveal';
import { useGetSearchProductQuery } from '../../../redux/features/api/searchProduct/searchProductApi';
import { baseUrl } from '../../../hooks/useThumbnailImage';
import { useGetMenuCategoryQuery } from '../../../redux/features/api/category/categoryApi';
import { useGetsearchCategoryApiQuery } from '../../../redux/features/api/subCategorySearchProducts/subCategorySearchProducts';

export default function SearchPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [subCategoryProducts, setSubCategoryProducts] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6); // Number of products per page
  const [searchQuery, setSearchQuery] = useState(null);

  const [products, setProducts] = useState([])


  // Get categories list 
  const { data: categories } = useGetMenuCategoryQuery();
  const categoryList = categories?.categories ?? [];

  const { data, isLoading } = useGetSearchProductQuery("a");
  const searchProducts = data?.products?.data || [];

  const location = useLocation();

  // Fetch data based on subCategoryProducts
  const { data: searchByCategory, isLoading: loadingSearchData, isError } = useGetsearchCategoryApiQuery({ filter: subCategoryProducts, query: searchQuery });
  console.log(searchByCategory,'this is main query')
  useEffect(() => {
    setSearchQuery(location?.state?.query ?? null)
    if(searchByCategory && !loadingSearchData){
      setProducts(searchByCategory?.products?.data)
      console.log(searchByCategory?.products?.data, 'data is here')
    }
  }, [loadingSearchData, location?.state, searchByCategory]);

  console.log(searchByCategory)

  const handleCategoryProduct = (id) => {
    console.log("check Id ", id)
    setSubCategoryProducts(id);
    setCurrentPage(1);
    setDrawerOpen(false)


  };

  console.log(location?.state?.query, "acc")

  const toggleDrawer = () => {
    setDrawerOpen(prev => !prev);
  };

  // Pagination Logic
  const totalProducts = subCategoryProducts ? searchByCategory?.products?.data.length : searchProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const currentProducts = subCategoryProducts ? searchByCategory?.products?.data : searchProducts;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProductsToShow = currentProducts?.slice(indexOfFirstProduct, indexOfLastProduct);

  if (isLoading) {
    return <p>Loading</p>;
  }

  console.log(products, 'this is search product list')

  return (
    <section className="relative">
      {/* Floating Filter Button */}
      <div className='bg-black z-50 py-2 flex items-center gap-2 justify-center px-5 text-center cursor-pointer' onClick={toggleDrawer}>
        <button className="text-white rounded-full shadow-lg">
          Filters
        </button>
        <div className='flex justify-center'>
          <IoFilter className='text-white' />
        </div>
      </div>

      {/* Sidebar */}
      {drawerOpen && (
        <aside className="  w-full h-[100vh] absolute top-0 left-0 bg-gray-900 bg-opacity-75 flex z-50">
          <div className="w-full bg-white h-full shadow-xl overflow-auto sm:pl-8">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-medium">Filter Categories</h2>
              <button onClick={toggleDrawer} className="text-gray-700">
                <IoClose size={24} />
              </button>
            </div>
            <ul className="">
              {categoryList.map((category) => (
                <li key={category.id} className="lg:my-8 my-4 border lg:py-4 lg:px-6 py-2 px-4">
                  <h5 className='font-semibold text-xl'>{category.name}</h5>
                  <ul className="mt-2">
                    {category.sub_categories.map((subcategory) => (
                      <li key={subcategory.id} className="text-gray-500 text-base" onClick={() => handleCategoryProduct(subcategory.id)}>
                        <label className="flex items-center cursor-pointer">
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
              <li className='border lg:py-4 lg:px-6 py-2 px-4 font-semibold text-xl cursor-pointer' onClick={() => handleCategoryProduct("accessories")}> Accessories</li>
            </ul>
          </div>
        </aside>
      )}

      <main className={`p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16 transition-all ${drawerOpen ? 'ml-64' : 'ml-0'} ${drawerOpen ? 'md:ml-0' : ''}`}>
        {/* Products show all sections */}
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {products?.map((product, index) => (
            <div key={index} className="relative bg-[#B7B7B7] product-card overflow-hidden shadow-md">
              <Link to={`/product/${product?.slug}`}>
                <img
                  src={`${baseUrl}/products/${product.thumbnail_image}`}
                  alt={product.name}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover"
                />
              </Link>

              <button style={{ fontSize: '24px' }} className="absolute top-2 left-2 text-white">
                <FaRegHeart />
              </button>

              <h3 className="text-white bg-black p-2 lg:p-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                {product.name}
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
        <div className="flex flex-col items-center mt-8 lg:mt-14">
          <div className="flex flex-wrap gap-2 mb-2">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
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
              onClick={() => setCurrentPage(currentPage + 1)}
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
