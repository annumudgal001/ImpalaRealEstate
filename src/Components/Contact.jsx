import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold">Ready to Find Your Dream Home?</h2>
                    <p className="text-gray-500">Get in touch with our expert team today.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left: Contact Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <FaPhone className="text-primary mr-2" />
                                <p>+971 4 123 4567</p>
                            </div>
                            <div className="flex items-center">
                                <FaEnvelope className="text-primary mr-2" />
                                <p>info@impala.ae</p>
                            </div>
                            <div className="flex items-center">
                                <FaMapMarkerAlt className="text-primary mr-2" />
                                <p>Office<br />Abu Dhabi, UAE</p>
                            </div>
                            <div className="flex items-center">
                                <FaClock className="text-primary mr-2" />
                                <p>Mon - Fri: 9:00 AM - 7:00 PM<br />Sat - Sun: 10:00 AM - 6:00 PM</p>
                            </div>
                        </div>
                    </div>
                    {/* Right: Form */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                        <form className="space-y-4">
                            <input type="text" placeholder="First Name" className="w-full px-4 py-2 border rounded-md" />
                            <input type="text" placeholder="Last Name" className="w-full px-4 py-2 border rounded-md" />
                            <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border rounded-md" />
                            <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 border rounded-md" />
                            <textarea placeholder="How can we help you?" className="w-full px-4 py-2 border rounded-md h-24" />
                            <button type="submit" className="w-full px-4 py-2 bg-primary text-white rounded-md">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;