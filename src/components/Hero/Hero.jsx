import React from 'react'
import { useNavigate } from 'react-router'

export default function Hero() {
    const navigate = useNavigate();
    const navigateToProduct = () => {
        navigate("/product");
    }
    return (
        <>
            <div className='container mx-auto px-20' >
                <div>
                    <img className="absolute top-0 right-0 -z-0 h-[45rem] w-[45rem]" src="/about-background-image.png" alt="top-bg" />
                </div>

                <div className="flex flex-row justify-between">
                    {/* text */}
                    <div className="flex flex-col items-start py-30">
                        <h1 className="capitalize max-w-lg text-start font-semibold">your favourit food delivered hot & fresh</h1>
                        <p className="text-start text-2xl text-gray-400 max-w-lg mt-5">
                            Healthy switch chefs do all the prep work, like peeding, chopping & marinating. So you can cook a fresh food.
                        </p>
                        <button className="bg-amber-500 mt-5"
                            onClick={navigateToProduct}
                        >
                            Order Now <i className="ri-arrow-right-line"></i>
                        </button>
                    </div>

                    {/* image */}
                    <div>
                        <img className="relative" src="/home-banner-background.png" alt="Bowl-Imgage" />

                    </div>
                </div>
            </div>
        </>
    )
}

