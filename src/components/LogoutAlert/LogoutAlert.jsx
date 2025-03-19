import React from "react";
import { useItem } from "../../context/ItemsContext";

export default function LogoutAlert({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;
    const { isLoggedIn, logout } = useItem();

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-black/40 backdrop-blur-lg fixed z-50 top-0 left-0">
            <div className="bg-white w-[30%] px-6 py-6 rounded-2xl shadow-lg border border-gray-300">
                <h2 className="text-xl font-semibold text-center">Confirm Logout</h2>
                <p className="text-gray-600 text-center mt-2">Are you sure you want to log out?</p>

                <div className="flex justify-between mt-6">
                    <button
                        className="px-4 py-2 bg-red-500 text-white rounded-lg w-[45%] hover:bg-red-600 transition"
                        onClick={() => {
                            logout()
                            onConfirm()
                            onClose()
                        }}
                    >
                        Yes, Logout
                    </button>
                    <button
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg w-[45%] hover:bg-gray-400 transition"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div >
    );
}
