import React, { useState } from 'react';

const SpinButton = ({ onSpin }) => {
    const [isSpinning, setIsSpinning] = useState(false);

    const handleSpin = () => {
        if (!isSpinning) {
            setIsSpinning(true);
            onSpin(); // Call the onSpin function passed as a prop

            // Simulate spinning for 2 seconds (2000 milliseconds)
            setTimeout(() => {
                setIsSpinning(false);
            }, 2000);
        }
    };

    return (
        <button 
            onClick={handleSpin} 
            disabled={isSpinning} 
            style={{
                backgroundColor: isSpinning ? 'grey' : 'green',
                color: 'white',
                padding: '10px 20px',
                fontSize: '16px',
                border: 'none',
                borderRadius: '5px',
                cursor: isSpinning ? 'not-allowed' : 'pointer',
            }}
        >
            {isSpinning ? 'Spinning...' : 'Spin'}
        </button>
    );
};

export default SpinButton;
