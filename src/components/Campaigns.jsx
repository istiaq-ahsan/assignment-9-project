import React, { useEffect, useState } from 'react';
import Navbar from '../static/Navbar';
import Footer from '../static/Footer';
import Campaign from './Campaign';
import { Helmet } from 'react-helmet-async';

const Campaigns = () => {

    const [allCampaign, setAllCampaign] = useState([]);

    useEffect(() => {
        fetch("/allCampaign.json")
            .then(result => result.json())
            .then(data => setAllCampaign(data))
    }, [])



    return (
        <div>
            <Helmet>
                <title>All Campaign</title>
            </Helmet>
            <header>
                <Navbar></Navbar>
            </header>
            <div className="pt-[100px] md:pt-[48px]"></div>
            <main className='w-11/12 mx-auto my-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    {allCampaign.map((campaign) => (
                        <Campaign key={campaign.id} campaign={campaign}></Campaign>
                    ))}

                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Campaigns;