import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";


const Navbar = () => {

    const { user, logout } = useContext(AuthContext);

    const menuItems = (
        <>
            <NavLink to="/" className="">Home</NavLink>
            <NavLink to="/campaign" className="">Donation Campaigns</NavLink>
            <NavLink className="">How to Help</NavLink>
            {
                user && user?.email ? (<NavLink to="/dashboard" className="">Dashboard</NavLink>) : null
            }

        </>
    )

    return (
        <div>
            <div className="navbar bg-base-300 bg-transparent ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">WarmGive</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <div>
                        {
                            user && user?.email ? (
                                <div className="flex items-center gap-3">
                                    <p className="font-semibold">User : {user?.displayName}</p>
                                    <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
                                </div>
                            ) : (
                                <FaUserCircle className="text-4xl" />

                            )
                        }
                    </div>
                    <div>
                        {
                            user && user?.email ? (
                                <button onClick={logout} className="btn btn-outline">Logout</button>
                            ) : (
                                <NavLink to="/auth/login" className="btn btn-outline">Login</NavLink>
                            )
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;