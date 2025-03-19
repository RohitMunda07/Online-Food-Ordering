import React from 'react'
import { useItem } from '../context/ItemsContext'
import { Outlet } from 'react-router';
import Login from '../components/Login/Login';

function ProtectedRoute() {
    const { isLoggedIn } = useItem();

    return isLoggedIn ? <Outlet /> : <Login />
}

export default ProtectedRoute 
