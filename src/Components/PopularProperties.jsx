import React from 'react';
import data from '../data/data.json';

const PopularProperties = () => {
    const popular = data.popularProperties;

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold">Discover Popular Properties</h2>
                    <p className="text-gray-500">
                        Explore our handpicked selection of premium properties across Abu Dhabi's most desirable locations.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center space-x-2 mb-8 overflow-x-auto">
                    <button className="px-4 py-2 bg-primary text-white rounded-full text-sm">All 1247</button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">Apartments 856</button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">Villas 234</button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">Townhouses 98</button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">Offices 59</button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {popular.map((prop) => (
                        <div
                            key={prop.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                        >
                            <div className="relative">
                                <img src={prop.image} alt={prop.title} className="w-full h-40 object-cover" />
                                <span className="absolute top-2 left-2 bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                                    {prop.type}
                                </span>
                                {prop.featured && (
                                    <span className="absolute top-2 right-2 bg-[#e3731e] text-black font-bold px-2 py-1 rounded-full text-xs shadow-md">
                                        Featured
                                    </span>
                                )}
                                <span className="absolute bottom-2 left-2 bg-white text-gray-700 px-2 py-1 rounded text-xs">
                                    {prop.year}
                                </span>
                            </div>
                            <div className="p-4">
                                <p className="text-gray-500 text-xs mb-1">■ {prop.developer}</p>
                                <h3 className="font-bold text-sm">{prop.title}</h3>
                                <p className="text-gray-500 text-xs">{prop.location}</p>
                                <p className="text-primary font-bold text-sm mt-1">{prop.price}</p>
                                <div className="flex space-x-2 text-xs text-gray-500 mt-1">
                                    <span>■ {prop.beds} beds</span>
                                    <span>■ {prop.baths} baths</span>
                                    <span>□ {prop.sqft} sqft</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="text-center mt-8 flex flex-col items-center space-y-4">

                    <button className="px-6 py-2 bg-[#e3731e] hover:bg-[#c95f15]  text-zinc-900 rounded-md hover:bg-gray-300">
                        View all Properties
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PopularProperties;
