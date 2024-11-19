
const States = () => {
    return (
        <div className="pb-20">
            <div className="w-11/12 mx-auto bg-stone-400 rounded-2xl py-10">
                <div className="stats shadow text-center flex justify-center mx-10">
                    {/* Total Winter Clothing Donated */}
                    <div className="stat py-10">
                        <div className="stat-figure text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-8 w-8 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 4H20M4 4L12 12M4 4L12 12L20 4M12 12L20 12"></path>
                            </svg>
                        </div>
                        <div className="stat-title">Total Winter Clothing Donated</div>
                        <div className="stat-value text-primary">5,000+ Items</div>
                        <div className="stat-desc">10% more than last month</div>
                    </div>

                    {/* People Helped */}
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-8 w-8 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 6h18M3 6l9 12 9-12"></path>
                            </svg>
                        </div>
                        <div className="stat-title">People Helped</div>
                        <div className="stat-value text-secondary">3,500+ People</div>
                        <div className="stat-desc">New recipients this month</div>
                    </div>

                    {/* Clothing Recycled */}
                    <div className="stat">
                        <div className="stat-figure text-info">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-8 w-8 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 3v18M6 9l6 6 6-6"></path>
                            </svg>
                        </div>
                        <div className="stat-title">Clothing Recycled</div>
                        <div className="stat-value text-info">1,000+ Items</div>
                        <div className="stat-desc">Helping to reduce waste</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default States;