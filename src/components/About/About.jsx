import React from 'react'
import { useNavigate } from 'react-router'

export default function About() {
    const navigate = useNavigate();
    const navigateToProduct = () => {
        navigate("/product");
    }

    return (
        <>
            <div className="relative container mx-auto px-20">
                <div>
                    <img className="absolute top-0 -left-[35rem] h-[45rem] w-[45rem]" src="./src/assets/about-background.png" alt="top-bg" />
                </div>

                <div className="flex flex-row-reverse items- gap-8 justify-between relative z-10">
                    {/* text */}
                    <div className="flex flex-col items-start py-12">

                        <h3 className="text-amber-500 font-semibold">About</h3>
                        <h1 className="capitalize max-w-lg text-start font-semibold">food is an important part of a balanced diet</h1>
                        <p className="text-start text-2xl text-gray-400 gap-8 max-w-xl mt-5">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab est laboriosam laborum iure, minus ratione beatae. Vero praesentium,
                        </p>

                        <p className="text-start text-2xl text-gray-400 gap-8 max-w-xl mt-5">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab est laboriosam laborum iure, minus ratione beatae. Vero praesentium,
                        </p>



                        <div className="flex flex-row justify-center gap-3">
                            <button className="bg-amber-500 mt-5 p-0"
                                onClick={navigateToProduct}
                            >
                                Order Now <i className="ri-arrow-right-line"></i>
                            </button>

                            <button className="flex items-center gap-3 mt-5 ml-0 mr-0 " style={{ backgroundColor: "white", color: "black" }}>
                                <i className="ri-play-circle-fill text-5xl"></i>
                                <span> Watch Video</span>
                            </button>
                        </div>

                    </div>

                    {/* image */}
                    <div className="pt-30">
                        <img className="relative z-10" src="./src/assets/about-background-image.png" alt="Bowl-Imgage" />

                    </div>
                </div>
            </div>
        </>
    )
}

