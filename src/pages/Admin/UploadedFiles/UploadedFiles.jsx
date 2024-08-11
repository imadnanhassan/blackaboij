import { useState } from 'react'
import { useSelector } from 'react-redux'
import { GoHome } from 'react-icons/go'
import { HiDotsVertical } from 'react-icons/hi'
import { IoMdDownload } from 'react-icons/io'
import { MdContentCopy } from 'react-icons/md'
import { RiDeleteBin6Fill, RiUploadLine } from 'react-icons/ri'
// import { IoCloudUploadSharp } from 'react-icons/io5'
import Breadcrumbs from '../../../common/Breadcrumbs/Breadcrumbs'

export default function UploadedFiles() {
  const [activeDropdownId, setActiveDropdownId] = useState(null)
  // const [selectedFile, setSelectedFile] = useState(null)

  const isDarkMode = useSelector(state => state.theme.isDarkMode)
  // Breadcrumbs
  const pageTitle = 'UploadedFiles'
  const productLinks = [
    { title: <GoHome />, link: '/' },
    { title: 'UploadedFiles' },
  ]

  // Function to handle opening/closing dropdown for an item
  const handleToggle = itemId => {
    setActiveDropdownId(activeDropdownId === itemId ? null : itemId)
  }

  // Functions for dropdown actions
  const handleDownload = () => {
    const url = 'image.jpg' // Replace 'image.jpg' with the actual path to your image
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', '') // This will ensure the file is downloaded with the correct name and format
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleCopyLink = () => {
    // Logic for handling copy link action
  }

  const handleDelete = () => {
    // Logic for handling delete action
  }

  // Get the selected file from the event
  // const handleFileChange = event => {
  //   const file = event.target.files[0]
  //   setSelectedFile(file)
  // }

  // dummy data
  const items = [
    {
      id: 1,
      imageSrc: 'https://picsum.photos/500/300?random=4',
      title: 'customer-login .webp',
      size: '49.26 KB',
    },
    {
      id: 2,
      imageSrc: 'https://picsum.photos/500/300?random=1',
      title: 'Product Image 2',
      size: '65.32 KB',
    },
    {
      id: 3,
      imageSrc: 'https://picsum.photos/500/300?random=2',
      title: 'Product Image 3',
      size: '72.12 KB',
    },
    {
      id: 4,
      imageSrc: 'https://picsum.photos/500/300?random=3',
      title: 'Product Image 4',
      size: '55.89 KB',
    },
    {
      id: 5,
      imageSrc: 'https://picsum.photos/500/300?random=2',
      title: 'Product Image 5',
      size: '60.45 KB',
    },
    {
      id: 6,
      imageSrc: 'https://picsum.photos/500/300?random=4',
      title: 'Product Image 6',
      size: '40.76 KB',
    },
    // Add more items as needed
  ]

  return (
    <section
      className={`main-container ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
    >
      {/* Breadcrumbs */}
      <Breadcrumbs title={pageTitle} breadcrumbs={productLinks} />
      <div
        className={`px-5 py-5 rounded w-full ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
      >
        <div className="flex justify-between items-center">
          <p>All File: {items.length}</p>

          <div className="lg:flex items-center gap-10">
            <div className="">
              <select
                id="vendor3"
                name="vendor3"
                className={`form-control mt-1 p-[12px]   block w-[300px] shadow-sm sm:text-sm  rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText border ' : 'bg-lightColor hover:border-gray-400 border border-gray-300 '}`}
              >
                {/* Vendor options */}
                <option>Sort by newest</option>
                <option>Sort by oldest</option>
                <option>Sort by smallest</option>
                <option>Sort by largest</option>
              </select>
            </div>

            {/* search product and addProducts */}
            <div className="flex items-center justify-between gap-6 ">
              <div className="search flex items-center gap-5">
                <div
                  className={` rounded-md flex items-center justify-between border border-[#4800C9] ${isDarkMode ? 'text-darkColorText ' : 'bg-[#ffffff]'}`}
                >
                  <input
                    type="search"
                    className={`py-2 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer ${isDarkMode ? 'placeholder:text-slate-400' : 'placeholder:text-textColor'}`}
                    placeholder="Search Products"
                  />
                  <button className="btn mt-0 rounded-[0px] rounded-r-md px-3">
                    <i className="fa-solid fa-magnifying-glass" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-[30px]">
              <input
                type="file"
                accept=".jpg, .jpeg, .png, .gif"
                style={{ display: 'none' }} // Hide the input element
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer bg-primaryColor py-3 px-8 rounded text-white text-[14px] flex gap-2 items-center"
              >
                <RiUploadLine className="text-white text-xl" />
                <span>Select File</span>
              </label>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-6">
          {items.map(item => (
            <div
              key={item.id}
              className="bg-white shadow-[0_8px_12px_-6px_rgba(0,0,0,0.2)] border p-2 w-[250px] max-w-sm rounded-lg  overflow-hidden mx-auto mt-4 relative"
            >
              {/* Buttons */}
              <div className="absolute top-0 left-0 w-full flex justify-between p-2">
                {/* Checkbox */}
                <div className="flex items-center">
                  <input
                    id={`checkbox${item.id}`}
                    type="checkbox"
                    className="hidden peer"
                    defaultChecked=""
                  />
                  <label
                    htmlFor={`checkbox${item.id}`}
                    className="relative flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-6 h-6 cursor-pointer bg-primaryColor border overflow-hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full fill-white"
                      viewBox="0 0 520 520"
                    >
                      <path
                        d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                        data-name="7-Check"
                        data-original="#000000"
                      />
                    </svg>
                  </label>
                </div>

                {/* Dropdown menu */}
                <div>
                  <div className="relative inline-block text-left">
                    <HiDotsVertical
                      className="bg-white text-[24px] cursor-pointer"
                      onClick={() => handleToggle(item.id)}
                    />
                    {activeDropdownId === item.id && (
                      <div className="origin-top-right absolute right-0 mt-2 w-48 shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div
                          className=""
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          <button
                            onClick={handleDownload}
                            className="flex items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-primaryColor hover:text-white w-full"
                            role="menuitem"
                          >
                            <IoMdDownload className="mr-2" />
                            Download
                          </button>
                          <button
                            onClick={handleCopyLink}
                            className="flex items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-primaryColor hover:text-white w-full text-left"
                            role="menuitem"
                          >
                            <MdContentCopy className="mr-2" />
                            Copy Link
                          </button>
                          <button
                            onClick={handleDelete}
                            className="flex items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-primaryColor hover:text-white w-full text-left"
                            role="menuitem"
                          >
                            <RiDeleteBin6Fill className="mr-2" />
                            Delete
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Image */}
              <img src={item.imageSrc} className="w-full rounded" alt="Image" />

              {/* Content */}
              <div className="px-1 my-2">
                <h5 className="text-[13px] font-light">{item.title}</h5>
                <p className="mt-1 text-[10px] text-gray-800">{item.size}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
