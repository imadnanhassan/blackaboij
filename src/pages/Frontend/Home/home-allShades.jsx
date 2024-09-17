
import { Link } from "react-router-dom";
import { AnimatedButton } from "../../../common/Button/Button";

const HomeAllShades = () => {
    const sectionStyle = {
        backgroundImage: 'url("https://i.ibb.co/CmGj3rj/social-share-74-d4088aec-1ac0-4f07-a1b7-0ceb116e0577-720x.jpg")',
        backgroundSize: 'cover', // You can adjust these styles as needed
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',

    };

    // mb-[50px] md:mb-[100px] line 18

    return (
        <section>
            <div style={sectionStyle} className="md:h-[500px] h-[300px] ">
                <div className="flex flex-col text-white justify-center items-center h-full">
                    <h2 className="md:text-[80px] text-[30px] font-semibold  text-center">All shades of black available.</h2>
                    <h4 className="md:py-10 py-3">
                        <Link to="/allProducts">
                            {/* <p className="w-[200px] flex justify-center items-center text-white h-[50px] text-[12px] md:text-[16px]  hover:text-[#b1b1b1] bg-black font-custom"> SHOP COLLECTIONS</p> */}
                            <AnimatedButton buttonText="SHOP COLLECTIONS" ></AnimatedButton>
                        </Link></h4>
                </div>
            </div>
        </section>
    );
};

export default HomeAllShades;
