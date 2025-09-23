import React from 'react';
import { FaStar, FaSwimmingPool, FaDumbbell } from 'react-icons/fa'; // For amenities
import data from '../data/data.json';

const FeaturedProperties = () => {
    const properties = data.properties; // Filter by tab in future if needed

    return (
        <section className="py-16 bg-neutral">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold">Featured Properties</h2>
                    <p className="text-gray-600">Discover our handpicked selection of premium properties in Abu Dhabi's most sought-after locations</p>
                </div>
                {/* Tabs */}
                <div className="flex justify-center space-x-4 mb-8">
                    <button className="px-6 py-2 bg-primary text-white rounded-full">Buy</button>
                    <button className="px-6 py-2 bg-white text-gray-700 rounded-md shadow">Rent</button>
                    <button className="px-6 py-2 bg-white text-gray-700 rounded-md shadow">Off Plan Projects</button>
                </div>
                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {properties.map(prop => (
                        <div key={prop.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                            <img src={prop.image} alt={prop.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <span className="text-sm text-white bg-primary px-2 py-1 rounded">{prop.type}</span>
                                {prop.featured && <span className="ml-2 text-sm text-white bg-primary px-2 py-1 rounded">Featured</span>}
                                <h3 className="font-bold mt-2">{prop.title}</h3>
                                <p className="text-gray-600 text-sm">{prop.location}</p>
                                <p className="text-primary font-bold">{prop.price}</p>
                                <div className="flex space-x-2 text-sm text-gray-600">
                                    <span>{prop.beds} beds</span>
                                    <span>{prop.baths} baths</span>
                                    <span>{prop.sqft} sqft</span>
                                </div>
                                <div className="flex space-x-2 text-sm text-gray-600">
                                    <span>Floor {prop.floor}</span>
                                    <span>{prop.parking} Parking</span>
                                    <span>{prop.view}</span>
                                </div>
                                <div className="flex items-center mt-2">
                                    {[...Array(5)].map((_, i) => <FaStar key={i} className={i < Math.floor(prop.rating) ? 'text-yellow-400' : 'text-gray-300'} />)}
                                </div>
                                <div className="flex space-x-2 mt-2">
                                    <FaSwimmingPool /> <FaDumbbell /> {/* Map to amenities */}
                                    <span>+ more</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <button className="px-6 py-2 bg-primary text-white rounded-md">View All Properties</button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProperties;