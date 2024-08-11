import { useSelector } from 'react-redux'
import { GoHome } from 'react-icons/go'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin7Line } from 'react-icons/ri'
import Breadcrumbs from '../../../../common/Breadcrumbs/Breadcrumbs'
import Tooltip from '../../../../common/Tooltip/Tooltip'
import EditAttributes from './EditAttributes'
import { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import {
  useAddAttributesMutation,
  useDeleteAttributeMutation,
  useGetAttributesQuery,
} from '../../../../redux/features/api/attribute/attributeApi'

export default function AddAttributes() {
  const [isOpen, setIsOpen] = useState(false)
  const isDarkMode = useSelector(state => state.theme.isDarkMode)
  const [values, setValues] = useState([])
  const [currentValue, setCurrentValue] = useState('')
  const [addAttributes] = useAddAttributesMutation()
  const { data: attributeItems, isLoading, refetch } = useGetAttributesQuery()
  const attributes = attributeItems?.attributeItems
  const [deleteAttribute] = useDeleteAttributeMutation()

  // Breadcrumbs
  const pageTitle = 'Attributes'
  const productLinks = [
    { title: <GoHome />, link: '/' },
    { title: 'Products' },
    { title: 'Attributes' },
  ]
  const handleSettingsButtonClick = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  // value function
  const handleAddValue = () => {
    if (currentValue.trim()) {
      setValues([...values, currentValue.trim()])
      setCurrentValue('')
    }
  }

  const handleValueChange = event => {
    setCurrentValue(event.target.value)
  }

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      handleAddValue()
    }
  }

  const handleCancelValue = index => {
    setValues(values.filter((_, i) => i !== index))
  }

  const {
    register,
    handleSubmit: onSubmitHandler,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = async data => {
    console.log('values', values)
    try {
      const response = await addAttributes({ ...data, values })
      console.log('response', response?.data)

      if (response.data?.message) {
        toast.success(`${response.data.message}`, {
          position: 'bottom-right',
          autoClose: 3000,
        })
      }
      reset()
      setValues([])
    } catch (error) {
      toast.error(`${error?.response?.data?.message}`, {
        position: 'top-right',
        autoClose: 3000,
      })
    }
  }

  const handleDeleteAttribute = async attributeId => {
    try {
      const response = await deleteAttribute(attributeId)
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
  console.log(attributes)

  return (
    <section
      className={`main-container ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
    >
      <Breadcrumbs title={pageTitle} breadcrumbs={productLinks} />
      <div className="flex gap-5">
        <div
          className={`px-5 py-5 rounded w-[40%] ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
        >
          <div className="flex gap-5 pb-5">
            <div
              className={` w-full py-5 rounded ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
            >
              <form onSubmit={onSubmitHandler(onSubmit)} className="px-5">
                <h2 className="text-2xl font-bold mb-4">Add New Attributes</h2>
                <div className="mb-4">
                  <label
                    htmlFor="productName"
                    className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    Attributes Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      {...register('name', { required: 'Name is required' })}
                      name="name"
                      placeholder="Enter attributes name"
                      className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-primaryColor/80 hover:transition-all duration-200'}`}
                    />
                    {errors?.name && (
                      <p className="text-error-200 mt-1 font-extralight">
                        {errors?.name?.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="value"
                    className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    Value
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="value"
                      placeholder="Enter value"
                      value={currentValue}
                      onChange={handleValueChange}
                      onKeyPress={handleKeyPress}
                      className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-primaryColor/80 hover:transition-all duration-200'}`}
                    />
                  </div>
                </div>
                <p className="text-gray-500 text-xs">
                  Press Enter Add More Value
                </p>

                <div className="mb-4">
                  {values.map((value, index) => (
                    <div
                      key={index}
                      className="mb-2 p-2 bg-gray-100 rounded-md flex justify-between items-center"
                    >
                      <span>{value}</span>
                      <button
                        type="button"
                        onClick={() => handleCancelValue(index)}
                        className="bg-red-500 text-white py-1 px-2 rounded"
                      >
                        Cancel
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  type="submit"
                  className="bg-primaryColor py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        <div
          className={`px-5 py-5 rounded w-[60%] ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
        >
          {/* search product and Attributes */}
          <div className="flex items-center justify-between gap-6 py-3 ">
            <h2 className="text-2xl font-bold mb-4">Attributes List</h2>
            <div className="search flex items-center gap-5">
              <div
                className={` rounded-md flex items-center justify-between border border-[#4800C9] ${isDarkMode ? 'text-darkColorText ' : 'bg-[#ffffff]'}`}
              >
                <input
                  type="search"
                  className={`py-2 pl-3  bg-transparent w-full focus:outline-none ${isDarkMode ? 'placeholder:text-slate-400' : 'placeholder:text-textColor'}`}
                  placeholder="Type Name & Enter"
                />
                <button className="btn mt-0 rounded-[0px] rounded-r-md px-3">
                  <i className="fa-solid fa-magnifying-glass" />
                </button>
              </div>
            </div>
          </div>

          {/* Attributes table*/}
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
                      VALUE
                    </th>
                    <th
                      className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      ACTIONS
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {isLoading ? (
                    <>Loading...</>
                  ) : (
                    <>
                      {attributes?.map((attribute, index) => (
                        <tr key={attribute?.id}>
                          <td className="p-2 text-center">{index + 1}</td>

                          <td
                            className={`px-6 py-4 text-[13px] whitespace-nowrap ${isDarkMode ? 'text-white' : 'text-textColor'}`}
                          >
                            {JSON.parse(attribute?.name)['en']}
                          </td>

                          <td
                            className={`px-6 py-4 whitespace-nowrap flex gap-2 ${isDarkMode ? 'text-textColor' : 'text-textColor'}`}
                          >
                            <span className=" flex gap-2">
                              {attribute?.attribute_values?.map((value, idx) =>
                                value ? (
                                  <span
                                    key={idx}
                                    className="text-[12px] bg-stone-100 px-1 rounded py-1 "
                                  >
                                    {value?.name}
                                  </span>
                                ) : (
                                  ''
                                ),
                              )}
                            </span>
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center space-x-2">
                              <Link
                                to={`/dashboard/attributes/edit/${attribute?.id}`}
                              >
                                <Tooltip text="Edit">
                                  <button
                                    onClick={handleSettingsButtonClick}
                                    className="focus:outline-none transition-all duration-100 p-2 rounded bg-[#60a5fa1a] text-[#60a5fa] hover:bg-[#60a5fa] hover:text-lightColor"
                                  >
                                    <FiEdit className="text-[12px]" />
                                  </button>
                                </Tooltip>
                              </Link>

                              {isOpen && (
                                <div className="fixed inset-0 bg-gray-800/10  transition-all duration-300 z-50">
                                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-full max-w-3xl rounded-md p-4">
                                    <EditAttributes />
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
                                  onClick={() =>
                                    handleDeleteAttribute(attribute?.id)
                                  }
                                  className="focus:outline-none transition-all duration-300 p-2 rounded bg-[#f43f5e1a] text-[#f43f5e] hover:bg-[#f43f5e] hover:text-lightColor"
                                >
                                  <RiDeleteBin7Line className="text-[12px]" />
                                </button>
                              </Tooltip>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
