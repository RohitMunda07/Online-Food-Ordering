import { useContext, createContext, useState, Children } from "react";
import Login from "../components/Login/Login";

export const LoginContext = createContext({
    isActive: false,
    setIsActive: () => { },
    close: () => { },
});

export const useLogin = () => {
    return useContext(LoginContext);
}


export const LoginProvider = () => {
    const [active, isActive] = useState(false);

    const setIsActive = () => {
        setIsActive(true);
    };

    const close = () => {
        setIsActive(false);
    };

    const value = {
        isActive,
        setIsActive,
        close,
    };

    return (
        <LoginContext.Provider value={value}>
            {Children}
        </LoginContext.Provider>
    );
}  