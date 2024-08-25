/* eslint-disable react/prop-types */
import { AiOutlineClose } from 'react-icons/ai';
import { FaMinus } from 'react-icons/fa6';
import { FiPlus } from 'react-icons/fi';
import { Fade } from 'react-awesome-reveal';

const Cart = () => {

    return (
        <section >
            <div className="absolute md:top-[75px] top-0 z-50 font-custom right-0  bg-black text-white px-5 pb-5  pt-[6px] md:h-auto md:w-[28%] w-full overflow-auto ">
                <div className="flex justify-between">
                    <h2 className="text-lg font-semibold mb-2">YOUR CART 3</h2>
                    <button className="text-lg font-semibold mb-2">
                        <AiOutlineClose />
                    </button>
                </div>
                <div className="scroll-auto h-[100vh]">
                    <Fade direction="left" cascade >
                        <div className="flex justify-between border-b-[1px] border-[#383838] py-5">
                            <div className="flex gap-[20px]">
                                <div>
                                    <img className="h-[100px] w-[100px]" src="https://i.ibb.co/n3q9t6z/BLACKNOV0954-360x.webp" alt="" />
                                </div>
                                <div>
                                    <p>men tees</p>
                                    <p className="text-[15px] text-[#b7b7b7] hover:text-white">$200</p>
                                    <div className='flex gap-2'>
                                        <p className="text-[12px] text-[#b7b7b7] hover:text-white">Size : </p>
                                        <p className="text-[12px] text-[#b7b7b7] hover:text-white" >Color : </p>
                                    </div>
                                    <div className="flex items-center justify-center border text-[15px] space-x-5 px-[8px] mt-2 border-[#383838]">
                                        <button >
                                            <FaMinus />
                                        </button>
                                        <span>10</span>
                                        <button >
                                            <FiPlus />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button

                                    className="text-lg font-semibold hover:text-red-500"
                                >
                                    <FaMinus />
                                </button>
                            </div>
                        </div>
                    </Fade>

                    <div className="pb-20">
                        <div className="py-5">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold">SUB TOTAL </h2>
                                <p className="text-3xl">
                                    4
                                </p>
                            </div>
                            <p className="text-[12px] py-1 text-[#b7b7b7]">Shipping, taxes, and discount codes are calculated at checkout</p>
                        </div>
                        <div className="flex justify-center items-center bg-slate-200 text-black py-2 px-6">
                            <button  > CHECK OUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;