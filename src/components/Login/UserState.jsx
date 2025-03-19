import React from 'react'
import { LoginProvider } from '../../context/LoginContext'

import Login from './Login'

function UserState() {
    return (
        <LoginProvider>
            <Login />
        </LoginProvider>
    )
}

export default UserState
