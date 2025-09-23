import React from "react";
import { FaMapMarkerAlt, FaBed, FaSearch } from "react-icons/fa";

const HeroSearch = () => {
    return (
        <>
            {/* Search Form */}
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-stretch
                rounded-xl md:rounded-full shadow-2xl backdrop-blur-md bg-white/20
                border border-white/30 divide-y md:divide-y-0 md:divide-x
                divide-gray-300/30 relative z-20 overflow-hidden">

                {/* Location */}
                <div className="flex items-center px-4 py-3 md:py-2 flex-1">
                    <FaMapMarkerAlt className="text-white mr-2 text-lg md:text-xl opacity-80" />
                    <input
                        type="text"
                        placeholder="Area, Project or Community"
                        className="w-full focus:outline-none text-white placeholder-white/80 bg-transparent"
                    />
                </div>

                {/* Beds */}
                <div className="flex items-center px-4 py-3 md:py-2 flex-1">
                    <FaBed className="text-white mr-2 text-lg md:text-xl opacity-80" />
                    <select className="w-full bg-transparent text-white focus:outline-none appearance-none cursor-pointer">
                        <option className="text-black">Beds</option>
                        <option className="text-black">Studio</option>
                        <option className="text-black">1 Bed</option>
                        <option className="text-black">2 Beds</option>
                        <option className="text-black">3 Beds</option>
                        <option className="text-black">4+ Beds</option>
                    </select>
                </div>

                {/* Price */}
                <div className="flex items-center px-4 py-3 md:py-2 flex-1">
                    <span className="text-white mr-2 opacity-80">AED</span>
                    <select className="w-full bg-transparent text-white focus:outline-none appearance-none cursor-pointer">
                        <option className="text-black">Price Range</option>
                        <option className="text-black">AED 0 - AED 500K</option>
                        <option className="text-black">AED 500K - AED 1M</option>
                        <option className="text-black">AED 1M - AED 2M</option>
                        <option className="text-black">AED 2M+</option>
                    </select>
                </div>

                {/* Search Button */}
                <button className="px-6 py-3 bg-[#e3731e] hover:bg-[#c95f15]
                    text-white flex items-center justify-center transition
                    md:rounded-r-full">
                    <FaSearch className="text-xl" />
                </button>
            </div>

            {/* Stats Bar */}
            <div className="mt-6 mb-4 bg-black/70 backdrop-blur-md py-2 px-6 flex
                justify-center space-x-6 text-base md:text-lg rounded-full shadow-md">
                <span>4,000 Listings</span>
                <span className="opacity-50">•</span>
                <span>400+ Agents</span>
                <span className="opacity-50">•</span>
                <span>80+ Countries</span>
            </div>
        </>
    );
};

export default HeroSearch;
