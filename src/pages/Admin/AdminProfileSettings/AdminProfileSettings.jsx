import { useSelector } from 'react-redux'
import { GoHome } from 'react-icons/go'
import { useState } from 'react'
import Breadcrumbs from '../../../common/Breadcrumbs/Breadcrumbs'
import Button from '../../../common/Button/Button'
import { IoCloseOutline } from 'react-icons/io5'

export default function AdminProfileSettings() {
  const [headerPreview, setHeaderPreview] = useState(null)
  const [footerPreview, setFooterPreview] = useState(null)
  const [faviconPreview, setFaviconPreview] = useState(null)
  const [metaKeyword, setMetaKeyword] = useState('')
  const [metaKeywordsList, setMetaKeywordsList] = useState([])

  const handleLogoChange = (e, setPreview) => {
    const file = e.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setPreview(imageUrl)
    }
  }

  const handleCancelLogo = setPreview => {
    setPreview(null)
  }
  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (metaKeyword.trim() !== '') {
        setMetaKeywordsList([...metaKeywordsList, metaKeyword])
        setMetaKeyword('') // Clear the input field after adding the keyword
      }
    }
  }

  const handleRemoveKeyword = keywordToRemove => {
    setMetaKeywordsList(metaKeywordsList.filter(kw => kw !== keywordToRemove))
  }

  const isDarkMode = useSelector(state => state.theme.isDarkMode)
  // Breadcrumbs
  const pageTitle = 'Settings'
  const productLinks = [
    { title: <GoHome />, link: '/dashboard' },
    { title: 'Settings' },
  ]

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
      </div>
      <div className="lg:flex lg:gap-5 sm:gap-6 ">
        <form >
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
                  onChange={e => handleLogoChange(e, setHeaderPreview)}
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
                      onClick={() => handleCancelLogo(setHeaderPreview)}
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
                  onChange={e => handleLogoChange(e, setFooterPreview)}
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
                      onClick={() => handleCancelLogo(setFooterPreview)}
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
                  onChange={e => handleLogoChange(e, setFaviconPreview)}
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
                      onClick={() => handleCancelLogo(setFaviconPreview)}
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
                htmlFor="metaKeyword"
                className="block text-sm font-medium text-gray-700"
              >
                Meta Keyword
              </label>
              <input
                type="text"
                id="metaKeyword"
                name="metaKeyword"
                value={metaKeyword}
                placeholder="Meta Keyword"
                className="form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300"
                onChange={e => setMetaKeyword(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <p className="text-xs text-gray-500 mt-2">
                Press "Enter" to add a keyword
              </p>

              {/* Show meta keywords below */}
              {metaKeywordsList.length > 0 && (
                <div className="mt-3">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Added Keywords:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {metaKeywordsList.map((keyword, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-gray-200 text-gray-800 px-3 py-1 rounded-full"
                      >
                        <span className="mr-2">{keyword}</span>
                        <button
                          onClick={() => handleRemoveKeyword(keyword)}
                          className="text-red-500 hover:text-red-700"
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
        </form>
      </div>
    </section>
  )
}
