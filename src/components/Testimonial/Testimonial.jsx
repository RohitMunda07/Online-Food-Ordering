import React from 'react'

export default function Testimonial() {

    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            image: "/john-doe-image.png",
            feedback:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eligendi! Quo velit culpa doloremque vel unde, praesentium voluptates quibusdam eveniet libero delectus laudantium?",
            rating: 5,
        },
        {
            id: 2,
            name: "Sarah Williams",
            image: "/user1.png",
            feedback:
                "The food quality is top-notch! Everything was perfectly packed and hot when delivered. Would highly recommend this to all foodies.",
            rating: 5,
        },
        {
            id: 3,
            name: "David Patel",
            image: "/user2.png",
            feedback:
                "Absolutely love the variety and freshness of meals. Customer service is also very helpful and responsive. Great experience overall!",
            rating: 4,
        },
    ];

    return (
        <>
            <div className='container mx-auto px-6 md:px-12 lg:px-20 mt-12'>
                {/* Header Section */}
                <h3 className="text-amber-500 font-semibold text-[clamp(1.2rem,2vw,1.5rem)]">
                    Testimonial
                </h3>

                <div className='mt-4 text-center md:text-start'>
                    <h1 className="capitalize font-semibold text-[clamp(1.5rem,2.5vw,2rem)]">
                        What they are saying
                    </h1>
                    <p className="text-gray-500 text-[clamp(1rem,1.8vw,1.25rem)] mt-3 max-w-3xl">
                        Hear what our happy customers have to say about their experience with our food delivery service.
                    </p>
                </div>

                {/* Testimonials Container */}
                <div className='mt-16 flex flex-wrap justify-center gap-10 md:gap-16'>
                    {testimonials.map((person) => (
                        <div
                            key={person.id}
                            className='w-[clamp(18rem,28vw,25rem)] border-0 rounded-3xl bg-white flex flex-col items-center text-center px-5 py-8 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer'
                        >
                            <div className='w-[clamp(6rem,10vw,8rem)] h-[clamp(6rem,10vw,8rem)] rounded-full overflow-hidden'>
                                <img
                                    src={person.image}
                                    alt={person.name}
                                    className='w-full h-full object-cover'
                                />
                            </div>

                            <p className='mt-8 text-gray-600 text-[clamp(0.9rem,1.3vw,1rem)] leading-relaxed'>
                                {person.feedback}
                            </p>

                            <div className='mt-5'>
                                {[...Array(person.rating)].map((_, i) => (
                                    <i key={i} className="ri-star-fill text-amber-500 text-[clamp(1rem,1.5vw,1.25rem)]"></i>
                                ))}
                            </div>

                            <p className='font-semibold mt-6 text-[clamp(1rem,1.5vw,1.2rem)]'>
                                {person.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
