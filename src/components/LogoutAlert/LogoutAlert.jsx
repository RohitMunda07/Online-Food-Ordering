import React, { useEffect } from "react";
import { useItem } from "../../context/ItemsContext";

export default function LogoutAlert({ isOpen, onClose, onConfirm }) {
  const { logout } = useItem();

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-lg animate-fadeIn"
      onClick={(e) => {
        // Close when clicking outside the modal
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white w-[90%] sm:w-[70%] md:w-[40%] lg:w-[30%] px-6 py-6 rounded-2xl shadow-lg border border-gray-300 transition-all duration-300 scale-100">
        <h2 className="text-xl font-semibold text-center">Confirm Logout</h2>
        <p className="text-gray-600 text-center mt-2">
          Are you sure you want to log out?
        </p>

        <div className="flex justify-between mt-6">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg w-[45%] hover:bg-red-600 transition"
            onClick={() => {
              logout?.();
              onConfirm?.();
              onClose?.();
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
    </div>
  );
}
