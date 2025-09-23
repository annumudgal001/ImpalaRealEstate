import React from 'react';
import data from '../data/data.json';

const PartnersSection = () => {
    const partners = data.partners;

    return (
        <section className="py-16 bg-neutral">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-primary">Partnering with Abu Dhabi's Leading Developers</h2>
                    <p className="text-gray-600">We collaborate with the most prestigious developers in Abu Dhabi to bring you exceptional properties that define luxury living and investment excellence.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {partners.map((partner, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center">
                            <img src={partner.logo} alt={partner.name} className="mx-auto h-12 mb-4" />
                            <p className="text-gray-600">{partner.description}</p>
                            <p className="text-sm text-gray-500">Founded {partner.founded}</p>
                            <p className="text-sm text-gray-500">{partner.projects}+ Projects</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;