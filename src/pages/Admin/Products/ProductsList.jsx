import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin7Line } from 'react-icons/ri'
import { FiEye } from 'react-icons/fi'
import { FaPlus } from 'react-icons/fa6'
import { useSelector } from 'react-redux'
import { GoHome } from 'react-icons/go'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../../common/Breadcrumbs/Breadcrumbs'
import Button from '../../../common/Button/Button'
import {
  useDeleteProductMutation,
  useGetProductListQuery,
} from '../../../redux/features/api/product/productApi'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import AdminLoader from '../../../common/AdminLoader/AdminLoader'

export default function ProductsList() {
  const [pageLinks, setPageLinks] = useState([])
  const [pages, setPages] = useState(1)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [perPage, setPerPage] = useState(10)

  const { data: products, isLoading } = useGetProductListQuery({
    page: pages,
    perpage: perPage,
  })
  const [productsData, setProductsData] = useState([])
  const [deleteProduct] = useDeleteProductMutation()
  const isDarkMode = useSelector(state => state.theme.isDarkMode)

  useEffect(() => {
    setProductsData(products?.products?.data ?? [])
    setPageLinks(products?.products?.links)
  }, [products])

  console.log(products?.products?.data)
  // console.log(pageLinks)

  const handlePageChange = (page = 1) => {
    if (page == 'previous') {
      if (products?.products.current_page != 1) {
        setPages(products?.products.current_page - 1)
      }
    } else if (page == 'next') {
      if (products?.products.last_page != products?.products.current_page) {
        setPages(products?.products.current_page + 1)
      }
    } else {
      setPages(page)
    }
  }

  const handleDeleteProduct = async productId => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to delete this product?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then(async result => {
      if (result.isConfirmed) {
        try {
          const response = await deleteProduct(productId)
          if (response?.data.status === 200) {
            console.log(productsData.length)
            const currentProduct = productsData.filter(
              item => item.id != productId,
            )
            console.log(currentProduct.length)
            setProductsData(currentProduct)

            toast.success(response?.data?.message, {
              position: 'bottom-right',
              autoClose: 3000,
            })
          } else if (response?.data.status === 404) {
            toast.error(response?.data?.message, {
              position: 'bottom-right',
              autoClose: 3000,
            })
          } else if (response?.data.status === 402) {
            toast.error(response?.data?.message, {
              position: 'bottom-right',
              autoClose: 3000,
            })
          } else {
            toast.error('Somthing wrong, please try again ', {
              position: 'bottom-right',
              autoClose: 3000,
            })
          }
        } catch (error) {
          toast.error('Failed to delete the product. Please try again.', {
            position: 'bottom-right',
            autoClose: 3000,
          })
        }
      }
    })
  }

  const pageTitle = 'Products List'
  const productLinks = [
    { title: <GoHome />, link: '/' },
    { title: 'Products' },
    { title: 'Products List' },
  ]
  if (isLoading) return <AdminLoader />
  return (
    <section
      className={`main-container ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
    >
      <Breadcrumbs title={pageTitle} breadcrumbs={productLinks} />

      <div
        className={`px-5 py-5 rounded  ${isDarkMode ? 'bg-darkColorCard' : 'bg-lightColor'}`}
      >
        {/* Products filtering */}
        {/* <div>
          <div className="pt-3 pb-5">
            <h3
              className={` text-[20px] font-medium ${isDarkMode ? 'text-darkColorText' : 'text-bgray-800'}`}
            >
              Filter
            </h3>
          </div>
          <div className="lg:flex items-center justify-between">
            <div className="mb-4 flex-1">
              <label
                htmlFor="vendor1"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Status
              </label>
              <select
                id="vendor1"
                name="vendor1"
                className={`form-control mt-1 p-3   block w-full shadow-sm sm:text-sm  rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody border text-darkColorText ' : 'bg-lightColor hover:border-gray-400 border-gray-300 border'}`}
              >
               
                <option>Status </option>
                <option>Scheduled</option>
                <option>Publish</option>
                <option>Inactive</option>
              
              </select>
            </div>
            <div className="mb-4 flex-1 lg:mx-4">
              <label
                htmlFor="vendor2"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Category
              </label>
              <select
                id="vendor2"
                name="vendor2"
                className={`form-control mt-1 p-3   block w-full shadow-sm sm:text-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody border text-darkColorText ' : 'bg-lightColor hover:border-gray-400 border-gray-300 border'}`}
              >
              
                <option>Category</option>
                <option>Household</option>
                <option>Office</option>
                <option>Electronics</option>
                <option>Shoes</option>
             
              </select>
            </div>
            <div className="mb-4 flex-1">
              <label
                htmlFor="vendor3"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Stock
              </label>
              <select
                id="vendor3"
                name="vendor3"
                className={`form-control mt-1 p-3   block w-full shadow-sm sm:text-sm  rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText border ' : 'bg-lightColor hover:border-gray-400 border border-gray-300 '}`}
              >
                <option>Stock</option>
                <option>Out Of Stock</option>
                <option>In Stock</option>
              </select>
            </div>
          </div>
        </div> */}

        {/* search product and addProducts */}
        <div className="flex items-center justify-between gap-6 py-3 ">
          {/* <div className="search flex items-center gap-5">
            <div
              className={` rounded-md flex items-center justify-between border border-[#4800C9] ${isDarkMode ? 'text-darkColorText ' : 'bg-[#ffffff]'}`}
            >
              <input
                type="search"
                className={`py-3 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer ${isDarkMode ? 'placeholder:text-slate-400' : 'placeholder:text-textColor'}`}
                placeholder="Search Products"
              />
              <button className="btn mt-0 rounded-[0px] rounded-r-md px-3">
                <i className="fa-solid fa-magnifying-glass" />
              </button>
            </div>
          </div> */}
          <div className="flex items-center gap-[30px]">
            <Link to="/dashboard/add-product">
              <Button
                text="Add Product"
                className="bg-primaryColor py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
                icon={FaPlus}
              />
            </Link>
          </div>
        </div>

        {/* Products table */}

        <div className="py-5">
          <div className="overflow-x-auto">
            <table
              id="data-table"
              className={`min-w-full border  table-auto  ${isDarkMode ? 'border-darkColorBody' : 'border-gray-200 divide-y divide-gray-200'}`}
            >
              <thead
                className={`${isDarkMode ? 'bg-[#131A26]' : 'bg-gray-100'}`}
              >
                <tr>
                  <th className="">SL</th>
                  <th
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    PRODUCT
                  </th>

                  <th
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    STOCK
                  </th>

                  <th
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    PRICE
                  </th>
                  <th
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    QTY
                  </th>

                  <th
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    ACTIONS
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {productsData.map((product, index) => (
                  <tr key={product.id}>
                    <td className="text-center">
                      {products?.products.from + index}
                    </td>
                    <td className="border-l pl-2 py-4 whitespace-nowrap flex items-center gap-4">
                      <div
                        className={`w-[50px] h-[50px]  ${isDarkMode ? 'bg-[#131A26]' : 'bg-[#f2f2f3]'}`}
                      >
                        <img
                          src={`${import.meta.env.VITE_BASE_URL}/products/${product.thumbnail_image}`}
                          alt=""
                          className="w-full p-1 rounded"
                        />
                      </div>
                      <span>
                        <h6
                          className={`text-[15px] pb-1 font-medium ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                        >
                          {product.name}
                        </h6>
                      </span>
                    </td>

                    <td className="border-l pl-2 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${product.isStatus ? 'bg-success-100 text-success-400' : 'text-[#7367f0] bg-gray-100'}`}
                      >
                        {product.quantity > 0 ? 'In Stock' : 'Out of STOCK'}
                      </span>
                    </td>

                    <td
                      className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      {product.price} €
                    </td>
                    <td
                      className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      {product.quantity}
                    </td>

                    <td className="border-l pl-2 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <Link
                          to={`/product/${product.slug}`}
                          className="focus:outline-none transition-all duration-100 p-2 rounded-full bg-[#eab3081a] hover:bg-[#eab308] text-[#eab308] hover:text-lightColor "
                        >
                          <FiEye className=" text-[12px]" />
                        </Link>
                        <Link
                          to={`/dashboard/edit-product/${product.id}`}
                          className="focus:outline-none transition-all duration-100 p-2 rounded-full bg-[#60a5fa1a] text-[#60a5fa] hover:bg-[#60a5fa] hover:text-lightColor"
                        >
                          <FiEdit className=" text-[12px] " />
                        </Link>
                        <button
                          onClick={() => handleDeleteProduct(product.id)}
                          className="focus:outline-none transition-all duration-300 p-2 rounded-full bg-[#f43f5e1a] text-[#f43f5e] hover:bg-[#f43f5e] hover:text-lightColor"
                        >
                          <RiDeleteBin7Line className="text-[12px]" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex gap-3 mt-4 justify-end">
              {pageLinks?.map((el, index) => {
                if (index == 0) {
                  return (
                    <button
                      key={index}
                      onClick={() => handlePageChange('previous')}
                      className={`px-3 py-2 rounded text-white ${el.url == null ? 'bg-red-400 cursor-not-allowed' : 'bg-red-700 cursor-pointer'}`}
                    >
                      {el.label.split(' ')[1]}
                    </button>
                  )
                } else if (products.products.links.length - 1 == index) {
                  return (
                    <button
                      key={index}
                      onClick={() => handlePageChange('next')}
                      className={`px-3 py-2 rounded text-white ${el.url == null ? 'bg-darkblack-300 cursor-not-allowed' : 'bg-black cursor-pointer'}`}
                    >
                      Next
                    </button>
                  )
                }
                return (
                  <button
                    key={index}
                    onClick={() => handlePageChange(Number(el.label))}
                    className={`px-3 py-2 rounded text-white  cursor-pointer ${el.active ? 'bg-blue-900' : 'bg-green-600'}`}
                  >
                    {el.label.split(' ')[0]}
                  </button>
                )
              })}
              {/* <Link className="px-3 py-2 rounded text-white bg-red-600 cursor-pointer">Previous</Link>
              <Link className="px-3 py-2 rounded text-white bg-green-600 cursor-pointer">1</Link>
              <Link className="px-3 py-2 rounded text-white bg-green-600 cursor-pointer">2</Link>
              <Link className="px-3 py-2 rounded text-white bg-green-600 cursor-pointer">Previous</Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
