import React from 'react'
import { useNavigate } from 'react-router'

export default function About() {
    const navigate = useNavigate();
    const navigateToProduct = () => {
        navigate("/product");
    }

    return (
        <>
            <section className="relative container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-16 overflow-hidden">
                {/* Background Image */}
                <div>
                    <img
                        className="absolute top-0 -left-[35rem] h-[45rem] w-[45rem] hidden md:block opacity-60"
                        src="/about-background.png"
                        alt="background"
                    />
                </div>

                {/* Content Wrapper */}
                <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between relative z-10 gap-12">
                    {/* Text Section */}
                    <div className="flex flex-col items-start text-center lg:text-left py-8 lg:py-12 max-w-xl">
                        <h3 className="text-amber-500 font-semibold text-[clamp(1rem,2vw,1.25rem)]">
                            About
                        </h3>

                        <h1 className="capitalize font-semibold text-[clamp(1.5rem,2.5vw,2rem)] leading-snug mt-3">
                            food is an important part of a balanced diet
                        </h1>

                        <p className="text-gray-500 text-[clamp(1rem,1.8vw,1.25rem)] mt-5 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab est laboriosam laborum iure, minus ratione beatae. Vero praesentium.
                        </p>

                        <p className="text-gray-500 text-[clamp(1rem,1.8vw,1.25rem)] mt-5 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab est laboriosam laborum iure, minus ratione beatae. Vero praesentium.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                            <button
                                className="bg-amber-500 text-white font-medium py-3 px-6 rounded-lg hover:bg-amber-600 transition-all duration-200"
                                onClick={navigateToProduct}
                            >
                                Order Now <i className="ri-arrow-right-line ml-2"></i>
                            </button>

                            <button
                                className="flex items-center gap-3 bg-white text-black font-medium py-3 px-5 rounded-lg shadow hover:shadow-lg transition-all duration-200"
                            >
                                <i className="ri-play-circle-fill text-4xl text-amber-500"></i>
                                <span>Watch Video</span>
                            </button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center items-center w-full lg:w-1/2">
                        <img
                            className="w-[clamp(18rem,40vw,30rem)] h-auto relative z-10"
                            src="/about-background-image.png"
                            alt="Food bowl"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
