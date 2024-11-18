import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 text-gray-800">
            <h1 className="text-4xl font-bold mb-4">Oops! Something Went Wrong</h1>
            <p className="text-lg text-gray-600 mb-6">
                We couldn't load the page you requested. Please try again later.
            </p>
            <Link to="/"
                className="btn btn-primary"
            >
                Go Back
            </Link>
        </div>
    );
};

export default Error;