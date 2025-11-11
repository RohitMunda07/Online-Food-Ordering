import React, { useState } from 'react';
import { useItem } from '../../context/ItemsContext';
import { useNavigate } from 'react-router';
import OrderNow from './OrderNow';

const DISCOUNT_AMOUNT = 50;
const COUPON_CODE = "NEW50";

export default function Address({ showAddress, setShowAddress, isEmpty, amount }) {
  const { getOrder } = useItem();
  const navigate = useNavigate();

  const [coupon, setCoupon] = useState('');
  const [order, setOrder] = useState({ name: '', number: '', address: '' });

  const checkCoupon = coupon === COUPON_CODE;
  const discount = checkCoupon ? DISCOUNT_AMOUNT : 0;
  const total = amount - discount;

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getOrder(order);
    navigate('/cart');
  };

  const isFormValid = Boolean(order.name.trim() && order.number.trim() && order.address.trim());

  if (!showAddress) return null;

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-black/40 backdrop-blur-lg fixed z-50 top-0 left-0'>
      <div className='bg-white w-[40%] px-10 py-3 rounded-3xl shadow-lg border border-black'>
        <button
          className='w-full flex justify-end'
          type="button"
          style={{ backgroundColor: "transparent", color: "black", border: 0 }}
          onClick={() => {
            setShowAddress(false);
            navigate('/cart');
          }}
        >
          <i className="ri-close-large-fill text-xl"></i>
        </button>

        <form onSubmit={handleSubmit} className='mt-5'>
          <h3 className='text-3xl mb-5'>Confirm Order 🥳</h3>

          <input
            autoFocus
            className='w-full mt-3 px-3 py-3 border-gray-400 border-2 outline-0 rounded-xl focus:border-green-500'
            type='text'
            name='name'
            value={order.name}
            onChange={handleChange}
            placeholder='Name'
            required
          />

          <input
            className="w-full mt-3 px-3 py-3 border-gray-400 border-2 outline-0 rounded-xl focus:border-green-500"
            type="tel"
            name="number"
            value={order.number}
            onChange={(e) => {
              if (/^\d{0,10}$/.test(e.target.value)) handleChange(e);
            }}
            placeholder="Contact Number"
            required
            pattern="\d{10}"
            title="Enter a 10-digit phone number"
          />

          <input
            className='w-full mt-3 px-3 py-3 border-gray-400 border-2 outline-0 rounded-xl focus:border-green-500'
            type='text'
            name='address'
            value={order.address}
            onChange={handleChange}
            placeholder='Address'
            required
          />

          <input
            className={`w-full mt-3 mb-2 px-3 py-3 border-gray-400 border-2 outline-0 rounded-xl ${checkCoupon ? "border-green-500" : "focus:border-red-500"}`}
            type='text'
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder='Enter Coupon'
          />

          {coupon && (
            <p className={`text-sm ${checkCoupon ? "text-green-500" : "text-red-500"}`}>
              {checkCoupon ? "✅ Coupon applied successfully!" : "❌ Invalid coupon"}
            </p>
          )}

          <hr className="mt-8 border-t-2 border-dashed border-gray-500" />
          <div className='mt-3 text-gray-600'>
            <p className='flex justify-between'><span>Amount:</span> <span>₹ {amount}</span></p>
            {checkCoupon && <p className='flex justify-between'><span>Discount:</span> <span>- ₹ {DISCOUNT_AMOUNT}</span></p>}
            <p className='flex justify-between font-semibold'><span>Total:</span> <span>₹ {total}</span></p>
          </div>

          <div className='mt-5'>
            <OrderNow setShowAddress={setShowAddress} isFormValid={isFormValid} isEmpty={isEmpty} />
          </div>
        </form>
      </div>
    </div>
  );
}
