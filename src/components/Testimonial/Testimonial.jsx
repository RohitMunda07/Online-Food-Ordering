import React from 'react'


export default function Testimonial() {

    return (
        <>
            <div className='container mx-auto px-20 mt-12'>
                <h3 className="text-amber-500 font-semibold">Testimonial</h3>
                <div className='mt-4'>
                    <h1 className="capitalize font-semibold">what they are saying</h1>
                    <p className=" text-2xl text-gray-400 gap-8 mt-5">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab est laboriosam laborum iure, minus ratione beatae. Vero praesentium,
                    </p>
                </div>

                <div className='py-30 flex gap-20 items-center justify-center'>
                    {/* Card 1 */}
                    <div className='border-0 rounded-4xl bg-white flex flex-col items-center max-w-2xl px-5 py-2 cursor-pointer'>
                        <div>
                            <img src="/john-doe-image.png" alt="" />
                        </div>
                        <p className='mt-10 text-center'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eligendi! Error  odio! Quo velit culpa doloremque vel unde, praesentium voluptates quibusdam eveniet libero delectus laudantium? Sunt labore impedit amet alias quaerat tempore dolor.

                        </p>

                        <div className='mt-5'>
                            <i className="ri-star-fill text-amber-500"></i>
                            <i className="ri-star-fill text-amber-500"></i>
                            <i className="ri-star-fill text-amber-500"></i>
                            <i className="ri-star-fill text-amber-500"></i>
                            <i className="ri-star-fill text-amber-500"></i>
                        </div>

                        <p className='font-semibold mt-8 mb-3'>John Doe</p>
                    </div>



                </div>
            </div>
        </>
    )
}

