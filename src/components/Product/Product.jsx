import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { useItem } from '../../context/ItemsContext'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Product() {
    const { add } = useItem();

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
            <div className='mb-6 mt-12'>
                <h3 className="text-amber-500 font-semibold text-[clamp(1.2rem,2vw,1.5rem)] px-6 md:px-12 lg:px-20">
                    Products
                </h3>

                {/* Inspiration Section */}
                <div className='bg-gray-100 py-10 px-6 md:px-12 lg:px-20'>
                    <h1 className='text-start font-semibold text-[clamp(1.25rem,2vw,1.75rem)]'>
                        Inspiration for your first order
                    </h1>

                    <Swiper
                        spaceBetween={20}
                        slidesPerView={2}
                        breakpoints={{
                            640: { slidesPerView: 3 },
                            768: { slidesPerView: 4 },
                            1024: { slidesPerView: 6 },
                        }}
                        navigation
                        pagination={{ clickable: true }}
                        modules={[Navigation, Pagination, Autoplay]}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        className='mt-10'
                    >
                        {[
                            { name: "Biryani", img: "/Biryani.avif" },
                            { name: "Pizza", img: "/Pizza.avif" },
                            { name: "Thali", img: "/Thali.avif" },
                            { name: "Chicken", img: "/Chicken.avif" },
                            { name: "Paneer", img: "/Paneer.avif" },
                            { name: "Cake", img: "/Cake.avif" },
                            { name: "Momos", img: "/Momos.avif" },
                            { name: "Dosa", img: "/Dosa.avif" },
                        ].map((item, index) => (
                            <SwiperSlide key={index} className='text-center cursor-pointer'>
                                <div className='w-[clamp(6rem,10vw,10rem)] h-[clamp(6rem,10vw,10rem)] mx-auto rounded-full overflow-hidden'>
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                                <h2 className='mt-3 text-[clamp(1rem,1.5vw,1.25rem)] font-medium'>
                                    {item.name}
                                </h2>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Food Items Section */}
                <div className='mt-10 container mx-auto px-6 md:px-12 lg:px-20'>
                    <h2 className='text-[clamp(1.5rem,2.5vw,2rem)] text-start font-semibold'>
                        Order food online in Sant Shri Asharamji Gurukul, Chhindwara
                    </h2>

                    <div className='w-full mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-10'>
                        {foodItems.map((item, index) => (
                            <div
                                key={index}
                                className='w-[clamp(15rem,22vw,20rem)] flex flex-col items-center px-3 py-4 rounded-2xl bg-[whitesmoke] hover:shadow-2xl cursor-pointer transition-all duration-300'
                            >
                                <div>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className='w-[clamp(8rem,10vw,10rem)] h-[clamp(8rem,10vw,10rem)] rounded-2xl object-cover'
                                    />
                                </div>
                                <div
                                    style={{ fontFamily: 'DMSans' }}
                                    className='w-full flex justify-between items-center mt-3 mb-4 px-2 text-[clamp(1rem,1.5vw,1.25rem)] font-medium'
                                >
                                    <h2>{item.name}</h2>
                                    <h2><i className="ri-star-fill text-amber-500"></i>{item.rating}</h2>
                                </div>

                                <h2 className='mb-3 text-[clamp(1rem,1.5vw,1.2rem)]'>₹{item.price}</h2>
                                <button
                                    onClick={() => add({ ...item, id: item.id || Date.now() })}
                                    className='bg-amber-500 text-white px-5 py-2 rounded-lg hover:bg-amber-600 transition-all duration-300 text-[clamp(0.9rem,1.3vw,1rem)]'
                                >
                                    Add To Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
