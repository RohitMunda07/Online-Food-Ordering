import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

export default function OrderNow({ setShowAddress, isFormValid, isEmpty }) {
    const [isLoading, setIsLoading] = useState(false);
    const [submit, setSubmit] = useState(false);
    const navigate = useNavigate();

    // Handle button click
    const handleClick = async () => {
        if (isLoading || submit) return;

        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call delay
        setIsLoading(false);
        setSubmit(true);
    };

    // Confetti + redirect after order success
    useEffect(() => {
        if (submit) {
            confetti({
                particleCount: 150,
                spread: 60,
                origin: { y: 0.6 }
            });

            const timer = setTimeout(() => {
                setShowAddress(false); // Hide address modal
                navigate('/cart'); // Navigate after success
            }, 2800);

            return () => clearTimeout(timer);
        }
    }, [submit, setShowAddress, navigate]);

    return (
        <div className="flex flex-col items-center justify-center">
            <button
                onClick={() => {
                    if (!isEmpty) {
                        toast.error("Cart is Empty");
                        return;
                    }
                    if (isFormValid) {
                        handleClick();
                    } else {
                        toast.warning("Please fill all address fields");
                    }
                }}
                disabled={isLoading || submit}
                className={`rounded-lg text-sm text-white flex justify-center items-center transition-all duration-200
                    ${submit ? "bg-green-500" : "bg-black hover:bg-gray-800"} 
                    w-[clamp(8rem,10vw,10rem)] h-[clamp(3rem,5vw,5rem)]`}
                style={{ outline: "0", border: "none" }}
            >
                <span className="flex items-center justify-center gap-1 text-lg">
                    {isLoading ? (
                        <>
                            <div className="h-2 w-2 bg-[#d6f539] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                            <div className="h-2 w-2 bg-[#d6f539] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                            <div className="h-2 w-2 bg-[#d6f539] rounded-full animate-bounce"></div>
                        </>
                    ) : (
                        submit ? 'Order Placed' : 'Order Now'
                    )}
                </span>
            </button>
        </div>
    );
}
