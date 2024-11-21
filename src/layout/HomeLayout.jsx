import { Outlet } from "react-router-dom";
import Footer from "../static/Footer";
import Navbar from "../static/Navbar";
import Banner from "../components/Banner";
import WhyDonate from "../section/WhyDonate";
import States from "../section/States";
import HowItWorks from "../section/HowItWorks";
import ClothesRequirement from "../section/ClothesRequirement";
import OurMission from "../section/OurMission";
import Faq from "../section/Faq";
import { Helmet } from "react-helmet-async";

const HomeLayout = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <section>
                    <div className="pt-[100px] md:pt-[48px]"></div>
                    <Banner></Banner>
                </section>
                <section className="bg-cyan-100">
                    <OurMission></OurMission>
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
                <section>
                    <Faq></Faq>
                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;