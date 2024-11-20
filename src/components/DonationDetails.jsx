import { useLoaderData } from "react-router-dom";
import Navbar from "../static/Navbar";
import Footer from "../static/Footer";
import { useState } from "react";
import { toast } from 'react-toastify';


const DonationDetails = () => {
    const singleData = useLoaderData();

    const { id, title, image, description, status, contactInfo, division } = singleData

    const [formData, setFormData] = useState({
        quantity: '',
        itemType: '',
        pickupLocation: '',
        additionalNotes: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            quantity: '',
            itemType: '',
            pickupLocation: '',
            additionalNotes: ''
        });
        toast.success("Thank you ! We will reach your destination soon");
    };

    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <div className="pt-[100px] md:pt-[48px]"></div>
            <main>
                <div className="bg-base-200">
                    <div className="hero py-20">
                        <div className="hero-content grid grid-cols-1 md:grid-cols-2 justify-center items-center">
                            <div className="text-center col-span-1 mx-auto">
                                <div className="flex justify-center">

                                    <img className="h-[300px] w-full lg:px-20 p-5" src={image} alt="" />
                                </div>
                                <div className="flex justify-between lg:mx-20 mx-5">
                                    <div className="badge badge-outline p-3">{status}</div>
                                    <div className="badge badge-outline p-3">{division}</div>
                                </div>
                                <div className="my-5">
                                    <h1 className="text-3xl font-bold">{title}</h1>
                                    <p className="py-6 lg:mx-20">
                                        {description}
                                    </p>
                                    <p className=" font-semibold text-red-500">
                                        contact: <span className="underline">{contactInfo}</span>
                                    </p>
                                </div>
                            </div>

                            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl col-span-1 mx-auto">
                                <h2 className="text-center text-2xl font-bold mt-3 underline">Donation Form</h2>
                                <form onSubmit={handleSubmit} className="card-body">

                                    <div>
                                        <label className="label font-semibold">Item Type :</label>
                                        <select
                                            name="itemType"
                                            className="input input-bordered"
                                            value={formData.itemType}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select Item Type</option>
                                            <option value="Blanket">Blanket</option>
                                            <option value="Jacket">Jacket</option>
                                            <option value="Sweater">Sweater</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="label font-semibold">Quantity of Items :</label>
                                        <input
                                            type="text"
                                            className="input input-bordered"
                                            name="quantity"
                                            placeholder="e.g., 2 jackets, 3 blankets"
                                            value={formData.quantity}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="label font-semibold">Pickup Location :</label>
                                        <input
                                            type="text"
                                            className="input input-bordered"
                                            name="pickupLocation"
                                            placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka"
                                            value={formData.pickupLocation}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="label font-semibold">Additional Notes :</label>
                                        <textarea
                                            name="additionalNotes"
                                            className="input input-bordered"
                                            placeholder="Any additional information..."
                                            value={formData.additionalNotes}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-neutral">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default DonationDetails;