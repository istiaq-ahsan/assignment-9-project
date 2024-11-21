import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { useEffect } from "react";


const OurMission = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // duration of the animation
            once: false,
            offset: 200,     // whether animation should happen only once
            easing: 'ease-in-out', // easing effect
        });
    })

    return (
        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className="pt-20">
            <div className="flex flex-col-reverse lg:flex-row w-11/12 md:w-3/4 mx-auto
             justify-center items-center bg-blue-100 p-5 md:p-10 gap-5 rounded-xl">
                <div className="w-full lg:w-[50%]">
                    <div>
                        <h1 className="text-5xl font-bold text-gray-800 text-center lg:text-left">Our Mission</h1>
                        <p className="text-base mt-5 font-medium text-center lg:text-left">
                            We strive to provide winter clothing to underserved communities
                            across Bangladesh, spreading warmth and hope. Together, we can
                            make every winter safer and more comfortable for those in need.
                        </p>
                    </div>


                    <ul className="text-xl space-y-3 mt-10 list-none">
                        <li>
                            <IoMdCheckmarkCircleOutline className="inline text-3xl mr-2 " />
                            <span className="font-bold">Spreading Warmth:</span>
                            <h4 className="text-base">
                                We aim to provide essential winter clothing to underserved
                                communities, ensuring they are protected from the harsh cold.
                            </h4>
                        </li>
                        <li className="">
                            <IoMdCheckmarkCircleOutline className="inline text-3xl mr-2 " />
                            <span className="font-bold">Empowering Generosity:</span>
                            <h4 className="text-base">
                                By connecting donors with those in need, we create a platform
                                for meaningful contributions that make a real difference.
                            </h4>
                        </li>
                        <li>
                            <IoMdCheckmarkCircleOutline className="inline text-3xl mr-2 " />
                            <span className="font-bold">Building Hope:</span>
                            <h4 className="text-base">
                                Through collective efforts, we inspire compassion and bring
                                hope to individuals and families, making winters safer
                                and more comfortable for everyone.
                            </h4>
                        </li>
                    </ul>
                </div>
                <div className="w-full lg:w-[50%]">
                    <div className="flex flex-col justify-center items-center gap-5 md:w-11/12 mx-auto">
                        <div>
                            <img className="" src="https://i.ibb.co.com/PGDChQj/clothes-Donate2.jpg" alt="" />
                        </div>
                        <div className="flex gap-5 items-center">
                            <img className="w-[150px] h-[120px] md:w-[250px] md:h-[150px]"
                                src="https://i.ibb.co.com/hsmF24X/clothes-Donate3.jpg" alt="" />

                            <img className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full"
                                src="https://i.ibb.co.com/M53pj2D/doante-blankets-7.jpg" alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default OurMission;