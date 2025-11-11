import React, { useState } from 'react';
import { useItem } from '../../context/ItemsContext';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

export default function Login() {
  const { setshowLogin, setshowSignUp, previousPath, login } = useItem();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [userData, setUserData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Basic Validation
    if (!userData.username.trim() || !userData.password.trim()) {
      toast.error('Please enter both username and password.');
      return;
    }

    setIsLoading(true);
    try {
      // ✅ Await login() from context
      const result = await login(userData);

      if (result?.success) {
        toast.success('Login successful 🎉');
        setshowLogin(false);

        // Navigate to previous or home page
        navigate(previousPath || '/');
      } else {
        toast.error(result?.message || 'Invalid username or password.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-black/40 backdrop-blur-lg fixed z-50 top-0 left-0'>
      <div className='bg-white w-[40%] px-10 py-10 rounded-3xl shadow-lg border border-black'>
        <div className='flex justify-between'>
          <h2 className='text-2xl font-semibold'>Login</h2>
          <button
            style={{ backgroundColor: 'transparent', color: 'black', border: 0, outline: 0 }}
            onClick={() => {
              setshowLogin(false);
              navigate(previousPath || '/');
            }}
          >
            <i className="ri-close-large-fill text-xl"></i>
          </button>
        </div>

        <form onSubmit={handleSubmit} className='mt-5'>
          <input
            className='w-full mt-3 px-3 py-3 border-gray-400 border-2 outline-0 rounded-xl focus:border-green-500'
            type='text'
            name='username'
            value={userData.username}
            onChange={handleChange}
            placeholder='Username'
            required
          />

          <input
            className='w-full mt-3 px-3 py-3 border-gray-400 border-2 outline-0 rounded-xl focus:border-green-500'
            type='password'
            name='password'
            value={userData.password}
            onChange={handleChange}
            placeholder='Password'
            required
          />

          <button
            type='submit'
            disabled={isLoading}
            className='mt-5 w-full py-3 text-white rounded-xl transition-all duration-300 bg-red-500 hover:bg-red-600 disabled:opacity-70 disabled:cursor-not-allowed'
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>

          <p className='mt-5 text-center text-gray-600'>
            Don't have an account?
            <button
              type='button'
              onClick={() => {
                setshowLogin(false);
                setshowSignUp(true);
              }}
              className='text-blue-500 ml-1 hover:underline'
            >
              Sign Up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
