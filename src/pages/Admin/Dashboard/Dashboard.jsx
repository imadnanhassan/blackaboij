import { useSelector } from 'react-redux'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { AiFillDollarCircle } from 'react-icons/ai'
import Breadcrumbs from '../../../common/Breadcrumbs/Breadcrumbs'
import ColumnChart from '../../../components/ColumnChart/ColumnChart'
import TotalOrder from './TotalOrder'
import AreaCharts from '../../../components/ColumnChart/AreaCharts'
import { useGetProductListQuery } from '../../../redux/features/api/product/productApi'
const pageTitle = 'Dashboard'
const productLinks = [{ title: <></>, link: '/' }]

const Dashboard = () => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode)
  const { data: products, isLoading } = useGetProductListQuery()

  const productdata = products?.products?.total || []
 
  if (isLoading) {
    return <p>Loading..</p>
  }

  return (
    <section
      className={`main-container ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
    >
      <Breadcrumbs title={pageTitle} breadcrumbs={productLinks} />
      {/* total info */}
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
                12,088
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
                12,088
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
                {productdata > 0 ? productdata : '0'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chart */}

      <div className="grid lg:grid-cols-2 grid-cols-1 overflow-hidden gap-5 py-5">
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
      </div>

      {/* order, top category and top brand */}

      <div className="grid lg:grid-cols-1 grid-cols-1 xl:grid-cols-1 mt-10 lg:gap-5 md:gap-3 mb-5">
        <TotalOrder />
      </div>
    </section>
  )
}
export default Dashboard
