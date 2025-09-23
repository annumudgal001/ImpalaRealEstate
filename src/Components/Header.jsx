import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-10">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <img src="https://placehold.co/100x40/png?text=IR+IMPALA" alt="Logo" className="h-8" />
                </div>
                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-6">
                    <div className="relative group">
                        <button className="text-gray-700 hover:text-primary">Buy ▼</button>
                        <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2">
                            <ul className="py-2">
                                <li className="px-4 py-2 hover:bg-gray-100">Properties for Sale</li>
                                <li className="px-4 py-2 hover:bg-gray-100">Ready Properties</li>
                                <li className="px-4 py-2 hover:bg-gray-100">Off Plan</li>
                                <li className="px-4 py-2 hover:bg-gray-100">Commercial</li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative group">
                        <button className="text-gray-700 hover:text-primary">Rent ▼</button>
                        <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2">
                            <ul className="py-2">
                                <li className="px-4 py-2 hover:bg-gray-100">Properties for Rent</li>
                                <li className="px-4 py-2 hover:bg-gray-100">Short Term Rentals</li>
                                <li className="px-4 py-2 hover:bg-gray-100">Commercial Rentals</li>
                            </ul>
                        </div>
                    </div>
                    <a href="#" className="text-gray-700 hover:text-primary">Developers</a>
                    <a href="#" className="text-gray-700 hover:text-primary">Agents</a>
                    <a href="#" className="text-gray-700 hover:text-primary">Services</a>
                    <a href="#" className="text-gray-700 hover:text-primary">News</a>
                    <a href="#" className="text-gray-700 hover:text-primary">Hotel</a>
                </nav>
                <div className="hidden md:flex space-x-4">
                    <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700">Login</button>
                    <button className="px-4 py-2 bg-primary text-white rounded-md">List Your Property</button>
                </div>
                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <nav className="md:hidden px-4 pb-4">
                    {/* Add mobile links here, similar to desktop but vertical */}
                    <ul className="space-y-2">
                        <li>Buy (expand dropdown if needed)</li>
                        {/* ... repeat for others */}
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;