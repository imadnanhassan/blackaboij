import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Breadcrumbs = ({ title, breadcrumbs }) => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode)
  return (
    <div className="py-8">
      <div
        className={`py-5 px-5 flex item-center justify-between rounded ${isDarkMode ? 'bg-darkColorCard' : 'bg-lightColor'}`}
      >
        <div>
          <h2
            className={` lg:text-lg sm:text-[14px] text-[14px] font-semibold  ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
          >
            {title}
          </h2>
        </div>
        <div>
          <div className={`flex items-center flex-wrap  `}>
            <ul className="flex items-center">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="inline-flex items-center">
                  {index > 0 && (
                    <svg
                      className="w-5 h-auto fill-current mx-2 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                    </svg>
                  )}
                  <Link
                    to={crumb.link}
                    className={` text-sm sm:text-[15px] ${isDarkMode ? 'text-darkColorText hover:text-primaryColor' : 'text-gray-700 hover:text-Vpurple-900'}`}
                  >
                    {crumb.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumbs
