import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Banner from "../components/Banner";
import Campaigns from "../components/Campaigns";
import DonationDetails from "../components/DonationDetails";
import AuthLayout from "../layout/AuthLayout";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import PrivateRouter from "./PrivateRouter";
import Error from "../static/Error";
import Dashboard from "../components/Dashboard";
import WhyDonate from "../section/WhyDonate";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,

    },
    {
        path: "/campaign",
        element: <Campaigns></Campaigns>,
    },
    {
        path: "/details/:id",
        element: <PrivateRouter>
            <DonationDetails></DonationDetails>,
        </PrivateRouter>,
        loader: async ({ params }) => {
            const res = await fetch("/allCampaign.json")
            const data = await res.json()
            console.log(data, params.id);
            const singleData = data.find(d => d.id == params.id)
            console.log(singleData);
            return singleData;

        }

    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>

    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>,
            }
        ]
    },
    {
        path: "*",
        element: <Error></Error>
    },

]);

export default Router;