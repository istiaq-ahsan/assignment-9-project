import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Login = () => {

    const { userLogin, setUser } = useContext(AuthContext);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email")
        const password = form.get("password")
        userLogin(email, password)
            .then(result => {
                const user = result.user;

                setUser(user);
                navigate(location?.state ? location.state : "/");
            })
            .catch((err) => {
                setError(err.message);
            })
    }
    return (
        <div className="bg-base-200">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="flex justify-center items-center px-5 py-20">
                <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-2xl p-10">
                    <h2 className="text-2xl font-semibold text-center">
                        Login your account
                    </h2>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div>
                            <p className="text-red-600 text-center underline">
                                {error}</p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral rounded-none">Login</button>
                        </div>
                    </form>
                    <p className="text-center font-semibold">
                        Don't Have An Account ?{" "}
                        <Link className="text-red-500 underline font-bold" to="/auth/register">
                            Register
                        </Link>
                    </p>
                </div >
            </div >
        </div>
    );
};

export default Login;