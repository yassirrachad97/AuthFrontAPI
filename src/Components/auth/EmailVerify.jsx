import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const EmailVerify = () => {
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const token = searchParams.get('token');
        
        const verifyEmail = async () => {
            try {
                const response = await axios.post(`http://localhost:3000/api/auth/verify-email/${token}`);
                setTimeout(() => navigate('/login'), 3000);
                toast.success(response.data.message);
               
            } catch (error) {
                if (error.response.data) {
                    
                    toast.error(error.response.data.message);
                    setTimeout(() => navigate('/login'), 2000);
                } else {
                 
                    toast.error('Une erreur est survenue.');
                }
            } finally {
                setLoading(false);
            }
        };

        if (token) {
            verifyEmail();
        } else {
            setMessage('Lien de vérification manquant.');
            setLoading(false);
        }
    }, [location, navigate]);

    if (loading) return <div>Vérification en cours...</div>;

    return (
        <div className="verification-result">
            <h2>{message}</h2>
        </div>
    );
};

export default EmailVerify;
