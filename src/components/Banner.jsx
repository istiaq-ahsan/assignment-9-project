import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const Banner = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // duration of the animation
            once: false,
            offset: 200,     // whether animation should happen only once
            easing: 'ease-in-out', // easing effect
        });
    })

    return (
        <div>
            <div className="flex flex-col-reverse md:flex-row w-11/12 mx-auto justify-center items-center my-10 md:my-20">
                <div className=" space-y-10 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-800">Share the Warmth: <br /> Donate Winter Clothes,
                        <br />Spread Smiles
                    </h1>

                    <NavLink to="/campaign" className="btn btn-wide btn-neutral">Want to Donate</NavLink>

                </div>
                <div data-aos="zoom-in" className="">
                    <img src="https://i.ibb.co.com/m93XH66/Premium-Vector-Cardboard-Box-full-of-Clothes-and-Accessories.jpg" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Banner;