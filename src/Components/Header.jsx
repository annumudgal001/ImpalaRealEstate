import React, { useState, useRef, useLayoutEffect } from 'react';
import logo from '../assets/impala.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mobileBuyOpen, setMobileBuyOpen] = useState(false);
    const [mobileRentOpen, setMobileRentOpen] = useState(false);
    const headerRef = useRef(null);

    // Measure header height and expose as CSS variable --header-h so Hero can use calc(100vh - var(--header-h))
    useLayoutEffect(() => {
        const setHeaderHeight = () => {
            const h = headerRef.current?.offsetHeight ?? 64;
            document.documentElement.style.setProperty('--header-h', `${h}px`);
        };
        setHeaderHeight();
        window.addEventListener('resize', setHeaderHeight);
        return () => window.removeEventListener('resize', setHeaderHeight);
    }, []);

    return (
        <header
            ref={headerRef}
            className="fixed top-0 left-0 w-full z-50"
            aria-label="Main header"
        >
            {/* translucent glass header */}
            <div className="bg-white/12 backdrop-blur-lg border-b border-white/10">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    {/* Logo */}
                    <img src={logo} alt="Impala" className="h-9 md:h-11" />

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center space-x-6 text-white">
                        {/* Buy dropdown (desktop: hover) */}
                        <div className="relative group">
                            <button className="flex items-center gap-2 hover:text-[#e3731e] transition">
                                Buy <span aria-hidden>▾</span>
                            </button>

                            {/* Desktop dropdown panel */}
                            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black shadow-xl rounded-md w-56 z-50">
                                <ul className="py-2">
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Properties for Sale</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Ready Properties</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Off Plan</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Commercial</li>
                                </ul>
                            </div>
                        </div>

                        {/* Rent dropdown (desktop: hover) */}
                        <div className="relative group">
                            <button className="flex items-center gap-2 hover:text-[#e3731e] transition">
                                Rent <span aria-hidden>▾</span>
                            </button>

                            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black shadow-xl rounded-md w-56 z-50">
                                <ul className="py-2">
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Properties for Rent</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Short Term Rentals</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Commercial Rentals</li>
                                </ul>
                            </div>
                        </div>

                        <a href="#" className="hover:text-[#e3731e] transition">Developers</a>
                        <a href="#" className="hover:text-[#e3731e] transition">Agents</a>
                        <a href="#" className="hover:text-[#e3731e] transition">Services</a>
                        <a href="#" className="hover:text-[#e3731e] transition">News</a>
                        <a href="#" className="hover:text-[#e3731e] transition">Hotel</a>
                    </nav>

                    {/* Right side desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="px-4 py-2 border border-white/30 text-white rounded-lg hover:bg-white/10 transition">
                            Login
                        </button>
                        <button className="px-4 py-2 bg-[#e3731e] hover:bg-[#c95f15] text-white rounded-lg shadow-md transition">
                            List Your Property
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMenuOpen((s) => !s)}
                        aria-label="Toggle mobile menu"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu - includes expandable Buy and Rent submenus */}
            {isMenuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md px-4 py-4 text-black z-50">
                    <div className="space-y-2">
                        <button
                            className="w-full flex justify-between items-center py-2 text-left"
                            onClick={() => setMobileBuyOpen((v) => !v)}
                            aria-expanded={mobileBuyOpen}
                        >
                            <span>Buy</span>
                            <span className="text-gray-600">{mobileBuyOpen ? '▾' : '▸'}</span>
                        </button>
                        {mobileBuyOpen && (
                            <ul className="pl-4 space-y-1">
                                <li className="py-1">Properties for Sale</li>
                                <li className="py-1">Ready Properties</li>
                                <li className="py-1">Off Plan</li>
                                <li className="py-1">Commercial</li>
                            </ul>
                        )}

                        <button
                            className="w-full flex justify-between items-center py-2 text-left"
                            onClick={() => setMobileRentOpen((v) => !v)}
                            aria-expanded={mobileRentOpen}
                        >
                            <span>Rent</span>
                            <span className="text-gray-600">{mobileRentOpen ? '▾' : '▸'}</span>
                        </button>
                        {mobileRentOpen && (
                            <ul className="pl-4 space-y-1">
                                <li className="py-1">Properties for Rent</li>
                                <li className="py-1">Short Term Rentals</li>
                                <li className="py-1">Commercial Rentals</li>
                            </ul>
                        )}

                        <a className="block py-2" href="#">Developers</a>
                        <a className="block py-2" href="#">Agents</a>
                        <a className="block py-2" href="#">Services</a>
                        <a className="block py-2" href="#">News</a>
                        <a className="block py-2" href="#">Hotel</a>

                        <div className="pt-2">
                            <button className="w-full px-4 py-2 bg-[#e3731e] text-white rounded-lg shadow-md">List Your Property</button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
