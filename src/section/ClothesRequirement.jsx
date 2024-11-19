import React from 'react';
import { ImCheckmark } from "react-icons/im";
import { FaXmark } from "react-icons/fa6";



const ClothesRequirement = () => {
    return (
        <div className='py-20'>

            <div className=' bg-blue-200 p-5 md:p-10 rounded-2xl w-11/12 md:w-3/4 mx-auto'>
                <div>
                    <img className="h-[200px] mx-auto" src="https://i.ibb.co.com/mtxSshS/Checklist-Customizable-Isometric-Illustrations-Amico-Style.jpg" alt="" />
                </div>
                <div className='flex flex-col md:flex-row gap-5 mt-10'>
                    <div className="w-full md:w-[50%]">
                        <h2 className="text-2xl font-bold text-green-600 text-center md:text-left">
                            Please Donate:
                        </h2>

                        <ul className="text-xl space-y-2 mt-5 list-none">
                            <li>
                                <ImCheckmark className="inline mr-2 text-green-600 " />
                                Clean, good-quality winter clothing

                            </li>
                            <li>
                                <ImCheckmark className="inline mr-2 text-green-600 " />
                                Pairs of warm shoes, boots, and thermal socks
                            </li>
                            <li>
                                <ImCheckmark className="inline mr-2 text-green-600 " />
                                Handbags, belts, and winter accessories
                            </li>
                            <li>
                                <ImCheckmark className="inline mr-2 text-green-600 " />
                                Warm underwear, thermal lingerie
                            </li>
                            <li>
                                <ImCheckmark className="inline mr-2 text-green-600 " />
                                Bed linen, blankets, sheets, duvet covers.
                            </li>
                            <li>
                                <ImCheckmark className="inline mr-2 text-green-600 " />
                                Small household items
                            </li>
                        </ul>
                    </div>

                    <div className="w-full md:w-[50%]">

                        <h2 className="text-2xl font-bold text-red-600 text-center md:text-left">
                            Please don’t give us:
                        </h2>


                        <ul className="text-xl space-y-2 mt-5 list-none">
                            <li>
                                <FaXmark className="inline text-red-600 mr-2 " />
                                Stained or damaged clothing

                            </li>
                            <li>
                                <FaXmark className="inline text-red-600 mr-2 " />
                                Duvets, pillows & cushions
                            </li>
                            <li>
                                <FaXmark className="inline text-red-600 mr-2 " />
                                Large bric-a-brac items
                            </li>
                            <li>
                                <FaXmark className="inline text-red-600 mr-2 " />
                                Furniture & mattresses
                            </li>
                            <li>
                                <FaXmark className="inline text-red-600 mr-2 " />
                                Coat hangers, lampshades & roller blinds
                            </li>
                            <li>
                                <FaXmark className="inline text-red-600 mr-2 " />
                                Large electrical items
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ClothesRequirement;