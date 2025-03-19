import React from 'react'
import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'
import Hero from './Hero/Hero.jsx'
import About from './About/About.jsx'
import Work from './Work/Work.jsx'
import Testimonial from './Testimonial/Testimonial.jsx'
import Login from './Login/Login.jsx'
import { Outlet } from 'react-router'
import { useItem } from '../context/ItemsContext.jsx'
import SignUp from './SignUp/SignUp.jsx'
import LogoutAlert from './LogoutAlert/LogoutAlert.jsx'
import Navbar from './LogoutAlert/Navbar.jsx'
import { ToastContainer } from 'react-toastify'

function Layout() {
    const { showLogin, showSignUp, isLoggedIn } = useItem();

    return (
        <>
            <Header />
            {/* <Hero />
            <About />
            <Work />
            <Testimonial />
            <Contact /> */}
            {/* <Outlet /> */}
            {/* {showSignUp && !isLoggedIn ? <SignUp /> : showLogin && !isLoggedIn && <Login />} */}
            {(showLogin || showSignUp) && !isLoggedIn ? (
                showLogin ? <Login /> : <SignUp />
            ) : (
                <Outlet />
                // <ToastContainer />
            )}
            <Footer />
        </>
    )
}

export default Layout
