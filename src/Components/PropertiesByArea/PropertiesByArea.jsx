import React, { useState } from 'react';
import {
    HiOutlineLocationMarker,
    HiOutlineEye,
    HiPhone,
    HiMenu,
    HiX
} from 'react-icons/hi';
import Card from './Card';
import data from '../../data/data.json';

const PropertiesByArea = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = ['Buy', 'Rent', 'Developers', 'Agents', 'Services', 'News'];

    return (
        <div className="min-h-screen bg-gray-50">

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="bg-red-100 p-4 rounded-full">
                            <HiOutlineLocationMarker className="w-8 h-8 text-red-500" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Properties by Area</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore Abu Dhabi's most sought-after neighborhoods and find your perfect location
                    </p>
                </div>

                {/* First Row - 4 Cards */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
                    {data.areas.slice(0, 4).map((area) => (
                        <Card
                            key={area.name}
                            area={area}
                            hoveredCard={hoveredCard}
                            setHoveredCard={setHoveredCard}
                        />
                    ))}
                </div>

                {/* Second Row - Remaining Cards */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
                    {data.areas.slice(4).map((area) => (
                        <Card
                            key={area.name}
                            area={area}
                            hoveredCard={hoveredCard}
                            setHoveredCard={setHoveredCard}
                        />
                    ))}
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-center text-white">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Can't Find Your Preferred Area?</h2>
                    <p className="text-sm sm:text-lg text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto">
                        Our expert agents can help you discover hidden gems and exclusive properties in any area of Abu Dhabi.
                    </p>
                    <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center items-center">
                        <button className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                            <HiOutlineEye className="w-4 sm:w-5 h-4 sm:h-5" />
                            <span className="text-sm sm:text-base">Browse All Areas</span>
                        </button>
                        <button className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                            <HiPhone className="w-4 sm:w-5 h-4 sm:h-5" />
                            <span className="text-sm sm:text-base">Speak to an Agent</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertiesByArea;