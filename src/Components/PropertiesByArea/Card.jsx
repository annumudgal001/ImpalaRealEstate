import React from 'react';
import { HiOutlineEye } from 'react-icons/hi';

const Card = ({ area, hoveredCard, setHoveredCard }) => {
    return (
        <div
            className="relative rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl h-72 sm:h-80"
            onMouseEnter={() => setHoveredCard(area.name)}
            onMouseLeave={() => setHoveredCard(null)}
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${area.image})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70"></div>
            </div>

            {/* Trending Badge */}
            {area.trending && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <span>🔥</span>
                    <span>Trending</span>
                </div>
            )}

            {/* Default Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">{area.name}</h3>
                <p className="text-white/90 text-sm">{area.description}</p>
            </div>

            {/* Hover Overlay */}
            <div
                className={`absolute inset-0 bg-black/80 p-6 flex flex-col justify-center items-center text-center transition-all duration-300 ${hoveredCard === area.name ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                <div className="text-4xl font-bold text-white mb-2">{area.propertyCount}</div>
                <div className="text-lg text-white/90 font-medium mb-2">Properties Available</div>
                <div className="text-md text-red-400 font-semibold mb-6">
                    Starting from {area.startingPrice}
                </div>
                <div className="space-y-3 w-full">
                    <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                        <HiOutlineEye className="w-4 h-4" />
                        <span>View Properties</span>
                    </button>
                    <button className="w-full bg-white hover:bg-gray-100 text-gray-900 py-2 rounded-lg font-medium transition-colors">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;