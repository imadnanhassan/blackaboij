import { useSelector } from 'react-redux'
import { GoHome } from 'react-icons/go'
import { useState } from 'react'
import Breadcrumbs from '../../../common/Breadcrumbs/Breadcrumbs'
import Button from '../../../common/Button/Button'
import { IoCloseOutline } from 'react-icons/io5'

export default function Settings() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [headerLogoFile, setHeaderLogoFile] = useState(null)
  const [headerPreview, setHeaderPreview] = useState(null)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [footerLogoFile, setFooterLogoFile] = useState(null)
  const [footerPreview, setFooterPreview] = useState(null)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [faviconLogoFile, setFaviconLogoFile] = useState(null)
  const [faviconPreview, setFaviconPreview] = useState(null)

  const isDarkMode = useSelector(state => state.theme.isDarkMode)
  // Breadcrumbs
  const pageTitle = 'Settings'
  const productLinks = [
    { title: <GoHome />, link: '/dashboard' },
    { title: 'Settings' },
  ]

  // header logo
  const handleHeaderLogo = e => {
    const file = e.target.files[0]
    setHeaderLogoFile(file)
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setHeaderPreview(imageUrl)
    }
  }
  const handleCencelHeader = () => {
    setHeaderLogoFile(null)
    setHeaderPreview(null)
  }

  // footer logo
  const handleFooterLogo = e => {
    const file = e.target.files[0]
    setFooterLogoFile(file)
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setFooterPreview(imageUrl)
    }
  }
  const handleCencelFooter = () => {
    setFooterLogoFile(null)
    setFooterPreview(null)
  }

  // fav icon
  const handleFaviconLogo = e => {
    const file = e.target.files[0]
    setFaviconLogoFile(file)
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setFaviconPreview(imageUrl)
    }
  }
  const handleCencelFavicon = () => {
    setFaviconLogoFile(null)
    setFaviconPreview(null)
  }

  return (
    <section
      className={`main-container ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
    >
      <Breadcrumbs title={pageTitle} breadcrumbs={productLinks} />
      {/* publish btn */}
      <div className="flex justify-end gap-3 items-center mb-5">
        <Button
          text="Save changes"
          className="bg-primaryColor hover:bg-primaryColor/90 py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
        ></Button>

        <Button
          text="Discard Settings"
          className="bg-error-200 hover:bg-error-200/80 py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
        ></Button>
      </div>
      <div className="lg:flex lg:gap-5 sm:gap-6 ">
        <div
          className={`lg:w-[50%] px-5 py-5 rounded ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
        >
          <div>
            <h2 className="text-2xl font-bold mb-4">Golobal Settings</h2>
            <div className="mb-4">
              <label
                htmlFor="productName"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Website Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="website-name"
                  name="Website Name"
                  placeholder="Website Name"
                  className={`mt-1 p-3 border block w-full shadow-sm sm:text-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-primaryColor/80 hover:transition-all duration-200'}`}
                />
              </div>
            </div>

            {/* Header Logo */}
            <div className="mb-4">
              <label
                htmlFor="productName"
                className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Header Logo
              </label>
              <input
                type="file"
                id="productName"
                name="productName"
                onChange={handleHeaderLogo}
                className={`w-full text-sm border file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4  rounded focus:outline-none  focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard file:bg-primaryColor border-primaryColor text-lightColor file:text-black ' : 'bg-lightColor hover:border-primaryColor/50 file:text-white file:bg-primaryColor file:hover:bg-primaryColor/90 border-primaryColor/30 text-black'}`}
              />
              {headerPreview && (
                <div className="mt-4 flex items-center  relative ">
                  <img
                    src={headerPreview}
                    alt="Preview"
                    className="w-24 h-24 mr-2 mb-2 border rounded "
                  />
                  <IoCloseOutline
                    onClick={handleCencelHeader}
                    className=" text-[17px] bg-primaryColor text-white hover:text-white hover:bg-error-200 transition-all duration-200 cursor-pointer rounded -mt-[87px] relative -left-6"
                  />
                </div>
              )}
            </div>

            {/* Footer Logo */}
            <div className="mb-4">
              <label
                htmlFor="productName"
                className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Footer Logo
              </label>
              <input
                type="file"
                id="productName"
                name="productName"
                onChange={handleFooterLogo}
                className={`w-full text-sm border file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4  rounded focus:outline-none  focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard file:bg-primaryColor border-primaryColor text-lightColor file:text-black ' : 'bg-lightColor hover:border-primaryColor/50 file:text-white file:bg-primaryColor file:hover:bg-primaryColor/90 border-primaryColor/30 text-black'}`}
              />
              {footerPreview && (
                <div className="mt-4 flex items-center relative ">
                  <img
                    src={footerPreview}
                    alt="Preview"
                    className="w-24 h-24 mr-2 mb-2 border rounded "
                  />

                  <IoCloseOutline
                    onClick={handleCencelFooter}
                    className=" text-[17px] bg-primaryColor text-white hover:text-white hover:bg-error-200 transition-all duration-200 cursor-pointer rounded -mt-[87px] relative -left-6"
                  />
                </div>
              )}
            </div>

            {/* Favicon Logo */}
            <div className="mb-4">
              <label
                htmlFor="productName"
                className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Fav icon
              </label>
              <input
                type="file"
                id="productName"
                name="productName"
                onChange={handleFaviconLogo}
                className={`w-full text-sm border file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4  rounded focus:outline-none  focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard file:bg-primaryColor border-primaryColor text-lightColor file:text-black ' : 'bg-lightColor hover:border-primaryColor/50 file:text-white file:bg-primaryColor file:hover:bg-primaryColor/90 border-primaryColor/30 text-black'}`}
              />
              {faviconPreview && (
                <div className="mt-4 flex items-center relative ">
                  <img
                    src={faviconPreview}
                    alt="Preview"
                    className="w-24 h-24 mr-2 mb-2 border rounded "
                  />

                  <IoCloseOutline
                    onClick={handleCencelFavicon}
                    className=" text-[17px] bg-primaryColor text-white hover:text-white hover:bg-error-200 transition-all duration-200 cursor-pointer rounded -mt-[87px] relative -left-6"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className={`lg:w-[50%] px-5 py-5 rounded lg:mt-0 md:mt-4 sm:mt-4 mt-4 ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
        >
          <h2 className="text-2xl font-bold mb-4">Golobal SEO </h2>
          <div className="mb-4">
            <label
              htmlFor="productName"
              className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
            >
              Meta Title
            </label>
            <input
              type="text"
              id="meta-title"
              name="metaTitle"
              placeholder="Meta Title"
              className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm  rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-primaryColor/80 hover:transition-all duration-200'}`}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="productName"
              className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
            >
              Meta Keyword
            </label>
            <input
              type="text"
              id="metaKeyword"
              name="metaKeyword"
              placeholder="Meta Keyword"
              className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm  rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-primaryColor/80 hover:transition-all duration-200'}`}
            />
          </div>
          <div className="mb-4">
            <label
              className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
            >
              Meta Description
            </label>
            <textarea
              rows="4"
              className={`mt-1 p-3  border block w-full shadow-sm sm:text-sm  rounded-md  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText focus:outline-none' : 'text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-primaryColor hover:border-primaryColor/80 hover:transition-all duration-200'}`}
            ></textarea>
          </div>
        </div>
      </div>
    </section>
  )
}
