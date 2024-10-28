import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa'
import { IoLogoYoutube } from 'react-icons/io'
import { Link } from 'react-router-dom'

const FrontendFooter = () => {
  const iconSize = 19
  return (
    <footer>
      <div className=" md:pb-[10px] bg-black text-[15px] md:text-[16px] font-custom ">
        <div className="flex justify-center items-center md:py-10 py-5 ">
          <Link to="/">
            <img
              src="https://i.ibb.co/3sNL27c/logo.png"
              className="  w-[85px]  h-[15px] md:h-[20] xl:h-[25px] md:w-[85px] xl:w-[100px] "
              alt=""
            />
          </Link>
        </div>

        <div className="md:flex md:justify-between   grid grid-cols-1 mx-[20px] md:mx-[50px] ">
          {/* ======== Footer collections menu */}
          <div>
            <h2 className="py-3 text-white">COLLECTIONS</h2>
            <ul className="text-[15px]  space-y-1 text-white">
              <li>
                <Link to="/men-collection">Men</Link>
              </li>
              <li>
                <Link to="/women-collection">Women</Link>
              </li>
              <li>
                <Link to="/accessories">Accessories</Link>
              </li>
            </ul>
          </div>
          {/* ======== Footer MORE menu */}
          <div className=" md:mt-0 ">
            <h2 className=" py-3 text-white">MORE</h2>
            <ul className="text-[15px]  text-white space-y-1">
              <li>
                <Link to="/">Home</Link>
              </li>
              {/* <li>
                <Link to="/">About</Link>
              </li> */}
              <li>
                <Link to="/store">Contact</Link>
              </li>
            </ul>
          </div>

          {/* ======== Footer INFORMATION menu */}
          <div>
            <h2 className="py-3 text-white ">INFORMATION</h2>
            <ul className="text-[15px]  text-white space-y-1">
              <li>
                <Link to={'/return-policy'}>Return Policy</Link>
              </li>
              <li>
                <Link to={'/terms-conditions'}>Terms of Conditions</Link>
              </li>
              <li>
                <Link to={'/shipping-policy'}>Shipping Policy</Link>
              </li>
            </ul>
          </div>

          {/* ======== Footer SOCIAL menu */}
          <div>
            <h2 className="py-3 text-white ">SOCIAL</h2>
            <p className="text-[15px] text-white  space-y-1">Stay connected</p>
            <div className=" flex gap-x-3 pt-3 ">
              <Link to="https://www.facebook.com/BBOIJ" target="blank">
                <span style={{ fontSize: `${iconSize}px` }}>
                  <FaFacebook className="text-[#b1b1b1] hover:text-white  " />
                </span>
              </Link>
              <Link to="https://fr.pinterest.com/blackaboij/" target="_blank">
                <span style={{ fontSize: `${iconSize}px` }}>
                  <FaPinterest className="text-[#b1b1b1] hover:text-white " />
                </span>
              </Link>
              <Link to="https://www.instagram.com/blackaboij_/" target="_blank">
                <span style={{ fontSize: `${iconSize}px` }}>
                  <FaInstagram className="text-[#b1b1b1] hover:text-white" />
                </span>
              </Link>
              <Link>
                <span style={{ fontSize: `${iconSize}px` }}>
                  <IoLogoYoutube className="text-[#b1b1b1] hover:text-white" />
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* ======== copyright ====== */}
        <p className="text-white text-center text-[14px] md:pt-8 pt-4  pb-2">
          Copyright ©{new Date().getFullYear()}{' '}
          <Link className="text-slate-300 mr-1" to="https://blackaboij.com/">
            BlackaBoij
          </Link>
          | Made by {''}
          <Link
            to={'https://itlabindustry.com/'}
            className="text-slate-300 mr-3"
            target="_blank"
          >
            IT Lab Industry
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default FrontendFooter
