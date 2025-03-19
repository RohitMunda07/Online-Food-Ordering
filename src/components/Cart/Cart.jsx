import React, { useEffect, useState } from 'react';
import { useItem } from '../../context/ItemsContext';
import OrderNow from './OrderNow';
// import Coupon from './Coupon';
import Address from './Address';

function Cart() {
    const {
        cart,
        remove,
        updateQuantity
    } = useItem();

    const [Amount, setAmount] = useState(0);
    const [showAddress, setShowAddress] = useState(false);

    const isEmpty = cart.length ? true : false;

    useEffect(() => {
        const totalAmt = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
        setAmount(totalAmt);
    }, [cart])

    return (

        <div className='container mx-auto px-20 py-5 rounded-3xl shadow-2xl text-start mt-5 text-3xl'>
            {
                cart.length === 0 ? (<p className='text-center'>Your Cart is Empty</p>)
                    : (
                        cart.map((item) => (
                            <div key={item.id} className='flex mb-3 items-center justify-between'>
                                <div>
                                    <img className='rounded-3xl w-[15rem] h-[13rem]' src={item.image} alt={item.image} />
                                </div>
                                <div >
                                    <div className='flex flex-col items-center'>
                                        <h2>{item.name}</h2>
                                        <p>Price: ₹ {item.price}</p>
                                    </div>
                                    <div className='flex items-center justify-center mt-5'>
                                        <button
                                            className='text-lg px-3 py-1 bg-gray-200 rounded-md flex items-center justice'
                                            style={{ width: "10px", height: "10px", outline: "0" }}
                                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} // Prevent going below 1
                                        >-</button>

                                        <p className='mx-3'>{item.quantity}</p>

                                        {/* Increase Quantity */}
                                        <button
                                            className='text-lg px-3 py-1 bg-gray-200 rounded-md flex items-center justice'
                                            style={{ width: "10px", height: "10px", outline: "0" }}
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        >+</button>
                                    </div>

                                </div>
                                {/* <h2>{cart.id} food id</h2> */}

                                <button style={{ backgroundColor: 'transparent', border: 0, outline: 0 }}
                                    onClick={() => remove(item.id)}
                                >
                                    ❌
                                </button>
                            </div>
                        ))

                    )
            }
            {cart.length ?
                <div>
                    <hr className='mt-8 mb-5' />
                    <div className='flex justify-between'>
                        <span>Total Amount:</span> <span> ₹ {Amount}</span>
                    </div>
                    <div className='flex items-center justify-center mt-5'>
                        <button onClick={() => setShowAddress(true)}>Proceed to Checkout</button>
                    </div>
                </div>
                : 
                ""
            }

            <Address showAddress={showAddress} setShowAddress={setShowAddress} isEmpty={isEmpty} Amount={Amount} />
        </div>
    );
}

export default Cart;