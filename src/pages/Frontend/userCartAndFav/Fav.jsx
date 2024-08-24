/* eslint-disable react/prop-types */
import { AiOutlineClose } from 'react-icons/ai';
import { FaMinus } from 'react-icons/fa6';
import { Fade } from 'react-awesome-reveal';


const Fav = () => {

    return (
        <section>
            <div className="absolute md:top-[75px] top-0 z-50 font-custom right-0  bg-black text-white px-5 pb-5  pt-[6px] md:h-auto md:w-[28%] w-full overflow-auto ">
                <div className="flex justify-between">
                    <h2 className="text-lg font-semibold mb-2">YOUR FAVORITES</h2>
                    <button className="text-lg font-semibold mb-2">
                        <AiOutlineClose />
                    </button>
                </div>
                <div className="scroll-auto">
                    <Fade  direction="left" cascade >
                        <div className="flex justify-between border-b-[1px] border-[#383838] py-5">
                            <div className="flex gap-[20px]">
                                <div>
                                    <img className="h-[80px] w-[80px]" src="https://i.ibb.co/n3q9t6z/BLACKNOV0954-360x.webp" alt="" />
                                </div>
                                <div>
                                    <p>Favourtite items</p>
                                    <p className="text-[15px] text-[#b7b7b7] hover:text-white">$200</p>
                                    <div className="flex items-center border text-[15px] space-x-3 px-[8px] mt-2 border-[#383838]">
                                        <button  >
                                            ADD TO CART
                                        </button>

                                    </div>
                                </div>
                                <div>

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
                </div>
            </div>
        </section>
    );
};

export default Fav;