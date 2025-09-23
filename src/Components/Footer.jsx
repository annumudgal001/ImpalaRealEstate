import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#001F3F] text-white py-8">
            <div className="container mx-auto px-4">
                {/* Upper Section: Logo/Address and Columns */}
                <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
                    {/* Left: Logo, Description, Address */}
                    <div className="flex-1">
                        <div className="flex items-center mb-4">
                            <span className="text-2xl font-bold">IR</span>
                            <span className="ml-2 text-xl">IMPALA</span>
                        </div>
                        <p className="text-sm mb-4">
                            Your trusted partner in real estate. We help you find the perfect property, whether you're buying, selling, or investing. With years of experience and a commitment to excellence, we make your real estate dreams a reality.
                        </p>
                        <p className="text-sm">
                            123 Business Ave, Suite 100<br />
                            Abu Dhabi, UAE<br />
                            +971 50 123 4567<br />
                            info@impala.com
                        </p>
                    </div>
                    {/* Right: Columns */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
                        {/* Company */}
                        <div>
                            <h4 className="font-bold mb-4">Company</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:underline">About Us</a></li>
                                <li><a href="#" className="hover:underline">Our Team</a></li>
                                <li><a href="#" className="hover:underline">Careers</a></li>
                                <li><a href="#" className="hover:underline">Press & Media</a></li>
                                <li><a href="#" className="hover:underline">Partnerships</a></li>
                            </ul>
                        </div>
                        {/* Services */}
                        <div>
                            <h4 className="font-bold mb-4">Services</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:underline">Buy Property</a></li>
                                <li><a href="#" className="hover:underline">Sell Property</a></li>
                                <li><a href="#" className="hover:underline">Rent Property</a></li>
                                <li><a href="#" className="hover:underline">Property Management</a></li>
                                <li><a href="#" className="hover:underline">Investment Advisory</a></li>
                            </ul>
                        </div>
                        {/* Resources */}
                        <div>
                            <h4 className="font-bold mb-4">Resources</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:underline">Market Reports</a></li>
                                <li><a href="#" className="hover:underline">Property Guides</a></li>
                                <li><a href="#" className="hover:underline">Mortgage Calculator</a></li>
                                <li><a href="#" className="hover:underline">Legal Information</a></li>
                                <li><a href="#" className="hover:underline">FAQ</a></li>
                            </ul>
                        </div>
                        {/* Support */}
                        <div>
                            <h4 className="font-bold mb-4">Support</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:underline">Contact Us</a></li>
                                <li><a href="#" className="hover:underline">Help Center</a></li>
                                <li><a href="#" className="hover:underline">Live Chat</a></li>
                                <li><a href="#" className="hover:underline">Feedback</a></li>
                                <li><a href="#" className="hover:underline">Report Issue</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Newsletter */}
                <div className="border-t border-gray-700 pt-8 mb-8">
                    <h4 className="text-lg font-bold mb-2">Stay Updated</h4>
                    <p className="text-sm mb-4">Subscribe to our newsletter for the latest property updates and market insights.</p>
                    <form className="flex flex-col sm:flex-row gap-2 max-w-md">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400"
                        />
                        <button type="submit" className="px-4 py-2 bg-blue-500 rounded text-white">➔</button>
                    </form>
                </div>
                {/* Bottom: Copyright and Socials */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm border-t border-gray-700 pt-4">
                    <p>&copy; 2025 Impala. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
                        <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
                        <a href="#" className="hover:text-gray-300"><FaLinkedinIn /></a>
                        <a href="#" className="hover:text-gray-300"><FaYoutube /></a>
                        <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;