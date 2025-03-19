import React, { useState } from 'react'
import { useItem } from '../../context/ItemsContext'

export default function SignUp() {
    const { setshowLogin, setshowSignUp, signUp } = useItem();

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signUp(userData);
    }

    return (
        <>
            <div className='w-screen h-screen flex items-center justify-center bg-black/40 backdrop-blur-lg fixed z-50 top-0 left-0'>
                <div className='bg-white w-[40%] px-10 py-10 rounded-3xl shadow-lg'
                    style={{ border: "1px solid black" }}
                >
                    <div className='flex justify-between'>
                        <h2 className='text-2xl'>Sign Up</h2>
                        <button
                            style={{ backgroundColor: 'transparent', color: 'black', padding: 0, border: 0, outline: 0 }}
                            onClick={() => { setshowSignUp(false) }}
                        >
                            <i className="ri-close-large-fill text-xl"></i>
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className='mt-5'>
                        <input
                            className='w-full px-3 py-3 border-gray-400 border-[2px] outline-0 rounded-xl focus:border-green-500'
                            type='text'
                            name='name'
                            value={userData.name}
                            onChange={handleChange}
                            placeholder='Full Name' />

                        <input
                            className='w-full mt-3 px-3 py-3 border-gray-400 border-[2px] outline-0 rounded-xl focus:border-green-500'
                            type='email'
                            name='email'
                            value={userData.email}
                            onChange={handleChange}
                            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                            placeholder='Email' />

                        <input
                            className='w-full mt-3 px-3 py-3 border-gray-400 border-[2px] outline-0 rounded-xl focus:border-green-500'
                            type='password'
                            name='password'
                            value={userData.password}
                            onChange={handleChange}
                            placeholder='Password' />

                        <button
                            type='submit'
                            style={{ backgroundColor: 'red' }}
                            className='mt-5 w-full py-3 text-white rounded-xl'
                            onClick={() => {
                                setshowLogin(false);
                                setshowSignUp(true);
                            }}
                        >
                            Sign Up
                        </button>

                        <fieldset className='mt-3 border-gray-400 border-t-2 px-'>
                            <legend className='mt-5 px-3'>or</legend>

                            <button style={{ backgroundColor: 'red' }} className='mt-5 w-full py-3 text-white rounded-xl'>Continue with Google</button>

                        </fieldset>

                        <p className='mt-5 text-center'>
                            Already have an account?
                            <button onClick={() => {
                                setshowLogin(true)
                                setshowSignUp(false)
                            }} className='text-blue-500 ml-1'>Login</button>
                        </p>
                    </form>

                </div>
            </div>
        </>
    )
}
