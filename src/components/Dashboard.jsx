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
                <div className="hero bg-gray-900 min-h-screen grid grid-cols-2">
                    <div className="card bg-blue-100 hero-content flex-col border border-gray-500 w-96 col-span-1 p-10">
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
                    <div className="col-span-1 ">

                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;