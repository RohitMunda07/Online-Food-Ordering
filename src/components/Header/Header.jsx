import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useItem } from '../../context/ItemsContext'
import LogoutAlert from '../LogoutAlert/LogoutAlert';
import { useLocation } from 'react-router';
import { IoMenu } from "react-icons/io5";
import { MdOutlineRestaurantMenu } from "react-icons/md";

export default function Header() {
    const { isLoggedIn, logout, openLogin, cart } = useItem();
    const [showAlert, setShowAlert] = useState(false);
    const location = useLocation();
    const [showMenu, setShowMenu] = useState(false);

    const handleLogout = () => {
        console.log("User logged out");
        logout();
        setShowAlert(false);
    };

    // Auto logout
    useEffect(() => {
        let logoutTimer;
        if (isLoggedIn) {
            logoutTimer = setTimeout(() => {
                console.log("Auto logout triggered after timeout");
                logout();
            }, 5 * 60 * 1000);
        }
        return () => clearTimeout(logoutTimer);
    }, [isLoggedIn, logout]);

    return (
        <>
            <header className="relative w-full md:flex items-center justify-between">

                <div className="flex flex-row items-center w-full gap-10 px-10 py-5">
                    {/* hamburger icon */}
                    <div className='md:hidden '>
                        {showMenu ? (
                            <MdOutlineRestaurantMenu
                                cursor="pointer"
                                size="2rem"
                                onClick={() => setShowMenu(false)}
                            />
                        ) : (
                            <IoMenu
                                cursor="pointer"
                                size="2rem"
                                onClick={() => setShowMenu(true)}
                            />
                        )}
                    </div>

                    {/* large screen menu */}
                    <div className='w-full flex items-center justify-around'>
                        {/* logo */}
                        <div>
                            <Link to="/">
                                <img
                                    className='min-w-fit'
                                    src="/Logo.svg" alt="logo" />
                            </Link>
                        </div>

                        <div>
                            <ul className="hidden md:flex px-3 items-center gap-x-[clamp(0.75rem,2vw,2.5rem)] text-[clamp(1vw,2vw,2.5vw)] font-semibold ">
                                <li><NavLink to='/' onClick={() => setShowMenu(false)}>Home</NavLink></li>
                                <li><NavLink to='/product' onClick={() => setShowMenu(false)}>Products</NavLink></li>
                                <li><NavLink to='/about' onClick={() => setShowMenu(false)}>About</NavLink></li>
                                <li><NavLink to='/testimonials' onClick={() => setShowMenu(false)}>Testimonials</NavLink></li>
                                <li><NavLink to='/contact' onClick={() => setShowMenu(false)}>Contact</NavLink></li>
                                <li>
                                    <NavLink to='/cart' onClick={() => setShowMenu(false)}>
                                        <i className="ri-shopping-cart-2-line text-2xl relative">
                                            {cart.length !== 0 && (
                                                <span className='bg-red-600 text-white flex items-center justify-center text-lg rounded-full w-[1.5rem] h-[1.5rem] absolute -top-3 left-3'>
                                                    {cart.reduce((total, item) => total + item.quantity, 0)}
                                                </span>
                                            )}
                                        </i>
                                    </NavLink>
                                </li>

                                <LogoutAlert
                                    isOpen={showAlert}
                                    onClose={() => setShowAlert(false)}
                                    onConfirm={handleLogout}
                                />
                            </ul>
                        </div>

                        <div className='hidden md:block'>
                            {isLoggedIn ? (
                                <button
                                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                                    onClick={() => setShowAlert(true)}
                                >
                                    Logout
                                </button>
                            ) : (
                                <button
                                    className='flex justify-center bg-white text-black px-4 py-2 rounded-md'
                                    onClick={() => {
                                        openLogin(location.pathname);
                                        setShowMenu(false);
                                    }}
                                >
                                    Login
                                </button>
                            )}
                        </div>

                    </div>
                </div>

                {/* SLIDING MENU */}
                <div
                    className={`md:hidden fixed top-0 left-0 z-20 h-screen w-3/4 bg-amber-500 px-10 py-5
                        transform transition-transform duration-500 ease-in-out
                        ${showMenu ? "translate-x-0" : "-translate-x-full"}
                    `}
                >
                    <ul className="flex flex-col gap-y-8 text-xl font-semibold">
                        <li><NavLink to='/' onClick={() => setShowMenu(false)}>Home</NavLink></li>
                        <li><NavLink to='/product' onClick={() => setShowMenu(false)}>Products</NavLink></li>
                        <li><NavLink to='/about' onClick={() => setShowMenu(false)}>About</NavLink></li>
                        <li><NavLink to='/testimonials' onClick={() => setShowMenu(false)}>Testimonials</NavLink></li>
                        <li><NavLink to='/contact' onClick={() => setShowMenu(false)}>Contact</NavLink></li>
                        <li>
                            <NavLink to='/cart' onClick={() => setShowMenu(false)}>
                                <i className="ri-shopping-cart-2-line text-2xl relative">
                                    {cart.length !== 0 && (
                                        <span className='bg-red-600 text-white flex items-center justify-center text-lg rounded-full w-[1.5rem] h-[1.5rem] absolute -top-3 left-3'>
                                            {cart.reduce((total, item) => total + item.quantity, 0)}
                                        </span>
                                    )}
                                </i>
                            </NavLink>
                        </li>

                        <LogoutAlert
                            isOpen={showAlert}
                            onClose={() => setShowAlert(false)}
                            onConfirm={handleLogout}
                        />

                        <div>
                            {isLoggedIn ? (
                                <button
                                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                                    onClick={() => setShowAlert(true)}
                                >
                                    Logout
                                </button>
                            ) : (
                                <button
                                    className='flex justify-center bg-white text-black px-4 py-2 rounded-md'
                                    onClick={() => {
                                        openLogin(location.pathname);
                                        setShowMenu(false);
                                    }}
                                >
                                    Login
                                </button>
                            )}
                        </div>
                    </ul>
                </div>


                {/* Optional overlay (click to close) */}
                <div
                    className={`md:hidden fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 transition-opacity duration-500
                        ${showMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                    `}
                    onClick={() => setShowMenu(false)}
                ></div>

            </header>
        </>
    );
}
