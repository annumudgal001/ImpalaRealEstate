import React from 'react';
import data from '../data/data.json';

const PropertiesByArea = () => {
    const areas = data.areas;

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold">Properties by Area</h2>
                    <p className="text-gray-600">Explore Abu Dhabi's most sought-after neighborhoods and find your perfect location</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {areas.map((area, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                            <img src={area.image} alt={area.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                {area.trending && <span className="text-sm text-white bg-primary px-2 py-1 rounded">Trending</span>}
                                <h3 className="font-bold mt-2">{area.name}</h3>
                                <p className="text-gray-600 text-sm">{area.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-secondary text-white p-6 rounded-md mt-8 text-center">
                    <h3 className="font-bold">Can't Find Your Preferred Area?</h3>
                    <p>Our expert agents can help you discover hidden gems and exclusive enclaves in any area of Abu Dhabi.</p>
                    <div className="flex justify-center space-x-4 mt-4">
                        <button className="px-6 py-2 bg-white text-secondary rounded-md">Browse All Areas</button>
                        <button className="px-6 py-2 bg-primary text-white rounded-md">Speak to an Agent</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PropertiesByArea;