import { useContext } from "react";
import Footer from "../static/Footer";
import Navbar from "../static/Navbar";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <Navbar></Navbar>
            <div className="pt-[100px] md:pt-[48px]"></div>
            <main>
                <div className="hero my-20 w-11/12 mx-auto gap-5 flex flex-col-reverse md:flex-row md:justify-around ">
                    <div className="md:col-span-1 md:w-[40%]">
                        <img src="https://i.ibb.co.com/BfFXyjm/download-1.gif" alt="" />
                    </div>
                    <div className="card bg-blue-100 hero-content 
                    flex-col border border-blue-300 w-96 md:col-span-1 p-10">
                        <div className="avatar">
                            <div className="ring-primary ring-offset-base-100 w-40 rounded-full ring ring-offset-2">
                                <img src={user.photoURL} />
                            </div>
                        </div>

                        <div className="text-left">
                            <h1 className="text-xl">Name : {user.displayName}</h1>
                            <p className="py-6">Email : {user.email}</p>
                            <p>UID : {user.uid}</p>
                            <div className="my-5 text-center">
                                <Link to="/updateProfile" className="btn btn-outline">Update Profile</Link>
                            </div>
                        </div>



                    </div>

                </div>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;