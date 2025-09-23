import React from 'react';
import data from '../data/data.json';

const Agents = () => {
    const agents = data.agents;

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Meet Our Expert Agents</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {agents.map((agent, index) => (
                        <div key={index} className="bg-neutral rounded-lg shadow-md p-4 text-center">
                            <img src={agent.image} alt={agent.name} className="mx-auto rounded-full h-32 w-32 object-cover" />
                            <h3 className="font-bold mt-4">{agent.name}</h3>
                            <p className="text-gray-600">{agent.title}</p>
                            <p className="text-sm text-gray-500">Languages: {agent.languages.join(', ')}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Agents;