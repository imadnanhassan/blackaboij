import { AnimatedButton } from "../../../common/Button/Button";


const NewsLatter = () => {
    return (
        <section>
            <div className=" h-[300px] my-[50px] md:my-[100px] bg-slate-200 flex flex-col justify-center items-center " >
                <h1 className=" mb-[10px]  text-center md:text-3xl text-xl font-bold ">News Latter</h1>
                <p className="text-center text-[#646464] md:text-[16px] text-[12px] px-5 md:px-0">Subscribe to receive updates, access to exclusive deals, and more.</p>
                <div className="flex md:flex-row flex-col justify-center items-center  gap-4 md:py-8 py-4">
                    <input type="email" placeholder="Email Address" className="border md:text-[15px] text-[12px] border-[#b1b1b1] md:py-3 py-[6px]  pl-2 bg-transparent focus:outline-none text-gray-600 w-[250px] "></input>
                    <AnimatedButton buttonText="SUBSCRIBE" ></AnimatedButton>
                </div>
            </div>
        </section>
    );
};

export default NewsLatter;