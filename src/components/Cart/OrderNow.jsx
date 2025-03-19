import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

function OrderNow({ setShowAddress, isFormValid, isEmpty }) {
    const [isLoading, setIsLoading] = useState(false);
    const [submit, setSubmit] = useState(false);
    const navigate = useNavigate();

    const handleClick = async () => {
        if (isLoading || submit) return;
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsLoading(false);
        setSubmit(true);
    };

    useEffect(() => {
        if (submit) {
            confetti({
                particleCount: 150,
                spread: 60
            });

            setTimeout(() => {
                setShowAddress(false); // Hide address modal
                navigate('/cart'); // Navigate after order is placed
            }, 2800);
        }
    }, [submit]); // Only runs when 'submit' changes

    return (
        <div className="flex flex-col items-center justify-center">
            <button
                onClick={() => {
                    if (!isEmpty) {
                        toast.error("Cart is Empty")
                    }
                    else if (isFormValid) {
                        handleClick()
                    }
                }}
                disabled={isLoading}

                style={{ width: "10rem", height: "5rem", outline: "0", border: "none" }}
                className="bg-black rounded-lg text-sm text-white w-36 h-12 flex justify-center items-center"
            >
                <span className="flex items-center justify-center gap-1 text-lg">
                    {isLoading ? (
                        <>
                            <div className='h-2 w-2 bg-[#d6f539] rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                            <div className='h-2 w-2 bg-[#d6f539] rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                            <div className='h-2 w-2 bg-[#d6f539] rounded-full animate-bounce'></div>
                        </>
                    ) : (
                        submit ? 'Order Placed' : 'Order Now'
                    )}
                </span>
            </button>
        </div >
    );
}

export default OrderNow;