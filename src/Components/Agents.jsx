import React from 'react';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import data from '../data/data.json';

const Agents = () => {
    const agents = data.agents;

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold">Meet Our Expert Agents</h2>
                    <p className="text-gray-500">Our team of experienced real estate professionals is here to guide you through every step of your property journey.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {agents.map((agent, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6 text-left">
                            <img src={agent.image} alt={agent.name} className="mx-auto rounded-full h-20 w-20 object-cover mb-4" />
                            <h3 className="font-bold text-lg">{agent.name}</h3>
                            <p className="text-gray-500 text-sm">{agent.title}</p>
                            <div className="flex items-center mt-1">
                                <FaStar className="text-yellow-400" />
                                <span className="ml-1 text-sm">{agent.rating} ({agent.reviews} reviews)</span>
                            </div>
                            <p className="text-gray-500 text-sm mt-2">Experience: {agent.experience}</p>
                            <p className="text-gray-500 text-sm">Specializing in luxury properties and investment opportunities.</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {agent.specialties.map((spec, i) => (
                                    <span key={i} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">{spec}</span>
                                ))}
                            </div>
                            <p className="text-gray-500 text-sm mt-2"><FaMapMarkerAlt className="inline mr-1" />{agent.area}</p>
                            <p className="text-gray-500 text-sm">☎ {agent.phone}</p>
                            <p className="text-gray-500 text-sm">✉ {agent.email}</p>
                            <div className="flex space-x-2 mt-4">
                                <button className="px-4 py-2 bg-primary text-white rounded-md text-sm">Contact</button>
                                <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md text-sm">View Profile</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Agents;