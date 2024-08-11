import { useSelector } from 'react-redux'
// import { RiShoppingCartLine } from 'react-icons/ri'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { FaUser } from 'react-icons/fa'
import { AiFillDollarCircle } from 'react-icons/ai'
import { GiStabbedNote } from 'react-icons/gi'
import { FaHeart } from 'react-icons/fa6'
import Breadcrumbs from '../../../common/Breadcrumbs/Breadcrumbs'
import ColumnChart from '../../../components/ColumnChart/ColumnChart'
import TotalOrder from './TotalOrder'
import TopCategory from './TopCategory'
import TopBrands from './TopBrands'
import AreaCharts from '../../../components/ColumnChart/AreaCharts'

const pageTitle = 'Dashboard'
const productLinks = [{ title: <></>, link: '/' }]

const Dashboard = () => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode)

  return (
    <section
      className={`main-container ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
    >
      <Breadcrumbs title={pageTitle} breadcrumbs={productLinks} />
      {/* total info */}
      <div className="md:grid 2xl:grid-cols-6 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 ">
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
              <p className="text-[12px]">
                Increased by <strong className="text-error-100">-12.2%</strong>
              </p>
            </div>
          </div>
        </div>

        <div
          className={`rounded w-full py-5 lg:mt-0 md:mt-0 mt-2 ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText border'}`}
        >
          <div className="dashboardCard">
            <div className="bg-[#FEEBEF] px-4 py-3 rounded flex flex-col items-center justify-center">
              <FaUser className="text-[32px] bg-[#F43F5E] rounded text-white p-2" />
            </div>
            <div className="md:mt-2">
              <p className="lg:text-[14px] md:text-[12px] font-normal lg:mb-1 md:mb-[2px]">
                Totla Visitor
              </p>
              <p
                className={`text-[20px] font-medium mb-1 ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText'}`}
              >
                12,088
              </p>
              <p className="text-[12px]">
                Increased by{' '}
                <strong className="text-success-300">+12.2%</strong>
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
                Totla Income
              </p>
              <p
                className={`text-[20px] font-medium mb-1 ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText'}`}
              >
                12,088
              </p>
              <p className="text-[12px]">
                Increased by{' '}
                <strong className="text-success-300">+12.2%</strong>
              </p>
            </div>
          </div>
        </div>

        <div
          className={`rounded w-full py-5 lg:mt-0 md:mt-0 mt-2 ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText border'}`}
        >
          <div className="dashboardCard">
            <div className="bg-[#EDF1FA] px-4 py-3 rounded flex flex-col items-center justify-center">
              <GiStabbedNote className="text-[32px] bg-[#4C75CF] rounded text-white p-2" />
            </div>
            <div className="md:mt-2">
              <p className="lg:text-[14px] md:text-[12px] font-normal lg:mb-1 md:mb-[2px]">
                Totla Expenses
              </p>
              <p
                className={`text-[20px] font-medium mb-1 ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText'}`}
              >
                12,088
              </p>
              <p className="text-[12px]">
                Increased by{' '}
                <strong className="text-success-300">+12.2%</strong>
              </p>
            </div>
          </div>
        </div>

        <div
          className={`rounded w-full py-5 lg:mt-0 md:mt-0 mt-2 ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText border'}`}
        >
          <div className="dashboardCard">
            <div className="bg-[#E8F9EF] px-4 py-3 rounded flex flex-col items-center justify-center">
              <FaHeart className="text-[32px] bg-success-200 rounded text-white p-2" />
            </div>
            <div className="md:mt-2">
              <p className="lg:text-[14px] md:text-[12px] font-normal lg:mb-1 md:mb-[2px]">
                Totla Products
              </p>
              <p
                className={`text-[20px] font-medium mb-1 ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText'}`}
              >
                12,088
              </p>
              <p className="text-[12px]">
                Increased by{' '}
                <strong className="text-success-300">+12.2%</strong>
              </p>
            </div>
          </div>
        </div>

        <div
          className={` rounded w-full py-5 lg:mt-0 md:mt-0 mt-2 ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText border'}`}
        >
          <div className="dashboardCard">
            <div className="bg-[#E8F9EF] px-4 py-3 rounded flex flex-col items-center justify-center">
              <FaHeart className="text-[32px] bg-success-200 rounded text-white p-2" />
            </div>
            <div className="md:mt-2">
              <p className="lg:text-[14px] md:text-[12px] font-normal lg:mb-1 md:mb-[2px]">
                Totla Products
              </p>
              <p
                className={`text-[20px] font-medium mb-1 ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText'}`}
              >
                12,088
              </p>
              <p className="text-[12px]">
                Increased by{' '}
                <strong className="text-success-300">+12.2%</strong>
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

      <div className="grid lg:grid-cols-2 grid-cols-1 xl:grid-cols-3 mt-10 lg:gap-5 md:gap-3 mb-5">
        <TotalOrder />
        <TopCategory />
        <TopBrands />
      </div>
    </section>
  )
}
export default Dashboard
