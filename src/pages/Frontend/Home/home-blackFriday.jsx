import { Link } from "react-router-dom";
import { AnimatedButton } from "../../../common/Button/Button";


const HomeBlackFridaySale = () => {
    const sectionStyle = {
        backgroundImage: 'url("https://i.ibb.co/xCfppyt/01-Blvck-Livingroom-Banner-Format-1-720x.webp")',
        backgroundSize: 'cover', // You can adjust these styles as needed
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',

    };
    

    return (
        <section>
            <div style={sectionStyle} className="md:h-[500px] h-[250px] md:mt-[100px] mt-[50px]">
                <div className="flex flex-col text-white justify-center items-center h-full">
                    <h3 className="text-[8px] md:text-xs xl:text-lg  md:pb-4 lg:pb-6 pb-2 xl:pb-8">UP TO 60% OFF ON SELECTED ITEMS</h3>
                    <h2 className="xl:text-[80px] text-2xl md:text-4xl lg:text-4xl ">Black Friday Sale</h2>
                    <h4 className="md:py-10 py-3">
                        <Link to="/search">
                            <AnimatedButton buttonText='SHOP NOW' ></AnimatedButton>
                        </Link>
                    </h4>

                </div>
            </div>
        </section>
    );
};

export default HomeBlackFridaySale;
