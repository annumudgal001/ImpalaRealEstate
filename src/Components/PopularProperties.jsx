import React from 'react';
import data from '../data/data.json';

const PopularProperties = () => {
    const popular = data.popularProperties;

    return (
        <section className="py-16 bg-neutral">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold">Discover Popular Properties</h2>
                    <p className="text-gray-600">Explore our handpicked selection of desirable properties across Abu Dhabi's most vibrant locations</p>
                </div>
                {/* Tabs */}
                <div className="flex justify-center space-x-4 mb-8 overflow-x-auto">
                    <button className="px-6 py-2 bg-primary text-white rounded-md">All 1547</button>
                    <button className="px-6 py-2 bg-white text-gray-700 rounded-md shadow">Apartments 866</button>
                    <button className="px-6 py-2 bg-white text-gray-700 rounded-md shadow">Villas 234</button>
                    <button className="px-6 py-2 bg-white text-gray-700 rounded-md shadow">Townhouses 88</button>
                    <button className="px-6 py-2 bg-white text-gray-700 rounded-md shadow">Offices 59</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {popular.map(prop => (
                        <div key={prop.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                            <img src={prop.image} alt={prop.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <span className="text-sm text-gray-700">{prop.type}</span>
                                {prop.featured && <span className="ml-2 text-sm text-white bg-primary px-2 py-1 rounded">Featured</span>}
                                <h3 className="font-bold mt-2">{prop.title}</h3>
                                <p className="text-gray-600 text-sm">{prop.location}</p>
                                <p className="text-primary font-bold">{prop.price}</p>
                                <div className="flex space-x-2 text-sm text-gray-600">
                                    <span>{prop.beds} beds</span>
                                    <span>{prop.baths} baths</span>
                                    <span>{prop.sqft} sqft</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <button className="px-6 py-2 bg-primary text-white rounded-md">View All</button>
                </div>
            </div>
        </section>
    );
};

export default PopularProperties;