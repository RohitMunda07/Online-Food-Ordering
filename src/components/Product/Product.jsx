import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { NavLink } from 'react-router-dom';
import { useItem } from '../../context/ItemsContext';

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Product() {
    const { add, } = useItem();

    const foodItems = [
        { id: 1, name: "Domino's Pizza", image: "/Domino's pizza.avif", price: 299, rating: 4.3, quantity: 1 },
        { id: 2, name: "Jai Ganesh Bhojnalaya", image: "/Jai Ganesh Bhojnalaya.avif", price: 199, rating: 4.2, quantity: 1 },
        { id: 3, name: "Raimen's Cafe", image: "/cake1.avif", price: 249, rating: 4.1, quantity: 1 },
        { id: 4, name: "Pizza Hut", image: "/Pizza Hut.avif", price: 279, rating: 4.4, quantity: 1 },
        { id: 5, name: "Lassi & Juice Corner", image: "/Famous Lassi & Juice Corner.avif", price: 99, rating: 4.5, quantity: 1 },
        { id: 6, name: "Dino's Pizza", image: "/Dino's Pizza.avif", price: 120, rating: 4.3, quantity: 1 },
        { id: 7, name: "The Fusion Lounge", image: "/The Fusion Lounge.avif", price: 150, rating: 4.3, quantity: 1 },
        { id: 8, name: "Kathi Junction", image: "/Kathi Junction.avif", price: 230, rating: 4.3, quantity: 1 },
        { id: 9, name: "Family Restaurant", image: "/Malwa Family Restaurant.avif", price: 399, rating: 4.3, quantity: 1 },

    ];

    return (
        <>
            <div className='mb-3 mt-12'>
                <h3 className="text-amber-500 font-semibold">Products</h3>

                {/* location input box for delivery */}

                <div className='bg-gray-100 py-10 px-10'>
                    <h1 className='text-start container mx-auto px-20'>Inspiration for your first order</h1>

                    <Swiper

                        spaceBetween={0}
                        slidesPerView={4}
                        navigation

                        pagination={{ clickable: true }}
                        modules={[Navigation, Pagination, Autoplay]}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        // onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}

                        className='mt-10'>

                        <SwiperSlide className='text-start cursor-pointer'>
                            <div>
                                <img src="/Biryani.avif" alt="Biryani" className='w-[10rem] h-[10rem]' />
                            </div>
                            <h2 className='ml-[3.5rem] mt-3 text-xl'>Biryani</h2>
                        </SwiperSlide>

                        <SwiperSlide className='text-start cursor-pointer'>
                            <div className='w-[10rem] h-[10rem] rounded-full overflow-hidden'>
                                <img src="/Pizza.avif" alt="Pizza" className='w-[10rem] h-[10rem]' />
                            </div>
                            <h2 className='ml-[3.5rem] mt-3 text-xl'>Pizza</h2>
                        </SwiperSlide>

                        <SwiperSlide className='text-start cursor-pointer'>
                            <div className='w-[10rem] h-[10rem] rounded-full overflow-hidden'>
                                <img src="/Thali.avif" alt="Thali" className='w-[10rem] h-[10rem]' />
                            </div>
                            <h2 className='ml-[3.5rem] mt-3 text-xl'>Thali</h2>
                        </SwiperSlide>

                        <SwiperSlide className='text-start cursor-pointer'>
                            <img src="/Chicken.avif" alt="Chicken" className='w-[10rem] h-[10rem]' />
                            <h2 className='ml-[3.5rem] mt-3 text-xl'>Chicken</h2>
                        </SwiperSlide>

                        <SwiperSlide className='text-start cursor-pointer'>
                            <img src="/Paneer.avif" alt="Paneer" className='w-[10rem] h-[10rem]' />
                            <h2 className='ml-[3.5rem] mt-3 text-xl'>Paneer</h2>
                        </SwiperSlide>

                        <SwiperSlide className='text-start cursor-pointer'>
                            <img src="/Cake.avif" alt="Cake" className='w-[10rem] h-[10rem]' />
                            <h2 className='ml-[3.5rem] mt-3 text-xl'>Cake</h2>
                        </SwiperSlide>

                        <SwiperSlide className='text-start cursor-pointer'>
                            <img src="/Momos.avif" alt="Momos" className='w-[10rem] h-[10rem]' />
                            <h2 className='ml-[3.5rem] mt-3 text-xl'>Momos</h2>
                        </SwiperSlide>

                        <SwiperSlide className='text-start cursor-pointer'>
                            <img src="/Dosa.avif" alt="Dosa" className='w-[10rem] h-[10rem]' />
                            <h2 className='ml-[3.5rem] mt-3 text-xl'>Dosa</h2>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className='mt-10 container mx-auto px-20'>
                    <h2 className='text-3xl text-start'>Order food online in Sant Shri Asharamji Gurukul,Chhindwara</h2>

                    {/* wrapper div */}

                    <div className='w-full mt-10 flex flex-wrap items-center justify-center gap-10'>
                        {/* card 1 component*/}
                        {foodItems.map(((item, index) => (
                            <div key={index} className='w-[20rem] h-[20rem] flex flex-col items-center px-2 py-3 rounded-2xl bg-[whitesmoke] hover:shadow-2xl cursor-pointer'>
                                <div>
                                    <img src={item.image} alt={item.image} className='w-40 h-40 rounded-2xl' />
                                </div>
                                <div style={{fontFamily: "DMSans"}} className='w-[15rem] flex justify-evenly items-center mt-3 mb-4 text-xl'>
                                    <h2>{item.name}</h2>
                                    <h2><i className="ri-star-fill"></i>{item.rating}</h2>
                                </div>

                                <h2 className='mb-3'>₹{item.price}</h2>
                                <button onClick={() => add({ ...item, id: item.id || Date.now() })}>Add To Cart</button>
                            </div>
                        )))}
                    </div>
                </div>

            </div>
        </>
    )
}


