import { useContext } from "react";
import Footer from "../static/Footer";
import Navbar from "../static/Navbar";
import { AuthContext } from "../provider/AuthProvider";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <Navbar></Navbar>
            <main>
                <div className="hero my-20 w-11/12 mx-auto gap-5 flex flex-col md:flex-row md:justify-around ">
                    <div className="md:col-span-1 md:w-[50%]">
                        <img src="https://i.ibb.co.com/L0GPzwq/Track-user-behavior-and-filter-users.gif" alt="" />
                    </div>
                    <div className="card bg-blue-100 hero-content 
                    flex-col border border-blue-300 w-96 md:col-span-1 p-10">
                        <div className="avatar">
                            <div className="ring-primary ring-offset-base-100 w-40 rounded-full ring ring-offset-2">
                                {user && user?.email ? (
                                    <img src={user.photoURL} />
                                ) : (
                                    <img src="https://img.icons8.com/?size=100&id=DMKogsOAUoU8&format=png&color=000000" />

                                )}
                            </div>
                        </div>

                        {user && user?.email ? (
                            <div className="text-left">
                                <h1 className="text-xl">Name : {user.displayName}</h1>
                                <p className="py-6">Email : {user.email}</p>
                                <p>UID : {user.uid}</p>
                                <div className="my-5 text-center">
                                    <button className="btn btn-outline">Update Profile</button>
                                </div>
                            </div>
                        ) : (
                            <div className="text-left ">
                                <h1 className="text-xl">Name : </h1>
                                <p className="py-6">Email : </p>
                                <p>UID :</p>
                            </div>
                        )}


                    </div>

                </div>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;