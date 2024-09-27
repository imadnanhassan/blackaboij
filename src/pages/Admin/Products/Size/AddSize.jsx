import { useSelector } from 'react-redux'
import { GoHome } from 'react-icons/go'
import { RiDeleteBin7Line } from 'react-icons/ri'
import Breadcrumbs from '../../../../common/Breadcrumbs/Breadcrumbs'
import Tooltip from '../../../../common/Tooltip/Tooltip'
import EditSize from './editSize'
import { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import {
  useAddSizeMutation,
  useDeleteSizeMutation,
  useGetSizeQuery,
} from '../../../../redux/features/api/attribute/sizeApi'
import { FaPlus, FaSpinner } from 'react-icons/fa'
import AdminLoader from '../../../../common/AdminLoader/AdminLoader'

export default function AddSize() {
  //  const [id, setId] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const isDarkMode = useSelector(state => state.theme.isDarkMode)
  const [deleteSize] = useDeleteSizeMutation()
  const { data, isLoading } = useGetSizeQuery()
  const { sizes } = data || {}

  const {
    register,
    handleSubmit: onSubmitHandler,
    formState: { errors },
    reset,
  } = useForm()

  const [addSize, { isLoading: isSubmitting }] = useAddSizeMutation()

  const onSubmit = async data => {
    try {
      const response = await addSize({ ...data })
      if (response?.data?.status === 200) {
        toast.success(`${response.data?.message}`, {
          position: 'bottom-right',
          autoClose: 3000,
        })
      } else if (response?.data?.status === 401) {
        response?.data?.errors.forEach(el => {
          toast.error(`${el}`, {
            position: 'bottom-right',
            autoClose: 3000,
          })
        })
      } else if (response?.data?.status === 402) {
        toast.error(`${response.data?.message}`, {
          position: 'bottom-right',
          autoClose: 3000,
        })
      }

      reset()
    } catch (err) {
      toast.error(`${err?.data?.message || 'Something went wrong'}`, {
        position: 'top-right',
        autoClose: 3000,
      })
    }
  }

  // Handle delete action
  const handleDelete = async id => {
    try {
      await deleteSize(id)
      toast.success('Size deleted successfully!', {
        position: 'bottom-right',
        autoClose: 3000,
      })
    } catch (error) {
      toast.error(`${error?.data?.message || 'Failed to delete size'}`, {
        position: 'top-right',
        autoClose: 3000,
      })
    }
  }

  if (isLoading) {
    return <AdminLoader />
  }

  // Breadcrumbs
  const pageTitle = 'Size'
  const productLinks = [
    { title: <GoHome />, link: '/' },
    { title: 'Products' },
    { title: 'Size' },
  ]

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  // const handleEdit = () => {
  //   setIsOpen(true)
  // }

  return (
    <section
      className={`main-container ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
    >
      <Breadcrumbs title={pageTitle} breadcrumbs={productLinks} />
      <div className="flex gap-5">
        <div
          className={`px-5 py-5 rounded w-[40%] h-72  ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
        >
          <div className="flex gap-5 pb-5">
            <div
              className={` w-full py-5 rounded  ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
            >
              <form onSubmit={onSubmitHandler(onSubmit)} className="px-5">
                <h2 className="text-2xl font-bold mb-4">Add New Size</h2>
                <div className="mb-4">
                  <label
                    htmlFor="size"
                    className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    Size Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      {...register('name', { required: 'Size is required' })}
                      placeholder="Enter Size name"
                      className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-primaryColor/80 hover:transition-all duration-200'}`}
                    />
                    {errors?.size && (
                      <p className="text-error-200 mt-1 font-extralight">
                        {errors.size.message}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="bg-primaryColor py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <FaPlus />
                      Add Size
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div
          className={`px-5 py-5 rounded w-[60%] ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
        >
          {/* search product and Size */}
          <div className="flex items-center justify-between gap-6 py-3 ">
            <h2 className="text-2xl font-bold mb-4">Size List</h2>
          </div>

          {/* Size table*/}
          <div className="py-5">
            <div className="container mx-auto">
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
                      ACTIONS
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {sizes?.map((size, id) => (
                    <tr>
                      <td className="p-2 text-center">{id + 1}</td>

                      <td
                        className={`px-6 py-4 text-[13px] whitespace-nowrap ${isDarkMode ? 'text-white' : 'text-textColor'}`}
                      >
                        {size.name}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          {/* <Link
                          >
                            <Tooltip text="Edit">
                              <button
                                onClick={handleEdit}
                                className="focus:outline-none transition-all duration-100 p-2 rounded bg-[#60a5fa1a] text-[#60a5fa] hover:bg-[#60a5fa] hover:text-lightColor"
                              >
                                <FiEdit className="text-[12px]" />
                              </button>
                            </Tooltip>
                          </Link> */}

                          {isOpen && (
                            <div className="fixed inset-0 bg-gray-800/10  transition-all duration-300 z-50">
                              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-full max-w-3xl rounded-md p-4">
                                <EditSize sizes={sizes} />
                                <button
                                  onClick={handleCloseModal}
                                  className="absolute top-2 right-2 focus:outline-none transition-all duration-300 p-2 rounded-full bg-[#f43f5e1a] text-[#f43f5e] hover:bg-[#f43f5e] hover:text-lightColor"
                                >
                                  <RxCross1 size={20} />
                                </button>
                              </div>
                            </div>
                          )}

                          <Tooltip text="Delete">
                            <button
                              onClick={() => handleDelete(size.id)}
                              className="focus:outline-none transition-all duration-300 p-2 rounded bg-[#f43f5e1a] text-[#f43f5e] hover:bg-[#f43f5e] hover:text-lightColor"
                            >
                              <RiDeleteBin7Line className="text-[12px]" />
                            </button>
                          </Tooltip>
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
