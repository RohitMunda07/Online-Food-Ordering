import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <footer className="text-black container mx-auto px-6 md:px-12 lg:px-20 mt-16 py-10 border-t border-gray-200">
                <div className="flex flex-col md:flex-row flex-wrap justify-between gap-10 md:gap-8">

                    {/* Brand + Social Icons */}
                    <div className="flex flex-col gap-6 md:gap-8">
                        <h1 className="font-semibold text-[clamp(1.25rem,2vw,1.5rem)]">FOODIE</h1>
                        <div className="text-[clamp(1.5rem,2vw,2rem)] flex gap-4 text-gray-700">
                            <Link><i className="ri-twitter-fill hover:text-amber-500 transition-colors duration-300"></i></Link>
                            <Link><i className="ri-linkedin-box-fill hover:text-amber-500 transition-colors duration-300"></i></Link>
                            <Link><i className="ri-youtube-fill hover:text-amber-500 transition-colors duration-300"></i></Link>
                            <Link><i className="ri-facebook-box-fill hover:text-amber-500 transition-colors duration-300"></i></Link>
                        </div>
                    </div>

                    {/* Column 1 */}
                    <ul className="flex flex-col gap-2 text-[clamp(0.9rem,1.2vw,1rem)]">
                        <li><Link to="/quality" className="hover:text-amber-500 transition-colors">Quality</Link></li>
                        <li><Link className="hover:text-amber-500 transition-colors">Help</Link></li>
                        <li><Link className="hover:text-amber-500 transition-colors">Share</Link></li>
                        <li><Link className="hover:text-amber-500 transition-colors">Careers</Link></li>
                        <li><Link className="hover:text-amber-500 transition-colors">Work</Link></li>
                        <li><Link className="hover:text-amber-500 transition-colors">Testimonials</Link></li>
                    </ul>

                    {/* Column 2 */}
                    <ul className="flex flex-col gap-2 text-[clamp(0.9rem,1.2vw,1rem)]">
                        <li><Link className="hover:text-amber-500 transition-colors">244-5333-7783</Link></li>
                        <li><Link className="hover:text-amber-500 transition-colors">hello@food.com</Link></li>
                        <li><Link className="hover:text-amber-500 transition-colors">press@food.com</Link></li>
                        <li><Link className="hover:text-amber-500 transition-colors">contact@food.com</Link></li>
                    </ul>

                    {/* Column 3 */}
                    <ul className="flex flex-col gap-2 text-[clamp(0.9rem,1.2vw,1rem)]">
                        <li><Link className="hover:text-amber-500 transition-colors">Terms & Conditions</Link></li>
                        <li><Link className="hover:text-amber-500 transition-colors">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Bottom small text */}
                <div className="text-center text-gray-500 text-sm mt-10">
                    © {new Date().getFullYear()} Foodie. All rights reserved.
                </div>
            </footer>
        </>
    )
}
