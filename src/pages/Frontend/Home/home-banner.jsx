// import React from 'react'
// import { useGetCategoryQuery } from '../../../redux/features/api/category/categoryApi'

// export default function HomeBanner() {
//   const data = useGetCategoryQuery()
//   console.log('data', data)
//   return (
//     <section>
//       <div>home Banner</div>
//     </section>
//   )
// }

import { Link } from "react-router-dom";
import { FaFacebook } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { AnimatedButton } from "../../../common/Button/Button";

const HomeBanner = () => {
  const iconSize = 25;
  return (
    <section>
      <div
        style={{
          // backgroundImage: "url('https://i.ibb.co/SP1rhKQ/Banner.png')",
          backgroundImage: "url('https://i.ibb.co/hVdDm87/Desktop-1512x.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: "no-repeat",
          height: "80vh",
          backgroundColor: "#00000",
          position: "relative"
          // '@media (max-width: 768px)': {
          //     height: '50vh', // Adjust the height for smaller screens
          // },


        }}>


        <div
          className="flex justify-center items-center flex-col"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}>
          <div>
            <h1 className="md:text-[80px] text-xl font-custom whitespace-nowrap md:py-12 py-6 text-white">LIFE IS MADE OF CHOICE</h1>
          </div>
          <div className="flex md:gap-5 gap-2">
            <Link to="/menCollections"> <AnimatedButton buttonText="SHOP MEN" ></AnimatedButton></Link>
            <Link to="/menCollections"> <AnimatedButton buttonText="SHOP WOMEN" ></AnimatedButton></Link>
          </div>
        </div>

        <div className='absolute md:bottom-[50px] bottom-4 md:right-[50px] right-5' >
          <div className='flex flex-col gap-3 justify-end items-center'>
            <Link to="https://www.facebook.com/BBOIJ" target="blank">
              <span style={{ fontSize: `${iconSize}px` }} > <FaFacebook className="text-[#b1b1b1] hover:text-white  " /></span>
            </Link >
            <Link>
              <span style={{ fontSize: `${iconSize}px` }}  > <FaPinterest className="text-[#b1b1b1] hover:text-white " /></span>
            </Link>
            <Link to="https://www.instagram.com/blackaboij_/">
              <span style={{ fontSize: `${iconSize}px` }}  > <FaInstagram className="text-[#b1b1b1] hover:text-white" /></span>
            </Link>
            <Link>
              <span style={{ fontSize: `${iconSize}px` }} > <IoLogoYoutube className="text-[#b1b1b1] hover:text-white" /></span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeBanner;
