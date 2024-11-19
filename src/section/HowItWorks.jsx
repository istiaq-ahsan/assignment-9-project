import { Link } from "react-router-dom";

const HowItWorks = () => {
    return (
        <div className="min-h-screen">
            <header className="text-center space-y-3">
                <h1 className="text-5xl font-bold">How it Works</h1>
                <p className="text-3xl">Donate Clothes Make Simple</p>
            </header>
            <main>
                <div className="flex justify-start items-start mt-20 mx-2 md:mx-10">
                    <ul className="timeline timeline-vertical">
                        <li >
                            <div className="timeline-middle  bg-orange-400 px-3 md:px-7 md:py-5
                             text-white rounded-full text-3xl font-bold">
                                1
                            </div>
                            <div className="timeline-start timeline-box bg-blue-200
                             hover:bg-blue-400 hover:bg-blue-400 py-5 md:p-10 space-y-3">
                                <h2 className="text-2xl font-bold">Choose your Campaign</h2>
                                <p>Pick one of our meaningful winter donation
                                    campaigns across Bangladesh. Your support will
                                    directly help those in need, bringing warmth
                                    and comfort during the cold months.</p>
                                <div className="pt-5">
                                    <Link to="/campaign" className="btn btn-neutral">Get Started</Link>
                                </div>
                            </div>

                            <hr className="bg-primary" />
                        </li>
                        <li >
                            <hr className="bg-primary" />
                            <div className="timeline-middle  bg-orange-400 px-3 md:px-7 md:py-5
                             text-white rounded-full text-3xl font-bold">
                                2
                            </div>
                            <div className="timeline-end timeline-box md:p-10 space-y-3 py-5
                             bg-blue-200 hover:bg-blue-400 my-10">
                                <h2 className="text-2xl font-bold">Book your collection</h2>
                                <p>Follow the simple steps to book a charity
                                    clothes collection on the day of your choice.
                                    You’ll have the chance to leave us instructions.</p>
                            </div>
                            <hr className="bg-primary" />
                        </li>
                        <li>
                            <hr className="bg-primary" />
                            <div className="timeline-middle  bg-orange-400 px-3 md:px-7 md:py-5
                             text-white rounded-full text-3xl font-bold">
                                3
                            </div>
                            <div className="timeline-start timeline-box md:p-10 py-5
                             bg-blue-200 hover:bg-blue-400">
                                <div className="flex-col">
                                    <img className="h-[150px] md:h-[300px] mx-auto" src="https://i.ibb.co.com/2FVdmtw/Pulldown-refresh-loading-Nationwide-purchase.gif" alt="" />
                                    <div className="space-y-3 mt-5">
                                        <h2 className="text-2xl font-bold">Bag up your preloved clothes</h2>
                                        <p>Pop your clean, pre-loved clothes and textiles
                                            in a bag or box of your choice.
                                            Then leave them in the prearranged
                                            place on your collection day.</p>
                                    </div>
                                </div>
                            </div>
                            <hr className="bg-neutral" />
                        </li>
                        <li>
                            <hr className="bg-neutral" />
                            <div className="timeline-middle  bg-orange-400 px-3 md:px-7 md:py-5
                             text-white rounded-full text-3xl font-bold">
                                4
                            </div>
                            <div className="timeline-end timeline-box md:p-10 space-y-3 py-5
                             bg-blue-200 hover:bg-blue-400 my-10">
                                <h2 className="text-2xl font-bold">We collect your clothes</h2>
                                <p>On collection day, we’ll message you with an approximate
                                    collection time. Simply leave your clothes
                                    out in the place you specified.</p>
                            </div>
                            <hr className="bg-neutral" />
                        </li>
                        <li>
                            <hr className="bg-neutral" />
                            <div className="timeline-middle  bg-orange-400 px-3 md:px-7 md:py-5
                             text-white rounded-full text-3xl font-bold">
                                5
                            </div>
                            <div className="timeline-start timeline-box md:p-10 space-y-3 py-5
                             bg-blue-200 hover:bg-blue-400">
                                <h2 className="text-2xl font-bold">Your chosen charity benefits</h2>
                                <p>Once we’ve sorted and sold your pre-loved items,
                                    your chosen charity receives 82% of the proceeds.
                                    Fundraising with a charity clothing collection
                                    scheme has never been so easy.</p>
                            </div>
                        </li>
                    </ul>
                </div>

            </main>
        </div>
    );
};

export default HowItWorks;