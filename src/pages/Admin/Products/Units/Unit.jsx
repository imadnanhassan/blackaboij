import { GoHome } from 'react-icons/go'
import { useSelector } from 'react-redux'

import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin7Line } from 'react-icons/ri'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { FaPlus } from 'react-icons/fa'
import Breadcrumbs from '../../../../common/Breadcrumbs/Breadcrumbs'
import ToggleButton from '../../../../common/ToggleButton/ToggleButton'
import Button from '../../../../common/Button/Button'
// import EditBrand from './EditBrand'
import { RxCross1 } from 'react-icons/rx'
import { useForm } from 'react-hook-form'
import {
  useAddUnitMutation,
  useDeleteUnitMutation,
  useGetUnitQuery,
} from '../../../../redux/features/api/unit/unitApi'

export default function Unit() {
  const [isChecked, setIsChecked] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const isDarkMode = useSelector(state => state.theme.isDarkMode)
  const [addUnit] = useAddUnitMutation()
  const { data: unit, refetch } = useGetUnitQuery()
  const [deleteUnit] = useDeleteUnitMutation()

  const units = unit?.units?.data

  const handleDeleteUnit = async unitId => {
    try {
      const response = await deleteUnit(unitId)
      if (response) {
        toast.success(`${response?.data?.message}`, {
          position: 'bottom-right',
          autoClose: 3000,
        })
      }
      refetch()
    } catch (error) {
      console.error('Error deleting unit:', error)
    }
  }

  console.log('units', units)

  // Breadcrumbs
  const pageTitle = 'Unit'
  const productLinks = [
    { title: <GoHome />, link: '/' },
    { title: 'Products' },
    { title: 'Unit' },
  ]

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

  const {
    register,
    handleSubmit: onSubmitHandler,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = async data => {
    try {
      const response = await addUnit(data)
      console.log(response?.data)

      if (response.data?.message) {
        toast.success(`${response.data.message}`, {
          position: 'bottom-right',
          autoClose: 3000,
        })
      }
      reset()
    } catch (error) {
      toast.error(`${error?.response?.data?.message}`, {
        position: 'top-right',
        autoClose: 3000,
      })
    }
  }

  // handle modal
  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }
  return (
    <section
      className={`main-container ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
    >
      <Breadcrumbs title={pageTitle} breadcrumbs={productLinks} />

      <div className="lg:flex gap-5">
        <div
          className={`px-5 py-5 rounded lg:w-[40%] w-full ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
        >
          <div className="flex gap-5 pb-5">
            <div
              className={` w-full py-5 rounded ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
            >
              <form onSubmit={onSubmitHandler(onSubmit)} className="px-5">
                <h2 className="text-2xl font-bold mb-4">Add New Unit</h2>
                <div className="mb-4">
                  <label
                    htmlFor="productName"
                    className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    Unit Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      {...register('name', { required: 'Name is required' })}
                      name="name"
                      placeholder="Enter Unit name"
                      className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-primaryColor/80 hover:transition-all duration-200'}`}
                    />
                    {errors?.name && (
                      <p className="text-error-200 mt-1 font-extralight">
                        {errors?.name?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-4 hidden">
                  <label
                    htmlFor="productName"
                    className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    Status
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="status"
                      {...register('status', {
                        required: 'status is required',
                      })}
                      name="status"
                      defaultValue="1"
                      className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-primaryColor/80 hover:transition-all duration-200'}`}
                    />
                  </div>
                </div>
                <Button
                  text="Submit"
                  type="submit"
                  className="bg-primaryColor py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
                  icon={FaPlus}
                ></Button>
              </form>
            </div>
          </div>
        </div>

        <div
          className={`px-5 py-5 rounded lg:w-[60%] w-full ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
        >
          {/* search product and Brand */}
          <div className="flex items-center justify-between gap-6 py-3 ">
            <h2 className="lg:text-2xl text-lg font-bold mb-4">Unit List</h2>
            <div className="search flex items-center gap-5">
              <div
                className={` rounded-md flex items-center justify-between border border-[#4800C9] ${isDarkMode ? 'text-darkColorText ' : 'bg-[#ffffff]'}`}
              >
                <input
                  type="search"
                  className={`py-2 pl-3  bg-transparent w-full focus:outline-none  ${isDarkMode ? 'placeholder:text-slate-400' : 'placeholder:text-textColor'}`}
                  placeholder="Type Name & Enter"
                />
                <button className="btn mt-0 rounded-[0px] rounded-r-md px-3">
                  <i className="fa-solid fa-magnifying-glass" />
                </button>
              </div>
            </div>
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
                    {/* <th
                      className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      Logo
                    </th> */}
                    <th
                      className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      NAME
                    </th>
                    <th
                      className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      SLUG
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
                  {units?.map((unit, index) => (
                    <tr key={unit?.id}>
                      <td className="p-2">{index + 1}</td>

                      <td
                        className={`px-6 py-4 text-[13px] whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                      >
                        {JSON.parse(unit?.name)['en']}
                      </td>
                      <td
                        className={`px-6 py-4 text-[13px] whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                      >
                        {unit?.slug}
                      </td>

                      <td
                        className={`px-6 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                      >
                        <ToggleButton
                          label="Toggle Button Label"
                          isChecked={isChecked}
                          onChange={handleToggleChange}
                        />

                        {/* Include ToastContainer component */}
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
                            <div className="fixed inset-0 bg-gray-800/35  transition-all duration-300 z-50">
                              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-full max-w-5xl rounded-md p-4">
                                {/* <EditBrand /> */}
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
                            onClick={() => handleDeleteUnit(unit?.id)}
                            className="focus:outline-none transition-all duration-300 p-2 rounded bg-[#f43f5e1a] text-[#f43f5e] hover:bg-[#f43f5e] hover:text-lightColor"
                          >
                            <RiDeleteBin7Line className="text-[12px]" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
