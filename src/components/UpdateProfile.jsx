import React from 'react';
import Navbar from '../static/Navbar';
import Footer from '../static/Footer';
import { Link } from 'react-router-dom';

const UpdateProfile = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='min-h-screen'>
                <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl col-span-1 mx-auto">
                    <h2 className="text-center text-2xl font-bold mt-3 underline">Update Information</h2>
                    <form className="card-body">

                        <div>
                            <label className="label font-semibold">Name :</label>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                name="name"
                                placeholder="Enter your name"


                            />
                        </div>

                        <div>
                            <label className="label font-semibold">Photo-URL :</label>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                name="photoURL"
                                placeholder="Enter the photo URL"


                            />
                        </div>

                        <div className="form-control mt-6">
                            <Link to="/dashboard" className="btn btn-neutral">Update Information</Link>
                        </div>
                    </form>
                </div>

            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default UpdateProfile;