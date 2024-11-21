import React from 'react';

const Faq = () => {
    return (
        <div className='py-20'>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-20 text-center'>Frequently Asked Question !</h1>
            <div className='flex flex-col md:flex-row gap-5 w-11/12 mx-auto justify-center items-center'>
                <div className='w-full md:w-[50%]'>
                    <img className='w-11/12 mx-auto' src="https://i.ibb.co.com/g3gDVWp/Free-Vector-Faqs-concept-illustration.jpg" alt="" />
                </div>
                <div className='w-full md:w-[50%] space-y-2'>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            How do I donate my winter clothing?
                        </div>
                        <div className="collapse-content">
                            <p>
                                You can donate clean, gently-used winter clothing such as coats,
                                jackets, sweaters, scarves, gloves, hats, and blankets. Please
                                ensure the items are in good condition to help those in need.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            How do I donate my winter clothing?
                        </div>
                        <div className="collapse-content">
                            <p>
                                You can donate directly through our website by filling out a
                                donation form and selecting a nearby drop-off location. If needed,
                                we can also arrange a pick-up from your location within certain areas.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Who will receive the donated clothing?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Our donations reach individuals and families in rural and low-income
                                areas where access to winter clothing is limited. We partner with local
                                organizations to ensure the items are distributed fairly and efficiently.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Can I volunteer to help with the campaign?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Yes, we welcome volunteers! You can join as a volunteer to help with sorting,
                                distributing, or collecting donations. Please sign up on our website,
                                and our team will reach out with more information.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Is my donation tax-deductible?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Yes, all donations are tax-deductible. Once your donation is processed,
                                we will provide a receipt for your records.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;