import { GoHome } from 'react-icons/go'
import { useSelector } from 'react-redux'

import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin7Line } from 'react-icons/ri'
import { useState } from 'react'
import { toast } from 'react-toastify'
import Breadcrumbs from '../../../../common/Breadcrumbs/Breadcrumbs'
import EditBrand from './EditBrand'
import { RxCross1 } from 'react-icons/rx'
import {
  useDeleteBrandMutation,
  useGetBrandQuery,
} from '../../../../redux/features/api/brand/brandApi'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import BrandPagination from './BrandPagination'
import axios from 'axios'
import BrandStatusToggleButton from './BrandStatusToggleButton'

export default function Brand() {
  const [isChecked, setIsChecked] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const isDarkMode = useSelector(state => state.theme.isDarkMode)
  const { data: brand, isLoading, refetch } = useGetBrandQuery()
  // const brands = brand?.brands
  const [deleteBrand] = useDeleteBrandMutation()
  let userD = JSON.parse(localStorage?.getItem('userData'))
  let token = userD?.token

  // addBrand
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = async data => {
    const preparedData = {
      ...data,
    
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/admin/brands/store`,
        preparedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        },
      )
      if (response?.data?.message) {
        toast.success(`${response?.data?.message}`, {
          position: 'bottom-right',
          autoClose: 3000,
        })
      }
      reset()
      refetch()
    } catch (error) {
      toast.error(`${error?.data?.message || 'Failed to add color'}`, {
        position: 'top-right',
        autoClose: 3000,
      })
    }
  }

  // brand delete
  const handleDelete = async brandId => {
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      })

      if (result.isConfirmed) {
        await deleteBrand(brandId).unwrap()

        Swal.fire({
          title: 'Deleted!',
          text: 'Your color has been deleted.',
          icon: 'success',
        })
      }
    } catch (error) {
      console.error('Failed to delete the color:', error)
      Swal.fire({
        title: 'Error!',
        text: 'Failed to delete the color. Please try again later.',
        icon: 'error',
      })
    }
  }

  // Toggle btn
  const handleToggleChange = checked => {
    setIsChecked(checked)
    if (checked) {
      toast.success('❤️ Brand Status Active!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    }
  }

  // Breadcrumbs
  const pageTitle = 'Brand'
  const productLinks = [
    { title: <GoHome />, link: '/' },
    { title: 'Products' },
    { title: 'Brand' },
  ]

  // handle modal
  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }
 

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <section
      className={`main-container ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
    >
      <Breadcrumbs title={pageTitle} breadcrumbs={productLinks} />
      <div className="lg:flex gap-5">
        <div
          className={`px-5 py-5 rounded lg:w-[40%] w-full max-h-[650px] ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
        >
          <div className="flex gap-5 pb-5">
            <div
              className={` w-full py-5 rounded ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="px-5">
                <h2 className="text-2xl font-bold mb-4">Add New Brand</h2>
                <div className="mb-4">
                  <label
                    htmlFor="productName"
                    className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    Brand Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="productName"
                      {...register('name', { required: true })}
                      placeholder="Enter brand name"
                      className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-primaryColor/80 hover:transition-all duration-200'}`}
                    />
                    {errors.name && (
                      <span className="text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="status"
                    className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    Status<span>*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="status"
                      {...register('status', {
                        required: 'Status is required',
                      })}
                      className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-primaryColor/80 hover:transition-all duration-200'}`}
                    >
                      <option value="1">Active</option>
                      <option value="0">Inactive</option>
                    </select>
                    {errors.status && (
                      <span className="text-red-500">
                        {errors.status.message}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-indigo-600 active:shadow-none shadow-lg bg-gradient-to-tr from-indigo-600 to-indigo-500 border-indigo-700 text-white"
                >
                  <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-20 opacity-10"></span>
                  <span className="relative">+ Submit</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div
          className={`px-5 py-5 rounded lg:w-[60%] w-full ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
        >
          <div className="flex items-center justify-between gap-6 py-3 ">
            <h2 className="lg:text-2xl text-lg font-bold mb-4">Brand List</h2>
          </div>

          {/* Brand table*/}
          <div className="py-5">
            <div className="container mx-auto overflow-x-auto">
              <table
                id="data-table"
                className={`min-w-full border  table-auto  ${isDarkMode ? 'border-darkColorBody' : 'border-gray-200 divide-y divide-gray-200'}`}
              >
                <thead
                  className={`${isDarkMode ? 'bg-[#131A26]' : 'bg-gray-100'}`}
                >
                  <tr>
                    <th className="p-2">
                      <p>#</p>
                    </th>
                    
                    <th
                      className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      NAME
                    </th>

                    <th
                      className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      STATUS
                    </th>
                    <th
                      className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      ACTIONS
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-2 text-center">1</td>
                    
                    <td
                      className={`px-6 py-4 text-[13px] whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      Loto
                    </td>

                    <td
                      className={`px-6 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      <BrandStatusToggleButton
                        label="Toggle Button Label"
                        isChecked={isChecked}
                        onChange={handleToggleChange}
                      />
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={handleOpenModal}
                          className="focus:outline-none transition-all duration-100 p-2 rounded bg-[#60a5fa1a] text-[#60a5fa] hover:bg-[#60a5fa] hover:text-lightColor"
                        >
                          <FiEdit className=" text-[12px] " />
                        </button>
                        {isOpen && (
                          <div className="fixed inset-0 bg-gray-800/10 transition-all duration-300 z-50">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-full max-w-5xl rounded-md p-4">
                              <EditBrand />
                              <button
                                onClick={handleCloseModal}
                                className="absolute top-2 right-2 focus:outline-none transition-all duration-300 p-2 rounded bg-[#f43f5e1a] text-[#f43f5e] hover:bg-[#f43f5e] hover:text-lightColor"
                              >
                                <RxCross1 size={20} />
                              </button>
                            </div>
                          </div>
                        )}
                        <button
                          onClick={() => handleDelete(brand.id)}
                          className="focus:outline-none transition-all duration-300 p-2 rounded bg-[#f43f5e1a] text-[#f43f5e] hover:bg-[#f43f5e] hover:text-lightColor"
                        >
                          <RiDeleteBin7Line className="text-[12px]" />
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* {brands?.map((brand, index) => (
                    
                  ))} */}
                </tbody>
              </table>
            </div>
            <br />
            <BrandPagination />
          </div>
        </div>
      </div>
    </section>
  )
}
