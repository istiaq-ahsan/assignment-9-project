import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../firebase/firebase.config";
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const ResetPassword = () => {

    const auth = getAuth(app);
    const emailRef = useRef();

    const haandleSubmit = (e) => {
        e.preventDefault();
    }

    const handleForgetPassword = () => {

        const email = emailRef.current.value;
        console.log(emailRef);
        if (!email) {
            toast.error("Please provide a valid Email address")
        }
        else {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    Swal.fire({
                        title: "Good job!",
                        text: "We received your password reset request. Check your email for the reset link.",
                        icon: "success"
                    });
                })
        }
    }

    return (
        <div className="bg-base-200">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="flex justify-center items-center px-5 py-20">
                <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-2xl p-5 md:p-10">
                    <h2 className="text-2xl font-semibold text-center">
                        Reset Your Password
                    </h2>
                    <form onSubmit={haandleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email" ref={emailRef}
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control mt-6">
                            <button onClick={handleForgetPassword} className="btn btn-neutral rounded-none">Reset Password</button>
                        </div>
                    </form>

                </div >
            </div >
        </div>
    );
};

export default ResetPassword;