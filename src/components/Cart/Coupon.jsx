// import React from 'react'

// function Coupon() {
//     const CouponCode = "NEW50";
//     return (
//         <>
//             <div className='w-screen h-screen flex items-center justify-center bg-black/40 backdrop-blur-lg fixed z-50 top-0 left-0'>
//                 <div className='bg-white w-[40%] px-10 py-10 rounded-3xl shadow-lg'
//                     style={{ border: "1px solid black" }}
//                 >
//                     <form onSubmit={handleSubmit} className='mt-5'>
//                         <input
//                             className='w-full mt-3 px-3 py-3 border-gray-400 border-[2px] outline-0 rounded-xl focus:border-green-500'
//                             type='text'
//                             name='username'
//                             value={userData.username}
//                             onChange={handleChange}
//                             placeholder='Username' />

//                         <input
//                             className='w-full mt-3 px-3 py-3 border-gray-400 border-[2px] outline-0 rounded-xl focus:border-green-500'
//                             type='password'
//                             name='password'
//                             value={userData.password}
//                             onChange={handleChange}
//                             placeholder='Password' />

//                         <button
//                             type='submit'
//                             style={{ backgroundColor: 'red' }}
//                             className='mt-5 w-full py-3 text-white rounded-xl'
//                         >

//                             Login
//                         </button>
                        
//                         <fieldset className='mt-3 border-gray-400 border-t-2 px-'>
//                             <legend className='mt-5 px-3'>or</legend>

//                             <button style={{ backgroundColor: 'red' }} className='mt-5 w-full'>Continue with Gmail</button>
//                         </fieldset>

//                         <p className='mt-5 text-center'>
//                             Don't have account?
//                             <button onClick={() => {
//                                 setshowLogin(false)
//                                 setshowSignUp(true)
//                             }} className='text-blue-500 ml-1'>Sign Up</button>
//                         </p>

//                     </form>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Coupon
