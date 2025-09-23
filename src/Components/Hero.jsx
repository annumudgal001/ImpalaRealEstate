import React from 'react';

const Hero = () => {
    return (
        <section
            className="bg-cover bg-center h-96 flex items-center justify-center text-white relative"
            style={{ backgroundImage: "url('https://unsplash.it/1920/1080?image=100')" }} // Neon sign like in screenshot
        >
            <div className="absolute inset-0 bg-black opacity-50"></div> // Overlay for text readability
            <div className="container mx-auto px-4 text-center relative z-10">
                <h1 className="text-5xl font-bold mb-4">Find Your Home in Abu Dhabi.</h1>
                {/* Tabs */}
                <div className="flex justify-center space-x-4 mb-4">
                    <button className="px-6 py-2 bg-primary text-white rounded-full">Buy</button>
                    <button className="px-6 py-2 bg-white text-gray-700 rounded-full">Rent</button>
                    <button className="px-6 py-2 bg-white text-gray-700 rounded-full">Off Plan</button>
                </div>
                {/* Search Form */}
                <form className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-2 max-w-4xl mx-auto">
                    <input type="text" placeholder="Area, Project or Community" className="px-4 py-2 rounded-md flex-1" />
                    <select className="px-4 py-2 rounded-md flex-1">
                        <option>Beds</option>
                        <option>Studio</option>
                        <option>1 Bed</option>
                        <option>2 Beds</option>
                        <option>3 Beds</option>
                        <option>4+ Beds</option>
                    </select>
                    <select className="px-4 py-2 rounded-md flex-1">
                        <option>AED Price Range</option>
                        <option>AED 0 - AED 500K</option>
                        <option>AED 500K - AED 1M</option>
                        <option>AED 1M - AED 2M</option>
                        <option>AED 2M+</option>
                    </select>
                    <button className="px-4 py-2 bg-primary text-white rounded-full">🔍</button>
                </form>
                {/* Stats Bar */}
                <div className="mt-8 bg-black bg-opacity-70 py-2 flex justify-center space-x-8 text-lg">
                    <span>4,000 Listings</span>
                    <span>400+ Agents</span>
                    <span>80 Countries</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;