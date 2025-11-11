import React, { useState } from 'react';
import { useItem } from '../../context/ItemsContext';
import { toast } from 'react-toastify';

export default function Contact() {
    const { detail } = useItem();
    const [details, setDetails] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleOnChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!details.name || !details.email || !details.message) {
            toast.error("Please fill all fields");
            return;
        }
        detail(details);
        toast.success("Got your message! We'll reach out soon.");
        setDetails({ name: '', email: '', message: '' });
    };

    return (
        <section className="w-full flex items-center justify-center py-24 md:py-32 bg-gray-50">
            <div className="container mx-auto px-6 md:px-16 lg:px-28 text-center">
                {/* Header Section */}
                <h3 className="text-amber-500 font-semibold text-[clamp(1.2rem,2vw,1.5rem)]">
                    Contact Us
                </h3>
                <h1 className="capitalize font-semibold text-[clamp(1.5rem,2.5vw,2rem)] mt-2">
                    Have questions in mind? Let us help you
                </h1>
                <p className="text-gray-500 text-[clamp(1rem,1.8vw,1.25rem)] mt-3 max-w-2xl mx-auto">
                    We’d love to hear from you! Send us your message and we’ll respond as soon as possible.
                </p>

                {/* Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className="mt-10 bg-white shadow-lg rounded-3xl flex flex-col gap-5 px-6 py-8 md:px-10 md:py-12 max-w-[40rem] mx-auto"
                >
                    <input
                        type="text"
                        name="name"
                        value={details.name}
                        onChange={handleOnChange}
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200"
                    />

                    <input
                        type="email"
                        name="email"
                        value={details.email}
                        onChange={handleOnChange}
                        placeholder="Your Email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200"
                    />

                    <textarea
                        name="message"
                        value={details.message}
                        onChange={handleOnChange}
                        rows={5}
                        placeholder="Write your message here..."
                        className="w-full px-4 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200 resize-none"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-amber-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-amber-600 transition-all duration-200"
                    >
                        Submit
                    </button>
                </form>
                <div className="mt-12 text-gray-600">
                    <p><i className="ri-mail-fill text-amber-500 mr-2"></i> contact@yourwebsite.com</p>
                    <p><i className="ri-phone-fill text-amber-500 mr-2"></i> +91 9876543210</p>
                </div>
            </div>

        </section>
    );
}
