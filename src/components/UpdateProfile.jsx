import React, { useContext, useState } from 'react';
import Navbar from '../static/Navbar';
import Footer from '../static/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const UpdateProfile = () => {

    const { updateUserData } = useContext(AuthContext);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        let form = new FormData(e.target);
        let name = form.get("name");
        let photo = form.get("photo")


        updateUserData({ displayName: name, photoURL: photo })
            .then(() => {
                navigate("/dashboard")
            })
            .catch((err) => {
                setError(err.message);
            })
    }

    return (
        <div>
            <Helmet>
                <title>Profile Update</title>
            </Helmet>
            <header>
                <Navbar></Navbar>
            </header>
            <div className="pt-[100px] md:pt-[48px]"></div>
            <main className='bg-cyan-100 py-20'>
                <div className='flex flex-col md:flex-row w-11/12 gap-5 
                mx-auto justify-center items-center'>
                    <div className='md:w-[60%] w-full'>
                        <div className="card bg-base-100 w-full max-w-lg 
                        shrink-0 shadow-lg col-span-1 mx-auto pt-10 pb-5">
                            <h2 className="text-center text-2xl font-bold mt-3 underline">Update Information</h2>
                            <form onSubmit={handleSubmit} className="card-body">

                                <div>
                                    <label className="label font-semibold">Name :</label>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full"
                                        name="name"
                                        placeholder="Enter your name"
                                        required

                                    />
                                </div>

                                <div>
                                    <label className="label font-semibold">Photo-URL :</label>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full"
                                        name="photo"
                                        placeholder="Enter the photo URL"
                                        required

                                    />
                                </div>
                                <p className='my-5'>{error}</p>
                                <div className="form-control mt-10">
                                    <button className="btn btn-neutral">Update Information</button>
                                    <Link to="/dashboard" className='btn btn-accent mt-10 rounded-full btn-wide mx-auto'>Go Back</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='md:w-[40%]'>
                        <img src="https://i.ibb.co.com/L0GPzwq/Track-user-behavior-and-filter-users.gif" alt="" />
                    </div>
                </div>

            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default UpdateProfile;