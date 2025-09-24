import React from 'react';
import data from '../data/data.json';

const PartnersSection = () => {
    const partners = data.partners;

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-primary">
                        Partnering with Abu Dhabi's Leading Developers
                    </h2>
                    <p className="text-gray-500">
                        We collaborate with the most prestigious developers in Abu Dhabi to bring you exceptional properties that define luxury living and investment excellence.
                    </p>
                </div>

                {/* Horizontal Slider */}
                <div className="flex overflow-x-auto space-x-6 pb-4">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="relative bg-center bg-cover rounded-lg shadow-md flex-shrink-0 h-48 w-64 flex flex-col justify-end p-4"
                            style={{
                                backgroundImage: `url(${partner.logo})`,
                            }}
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

                            {/* Card Content */}
                            <div className="relative z-10">
                                <h3 className="font-bold uppercase text-white text-lg">{partner.name}</h3>
                                <p className="text-gray-200 text-xs mb-1">{partner.description}</p>
                                <p className="text-gray-300 text-xs">{partner.projects}+ Projects</p>
                                <p className="text-gray-300 text-xs">Founded {partner.founded}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action Section */}
                <div className="bg-[#1D4ED8] text-white p-6 rounded-lg mt-8 text-center">
                    <h3 className="text-2xl font-bold mb-2">
                        Ready to Experience Premium Real Estate Services?
                    </h3>
                    <p className="text-sm mb-4">
                        Join thousands of satisfied clients who trust Impala for their real estate needs.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <button className="px-6 py-2 bg-white text-gray-900 rounded-lg">
                            Explore Our Services
                        </button>
                        <button className="px-6 py-2 bg-white text-gray-900 rounded-lg">
                            Contact Us Today
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
