import { toast } from 'react-toastify'
import { GoHome } from 'react-icons/go'
import { FiEdit } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { useSelector } from 'react-redux'
import { RiDeleteBin7Line } from 'react-icons/ri'
import {
  useAddColorMutation,
  useDeleteColorMutation,
  useGetColorQuery,
} from '../../../../redux/features/api/color/colorApi'
import Button from '../../../../common/Button/Button'
import Tooltip from '../../../../common/Tooltip/Tooltip'
import EditColor from './EditColor'
import Breadcrumbs from '../../../../common/Breadcrumbs/Breadcrumbs'
import Swal from 'sweetalert2'

export default function AddColor() {
  const [id, setId] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState('#000000')
  const [addColor] = useAddColorMutation()
  const [deleteColor] = useDeleteColorMutation()
  const { data: color, isLoading, refetch } = useGetColorQuery()
  const sizes = color?.sizes

  const isDarkMode = useSelector(state => state.theme.isDarkMode)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  // add color function
  const onSubmit = async data => {
    data.code = selectedColor
    try {
      const response = await addColor(data).unwrap()
      if (response?.message) {
        toast.success(`${response.message}`, {
          position: 'bottom-right',
          autoClose: 3000,
        })
      }
      reset()
      setSelectedColor('#000000')
    } catch (error) {
      toast.error(`${error?.data?.message || 'Failed to add color'}`, {
        position: 'top-right',
        autoClose: 3000,
      })
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  // delete function
  const handleDelete = async colorId => {
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
        await deleteColor(colorId).unwrap()

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

  // update
  const handleColorChange = e => {
    setSelectedColor(e.target.value)
  }

  const handleClickOpen = id => {
    setId(id)
    setIsOpen(true)
  }

  const handleClickClose = () => {
    setIsOpen(false)
  }

  const pageTitle = 'Color'
  const productLinks = [
    { title: <GoHome />, link: '/' },
    { title: 'Products' },
    { title: 'Color' },
  ]
  return (
    <section
      className={`main-container ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
    >
      <Breadcrumbs title={pageTitle} breadcrumbs={productLinks} />

      <div className="lg:flex  gap-5">
        <div
          className={`px-5 py-5 rounded lg:w-[40%] w-full max-h-[450px] lg:mt-0 mt-5 ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
        >
          <div className="flex gap-5 pb-5">
            <div
              className={` w-full py-5 rounded ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
            >
              <form className="px-5" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="lg:text-2xl sm:text-xl text-lg font-bold mb-4">
                  Add New Color{' '}
                </h2>
                <div className="mb-4">
                  <label
                    htmlFor="productName"
                    className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    Color Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      placeholder="Black"
                      {...register('name', { required: true })}
                      className={`mt-1 p-3 border block w-full shadow-sm sm:text-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-primaryColor/80 hover:transition-all duration-200'}`}
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
                    htmlFor="code"
                    className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    Color Code
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      id="code"
                      value={selectedColor}
                      onChange={handleColorChange}
                      readOnly
                      className={`mt-1 p-3 border block w-full shadow-sm sm:text-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-primaryColor/80 hover:transition-all duration-200'}`}
                    />

                    <input
                      type="color"
                      id="favcolor"
                      value={selectedColor}
                      onChange={e => setSelectedColor(e.target.value)}
                      className="ml-2 rounded-md shadow-sm focus:ring-indigo-300 focus:ring-opacity-50"
                    />
                  </div>
                </div>

                <Button
                  text="Save"
                  type="submit"
                  className="bg-primaryColor py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
                ></Button>
              </form>
            </div>
          </div>
        </div>

        <div
          className={`px-5 py-5 rounded lg:w-[60%] w-full ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
        >
          <div className="flex items-center justify-between lg:gap-6  py-3 ">
            <h2 className="lg:text-2xl  w-[50%] sm:text-xl text-lg font-bold mb-4">
              Color List :
            </h2>
          </div>

          {/* Color table*/}
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
                      COLOR NAME
                    </th>

                    <th
                      className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      #HEX code
                    </th>
                    <th
                      className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      ACTIONS
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {sizes?.map((color, index) => (
                    <tr key={color?.id}>
                      <td className="p-2 text-center">{index + 1} .</td>
                      <td
                        className={`px-6 py-4 text-[13px] whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                      >
                        {color?.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                        <span
                          className="text-[12px] px-1 rounded py-1"
                          style={{
                            backgroundColor:
                              color?.backgroundColor || color?.code,
                            color:
                              color?.textColor ||
                              (isDarkMode ? '#ffffff' : '#000000'),
                          }}
                        >
                          {color?.code}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <Tooltip text="Edit">
                            <button
                              key={color.id}
                              onClick={() => handleClickOpen(color?.id)}
                              colors={color}
                              className="focus:outline-none transition-all duration-100 p-2 rounded bg-[#60a5fa1a] text-[#60a5fa] hover:bg-[#60a5fa] hover:text-lightColor"
                            >
                              <FiEdit className="text-[12px]" />
                            </button>
                          </Tooltip>
                          {isOpen && (
                            <div className="fixed inset-0 bg-gray-800/10  transition-all duration-300 z-50">
                              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-full max-w-5xl rounded-md p-4">
                                <EditColor
                                  id={id}
                                  setIsOpen={setIsOpen}
                                  refetch={refetch}
                                  handleColorChange={handleColorChange}
                                  selectedColor={selectedColor}
                                />
                                <button
                                  onClick={handleClickClose}
                                  className="absolute top-2 right-2 focus:outline-none transition-all duration-300 p-2 rounded-full bg-[#f43f5e1a] text-[#f43f5e] hover:bg-[#f43f5e] hover:text-lightColor"
                                >
                                  <RxCross1 size={20} />
                                </button>
                              </div>
                            </div>
                          )}
                          <Tooltip text="Delete">
                            <button
                              onClick={() => handleDelete(color.id)}
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
