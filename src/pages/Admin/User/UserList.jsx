import { useSelector } from 'react-redux'
import { GoHome } from 'react-icons/go'
import Breadcrumbs from '../../../common/Breadcrumbs/Breadcrumbs'
import { useGetCustomerListQuery } from '../../../redux/features/api/Customer/customer'
import { baseUrl } from '../../../hooks/useThumbnailImage'
import AdminLoader from '../../../common/AdminLoader/AdminLoader'

export default function UserList() {
  const isDarkMode = useSelector(state => state.theme.isDarkMode)
  const { data, isLoading } = useGetCustomerListQuery()

  const customerList = data?.customers?.data || []

  const pageTitle = 'Customer List'
  const productLinks = [
    { title: <GoHome />, link: '/' },
    { title: 'Customer' },
    { title: 'Customer List' },
  ]

  if (isLoading) {
    return <AdminLoader />
  }

  return (
    <section
      className={`main-container ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
    >
      <Breadcrumbs title={pageTitle} breadcrumbs={productLinks} />
      <div
        className={`px-5 py-5 rounded  ${isDarkMode ? 'bg-darkColorCard' : 'bg-lightColor'}`}
      >
        <div className="py-5">
          <div className="overflow-x-auto">
            <table
              id="data-table"
              className={`min-w-full border table-auto  ${isDarkMode ? 'border-darkColorBody' : 'border-gray-200 divide-y divide-gray-200'}`}
            >
              <thead
                className={`${isDarkMode ? 'bg-[#131A26]' : 'bg-gray-100'}`}
              >
                <tr>
                  <th
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    SL
                  </th>
                  <th
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    Name
                  </th>

                  <th
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    Email
                  </th>
                  <th
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    Phone
                  </th>

                  <th
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    ORDER
                  </th>
                  {/* <th
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    ACTIONS
                  </th> */}
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {customerList?.map((item, index) => (
                  <tr key={index}>
                    <td className="text-center">{++index}</td>
                    <td className="border-l pl-2 py-4 whitespace-nowrap items-center flex gap-3">
                      <div
                        className={`w-[40px] h-[40px] rounded-md p-2 ${isDarkMode ? 'bg-[#131A26]' : 'bg-[#f2f2f3]'}`}
                      >
                        <img
                          src={`${baseUrl}/profile/${item.photo}`}
                          alt={item.name}
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

                    <td className="border-l pl-2 py-4 whitespace-nowrap">
                      {item.email}
                    </td>
                    <td
                      className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      {item.phone_number}
                    </td>

                    <td className="border-l pl-2 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full `}
                      >
                        {item.customer_order.length}
                      </span>
                    </td>
                    {/* <td className="border-l pl-2 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <button className="focus:outline-none transition-all duration-100 py-2 px-3 rounded-full bg-[#eab3081a] hover:bg-[#eab308] text-[#eab308] hover:text-lightColor ">
                          View
                        </button>
                      </div>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
