import { useSelector } from 'react-redux'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { AiFillDollarCircle } from 'react-icons/ai'
import Breadcrumbs from '../../../common/Breadcrumbs/Breadcrumbs'
import TotalOrder from './TotalOrder'
import { useGetDashboardQuery } from '../../../redux/features/api/dashboard/dashboardAnalysis'
import AdminLoader from '../../../common/AdminLoader/AdminLoader'
const pageTitle = 'Dashboard'
const productLinks = [{ title: <></>, link: '/' }]

const Dashboard = () => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode)
  const { data, isLoading } = useGetDashboardQuery()
  const allOrder = data?.orders || []
  const totalOrderCount = allOrder.length
  const calculateTotalAmount = orders => {
    let totalAmount = 0

    orders.forEach(order => {
      if (order.status === 'Cancel') {
        totalAmount - order.amount
      } else {
        totalAmount += order.amount
      }
    })
    return totalAmount
  }


  // Calculate total
  const totalOrderAmount = calculateTotalAmount(allOrder)

  if (isLoading) {
    return <AdminLoader />
  }

  return (
    <section
      className={`main-container ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
    >
      <Breadcrumbs title={pageTitle} breadcrumbs={productLinks} />
      <div className="md:grid 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 ">
        <div
          className={` rounded w-full py-5  ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText border'}`}
        >
          <div className="dashboardCard">
            <div className="bg-[#EFF6FE] px-4 py-3 rounded flex flex-col items-center justify-center">
              <MdOutlineShoppingBag className="text-[32px] bg-[#60A5FA] rounded text-white p-2" />
            </div>
            <div className="md:mt-2">
              <p className="lg:text-[14px] md:text-[12px] font-normal lg:mb-1 md:mb-[2px]">
                Total Sales
              </p>
              <p
                className={`text-[20px]  font-medium mb-1 ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText'}`}
              >
                {totalOrderCount}
              </p>
            </div>
          </div>
        </div>

        <div
          className={`rounded w-full py-5 lg:mt-0 md:mt-0 mt-2 ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText border'}`}
        >
          <div className="dashboardCard">
            <div className="bg-[#FDF7E6] px-4 py-3 rounded flex flex-col items-center justify-center">
              <AiFillDollarCircle className="text-[32px] bg-[#EAB308] rounded text-white p-2" />
            </div>
            <div className="md:mt-2">
              <p className="lg:text-[14px] md:text-[12px] font-normal lg:mb-1 md:mb-[2px]">
                Total Income
              </p>
              <p
                className={`text-[20px] font-medium mb-1 ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText'}`}
              >
                {totalOrderAmount}$
              </p>
            </div>
          </div>
        </div>

        <div
          className={` rounded w-full py-5 lg:mt-0 md:mt-0 mt-2 ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText border'}`}
        >
          <div className="dashboardCard">
            <div className="bg-[#E8F9EF] px-4 py-3 rounded flex flex-col items-center justify-center">
              <AiFillDollarCircle className="text-[32px] bg-success-200 rounded text-white p-2" />
            </div>
            <div className="md:mt-2">
              <p className="lg:text-[14px] md:text-[12px] font-normal lg:mb-1 md:mb-[2px]">
                Total Products
              </p>
              <p
                className={`text-[20px] font-medium mb-1 ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText'}`}
              >
                {data.products > 0 ? data.products : '0'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chart */}

      {/* <div className="grid lg:grid-cols-2 grid-cols-1 overflow-hidden gap-5 py-5">
        <div
          className={` rounded w-full py-5 px-5 ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
        >
          <ColumnChart />
        </div>
        <div
          className={` rounded w-full py-5 px-5 ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
        >
          <AreaCharts />
        </div>
      </div> */}

      {/* order, top category and top brand */}

      <div className="grid lg:grid-cols-1 grid-cols-1 xl:grid-cols-1 mt-10 lg:gap-5 md:gap-3 mb-5">
        <TotalOrder totalOrderCount={totalOrderCount} allOrder={allOrder} />
      </div>
    </section>
  )
}
export default Dashboard
