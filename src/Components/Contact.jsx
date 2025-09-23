import React from 'react';

const Contact = () => {
    return (
        <section className="py-16 bg-neutral">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
                <form className="max-w-md mx-auto space-y-4">
                    <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded-md" />
                    <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-md" />
                    <textarea placeholder="Message" className="w-full px-4 py-2 border rounded-md h-32" />
                    <button type="submit" className="w-full px-4 py-2 bg-primary text-white rounded-md">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;