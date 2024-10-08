import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const OTPInput = ({ email, onSubmit }) => {
    const [otp, setOtp] = useState(Array(6).fill('')); 

    const handleChange = (value, index) => {
        if (isNaN(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value; 
        setOtp(newOtp);
    };

    const handleKeyUp = (e, index) => {
        
        if (e.key === "Backspace" && index > 0) {
            e.target.previousSibling?.focus(); 
        }
        if (e.target.value && index < 5) {
            e.target.nextSibling?.focus();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const otpCode = otp.join(''); 

        try {
            const response = await axios.post('http://localhost:3000/api/auth/verify-otp', {
                email,
                otp: otpCode,
            });

            toast.success('Login successful');
            onSubmit(); 
        } catch (error) {
            if (error.response && error.response.data) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Une erreur est survenuee, veuillez réessayer plus tard.');
            }
        }
    };

    return (
        <form className="otp-form" onSubmit={handleSubmit}>
            <div className="otp-inputs">
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleChange(e.target.value, index)}
                        onKeyUp={(e) => handleKeyUp(e, index)}
                        className="otp-input" // Appliquer la classe CSS pour le style
                    />
                ))}
            </div>
            <button type="submit" className="submit-btn">Verify OTP</button>
        </form>
    );
};

export default OTPInput;
