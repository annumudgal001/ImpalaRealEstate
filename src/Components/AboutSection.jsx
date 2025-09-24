import React from 'react';

const AboutSection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Your Trusted Partner in Abu Dhabi Real Estate</h2>
                        <p className="text-gray-500 text-sm mb-4">
                            With over a decade of experience in Abu Dhabi's dynamic real estate market, we've helped thousands of clients find their perfect home or investment property. Our deep understanding of the local market, combined with our commitment to exceptional service, makes us your ideal partner.
                        </p>
                        <p className="text-gray-500 text-sm">
                            From luxury penthouses in Downtown Abu Dhabi to waterfront villas on Palm Jumeirah, we offer an extensive portfolio of premium properties that cater to every lifestyle and budget.
                        </p>
                    </div>
                    <img src="https://unsplash.it/600/400?image=20" alt="Our Team" className="rounded-xl shadow-md" />
                </div>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-12 mt-8 text-center">
                    <div>
                        <h3 className="text-3xl font-bold text-primary">15+</h3>
                        <p className="text-gray-500 text-sm">Years Experience</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-primary">5000+</h3>
                        <p className="text-gray-500 text-sm">Happy Clients</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-primary">400+</h3>
                        <p className="text-gray-500 text-sm">Expert Agents</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;