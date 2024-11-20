import { Outlet } from "react-router-dom";
import Navbar from "../static/Navbar";
import Footer from "../static/Footer";

const AuthLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <div className="pt-[48px] md:pt-[48px]"></div>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;