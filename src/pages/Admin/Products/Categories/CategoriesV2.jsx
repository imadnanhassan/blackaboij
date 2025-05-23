import { GoHome } from 'react-icons/go'
// import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import Breadcrumbs from '../../../../common/Breadcrumbs/Breadcrumbs'
// import { FiEdit } from 'react-icons/fi'
// import { RiDeleteBin7Line } from 'react-icons/ri'
import { useGetCategoryQuery } from '../../../../redux/features/api/category/categoryApi'
// import Swal from 'sweetalert2'
import React from 'react'
import AdminLoader from '../../../../common/AdminLoader/AdminLoader'

export default function CategoriesV2() {
  const placeholderImage = 'https://via.placeholder.com/40';
  const isDarkMode = useSelector(state => state.theme.isDarkMode)
  const { data: categories, error, isLoading } = useGetCategoryQuery();
  const categoryList = Array.isArray(categories?.categories)
    ? categories.categories
    : []
  console.log(categoryList)

  if (!Array.isArray(categoryList)) {
    return <div>Unexpected data format received</div>
  }
  if (isLoading) return <AdminLoader />
  if (error) return <div>Error occurred: {error.message}</div>

  // Breadcrumbs
  const pageTitle = 'Categories'
  const productLinks = [
    { title: <GoHome />, link: '/' },
    { title: 'Products' },
    { title: 'CategoriesV2' },
  ]
  return (
    <section
      className={`main-container ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
    >
      <Breadcrumbs title={pageTitle} breadcrumbs={productLinks} />

      <div
        className={`px-5 py-5 rounded  w-full ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
      >
        <div className="flex items-center justify-between gap-6 py-3 ">
          <h2 className="lg:text-2xl text-lg font-bold mb-4">Category List</h2>
        </div>

        {/* category table*/}
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
                    <p>#</p>
                  </th>

                  <th
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    Banner
                  </th>

                  <th
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    NAME
                  </th>

                  <th
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    Categories
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {categoryList.map((category, id) => (
                  <React.Fragment key={id}>
                    <tr>
                      <td className="p-2 text-center">{++id}</td>

                      <td className="border-l pl-2 py-4 whitespace-nowrap flex gap-2">
                        <div
                          className={`w-[40px] h-[40px] rounded-md p-2 ${isDarkMode ? 'bg-[#131A26]' : 'bg-[#f2f2f3]'}`}
                        >
                          <img
                            src={`${import.meta.env.VITE_BASE_URL}/category/${category.banner}`}
                            alt={category.name}
                            className="w-full"
                            onError={(e) => { e.target.onerror = null; e.target.src = placeholderImage; }}
                          />
                        </div>
                      </td>

                      <td
                        className={`border-l pl-2 py-4 text-[13px] whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                      >
                        {category?.parent_name}
                      </td>

                      <td
                        className={`border-l pl-2 py-4 whitespace-nowrap text-[13px]  ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                      >
                        Parent Categories
                      </td>
                    </tr>

                    {category?.sub_categories.map((sub_category, Subid) => (
                      <tr key={Subid}>
                        <td
                          className={`p-2 text-center text-gray-400 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                        >
                          --{++id}
                        </td>
                        <td className="border-l pl-2 py-4 whitespace-nowrap flex gap-2">
                          <div
                            className={`w-[40px] h-[40px] rounded-md p-2 ${isDarkMode ? 'bg-[#131A26]' : 'bg-[#f2f2f3]'}`}
                          >
                            <img
                              src={`${import.meta.env.VITE_BASE_URL}/category/${sub_category.banner}`}
                              className="w-full"
                              onError={(e) => { e.target.onerror = null; e.target.src = placeholderImage; }}
                            />
                          </div>
                        </td>

                        <td
                          className={`border-l pl-2 py-4 text-[13px] whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                        >
                          {sub_category.name}
                        </td>
                        <td
                          className={`border-l pl-2 py-4 text-[13px] whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                        >
                          {category?.parent_name}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
