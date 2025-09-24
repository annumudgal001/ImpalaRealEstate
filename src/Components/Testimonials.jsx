import React from 'react';
import { FaStar } from 'react-icons/fa';
import data from '../data/data.json';

const Testimonials = () => {
    const testimonials = data.testimonials;

    return (
        <section className="py-16 bg-gray-100 text-black">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>

                <div className="flex overflow-x-auto space-x-6 pb-4">
                    {testimonials.map((test, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-80 bg-gray-200 p-6 rounded-lg shadow-md"
                        >
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className={i < test.rating ? 'text-yellow-400' : 'text-gray-300'}
                                    />
                                ))}
                            </div>
                            <p className="mb-4">"{test.quote}"</p>
                            <p className="font-bold">- {test.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
