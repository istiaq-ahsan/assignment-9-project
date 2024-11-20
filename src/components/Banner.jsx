import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto justify-center items-center my-10">
                <div className="col-span-1 space-y-10 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-800">Share the Warmth: <br /> Donate Winter Clothes,
                        <br />Spread Smiles
                    </h1>

                    <NavLink to="/campaign" className="btn btn-wide btn-neutral">Want to Donate</NavLink>

                </div>
                <div className="col-span-1">
                    <img src="https://i.ibb.co.com/m93XH66/Premium-Vector-Cardboard-Box-full-of-Clothes-and-Accessories.jpg" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Banner;