import React, { useState, useRef } from 'react';
import { FaHome, FaCalendarAlt, FaBuilding, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import PropertyCard from './PropertyCard';
import data from '../../data/data.json';

const FeaturedProperties = () => {
    const [activeTab, setActiveTab] = useState('buy');
    const sliderRef = useRef(null);

    const tabs = [
        { id: 'buy', label: 'Buy', icon: FaHome },
        { id: 'rent', label: 'Rent', icon: FaCalendarAlt },
        { id: 'offplan', label: 'Off Plan Projects', icon: FaBuilding }
    ];

    const scroll = (direction) => {
        sliderRef.current?.scrollBy({ left: direction * 320, behavior: 'smooth' });
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaHome className="text-2xl text-orange-500" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Discover our handpicked selection of premium properties in Abu Dhabi's most sought-after locations
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="flex flex-wrap justify-center bg-white rounded-lg shadow-sm p-1 max-w-lg">
                        {tabs.map(({ id, label, icon: Icon }) => (
                            <button
                                key={id}
                                onClick={() => setActiveTab(id)}
                                className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-all text-sm sm:text-base ${activeTab === id
                                        ? 'bg-orange-500 text-white'
                                        : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                <Icon className="mr-1 sm:mr-2 text-sm" />
                                <span className="whitespace-nowrap">{label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Slider */}
                <div className="relative">
                    <button
                        onClick={() => scroll(-1)}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50"
                    >
                        <FaChevronLeft className="text-gray-600" />
                    </button>

                    <button
                        onClick={() => scroll(1)}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50"
                    >
                        <FaChevronRight className="text-gray-600" />
                    </button>

                    <div
                        ref={sliderRef}
                        className="flex overflow-x-auto space-x-6 px-1 py-4 scrollbar-hide"
                    >
                        {data.properties.map((property) => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <button className="inline-flex items-center px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium">
                        View All Properties
                        <FaChevronRight className="ml-2" />
                    </button>
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar { display: none; }
                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </section>
    );
};

export default FeaturedProperties;