import React, { useEffect, useState } from 'react'
import { useItem } from '../../context/ItemsContext';
import { useNavigate } from 'react-router';
import OrderNow from './OrderNow';
import AddressAutocomplete from '../AddressAutocomplete/AddressAutocomplete';

function Address({ showAddress, setShowAddress, isEmpty, Amount }) {
    const { getOrder } = useItem();
    const CouponCode = "NEW50";
    const [discount, setDiscount] = useState(Amount);
    const navigate = useNavigate();
    const [coupon, setCoupon] = useState('');
    const [order, setOrder] = useState({
        name: '',
        number: '',
        address: '',
    })

    const checkCoupon = coupon === CouponCode;

    useEffect(() => {
        setDiscount(checkCoupon ? Amount - 50 : Amount);
    }, [Amount, checkCoupon])

    const handleChange = (e) => {
        setOrder({ ...order, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getOrder(order);
        navigate('/cart'); // Navigate after submission
    }

    const isFormValid = order.name.trim() && order.number.trim() && order.address.trim();

    if (!showAddress) return null;

    return (
        <>
            <div className='w-screen h-screen flex items-center justify-center bg-black/40 backdrop-blur-lg fixed z-50 top-0 left-0'>
                <div className='bg-white w-[40%] px-10 py-3 rounded-3xl shadow-lg'
                    style={{ border: "1px solid black" }}>

                    <button
                        className='w-full flex justify-end'
                        type="button"
                        style={{
                            backgroundColor: "transparent",
                            color: "black",
                            padding: 0,
                            border: 0,
                            outline: 0,
                        }}
                        onClick={() => {
                            setShowAddress(false), // Hide address modal
                                navigate('/cart')
                        }}
                    >
                        <i className="ri-close-large-fill text-xl"></i>
                    </button>

                    <form onSubmit={handleSubmit} className='mt-5'>
                        <h3 className='text-3xl mb-5'>Confirm Order 🥳</h3>
                        <input
                            className='w-full mt-3 px-3 py-3 border-gray-400 border-[2px] outline-0 rounded-xl focus:border-green-500'
                            type='text'
                            name='name'
                            value={order.name}
                            onChange={handleChange}
                            placeholder='Name'
                            required
                        />


                        <input
                            className="w-full mt-3 px-3 py-3 border-gray-400 border-[2px] outline-0 rounded-xl focus:border-green-500"
                            type="tel"
                            name="number"
                            value={order.number}
                            onChange={(e) => {
                                const inputVal = e.target.value;
                                if (/^\d{0,10}$/.test(inputVal)) {
                                    handleChange(e); // Allow only numbers up to 10 digits
                                }
                            }}
                            placeholder="Contact Number"
                            required
                            pattern="\d{10}"  // Ensures exactly 10 digits on form submission
                            title="Enter a 10-digit phone number"
                        />

                        <input
                            className='w-full mt-3 px-3 py-3 border-gray-400 border-[2px] outline-0 rounded-xl focus:border-green-500'
                            type='text'
                            name='address'
                            value={order.address}
                            onChange={handleChange}
                            placeholder='Address'
                            required
                        />

                        <input
                            className={`w-full mt-3 mb-3 px-3 py-3 border-gray-400 border-[2px] outline-0 rounded-xl focus:border-green-500 ${checkCoupon ? "focus:border-green-500" : "focus:border-red-500"}`}
                            type='text'
                            name='coupon'
                            value={coupon}
                            onChange={(e) => setCoupon(e.target.value)}
                            placeholder='Enter Cuopon'
                        />

                        <span

                            style={{ color: checkCoupon ? "green" : "red", textAlign: "center" }}
                        >

                            {checkCoupon ? "✅ Applied" : ""}

                        </span>
                        <hr className="mt-8 border-t-2 border-dashed border-gray-500" />
                        <div className='mt-3 text-gray-500 flex flex-col justify-between'>
                            <p className='flex justify-between'><span>Amount:</span> <span className=''> ₹ {Amount}</span></p>
                            {checkCoupon && <p className='flex justify-between'><span>Discount:</span> <span className=''> ₹ -50</span></p>}
                            <p className='flex justify-between'><span>Total Amount:</span> <span> ₹ {discount}</span></p>
                        </div>

                        <div className='mt-5 py-3 text-white rounded-xl'>
                            <OrderNow setShowAddress={setShowAddress} isFormValid={isFormValid} isEmpty={isEmpty} />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Address
