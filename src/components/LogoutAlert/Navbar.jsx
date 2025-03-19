import React, { useState } from "react";
import LogoutAlert from "./LogoutAlert";

export default function Navbar() {
    const [showAlert, setShowAlert] = useState(false);

    const handleLogout = () => {
        // Perform logout logic (e.g., clearing session, redirecting)
        console.log("User logged out");
        setShowAlert(false);
    };

    return (
        <div className="p-4 bg-gray-900 text-white flex justify-between">
            <h1 className="text-lg font-bold">My App</h1>
            <button 
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                onClick={() => setShowAlert(true)}
            >
                Logout
            </button>

            {/* Logout Confirmation Alert */}
            <LogoutAlert 
                isOpen={showAlert} 
                onClose={() => setShowAlert(false)} 
                onConfirm={handleLogout} 
            />
        </div>
    );
}
