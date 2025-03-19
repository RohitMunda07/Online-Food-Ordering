import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const ItemContext = createContext();

export const useItem = () => {
    return useContext(ItemContext);
};

export const ItemContextProvider = ({ children }) => {
    const [quantity, setQuantity] = useState(0);
    const [cart, setCart] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLogin, setshowLogin] = useState(false);
    const [showSignUp, setshowSignUp] = useState(false);
    const [previousPath, setPreviousPath] = useState('/');
    const [userData, setUserData] = useState({});
    const [orderDetails, setOrderDetails] = useState({});

    const [query, setQuery] = useState({
        email: '',
        details: ''
    })

    const detail = (details) => {
        setQuery({ ...query, [query.email]: details.email, [query.details]: details.message })
        console.log(`Email: ${userData.email}`);
        console.log(`Message: ${details.message}`);
    }

    const getOrder = (order) => {
        setOrderDetails({
            name: order.name,
            mobilNo: order.number,
            address: order.address,
        })
        console.log(`name: ${order.name}`);
        console.log(`mobilNo: ${order.number}`);
        console.log(`address: ${order.address}`);        
    }

    const userAuth = {
        username: "admin",
        password: "admin123",
    }

    const openLogin = (currentPath) => {
        setPreviousPath(currentPath);
        setshowLogin(true);
    };

    useEffect(() => {
        console.log(`isLoggedIn: ${isLoggedIn}`);
    }, [isLoggedIn])

    const add = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

            if (existingItem) {
                // If the item exists, update its quantity instead of adding a duplicate
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            }

            // If the item is new, add it with a quantity of 1
            return [...prevCart, { ...item, quantity: 1 }];
        });
    };

    const remove = (id) => {
        setCart((prev) => prev.filter((prevItem) => prevItem.id !== id))
        setQuantity((prevQuantity) => prevQuantity - 1);
        console.log("Item Removed")
        console.log(quantity - 1)
    }

    const login = (data = {}) => {
        setUserData({
            username: data?.username || '',
            password: data?.password || ''
        })
        {
            userAuth.username === data.username && userAuth.password === data.password ? (
                setIsLoggedIn(true),
                setshowLogin(false),
                console.log(`username: ${data.username}`),
                console.log(`password: ${data.password}`),
                console.log("User Logged In"),
                toast.success("Login Sucessfull"))

                :
                (console.log("Incorrect Details"),
                    toast.error("Login Failed!!"))
        }
    }

    const signUp = (data = {}) => {
        setUserData({
            name: data?.name || '',
            email: data?.email || '',
            password: data?.password || ''
        })
        setIsLoggedIn(true);
        setshowSignUp(false);
        setshowLogin(false);
        console.log(`name: ${data.name}`);
        console.log(`email: ${data.email}`);
        console.log(`password: ${data.password}`);
        console.log("User Sign Up");
        toast.success("Sign Up Sucessfull")

    }

    const logout = () => {
        setIsLoggedIn(false);
        setshowLogin(false)
        setUserData({});
        setCart([]);
        setQuantity(0)
        toast.success("Logout")
    }

    const updateQuantity = (id, newQuantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const value = {
        quantity,
        setQuantity,
        add,
        remove,
        cart,
        login,
        isLoggedIn,
        showLogin,
        setshowLogin,
        showSignUp,
        setshowSignUp,
        signUp,
        logout,
        openLogin,
        previousPath,
        updateQuantity,
        detail,
        getOrder

    };

    return (
        <ItemContext.Provider value={value}>
            {children}
        </ItemContext.Provider>
    );
};