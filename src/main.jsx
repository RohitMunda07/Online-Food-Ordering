import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Layout from './components/Layout.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Testimonial from './components/Testimonial/Testimonial.jsx';
import Product from './components/Product/Product.jsx';
import Cart from './components/Cart/Cart.jsx';
import { ItemContextProvider } from './context/ItemsContext.jsx';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute .jsx';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Hero />} />
      <Route path='testimonials' element={<Testimonial />} />
      <Route path='about' element={<About />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path='product' element={<Product />} />
        <Route path='cart' element={<Cart />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ItemContextProvider>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={2000}
      />
    </ItemContextProvider>
  </StrictMode>,
)
