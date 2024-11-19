


const WhyDonate = () => {
    return (
        <div className="w-3/4 mx-auto py-20">
            <div className="text-center">
                <h1 className="text-5xl font-bold">Why Donate Clothes ?</h1>
                <h2 className="text-3xl mt-2">Declutter your wardrobe. But leave your heart full.</h2>
            </div>
            <div className="flex mt-16 gap-10 justify-center items-center">
                <div className="w-[40%]">
                    <img className="rounded-lg" src="https://i.ibb.co.com/ch5ZG9L/I-got-an-idea.gif" alt="" />
                </div>
                <div className=" w-[60%]">
                    <h2 className="text-2xl font-semibold">By giving us your pre-loved clothes and textiles, you’ll:</h2>
                    <ul className="text-xl space-y-2 mt-10">
                        <li><span className="font-semibold">Keep someone warm this winter</span> – your donated clothes go directly to those braving the cold.</li>
                        <li><span className="font-semibold">Help vulnerable communities</span> – 90% of all winter clothing donations reach low-income families and homeless shelters.</li>
                        <li><span className="font-semibold">Reduce textile waste</span> – donating winter clothes keeps them out of landfills and helps the planet.</li>
                        <li><span className="font-semibold">Support local charities</span> – proceeds from any surplus items fund essential winter relief programs.</li>
                        <li><span className="font-semibold">Join a movement of kindness</span> – every item you donate brings warmth, comfort, and hope to those in need.</li>
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default WhyDonate;