
import { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';
import { MdEuroSymbol } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
// import { Fade } from 'react-awesome-reveal';
import { Toaster, } from 'sonner'
// import { useCart } from '../../Utilites/CartContext';
import { AnimatedButton } from "../../../common/Button/Button";
import "../HelperCss/home-hotsale.css"


const HomeJustDropped = () => {
    const [men, setMen] = useState([]);
    const menProducts = "./HotSaleMenProducts.json";

    useEffect(() => {
        // Fetch the JSON data
        fetch(menProducts)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data)
                setMen(data);

            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, [menProducts]);
    return (
        <section>
            <div className="md:section-gap pt-[50px] ">
                <Toaster />
                <div className='flex flex-col'>
                    <h1 className='mb-[10px] md:mb-[20px] text-center text-3xl font-bold'>Just Dropped</h1>
                    <div>
                        <Tabs>
                            <div className=' mb-[20px] md:mb-[50px] font-custom text-center'>
                                <TabList className="custom-tab-list md:flex md:justify-center cursor-pointer md:text-[16px] text-[12px] md:gap-6 gap-[10px] ">
                                    <Tab className="custom-tab">Men</Tab>
                                    <Tab className="custom-tab">Women</Tab>
                                    {/* <Tab className="custom-tab">Prince</Tab>
                                    <Tab className="custom-tab">Princess</Tab> */}
                                    <Tab className="custom-tab">Accessories</Tab>
                                </TabList>
                            </div>

                            <TabPanel>
                                <div className=" relative grid md:grid-cols-3 grid-cols-2 md:gap-[25px] gap-[5px] md:mx-[50px] mx-[20px] ">
                                    {men.map((product) => (

                                        <div key={product.id} className="bg-[#B7B7B7] product-card font-custom relative">
                                            <Link to={`hotSaleMen/${product.id}`}>
                                                <img src={product.img} alt={product.productName} className="front-img" />
                                            </Link>

                                            <button
                                                style={{ fontSize: '30px' }}
                                                className="absolute top-2 right-2 text-white"
                                            >
                                                <FaRegHeart  />
                                            </button>

                                            <h3 className="text-center md:py-4 py-1 md:text-[22px] bg-black text-[16px] text-white">
                                                {product.productName}
                                            </h3>
                                            <p className="md:pb-3 pb-1 text-center md:text-[15px] text-[12px] bg-black text-white">
                                                <span className="flex justify-center items-center">
                                                    <MdEuroSymbol /> {product.price}
                                                </span>
                                            </p>
                                        </div>

                                    ))}
                                </div>
                                <p className="md:pt-[50px] pt-5  flex justify-center md:mx-[50px] mx-[20px]" ><AnimatedButton buttonText="SHOW ALL"></AnimatedButton></p>
                            </TabPanel>

                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeJustDropped;
