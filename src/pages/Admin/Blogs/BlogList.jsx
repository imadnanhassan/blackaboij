import { RiDeleteBin7Line } from 'react-icons/ri'
import { FiEdit, FiEye } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { GoHome } from 'react-icons/go'
import {
  toggleCheckbox,
  toggleSelectAll,
} from '../../../redux/features/checkBox/checkBoxSlice'

import { Link } from 'react-router-dom'
import Breadcrumbs from '../../../common/Breadcrumbs/Breadcrumbs'
import Button from '../../../common/Button/Button'
import Pagination from '../../../common/Pagination/Pagination'

export default function BlogList() {
  const [data, setData] = useState([])


  const { selectAll, checkboxes } = useSelector(state => state.checkBox)
  const isDarkMode = useSelector(state => state.theme.isDarkMode)
  const dispatch = useDispatch()
  const handleHeaderCheckboxChange = () => {
    dispatch(toggleSelectAll(!selectAll))
  }

  const handleCheckboxChange = index => () => {
    dispatch(toggleCheckbox(index))
  }


  // table data
  const tableData = [
    {
      id: 1,
      title: 'We Protecting Your Digital Assets',
      thumbnail:
        'https://react.spruko.com/synto-js/preview/assets/11-70a2cfce.png',
      customerName: 'Elon Mask',
      author: 'Elon Mask',
      category: 'Blog',
      shortDescription: 'Lorem ipsum dolor sit amet consectetur!',
      status: true,
      tag: 'tag',
      comments: [{ id: 1, data: 'Nice to have' }],
      published: '28 Mar 2023',
    },
    {
      id: 2,
      title: 'The Future of Artificial Intelligence',
      thumbnail:
        'https://react.spruko.com/synto-js/preview/assets/11-70a2cfce.png',
      customerName: 'Ada Lovelace',
      author: 'Ada Lovelace',
      category: 'Article',
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      status: true,
      tag: 'tag',
      comments: [{ id: 2, data: 'Interesting topic' }],
      published: '29 Mar 2023',
    },
    {
      id: 3,
      title: 'Innovations in Renewable Energy',
      thumbnail:
        'https://react.spruko.com/synto-js/preview/assets/11-70a2cfce.png',
      customerName: 'Nikola Tesla',
      author: 'Nikola Tesla',
      category: 'Article',
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptatibus!',
      status: true,
      tag: 'tag',
      comments: [{ id: 3, data: 'Great insights!' }],
      published: '30 Mar 2023',
    },
    {
      id: 4,
      title: 'The Impact of Climate Change on Biodiversity',
      thumbnail:
        'https://react.spruko.com/synto-js/preview/assets/11-70a2cfce.png',
      customerName: 'Jane Goodall',
      author: 'Jane Goodall',
      category: 'Blog',
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, natus.',
      status: true,
      tag: 'tag',
      comments: [{ id: 4, data: 'Important topic!' }],
      published: '31 Mar 2023',
    },
    {
      id: 5,
      title: 'Advancements in Medical Technology',
      thumbnail:
        'https://react.spruko.com/synto-js/preview/assets/11-70a2cfce.png',
      customerName: 'Marie Curie',
      author: 'Marie Curie',
      category: 'Article',
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aut.',
      status: true,
      tag: 'tag',
      comments: [{ id: 5, data: 'Fascinating read!' }],
      published: '1 Apr 2023',
    },
    {
      id: 6,
      title: 'Space Exploration: Past, Present, and Future',
      thumbnail:
        'https://react.spruko.com/synto-js/preview/assets/11-70a2cfce.png',
      customerName: 'Neil Armstrong',
      author: 'Neil Armstrong',
      category: 'Blog',
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, expedita.',
      status: true,
      tag: 'tag',
      comments: [{ id: 6, data: 'Inspiring article!' }],
      published: '2 Apr 2023',
    },
    {
      id: 7,
      title: 'The Role of Artificial Intelligence in Healthcare',
      thumbnail:
        'https://react.spruko.com/synto-js/preview/assets/11-70a2cfce.png',
      customerName: 'Alan Turing',
      author: 'Alan Turing',
      category: 'Article',
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dolor.',
      status: true,
      tag: 'tag',
      comments: [{ id: 7, data: 'Informative content!' }],
      published: '3 Apr 2023',
    },
    {
      id: 8,
      title: 'Exploring Renewable Energy Sources',
      thumbnail:
        'https://react.spruko.com/synto-js/preview/assets/11-70a2cfce.png',
      customerName: 'Thomas Edison',
      author: 'Thomas Edison',
      category: 'Article',
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quam.',
      status: true,
      tag: 'tag',
      comments: [{ id: 8, data: 'Well researched!' }],
      published: '4 Apr 2023',
    },
    {
      id: 9,
      title: 'The Future of Quantum Computing',
      thumbnail:
        'https://react.spruko.com/synto-js/preview/assets/11-70a2cfce.png',
      customerName: 'Richard Feynman',
      author: 'Richard Feynman',
      category: 'Article',
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, molestias!',
      status: true,
      tag: 'tag',
      comments: [{ id: 9, data: 'Mind-blowing insights!' }],
      published: '5 Apr 2023',
    },
    {
      id: 10,
      title: 'Exploring the Universe: A Journey Through Space',
      thumbnail:
        'https://react.spruko.com/synto-js/preview/assets/11-70a2cfce.png',
      customerName: 'Carl Sagan',
      author: 'Carl Sagan',
      category: 'Article',
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, vero!',
      status: true,
      tag: 'tag',
      comments: [{ id: 10, data: 'Amazing insights!' }],
      published: '6 Apr 2023',
    },
  ]

  const pageTitle = 'Blog List'
  const productLinks = [
    { title: <GoHome />, link: '/' },
    { title: 'Blog' },
    { title: 'Blog List' },
  ]

  useEffect(() => {
    setData(tableData)
  }, [])

  return (
    <section
      className={`main-container ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
    >
      <Breadcrumbs title={pageTitle} breadcrumbs={productLinks} />

      <div
        className={`px-5 py-5 rounded  ${isDarkMode ? 'bg-darkColorCard' : 'bg-lightColor'}`}
      >
        <div>
          {/* Products filtering */}
          <div className="pt-3 pb-5">
            <h3
              className={` text-[20px] font-medium ${isDarkMode ? 'text-darkColorText' : 'text-bgray-800'}`}
            >
              Filter
            </h3>
          </div>
          <div className="lg:flex items-center  justify-between">
            <div className="mb-4 flex-1">
              <label
                htmlFor="vendor1"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Status
              </label>
              <select
                id="vendor1"
                name="vendor1"
                className={`form-control mt-1 p-3   block w-full shadow-sm sm:text-sm  rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody border text-darkColorText ' : 'bg-lightColor hover:border-gray-400 border-gray-300 border'}`}
              >
                {/* Vendor options */}
                <option>Status </option>
                <option>Scheduled</option>
                <option>Publish</option>
                <option>Inactive</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="mb-4 flex-1 lg:mx-4">
              <label
                htmlFor="vendor2"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Category
              </label>
              <select
                id="vendor2"
                name="vendor2"
                className={`form-control mt-1 p-3   block w-full shadow-sm sm:text-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody border text-darkColorText ' : 'bg-lightColor hover:border-gray-400 border-gray-300 border'}`}
              >
                {/* Vendor options */}
                <option>Category</option>
                <option>Household</option>
                <option>Office</option>
                <option>Electronics</option>
                <option>Shoes</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="mb-4 flex-1">
              <label
                htmlFor="vendor3"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Stock
              </label>
              <select
                id="vendor3"
                name="vendor3"
                className={`form-control mt-1 p-3   block w-full shadow-sm sm:text-sm  rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText border ' : 'bg-lightColor hover:border-gray-400 border border-gray-300 '}`}
              >
                {/* Vendor options */}
                <option>Stock</option>
                <option>Out Of Stock</option>
                <option>In Stock</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
        </div>

        {/* search product and addProducts */}
        <div className="flex items-center justify-between gap-6 py-3 ">
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
          <div className="flex items-center gap-[30px]">
            <Link to="/dashboard/add-post">
              <Button
                text="Add Post"
                className="bg-primaryColor py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
                icon={FaPlus}
              />
            </Link>
          </div>
        </div>

        {/* blog table */}

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
                      checked={selectAll}
                      onChange={handleHeaderCheckboxChange}
                    />
                  </th>
                  <th
                    className={` border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    Title
                  </th>
                  <th
                    className={` border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    Thumbnail
                  </th>
                  <th
                    className={` border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    Author
                  </th>
                  <th
                    className={` border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    Category
                  </th>
                  <th
                    className={` border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    Short Description
                  </th>
                  <th
                    className={` border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    Status
                  </th>
                  {/* <th
                    className={` border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    Tag
                  </th> */}
                  {/* <th
                    className={` border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    Comments
                  </th> */}
                  <th
                    className={` border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    Publish Date
                  </th>
                  <th
                    className={` border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {data.map((item, index) => (
                  <tr key={item.id}>
                    <td className="p-2">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-Vindigo-800 "
                        checked={checkboxes[index] || false}
                        onChange={handleCheckboxChange(index)}
                      />
                    </td>
                    <td className="border-l pl-2 py-4 whitespace-nowrap">
                      <h6
                        className={`text-[13px] pb-1 font-medium ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                      >
                        {item.title}
                      </h6>
                    </td>
                    <td
                      className={`border-l  py-2 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      <div
                        className={`w-[50px] h-[50px] mx-auto rounded-md p-2 ${isDarkMode ? 'bg-[#131A26]' : 'bg-[#f2f2f3]'}`}
                      >
                        <img src={item.thumbnail} alt="" className="w-full" />
                      </div>
                    </td>
                    <td className="border-l pl-2 py-4 whitespace-nowrap">
                      <h6
                        className={`text-[15px] pb-1 font-medium ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                      >
                        {item.author}
                      </h6>
                    </td>
                    <td
                      className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      <h5
                        className={`text-[13px] pb-1 font-medium ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                      >
                        {item.category}
                      </h5>
                    </td>
                    <td
                      className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      <p
                        className={`text-[13px] pb-1 font-medium ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                      >
                        {item.shortDescription}
                      </p>
                    </td>
                    <td
                      className={`border-l pl-2 py-2 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.status ? 'bg-[#E8F9EF] text-[#22c55e]' : 'bg-gray-100 text-gray-400'}`}
                      >
                        {item.status ? 'Published' : 'Unpublished'}
                      </span>
                    </td>
                    {/* <td
                      className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      <span
                        className={`text-[13px] pb-1 font-medium ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                      >
                        {item.tag}
                      </span>
                    </td> */}
                    {/* <td className="border-l pl-2 py-4 whitespace-nowrap">
                      <span
                        className={`text-[13px] pb-1 font-medium ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                      >
                        comments
                      </span>
                    </td> */}
                    <td
                      className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      <span
                        className={`text-[13px] pb-1 font-medium ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                      >
                        {item.published}
                      </span>
                    </td>

                    <td className="border-l pl-2 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <button
                         
                          className="focus:outline-none transition-all duration-100 p-2 rounded-full bg-[#eab3081a] hover:bg-[#eab308] text-[#eab308] hover:text-lightColor"
                        >
                          <FiEye className="text-[12px]" />
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
          </div>
        </div>

        <Pagination />
      </div>
    </section>
  )
}
