import { Outlet } from "react-router-dom";
import Footer from "../static/Footer";
import Navbar from "../static/Navbar";
import Banner from "../components/Banner";
import WhyDonate from "../section/WhyDonate";
import States from "../section/States";
import HowItWorks from "../section/HowItWorks";
import ClothesRequirement from "../section/ClothesRequirement";

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <section>
                    <Banner></Banner>
                </section>
                <section className="bg-cyan-100">
                    <WhyDonate></WhyDonate>
                </section>
                <section className="bg-cyan-100">
                    <States></States>
                </section>
                <section className="bg-cyan-100">
                    <HowItWorks></HowItWorks>
                </section>
                <section className="bg-cyan-100">
                    <ClothesRequirement></ClothesRequirement>
                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;