import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useItem } from '../../context/ItemsContext'
import LogoutAlert from '../LogoutAlert/LogoutAlert';
import { useLocation } from 'react-router';


export default function Header() {
    const { quantity, isLoggedIn, logout, openLogin, cart } = useItem();
    const [showAlert, setShowAlert] = useState(false);
    const location = useLocation();

    const handleLogout = () => {
        // Perform logout logic (e.g., clearing session, redirecting)
        console.log("User logged out");
        logout;
        setShowAlert(false);
    };

    return (
        <>
            <header className=" relative z-10 container mx-auto px-20">
                <nav className="bg-transparent">
                    <div className="flex flex-row justify-between w-full gap-10">
                        <div className="flex items-center">
                            <Link to="/">
                                <img src="/Logo.svg" alt="logo" />
                            </Link>
                        </div>
                        <div>
                            <ul className="flex flex-row items-center gap-8 text-xl font-semibold">
                                <li>
                                    <NavLink to='/'>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/product'>
                                        Products
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/about'>
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/testimonials'>
                                        Testimonials
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/contact'>
                                        Contact
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/cart'>
                                        <i className="ri-shopping-cart-2-line text-2xl relative">

                                            {cart.length !== 0 &&
                                                <span className='bg-red-600 text-white flex items-center justify-center text-lg rounded-full w-[1.5rem] h-[1.5rem] absolute -top-3 left-3'>
                                                   {cart.reduce((total, item) => total + item.quantity, 0)}
                                                </span>
                                            }
                                        </i>
                                    </NavLink>
                                </li>
                                <li>
                                    {isLoggedIn ? <button
                                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                                        onClick={() => setShowAlert(true)}
                                    >
                                        Logout
                                    </button> : <button
                                        style={{ backgroundColor: "white", color: "black", width: "10rem" }}
                                        onClick={() => {

                                            openLogin(location.pathname)
                                        }}
                                    >Login
                                    </button>}
                                </li>
                                <LogoutAlert
                                    isOpen={showAlert}
                                    onClose={() => setShowAlert(false)}
                                    onConfirm={handleLogout}
                                />
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

