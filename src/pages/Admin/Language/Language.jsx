import { GoHome } from 'react-icons/go'
import { useSelector } from 'react-redux'

import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin7Line } from 'react-icons/ri'
import { useState } from 'react'
// import { toast } from 'react-toastify'
import { FaPlus } from 'react-icons/fa'
import Breadcrumbs from '../../../common/Breadcrumbs/Breadcrumbs'
import Button from '../../../common/Button/Button'
import { RxCross1 } from 'react-icons/rx'
// import {
//   useAddLanguageMutation,
//   useDeleteLanguageMutation,
//   useGetLanguageQuery,
// } from '../../../redux/features/api/language/languageApi'
// import { Controller, useForm } from 'react-hook-form'
// import axios from 'axios'
// import { AuthContext } from '../../../Providers/AuthProvider'
// import Swal from 'sweetalert2'
import EditLanguage from './EditLanguage'

export default function Language() {
  const [isOpen, setIsOpen] = useState(false)
  const isDarkMode = useSelector(state => state.theme.isDarkMode)
  // const [addLanguage] = useAddLanguageMutation()
  // const { data: languages, isLoading, refetch } = useGetLanguageQuery()
  // const [deleteLanguage] = useDeleteLanguageMutation()
  // const { token } = useContext(AuthContext)
  // const [id, setId] = useState()

  // Breadcrumbs
  const pageTitle = 'Language'
  const productLinks = [
    { title: <GoHome />, link: '/' },
    { title: 'Settings' },
    { title: 'Language' },
  ]

  // const [flags, setFlags] = useState([])

  // useEffect(() => {
  //   const fetchFlags = async () => {
  //     try {
  //       const response = await fetch('https://restcountries.com/v3.1/all')
  //       const data = await response.json()
  //       const modifiedFlags = data.map(country => ({
  //         value: country.flags.png,
  //         label: (
  //           <div className="flex gap-x-2 text-center">
  //             <img
  //               className="w-6 h-4"
  //               src={country.flags.png}
  //               alt={country.cca2}
  //             />
  //             <p className="text-sm">{country.cca2}</p>
  //           </div>
  //         ),
  //         name: country.cca2,
  //         // level: country.level
  //       }))
  //       setFlags(modifiedFlags)
  //     } catch (error) {
  //       console.error('Error fetching flags:', error)
  //     }
  //   }

  //   fetchFlags()
  // }, [])

  // Toggle btn
  // const toggleStatus = async language => {
  //   const newStatus = language.status === 1 ? 0 : 1

  //   try {
  //     const response = await axios.post(
  //       `${import.meta.env.VITE_BASE_URL}/admins/languages/status-change/${language.id}`,
  //       { status: newStatus },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           'Content-Type': 'application/json',
  //         },
  //       },
  //     )
  //     refetch()

  //     if (response && response.data) {
  //       toast.success(`${response.data.message}`, {
  //         position: 'bottom-right',
  //         autoClose: 2000,
  //       })
  //     } else {
  //       toast.error('Failed to update status', {
  //         position: 'top-right',
  //         autoClose: 2000,
  //       })
  //     }
  //   } catch (error) {
  //     toast.error(`${error?.response?.data?.message}`, {
  //       position: 'top-right',
  //       autoClose: 2000,
  //     })
  //   }
  // }

  // handle modal
  // const handleOpenModal = () => {
  //   setId(id)
  //   setIsOpen(true)
  // }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  // const {
  //   control,
  //   register,
  //   handleSubmit: onSubmitHandler,
  //   formState: { errors },
  //   reset,
  // } = useForm()

  // const onSubmit = async data => {
  //   const icon = data.icon.value
  //   try {
  //     const response = await addLanguage({ ...data, icon })

  //     if (response.data?.message) {
  //       toast.success(`${response.data.message}`, {
  //         position: 'bottom-right',
  //         autoClose: 3000,
  //       })
  //     }
  //     reset()
  //   } catch (error) {
  //     toast.error(`${error?.response?.data?.message}`, {
  //       position: 'top-right',
  //       autoClose: 3000,
  //     })
  //   }
  // }

  // const handleDeleteLanguage = async languageId => {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!',
  //   }).then(async result => {
  //     if (result.isConfirmed) {
  //       try {
  //         const response = await deleteLanguage(languageId)
  //         if (response?.data?.message) {
  //           Swal.fire({
  //             title: 'Deleted!',
  //             text: `${response.data.message}`,
  //             icon: 'success',
  //           })
  //         }
  //       } catch (error) {
  //         console.error('Error deleting user:', error)
  //         Swal.fire({
  //           title: 'Error!',
  //           text: 'An error occurred while deleting the language.',
  //           icon: 'error',
  //         })
  //       }
  //     }
  //   })
  // }

  return (
    <section
      className={`main-container ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
    >
      <Breadcrumbs title={pageTitle} breadcrumbs={productLinks} />

      <div className="lg:flex gap-5">
        <div
          className={`px-5 py-5 rounded lg:w-[40%] w-full max-h-[420px] ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
        >
          <div className="flex gap-5 pb-5">
            <div
              className={` w-full py-5 rounded ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
            >
              <form className="form">
                <div className="px-5">
                  <h2 className="text-2xl font-bold mb-4">Add New Language</h2>
                  <div className="mb-4">
                    <label
                      htmlFor="productName"
                      className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                    >
                      Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        // {...register('name', { required: 'Name is required' })}
                        id="productName"
                        name="name"
                        placeholder="Enter name"
                        className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-primaryColor/80 hover:transition-all duration-200'}`}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="relative">
                      <label
                        htmlFor="productCategory"
                        className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                      >
                        Select Icon
                      </label>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="productName"
                      className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                    >
                      Code
                    </label>
                    <input
                      type="text"
                      id="productName"
                      // {...register('code', { required: 'Code is required' })}
                      name="code"
                      placeholder="Enter Code"
                      className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm  rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-primaryColor/80 hover:transition-all duration-200'}`}
                    />
                  </div>

                  <Button
                    text="Submit"
                    type="submit"
                    className="bg-primaryColor py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
                    icon={FaPlus}
                  ></Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div
          className={`px-5 py-5 rounded lg:w-[60%] w-full ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
        >
          {/* search product and Brand */}
          <div className="flex items-center justify-between gap-6 py-3 ">
            <h2 className="lg:text-2xl text-lg font-bold mb-4">
              Language List
            </h2>
            <div className="search flex items-center gap-5">
              <div
                className={` rounded-md flex items-center justify-between border border-[#4800C9] ${isDarkMode ? 'text-darkColorText ' : 'bg-[#ffffff]'}`}
              >
                <input
                  type="search"
                  className={`py-2 pl-3  bg-transparent w-full focus:outline-none cursor-pointer ${isDarkMode ? 'placeholder:text-slate-400' : 'placeholder:text-textColor'}`}
                  placeholder="Type Name & Enter"
                />
                <button className="btn mt-0 rounded-[0px] rounded-r-md px-3">
                  <i className="fa-solid fa-magnifying-glass" />
                </button>
              </div>
            </div>
          </div>

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
                      Flag
                    </th>
                    <th
                      className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      NAME
                    </th>
                    <th
                      className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      CODE
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
                    <td className="p-2">1</td>

                    <td
                      className={`px-6 py-4 text-[13px] whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      <img className="w-10 h-7" src="" alt="" />
                    </td>
                    <td
                      className={`px-6 py-4 text-[13px] whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      {/* {language?.name} */}
                      English
                    </td>
                    <td
                      className={`px-6 py-4 text-[13px] whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      {/* {language?.code} */}
                      Bn
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          // id={`toggle-${language.id}`}
                          // checked={language.status === 0}
                          // onChange={() => toggleStatus(language)}
                          className="toggle-checkbox sr-only"
                        />
                        <label
                          // htmlFor={`toggle-${language.id}`}
                          className="toggle-label"
                        >
                          <div className="toggle-bar w-12 h-5 rounded-full bg-gray-300 flex items-center px-1">
                            <div className="oggle-circle w-3 h-3 rounded-full bg-white shadow-md transform transition-transform"></div>
                          </div>
                        </label>
                        {/* <span className={`text-sm font-medium ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}>
                                                                {language.status === 1 ? 'Active' : 'Inactive'}
                                                            </span> */}
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <button
                          title="edit"
                          // onClick={() => handleOpenModal(language?.id)}
                          className="focus:outline-none transition-all duration-100 p-2 rounded bg-[#60a5fa1a] text-[#60a5fa] hover:bg-[#60a5fa] hover:text-lightColor"
                        >
                          <FiEdit className=" text-[12px] " />
                        </button>
                        {isOpen && (
                          <div className="fixed inset-0 bg-gray-800/35  transition-all duration-300 z-50">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-full max-w-5xl rounded-md p-4">
                              <EditLanguage />
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
                          title="delete"
                          // onClick={() => handleDeleteLanguage(language.id)}
                          className="focus:outline-none transition-all duration-300 p-2 rounded bg-[#f43f5e1a] text-[#f43f5e] hover:bg-[#f43f5e] hover:text-lightColor"
                        >
                          <RiDeleteBin7Line className="text-[12px]" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
