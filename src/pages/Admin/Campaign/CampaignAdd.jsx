import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { GoHome } from 'react-icons/go'
import { FaPlus } from 'react-icons/fa'
import Breadcrumbs from '../../../common/Breadcrumbs/Breadcrumbs'
import Button from '../../../common/Button/Button'
import { IoCloseOutline } from 'react-icons/io5'
import CampaignDatePicker from '../../../components/DateRangePicker/CampaignDatePicker'
import { FiEdit, FiEye } from 'react-icons/fi'
import { RiDeleteBin7Line } from 'react-icons/ri'
import Pagination from '../../../common/Pagination/Pagination'
export default function CampaignAdd() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [campaignPhoto, setCampaignPhoto] = useState(null)
  const [campaignPhotoPreview, setCampaignPhotoPreview] = useState(null)
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedProducts, setSelectedProducts] = useState([])
  const [addedProducts, setAddedProducts] = useState([])

  const [discountPrice, setDiscountPrice] = useState(0)
  const [discountType, setDiscountType] = useState('%')

  const isDarkMode = useSelector(state => state.theme.isDarkMode)

  // Breadcrumbs
  const pageTitle = 'Create Campaign'
  const campaignLink = [
    { title: <GoHome />, link: '/' },
    { title: 'Campaign' },
    { title: 'Create Campaign' },
  ]

  // campaign logo
  const handleCampaignPhoto = e => {
    const file = e.target.files[0]
    setCampaignPhoto(file)
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setCampaignPhotoPreview(imageUrl)
    }
  }
  const handleCencelPhoto = () => {
    setCampaignPhoto(null)
    setCampaignPhotoPreview(null)
  }

  const allProduct = [
    {
      id: 1,
      img: 'https://via.placeholder.com/150',
      title: 'Product 1',
      category: 'Electronics',
      stock: 'In Stock',
      sku: 'SKU001',
      price: '$100.00',
      quantity: 10,
      isActive: 'Active',
    },
    {
      id: 2,
      img: 'https://via.placeholder.com/150',
      title: 'Product 2',
      category: 'Clothing',
      stock: 'Out of Stock',
      sku: 'SKU002',
      price: '$50.00',
      quantity: 0,
      isActive: 'Inactive',
    },
    {
      id: 3,
      img: 'https://via.placeholder.com/150',
      title: 'Product 3',
      category: 'Home & Kitchen',
      stock: 'In Stock',
      sku: 'SKU003',
      price: '$75.00',
      quantity: 5,
      isActive: 'Active',
    },
    {
      id: 4,
      img: 'https://via.placeholder.com/150',
      title: 'Product 4',
      category: 'Electronics',
      stock: 'In Stock',
      sku: 'SKU004',
      price: '$120.00',
      quantity: 15,
      isActive: 'Active',
    },
    {
      id: 5,
      img: 'https://via.placeholder.com/150',
      title: 'Product 5',
      category: 'Electronics',
      stock: 'Out of Stock',
      sku: 'SKU005',
      price: '$80.00',
      quantity: 0,
      isActive: 'Inactive',
    },
    {
      id: 6,
      img: 'https://via.placeholder.com/150',
      title: 'Product 6',
      category: 'Clothing',
      stock: 'In Stock',
      sku: 'SKU006',
      price: '$60.00',
      quantity: 8,
      isActive: 'Active',
    },
    {
      id: 7,
      img: 'https://via.placeholder.com/150',
      title: 'Product 7',
      category: 'Home & Kitchen',
      stock: 'Out of Stock',
      sku: 'SKU007',
      price: '$90.00',
      quantity: 0,
      isActive: 'Inactive',
    },
    {
      id: 8,
      img: 'https://via.placeholder.com/150',
      title: 'Product 8',
      category: 'Electronics',
      stock: 'In Stock',
      sku: 'SKU008',
      price: '$110.00',
      quantity: 12,
      isActive: 'Active',
    },
    {
      id: 9,
      img: 'https://via.placeholder.com/150',
      title: 'Product 9',
      category: 'Clothing',
      stock: 'In Stock',
      sku: 'SKU009',
      price: '$70.00',
      quantity: 6,
      isActive: 'Active',
    },
    {
      id: 10,
      img: 'https://via.placeholder.com/150',
      title: 'Product 10',
      category: 'Home & Kitchen',
      stock: 'Out of Stock',
      sku: 'SKU010',
      price: '$95.00',
      quantity: 0,
      isActive: 'Inactive',
    },
    {
      id: 11,
      img: 'https://via.placeholder.com/150',
      title: 'Product 11',
      category: 'Electronics',
      stock: 'In Stock',
      sku: 'SKU011',
      price: '$130.00',
      quantity: 20,
      isActive: 'Active',
    },
    {
      id: 12,
      img: 'https://via.placeholder.com/150',
      title: 'Product 12',
      category: 'Clothing',
      stock: 'Out of Stock',
      sku: 'SKU012',
      price: '$55.00',
      quantity: 0,
      isActive: 'Inactive',
    },
    {
      id: 13,
      img: 'https://via.placeholder.com/150',
      title: 'Product 13',
      category: 'Home & Kitchen',
      stock: 'In Stock',
      sku: 'SKU013',
      price: '$85.00',
      quantity: 7,
      isActive: 'Active',
    },
    {
      id: 14,
      img: 'https://via.placeholder.com/150',
      title: 'Product 14',
      category: 'Electronics',
      stock: 'Out of Stock',
      sku: 'SKU014',
      price: '$140.00',
      quantity: 0,
      isActive: 'Inactive',
    },
    {
      id: 15,
      img: 'https://via.placeholder.com/150',
      title: 'Product 15',
      category: 'Clothing',
      stock: 'In Stock',
      sku: 'SKU015',
      price: '$65.00',
      quantity: 9,
      isActive: 'Active',
    },
    {
      id: 16,
      img: 'https://via.placeholder.com/150',
      title: 'Product 16',
      category: 'Home & Kitchen',
      stock: 'Out of Stock',
      sku: 'SKU016',
      price: '$75.00',
      quantity: 0,
      isActive: 'Inactive',
    },
    {
      id: 17,
      img: 'https://via.placeholder.com/150',
      title: 'Product 17',
      category: 'Electronics',
      stock: 'In Stock',
      sku: 'SKU017',
      price: '$150.00',
      quantity: 25,
      isActive: 'Active',
    },
    {
      id: 18,
      img: 'https://via.placeholder.com/150',
      title: 'Product 18',
      category: 'Clothing',
      stock: 'Out of Stock',
      sku: 'SKU018',
      price: '$70.00',
      quantity: 0,
      isActive: 'Inactive',
    },
    {
      id: 19,
      img: 'https://via.placeholder.com/150',
      title: 'Product 19',
      category: 'Home & Kitchen',
      stock: 'In Stock',
      sku: 'SKU019',
      price: '$95.00',
      quantity: 8,
      isActive: 'Active',
    },
    {
      id: 20,
      img: 'https://via.placeholder.com/150',
      title: 'Product 20',
      category: 'Electronics',
      stock: 'Out of Stock',
      sku: 'SKU020',
      price: '$160.00',
      quantity: 0,
      isActive: 'Inactive',
    },
    {
      id: 21,
      img: 'https://via.placeholder.com/150',
      title: 'Product 21',
      category: 'Clothing',
      stock: 'In Stock',
      sku: 'SKU021',
      price: '$80.00',
      quantity: 10,
      isActive: 'Active',
    },
    {
      id: 22,
      img: 'https://via.placeholder.com/150',
      title: 'Product 22',
      category: 'Home & Kitchen',
      stock: 'Out of Stock',
      sku: 'SKU022',
      price: '$100.00',
      quantity: 0,
      isActive: 'Inactive',
    },
    {
      id: 23,
      img: 'https://via.placeholder.com/150',
      title: 'Product 23',
      category: 'Electronics',
      stock: 'In Stock',
      sku: 'SKU023',
      price: '$170.00',
      quantity: 30,
      isActive: 'Active',
    },
    {
      id: 24,
      img: 'https://via.placeholder.com/150',
      title: 'Product 24',
      category: 'Clothing',
      stock: 'Out of Stock',
      sku: 'SKU024',
      price: '$90.00',
      quantity: 0,
      isActive: 'Inactive',
    },
    {
      id: 25,
      img: 'https://via.placeholder.com/150',
      title: 'Product 25',
      category: 'Home & Kitchen',
      stock: 'In Stock',
      sku: 'SKU025',
      price: '$110.00',
      quantity: 12,
      isActive: 'Inactive',
    },
    {
      id: 26,
      img: 'https://via.placeholder.com/150',
      title: 'Product 26',
      category: 'Electronics',
      stock: 'Out of Stock',
      sku: 'SKU026',
      price: '$180.00',
      quantity: 0,
      isActive: 'Inactive',
    },
    {
      id: 27,
      img: 'https://via.placeholder.com/150',
      title: 'Product 27',
      category: 'Clothing',
      stock: 'In Stock',
      sku: 'SKU027',
      price: '$100.00',
      quantity: 15,
      isActive: 'Active',
    },
    {
      id: 28,
      img: 'https://via.placeholder.com/150',
      title: 'Product 28',
      category: 'Home & Kitchen',
      stock: 'Out of Stock',
      sku: 'SKU028',
      price: '$120.00',
      quantity: 0,
      isActive: 'Inactive',
    },
    {
      id: 29,
      img: 'https://via.placeholder.com/150',
      title: 'Product 29',
      category: 'Electronics',
      stock: 'In Stock',
      sku: 'SKU029',
      price: '$200.00',
      quantity: 20,
      isActive: 'Active',
    },
    {
      id: 30,
      img: 'https://via.placeholder.com/150',
      title: 'Product 30',
      category: 'Clothing',
      stock: 'Out of Stock',
      sku: 'SKU030',
      price: '$130.00',
      quantity: 0,
      isActive: 'Inactive',
    },
  ]

  useEffect(() => {
    setData(allProduct)
  }, [])

  const itemsPerPage = 10
  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber)
  }

  const totalPages = Math.ceil(data.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const slicedData = data.slice(startIndex, endIndex)

  const handleAddProduct = productId => {
    const productToAdd = allProduct.find(product => product.id === productId)

    if (productToAdd && !addedProducts.includes(productId)) {
      setSelectedProducts([...selectedProducts, productToAdd])
      setAddedProducts([...addedProducts, productId])
    }
  }

  const handleDeleteProduct = productId => {
    setSelectedProducts(
      selectedProducts.filter(product => product.id !== productId),
    )
    setAddedProducts(addedProducts.filter(id => id !== productId))
  }

  const handlePriceChange = e => {
    setDiscountPrice(e.target.value)
  }

  const handleTypeChange = e => {
    setDiscountType(e.target.value)
  }
  return (
    <section
      className={`main-container ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
    >
      <Breadcrumbs title={pageTitle} breadcrumbs={campaignLink} />
      {/* publish btn */}
      <div className="flex justify-end gap-3 items-center mb-5">
        <Button
          text="Add Campaign"
          className="bg-primaryColor py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
          icon={FaPlus}
        ></Button>

        <Button
          text="Discard Campaign"
          className="bg-error-200 py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
        ></Button>
      </div>

      {/* create campaign */}
      <div
        className={`py-5 rounded xl:w-[1200px] lg:w-[950px] md:w-[750px] sm:w-[750] w-full mx-auto ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
      >
        <div className="px-5">
          <h2 className="text-2xl font-bold mb-4">Campaign Add Information</h2>
          <div className="flex gap-5">
            <div className="mb-4 w-[50%]">
              <label
                htmlFor="productName"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Campaign Name"
                className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
              />
            </div>
            <div className="mb-4 w-[50%]">
              <label
                htmlFor="productName"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Permalink
              </label>
              <input
                type="text"
                name="slug"
                placeholder="Permalink"
                className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5">
            <div className="mb-4 lg:w-1/2">
              <label
                htmlFor="priority"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Priority
              </label>
              <input
                type="text"
                id="priority"
                name="priority"
                placeholder="Enter Priority"
                className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-gray-400'}`}
              />
            </div>
            <div className="mb-4 lg:w-1/2">
              <label
                htmlFor="discountAmount"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Campaign Date
              </label>
              <CampaignDatePicker />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="productName"
              className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
            >
              Campaign Photo
            </label>
            <input
              type="file"
              id="productName"
              name="productName"
              onChange={handleCampaignPhoto}
              className={`w-full text-sm border file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4  rounded focus:outline-none  focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard file:bg-primaryColor border-primaryColor text-lightColor file:text-black ' : 'bg-lightColor hover:border-primaryColor/50 file:text-white file:bg-primaryColor file:hover:bg-primaryColor/90 border-primaryColor/30 text-black'}`}
            />
            {campaignPhotoPreview && (
              <div className="mt-4 flex items-center  relative ">
                <img
                  src={campaignPhotoPreview}
                  alt="Preview"
                  className="w-36 h-36 mr-2 mb-2 border rounded "
                />
                <IoCloseOutline
                  onClick={handleCencelPhoto}
                  className=" text-[17px] bg-primaryColor text-white hover:text-white hover:bg-error-200 transition-all duration-200 cursor-pointer rounded -mt-[133px] relative -left-6"
                />
              </div>
            )}
          </div>

          <div className="mb-4">
            <label
              className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
            >
              Description <span className="text-Vpink-700">Optional</span>
            </label>
            <textarea
              rows="4"
              placeholder="Message description"
              className={`mt-1 p-3  border block w-full shadow-sm sm:text-sm  rounded-md  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText focus:outline-none' : 'text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-primaryColor hover:border-gray-400 border-gray-300'}`}
            ></textarea>
          </div>

          {/* campaign products */}
          <div className="flex items-center justify-between gap-6 py-3 ">
            <h2 className="text-xl font-bold mb-4">
              Campaign Product : {selectedProducts.length}
            </h2>

            <div className="search flex items-center gap-5">
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
            </div>
          </div>

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
                    <th className="p-2">#</th>
                    <th
                      className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      PRODUCT
                    </th>
                    <th
                      className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      CATEGORY
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
                      DISCOUNT PRICE
                    </th>

                    <th
                      className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      Discount Type
                    </th>
                    <th
                      className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      STATUS
                    </th>
                  </tr>
                </thead>
                {/* campaign product table */}
                <tbody className="divide-y divide-gray-200">
                  {selectedProducts.map(item => (
                    <tr key={item.id}>
                      <td className="text-center">
                        <button
                          onClick={() => handleDeleteProduct(item.id)}
                          className="focus:outline-none transition-all duration-300 p-2 rounded-full bg-[#f43f5e1a] text-[#f43f5e] hover:bg-[#f43f5e] hover:text-lightColor"
                        >
                          <RiDeleteBin7Line className="text-[12px]" />
                        </button>
                      </td>
                      <td className="border-l pl-2 py-4 whitespace-nowrap flex gap-2">
                        <div
                          className={`w-[40px] h-[40px] rounded-md p-2 ${isDarkMode ? 'bg-[#131A26]' : 'bg-[#f2f2f3]'}`}
                        >
                          <img
                            src="https://react.spruko.com/synto-js/preview/assets/11-70a2cfce.png"
                            alt=""
                            className="w-full"
                          />
                        </div>
                        <span>
                          <h6
                            className={`text-[15px] pb-1 font-medium ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                          >
                            {item.name}
                          </h6>
                        </span>
                      </td>
                      <td
                        className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                      >
                        {item.category}
                      </td>
                      <td className="border-l pl-2 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.isStatus ? 'bg-success-100 text-success-400' : 'text-[#7367f0] bg-gray-100'}`}
                        >
                          {item.stock ? 'In Stock' : 'Out of stock'}
                        </span>
                      </td>
                      <td
                        className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                      >
                        {item.price}
                      </td>

                      <td
                        className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                      >
                        <input
                          type="text"
                          value={discountPrice}
                          onChange={handlePriceChange}
                          className="border rounded px-2 py-1 focus:outline-none focus:border-primaryColor"
                        />
                      </td>
                      <td
                        className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                      >
                        <input
                          type="text"
                          value={discountType}
                          onChange={handleTypeChange}
                          className="border rounded px-2 py-1 focus:outline-none focus:border-primaryColor"
                        />
                      </td>

                      <td className="border-l pl-2 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.isActive ? 'bg-[#E8F9EF] text-[#22c55e]' : 'bg-gray-100 text-gray-400'}`}
                        >
                          {item.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <hr
            className={`h-px my-8 border-0 ${isDarkMode ? 'bg-gray-200 ' : 'bg-gray-300'}`}
          ></hr>

          {/* all product */}
          <div className="flex items-center justify-between gap-6 py-3 ">
            <h2 className="text-xl font-bold mb-4">
              ALl Product : {allProduct.length}
            </h2>

            <div className="search flex items-center gap-5">
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
            </div>
          </div>

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
                    <th className="p-2">
                      <input
                        type="checkbox"
                        className={`form-checkbox h-4 w-4 ${isDarkMode ? 'text-black' : 'text-indigo-600'}`}
                      />
                    </th>
                    <th
                      className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      PRODUCT
                    </th>
                    <th
                      className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      CATEGORY
                    </th>
                    <th
                      className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      STOCK
                    </th>
                    <th
                      className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      SKU
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
                      STATUS
                    </th>
                    <th
                      className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      ACTIONS
                    </th>
                  </tr>
                </thead>
                {/* all product  */}
                <tbody className="divide-y divide-gray-200">
                  {slicedData.map(item => (
                    <tr key={item.id}>
                      <td className="text-center">
                        <button
                          onClick={() => handleAddProduct(item.id)}
                          className="focus:outline-none transition-all duration-300 p-2 rounded-full bg-[#60a5fa1a] text-[#60a5fa] hover:bg-[#60a5fa] hover:text-lightColor"
                        >
                          <FaPlus className="text-[12px]" />
                        </button>
                      </td>
                      <td className="border-l pl-2 py-4 whitespace-nowrap flex gap-2">
                        <div
                          className={`w-[40px] h-[40px] rounded-md p-2 ${isDarkMode ? 'bg-[#131A26]' : 'bg-[#f2f2f3]'}`}
                        >
                          <img
                            src="https://react.spruko.com/synto-js/preview/assets/11-70a2cfce.png"
                            alt=""
                            className="w-full"
                          />
                        </div>
                        <span>
                          <h6
                            className={`text-[15px] pb-1 font-medium ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                          >
                            {item.name}
                          </h6>
                        </span>
                      </td>
                      <td
                        className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                      >
                        {item.category}
                      </td>
                      <td className="border-l pl-2 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.isStatus ? 'bg-success-100 text-success-400' : 'text-[#7367f0] bg-gray-100'}`}
                        >
                          {item.stock ? 'In Stock' : 'Out of stock'}
                        </span>
                      </td>
                      <td
                        className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                      >
                        {item.sku}
                      </td>
                      <td
                        className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                      >
                        {item.price}
                      </td>
                      <td
                        className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                      >
                        {item.quantity}
                      </td>
                      <td className="border-l pl-2 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.isActive ? 'bg-[#E8F9EF] text-[#22c55e]' : 'bg-gray-100 text-gray-400'}`}
                        >
                          {item.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className="border-l pl-2 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <button className="focus:outline-none transition-all duration-100 p-2 rounded-full bg-[#eab3081a] hover:bg-[#eab308] text-[#eab308] hover:text-lightColor ">
                            <FiEye className=" text-[12px]" />
                          </button>
                          <button className="focus:outline-none transition-all duration-100 p-2 rounded-full bg-[#60a5fa1a] text-[#60a5fa] hover:bg-[#60a5fa] hover:text-lightColor">
                            <FiEdit className=" text-[12px] " />
                          </button>
                          <button className="focus:outline-none transition-all duration-300 p-2 rounded-full bg-[#f43f5e1a] text-[#f43f5e] hover:bg-[#f43f5e] hover:text-lightColor">
                            <RiDeleteBin7Line className="text-[12px]" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-4">
                <Pagination
                  totalPages={totalPages}
                  handlePageChange={handlePageChange}
                  currentPage={currentPage}
                  itemsPerPage={itemsPerPage}
                  allProduct={allProduct}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
