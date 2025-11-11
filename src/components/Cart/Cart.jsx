import React, { useEffect, useState } from 'react';
import { useItem } from '../../context/ItemsContext';
import OrderNow from './OrderNow';
import Address from './Address';

export default function Cart() {
    const { cart, remove, updateQuantity } = useItem();
    const [Amount, setAmount] = useState(0);
    const [showAddress, setShowAddress] = useState(false);
    const isEmpty = cart.length > 0;

    useEffect(() => {
        const totalAmt = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
        setAmount(totalAmt);
    }, [cart]);

    return (
        <div className="container mx-auto px-[clamp(1rem,5vw,5rem)] py-5 rounded-3xl shadow-2xl text-start mt-5 text-[clamp(1rem,2vw,1.5rem)]">
            {/* Empty Cart */}
            {cart.length === 0 ? (
                <p className="text-center text-gray-500 text-[clamp(1rem,2vw,1.5rem)]">
                    Your Cart is Empty
                </p>
            ) : (
                <div className="flex flex-col gap-6">
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col sm:flex-row items-center justify-between bg-[whitesmoke] p-4 rounded-2xl shadow-md"
                        >
                            {/* Product Image */}
                            <div className="flex-shrink-0 mb-4 sm:mb-0">
                                <img
                                    className="rounded-3xl w-[clamp(10rem,20vw,15rem)] h-[clamp(8rem,18vw,13rem)] object-cover"
                                    src={item.image}
                                    alt={item.name}
                                />
                            </div>

                            {/* Product Details */}
                            <div className="flex flex-col items-center sm:items-start text-center sm:text-left flex-grow">
                                <h2 className="font-semibold text-[clamp(1rem,1.8vw,1.5rem)]">{item.name}</h2>
                                <p className="text-gray-600 mt-1">Price: ₹{item.price}</p>

                                {/* Quantity Control */}
                                <div className="flex items-center justify-center sm:justify-start mt-4">
                                    <button
                                        className="px-3 py-1 bg-gray-200 rounded-md text-lg"
                                        style={{ outline: "0" }}
                                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                    >
                                        -
                                    </button>

                                    <p className="mx-4 font-semibold">{item.quantity}</p>

                                    <button
                                        className="px-3 py-1 bg-gray-200 rounded-md text-lg"
                                        style={{ outline: "0" }}
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Remove Item */}
                            <button
                                style={{ backgroundColor: "transparent", border: 0, outline: 0 }}
                                className="mt-4 sm:mt-0 text-2xl hover:scale-110 transition-transform duration-200"
                                onClick={() => remove(item.id)}
                            >
                                ❌
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Total + Checkout */}
            {cart.length > 0 && (
                <div className="mt-10">
                    <hr className="my-6 border-gray-300" />

                    <div className="flex justify-between text-[clamp(1rem,1.8vw,1.4rem)] font-semibold">
                        <span>Total Amount:</span>
                        <span>₹{Amount}</span>
                    </div>

                    <div className="flex items-center justify-center mt-6">
                        <button
                            className="bg-amber-500 text-white font-medium py-3 px-6 rounded-xl hover:bg-amber-600 transition-all"
                            onClick={() => setShowAddress(true)}
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}

            {/* Address Modal */}
            <Address showAddress={showAddress} setShowAddress={setShowAddress} isEmpty={isEmpty} amount={Amount} />
        </div>
    );
}
