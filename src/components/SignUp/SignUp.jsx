import React, { useState } from "react";
import { useItem } from "../../context/ItemsContext";

export default function SignUp() {
  const { setshowLogin, setshowSignUp, signUp } = useItem();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call signup from context
    signUp(userData);

    // After successful signup, close signup and open login
    setshowSignUp(false);
    setshowLogin(true);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black/40 backdrop-blur-lg fixed z-50 top-0 left-0">
      <div
        className="bg-white w-[90%] sm:w-[70%] md:w-[40%] px-10 py-10 rounded-3xl shadow-lg border border-black"
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Sign Up</h2>
          <button
            onClick={() => setshowSignUp(false)}
            className="text-xl text-gray-700 hover:text-red-500 transition"
          >
            <i className="ri-close-large-fill"></i>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6">
          <input
            className="w-full px-3 py-3 border-2 border-gray-400 outline-0 rounded-xl focus:border-green-500"
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />

          <input
            className="w-full mt-3 px-3 py-3 border-2 border-gray-400 outline-0 rounded-xl focus:border-green-500"
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            required
          />

          <input
            className="w-full mt-3 px-3 py-3 border-2 border-gray-400 outline-0 rounded-xl focus:border-green-500"
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />

          <button
            type="submit"
            className="mt-5 w-full py-3 text-white rounded-xl bg-red-500 hover:bg-red-600 transition"
          >
            Sign Up
          </button>

          <fieldset className="mt-5 border-t-2 border-gray-400 relative">
            <legend className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-3 text-gray-500">
              or
            </legend>
          </fieldset>

          <button
            type="button"
            className="mt-5 w-full py-3 text-white rounded-xl bg-red-500 hover:bg-red-600 transition"
          >
            Continue with Google
          </button>

          <p className="mt-5 text-center text-gray-700">
            Already have an account?
            <button
              type="button"
              onClick={() => {
                setshowLogin(true);
                setshowSignUp(false);
              }}
              className="text-blue-500 ml-1 hover:underline"
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
