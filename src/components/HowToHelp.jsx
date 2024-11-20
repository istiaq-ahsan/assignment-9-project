import Footer from "../static/Footer";
import Navbar from "../static/Navbar";

const HowToHelp = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <div className="pt-[100px] md:pt-[48px]"></div>
            <main className="min-h-screen">

                <div className="container mx-auto px-4 py-8">

                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold text-gray-800">How to Help ?</h2>
                        <p className="text-lg text-gray-600 mt-4">
                            Our process is simple and transparent. Follow these steps to donate and see how your contribution reaches those in need.
                        </p>
                    </div>


                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Step-by-Step Guide</h3>
                        <table className="min-w-full table-auto border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-2 text-left font-medium text-gray-700 border border-gray-300">Step</th>
                                    <th className="px-4 py-2 text-left font-medium text-gray-700 border border-gray-300">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-50">
                                    <td className="px-4 py-2 font-medium text-gray-800 border border-gray-300">Step 1: Donate</td>
                                    <td className="px-4 py-2 text-gray-600 border border-gray-300">Fill out the donation form and choose the items you’d like to contribute.</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 font-medium text-gray-800 border border-gray-300">Step 2: Collection</td>
                                    <td className="px-4 py-2 text-gray-600 border border-gray-300">Drop your donation at one of our collection points located across supported divisions.</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-4 py-2 font-medium text-gray-800 border border-gray-300">Step 3: Distribution</td>
                                    <td className="px-4 py-2 text-gray-600 border border-gray-300">Our volunteers deliver donations to underserved communities during winter.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Collection Points</h3>
                        <table className="min-w-full table-auto border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-2 text-left font-medium text-gray-700 border border-gray-300">Division</th>
                                    <th className="px-4 py-2 text-left font-medium text-gray-700 border border-gray-300">Collection Points</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-50">
                                    <td className="px-4 py-2 font-medium text-gray-800 border border-gray-300">Dhaka</td>
                                    <td className="px-4 py-2 text-gray-600 border border-gray-300">Mirpur, Dhanmondi, Gulshan</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 font-medium text-gray-800 border border-gray-300">Chittagong</td>
                                    <td className="px-4 py-2 text-gray-600 border border-gray-300">Agrabad, Halishahar, Khulshi</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-4 py-2 font-medium text-gray-800 border border-gray-300">Sylhet</td>
                                    <td className="px-4 py-2 text-gray-600 border border-gray-300">Zindabazar, Subidbazar</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 font-medium text-gray-800 border border-gray-300">Rajshahi</td>
                                    <td className="px-4 py-2 text-gray-600 border border-gray-300">Shaheb Bazar, Motihar</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-4 py-2 font-medium text-gray-800 border border-gray-300">Khulna</td>
                                    <td className="px-4 py-2 text-gray-600 border border-gray-300">Boyra, Sonadanga</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-4 py-2 font-medium text-gray-800 border border-gray-300">Barishal</td>
                                    <td className="px-4 py-2 text-gray-600 border border-gray-300">Banaripara, Kawnia, Raipura</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-4 py-2 font-medium text-gray-800 border border-gray-300">Mymensingh</td>
                                    <td className="px-4 py-2 text-gray-600 border border-gray-300">Bhaluka, Trishal, Mymensingh Sadar</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HowToHelp;