import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <footer className="text-black container mx-auto px-20 mt-10">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col gap-8">
                        <h1 className='font-semibold'>FOODIE</h1>
                        <div className="text-4xl space-x-3">
                            <Link><i className="ri-twitter-fill"></i></Link>
                            <Link><i className="ri-linkedin-box-fill"></i></Link>
                            <Link><i className="ri-youtube-fill"></i></Link>
                            <Link><i className="ri-facebook-box-fill"></i></Link>
                        </div>
                    </div>

                    <ul>
                        <li>
                            <Link to='quality'>Quality</Link>
                        </li>
                        <li><Link>Help</Link></li>
                        <li><Link>Share</Link></li>
                        <li><Link>Carrers</Link></li>
                        <li><Link>Work</Link></li>
                        <li><Link>Testimonials</Link></li>
                    </ul>

                    <ul>
                        <li><Link>244-5333-7783</Link></li>
                        <li><Link>hello@food.com</Link></li>
                        <li><Link>press@food.com</Link></li>
                        <li><Link>contact@food.com</Link></li>
                    </ul>

                    <ul>
                        <li><Link>Terms & Conditions</Link></li>
                        <li><Link>Privacy Policy</Link></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}
