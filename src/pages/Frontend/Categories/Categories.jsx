
import { MdEuroSymbol } from "react-icons/md";
import { Link } from "react-router-dom";
import { Fade, Zoom } from "react-awesome-reveal";
import { IoIosHeartEmpty } from "react-icons/io";
import { AnimatedButton, BuyNowButton } from "../../../common/Button/Button";
import { HiFire } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";




// Reusable Star component
// eslint-disable-next-line react/prop-types


const Categories = () => {





    return (
        <div>
            <div className="relative md:h-[450px] h-[250px] flex items-center justify-center"
                style={{
                    backgroundImage: "url('https://i.ibb.co/CnLjN4P/img-ph-collection-hero-1512x.webp')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'cover',
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "#00000",
                    position: "relative"
                }}
            >
                <Zoom><h2 className="md:md:text-6xl text-[20px] text-2xl text-white font-custom font-bold whitespace-nowrap"
                >
                    MEN NEW COLLECTIONS
                </h2></Zoom>
            </div>
            <div className="relative grid md:grid-cols-3 grid-cols-2 md:gap-[25px] gap-[5px] md:mx-[50px] mx-[20px] mt-5 lg:mt-10  ">
                <div

                    className="bg-[#B7B7B7] product-card font-custom relative"
                >
                    <Link >
                        <img
                            src="https://i.ibb.co/n3q9t6z/BLACKNOV0954-360x.webp"
                            alt=""
                            className="front-img w-full object-cover"
                        />
                    </Link>
                    {/* <Link >
                           <img
                               src={product.backImg}
                               alt={product.product_title}
                               className="absolute top-0 opacity-0 hover:opacity-100 transition-opacity duration-1000 ease-in-out w-full object-cover"
                           />
                       </Link> */}

                    <button
                        style={{ fontSize: '30px' }}
                        className="absolute top-2 left-2 text-white"
                    >
                        <FaRegHeart />
                    </button>

                    <button className='absolute top-0 right-0  text-white bg-[#000000] md:px-4 md:py-1 md:text-[16px] text-[12px] px-2  py-[2px]  '>MEN</button>

                    <h3 className="pl-2 md:pl-4 md:py-4 py-1 md:text-[22px] bg-black text-[16px] text-white">
                        product title
                    </h3>
                    <div className="md:pb-4 pb-1 px-2 md:px-4 md:text-[15px] text-[12px] bg-black text-white flex justify-between">
                        <div className="flex justify-center items-center">
                            <MdEuroSymbol />4550
                        </div>
                        <div className="">
                            <BuyNowButton buttonText="Buy Now"></BuyNowButton>
                        </div>
                    </div>
                </div>
                <div

                    className="bg-[#B7B7B7] product-card font-custom relative"
                >
                    <Link >
                        <img
                            src="https://i.ibb.co/n3q9t6z/BLACKNOV0954-360x.webp"
                            alt=""
                            className="front-img w-full object-cover"
                        />
                    </Link>
                    {/* <Link >
                           <img
                               src={product.backImg}
                               alt={product.product_title}
                               className="absolute top-0 opacity-0 hover:opacity-100 transition-opacity duration-1000 ease-in-out w-full object-cover"
                           />
                       </Link> */}

                    <button
                        style={{ fontSize: '30px' }}
                        className="absolute top-2 left-2 text-white"
                    >
                        <FaRegHeart />
                    </button>

                    <button className='absolute top-0 right-0  text-white bg-[#000000] md:px-4 md:py-1 md:text-[16px] text-[12px] px-2  py-[2px]  '>MEN</button>

                    <h3 className="pl-2 md:pl-4 md:py-4 py-1 md:text-[22px] bg-black text-[16px] text-white">
                        product title
                    </h3>
                    <div className="md:pb-4 pb-1 px-2 md:px-4 md:text-[15px] text-[12px] bg-black text-white flex justify-between">
                        <div className="flex justify-center items-center">
                            <MdEuroSymbol />4550
                        </div>
                        <div className="">
                            <BuyNowButton buttonText="Buy Now"></BuyNowButton>
                        </div>
                    </div>
                </div>
                <div

                    className="bg-[#B7B7B7] product-card font-custom relative"
                >
                    <Link >
                        <img
                            src="https://i.ibb.co/n3q9t6z/BLACKNOV0954-360x.webp"
                            alt=""
                            className="front-img w-full object-cover"
                        />
                    </Link>
                    {/* <Link >
                           <img
                               src={product.backImg}
                               alt={product.product_title}
                               className="absolute top-0 opacity-0 hover:opacity-100 transition-opacity duration-1000 ease-in-out w-full object-cover"
                           />
                       </Link> */}

                    <button
                        style={{ fontSize: '30px' }}
                        className="absolute top-2 left-2 text-white"
                    >
                        <FaRegHeart />
                    </button>

                    <button className='absolute top-0 right-0  text-white bg-[#000000] md:px-4 md:py-1 md:text-[16px] text-[12px] px-2  py-[2px]  '>MEN</button>

                    <h3 className="pl-2 md:pl-4 md:py-4 py-1 md:text-[22px] bg-black text-[16px] text-white">
                        product title
                    </h3>
                    <div className="md:pb-4 pb-1 px-2 md:px-4 md:text-[15px] text-[12px] bg-black text-white flex justify-between">
                        <div className="flex justify-center items-center">
                            <MdEuroSymbol />4550
                        </div>
                        <div className="">
                            <BuyNowButton buttonText="Buy Now"></BuyNowButton>
                        </div>
                    </div>
                </div>
                <div

                    className="bg-[#B7B7B7] product-card font-custom relative"
                >
                    <Link >
                        <img
                            src="https://i.ibb.co/n3q9t6z/BLACKNOV0954-360x.webp"
                            alt=""
                            className="front-img w-full object-cover"
                        />
                    </Link>
                    {/* <Link >
                           <img
                               src={product.backImg}
                               alt={product.product_title}
                               className="absolute top-0 opacity-0 hover:opacity-100 transition-opacity duration-1000 ease-in-out w-full object-cover"
                           />
                       </Link> */}

                    <button
                        style={{ fontSize: '30px' }}
                        className="absolute top-2 left-2 text-white"
                    >
                        <FaRegHeart />
                    </button>

                    <button className='absolute top-0 right-0  text-white bg-[#000000] md:px-4 md:py-1 md:text-[16px] text-[12px] px-2  py-[2px]  '>MEN</button>

                    <h3 className="pl-2 md:pl-4 md:py-4 py-1 md:text-[22px] bg-black text-[16px] text-white">
                        product title
                    </h3>
                    <div className="md:pb-4 pb-1 px-2 md:px-4 md:text-[15px] text-[12px] bg-black text-white flex justify-between">
                        <div className="flex justify-center items-center">
                            <MdEuroSymbol />4550
                        </div>
                        <div className="">
                            <BuyNowButton buttonText="Buy Now"></BuyNowButton>
                        </div>
                    </div>
                </div>
                <div

                    className="bg-[#B7B7B7] product-card font-custom relative"
                >
                    <Link >
                        <img
                            src="https://i.ibb.co/n3q9t6z/BLACKNOV0954-360x.webp"
                            alt=""
                            className="front-img w-full object-cover"
                        />
                    </Link>
                    {/* <Link >
                           <img
                               src={product.backImg}
                               alt={product.product_title}
                               className="absolute top-0 opacity-0 hover:opacity-100 transition-opacity duration-1000 ease-in-out w-full object-cover"
                           />
                       </Link> */}

                    <button
                        style={{ fontSize: '30px' }}
                        className="absolute top-2 left-2 text-white"
                    >
                        <FaRegHeart />
                    </button>

                    <button className='absolute top-0 right-0  text-white bg-[#000000] md:px-4 md:py-1 md:text-[16px] text-[12px] px-2  py-[2px]  '>MEN</button>

                    <h3 className="pl-2 md:pl-4 md:py-4 py-1 md:text-[22px] bg-black text-[16px] text-white">
                        product title
                    </h3>
                    <div className="md:pb-4 pb-1 px-2 md:px-4 md:text-[15px] text-[12px] bg-black text-white flex justify-between">
                        <div className="flex justify-center items-center">
                            <MdEuroSymbol />4550
                        </div>
                        <div className="">
                            <BuyNowButton buttonText="Buy Now"></BuyNowButton>
                        </div>
                    </div>
                </div>
                <div

                    className="bg-[#B7B7B7] product-card font-custom relative"
                >
                    <Link >
                        <img
                            src="https://i.ibb.co/n3q9t6z/BLACKNOV0954-360x.webp"
                            alt=""
                            className="front-img w-full object-cover"
                        />
                    </Link>
                    {/* <Link >
                           <img
                               src={product.backImg}
                               alt={product.product_title}
                               className="absolute top-0 opacity-0 hover:opacity-100 transition-opacity duration-1000 ease-in-out w-full object-cover"
                           />
                       </Link> */}

                    <button
                        style={{ fontSize: '30px' }}
                        className="absolute top-2 left-2 text-white"
                    >
                        <FaRegHeart />
                    </button>

                    <button className='absolute top-0 right-0  text-white bg-[#000000] md:px-4 md:py-1 md:text-[16px] text-[12px] px-2  py-[2px]  '>MEN</button>

                    <h3 className="pl-2 md:pl-4 md:py-4 py-1 md:text-[22px] bg-black text-[16px] text-white">
                        product title
                    </h3>
                    <div className="md:pb-4 pb-1 px-2 md:px-4 md:text-[15px] text-[12px] bg-black text-white flex justify-between">
                        <div className="flex justify-center items-center">
                            <MdEuroSymbol />4550
                        </div>
                        <div className="">
                            <BuyNowButton buttonText="Buy Now"></BuyNowButton>
                        </div>
                    </div>
                </div>
                <div

                    className="bg-[#B7B7B7] product-card font-custom relative"
                >
                    <Link >
                        <img
                            src="https://i.ibb.co/n3q9t6z/BLACKNOV0954-360x.webp"
                            alt=""
                            className="front-img w-full object-cover"
                        />
                    </Link>
                    {/* <Link >
                           <img
                               src={product.backImg}
                               alt={product.product_title}
                               className="absolute top-0 opacity-0 hover:opacity-100 transition-opacity duration-1000 ease-in-out w-full object-cover"
                           />
                       </Link> */}

                    <button
                        style={{ fontSize: '30px' }}
                        className="absolute top-2 left-2 text-white"
                    >
                        <FaRegHeart />
                    </button>

                    <button className='absolute top-0 right-0  text-white bg-[#000000] md:px-4 md:py-1 md:text-[16px] text-[12px] px-2  py-[2px]  '>MEN</button>

                    <h3 className="pl-2 md:pl-4 md:py-4 py-1 md:text-[22px] bg-black text-[16px] text-white">
                        product title
                    </h3>
                    <div className="md:pb-4 pb-1 px-2 md:px-4 md:text-[15px] text-[12px] bg-black text-white flex justify-between">
                        <div className="flex justify-center items-center">
                            <MdEuroSymbol />4550
                        </div>
                        <div className="">
                            <BuyNowButton buttonText="Buy Now"></BuyNowButton>
                        </div>
                    </div>
                </div>
                <div

                    className="bg-[#B7B7B7] product-card font-custom relative"
                >
                    <Link >
                        <img
                            src="https://i.ibb.co/n3q9t6z/BLACKNOV0954-360x.webp"
                            alt=""
                            className="front-img w-full object-cover"
                        />
                    </Link>
                    {/* <Link >
                           <img
                               src={product.backImg}
                               alt={product.product_title}
                               className="absolute top-0 opacity-0 hover:opacity-100 transition-opacity duration-1000 ease-in-out w-full object-cover"
                           />
                       </Link> */}

                    <button
                        style={{ fontSize: '30px' }}
                        className="absolute top-2 left-2 text-white"
                    >
                        <FaRegHeart />
                    </button>

                    <button className='absolute top-0 right-0  text-white bg-[#000000] md:px-4 md:py-1 md:text-[16px] text-[12px] px-2  py-[2px]  '>MEN</button>

                    <h3 className="pl-2 md:pl-4 md:py-4 py-1 md:text-[22px] bg-black text-[16px] text-white">
                        product title
                    </h3>
                    <div className="md:pb-4 pb-1 px-2 md:px-4 md:text-[15px] text-[12px] bg-black text-white flex justify-between">
                        <div className="flex justify-center items-center">
                            <MdEuroSymbol />4550
                        </div>
                        <div className="">
                            <BuyNowButton buttonText="Buy Now"></BuyNowButton>
                        </div>
                    </div>
                </div>
                <div

                    className="bg-[#B7B7B7] product-card font-custom relative"
                >
                    <Link >
                        <img
                            src="https://i.ibb.co/n3q9t6z/BLACKNOV0954-360x.webp"
                            alt=""
                            className="front-img w-full object-cover"
                        />
                    </Link>
                    {/* <Link >
                           <img
                               src={product.backImg}
                               alt={product.product_title}
                               className="absolute top-0 opacity-0 hover:opacity-100 transition-opacity duration-1000 ease-in-out w-full object-cover"
                           />
                       </Link> */}

                    <button
                        style={{ fontSize: '30px' }}
                        className="absolute top-2 left-2 text-white"
                    >
                        <FaRegHeart />
                    </button>

                    <button className='absolute top-0 right-0  text-white bg-[#000000] md:px-4 md:py-1 md:text-[16px] text-[12px] px-2  py-[2px]  '>MEN</button>

                    <h3 className="pl-2 md:pl-4 md:py-4 py-1 md:text-[22px] bg-black text-[16px] text-white">
                        product title
                    </h3>
                    <div className="md:pb-4 pb-1 px-2 md:px-4 md:text-[15px] text-[12px] bg-black text-white flex justify-between">
                        <div className="flex justify-center items-center">
                            <MdEuroSymbol />4550
                        </div>
                        <div className="">
                            <BuyNowButton buttonText="Buy Now"></BuyNowButton>
                        </div>
                    </div>
                </div>
                <div

                    className="bg-[#B7B7B7] product-card font-custom relative"
                >
                    <Link >
                        <img
                            src="https://i.ibb.co/n3q9t6z/BLACKNOV0954-360x.webp"
                            alt=""
                            className="front-img w-full object-cover"
                        />
                    </Link>
                    {/* <Link >
                           <img
                               src={product.backImg}
                               alt={product.product_title}
                               className="absolute top-0 opacity-0 hover:opacity-100 transition-opacity duration-1000 ease-in-out w-full object-cover"
                           />
                       </Link> */}

                    <button
                        style={{ fontSize: '30px' }}
                        className="absolute top-2 left-2 text-white"
                    >
                        <FaRegHeart />
                    </button>

                    <button className='absolute top-0 right-0  text-white bg-[#000000] md:px-4 md:py-1 md:text-[16px] text-[12px] px-2  py-[2px]  '>MEN</button>

                    <h3 className="pl-2 md:pl-4 md:py-4 py-1 md:text-[22px] bg-black text-[16px] text-white">
                        product title
                    </h3>
                    <div className="md:pb-4 pb-1 px-2 md:px-4 md:text-[15px] text-[12px] bg-black text-white flex justify-between">
                        <div className="flex justify-center items-center">
                            <MdEuroSymbol />4550
                        </div>
                        <div className="">
                            <BuyNowButton buttonText="Buy Now"></BuyNowButton>
                        </div>
                    </div>
                </div>
            </div>
            <p className="md:pt-[50px] pt-5 flex justify-center md:mx-[50px] mx-[20px] mb-5 lg:mb-10">
                <AnimatedButton buttonText="SHOW ALL"></AnimatedButton>
            </p>
        </div>
    );
};

export default Categories;