import React, { useState } from 'react';
import { useItem } from '../../context/ItemsContext';
import { toast } from 'react-toastify';

export default function Contact() {
    const { detail } = useItem();
    const [details, setDetails] = useState({
        message: ''
    });

    const handleOnchange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        detail(details);
        toast.success("Got Your Message")
        // const email = e.target.elements.name.value;
        // ({ email }); // Pass user data to login function
    };

    return (
        <div className='py-30 w-full flex items-center justify-center container mx-auto px-20'>
            <div className='text-center max-w-[40rem]'>
                <h1 className="capitalize font-semibold">have questions in mind? let us help you</h1>

                <form onSubmit={handleSubmit} className=' text-black rounded-3xl flex flex-col px-2 py-3 mt-8'>
                    <textarea
                        name="message"
                        value={details.message}
                        onChange={handleOnchange}
                        cols={3} rows={5}
                        placeholder='Contact Us'
                        className='mt-5 w-full px-4 py-4 rounded-lg bg-white text-black mb-5'
                    >
                    </textarea>
                    <button
                        type='submit'
                        style={{ outline: "0" }}
                    >Submit</button>
                </form>
            </div>
        </div>
    );
}