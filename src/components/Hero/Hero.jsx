import React from 'react'
import { useNavigate } from 'react-router'

export default function Hero() {
    const navigate = useNavigate();
    const navigateToProduct = () => {
        navigate("/product");
    }

    return (
        <>
            <div className="w-full px-6 md:px-10 lg:px-20 py-10 bg-white">
                <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">

                    {/* text section */}
                    <div className="flex flex-col items-start text-center md:text-left gap-5 md:gap-6 max-w-xl">
                        <h1 className="capitalize font-semibold text-[clamp(1.8rem,3vw,3.5rem)] leading-[1.2]">
                            your favourite food delivered hot & fresh
                        </h1>
                        <p className="text-gray-500 text-[clamp(1rem,1.5vw,1.25rem)] leading-relaxed">
                            Healthy switch chefs do all the prep work, like peeling, chopping & marinating, so you can enjoy a fresh, delicious meal without the hassle.
                        </p>
                        <button
                            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg mt-3 transition-all duration-300"
                            onClick={navigateToProduct}
                        >
                            Order Now <i className="ri-arrow-right-line"></i>
                        </button>
                    </div>

                    {/* image section */}
                    <div className="w-full flex justify-center md:justify-end">
                        <img
                            className="w-[clamp(250px,40vw,500px)] max-w-full h-auto drop-shadow-lg"
                            src="/home-banner-image.png"
                            alt="Bowl-Image"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
