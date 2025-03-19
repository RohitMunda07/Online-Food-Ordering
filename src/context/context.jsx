import { useState, useContext, createContext, useEffect } from "react";

export const Auth = createContext({
    isLoggedIn: false,
    login: () => { },
    logout: () => { },
    userData: null,
});

export const useAuth = () => useContext(Auth);

export const StatusProvider = ({ children }) => { // Renamed to StatusProvider
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const unsubscribe = AuthService.subscribe((user) => {
            if (user) {
                setIsLoggedIn(true);
                setUserData(user);
            } else {
                setIsLoggedIn(false);
                setUserData(null);
            }
        });

        return () => { // Cleanup function
            unsubscribe(); // Call the unsubscribe function
        };
    }, []);

    const login = (user) => {
        setIsLoggedIn(true);
        setUserData(user);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUserData(null);
    };

    const value = {
        isLoggedIn,
        userData,
        login,
        logout,
    };

    return (
        <Auth.Provider value={value}>
            {children}
        </Auth.Provider>
    );
};