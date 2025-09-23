import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <p>&copy; 2025 Impala Real Estate. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms of Service</a>
                    <a href="#" className="hover:underline">Contact Us</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;