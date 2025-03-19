import React from 'react'

export default function Work() {
    return (
        <>
            <div>
                <h3 className="text-amber-500 font-semibold">Work</h3>
                <div className='mt-4'>
                    <h1 className="capitalize font-semibold">how it work</h1>
                    <p className=" text-2xl text-gray-400 gap-8 mt-5">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab est laboriosam laborum iure, minus ratione beatae. Vero praesentium,
                    </p>
                </div>

                <div className='py-30 flex gap-20 items-center justify-center'>
                    
                    {/* Card 1 */}
                    <div className='border-0 rounded-4xl bg-white flex flex-col items-center max-w-[15rem] px-3 py-2 cursor-pointer'>
                        <div>
                            <img src="./src/assets/pick-meals-image.png" alt="" />
                        </div>
                        <p className='font-semibold mt-8'>Pick Meals</p>
                        <p className='mt-10'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores soluta vitae perspiciatis amet laborum est autem accusantium doloremque facilis blanditiis!
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className='border-0 rounded-4xl bg-white flex flex-col items-center max-w-[15rem] px-3 py-2 cursor-pointer'>
                        <div>
                            <img src="./src/assets/choose-image.png" alt="" />
                        </div>
                        <p className='font-semibold mt-8'>Choose how often</p>
                        <p className='mt-10'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores soluta vitae perspiciatis amet laborum est autem accusantium doloremque facilis blanditiis!
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className='border-0 rounded-4xl bg-white flex flex-col items-center max-w-[15rem] px-3 py-2 cursor-pointer'>
                        <div>
                            <img src="./src/assets/delivery-image.png" alt="" />
                        </div>
                        <p className='font-semibold mt-8'>Choose how often</p>
                        <p className='mt-10'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores soluta vitae perspiciatis amet laborum est autem accusantium doloremque facilis blanditiis!
                        </p>
                    </div>

                </div>
            </div>
        </>
    )

}
