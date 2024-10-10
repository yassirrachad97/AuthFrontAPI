
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaLock } from 'react-icons/fa';


const ResetPassword = () => {
    const { token } = useParams(); 
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (newPassword !== confirmPassword) {
            setError('Les mots de passe ne correspondent pas.');
            return;
        }

        try {
            await axios.post('http://localhost:3000/api/auth/reset-password', {
                token,
                newPassword,
            });
           
            toast.success('Mot de passe réinitialisé avec succès.');
            navigate('/login'); 
        }catch (error) {
            if (error.response) {
                const status = error.response.status;
                if (status === 404) {
                    toast.error('Le lien de réinitialisation a expiré ou est invalide.');
                } else if (status === 400) {
                    toast.error('Une erreur s\'est produite lors de la réinitialisation du mot de passe. Veuillez vérifier votre code OTP.');
                } else {
                    toast.error('Une erreur est survenue, veuillez réessayer plus tard.');
                }
            } else if (error.request) {
              
                toast.error('Le serveur ne répond pas. Veuillez vérifier votre connexion Internet.');
            } else {
               
                toast.error('Une erreur inconnue s\'est produite.');
            }
        }
    };

    return (
        <div className="wrapper reset-password-page"> 
            <div className="form-box reset-password">
                <h1 className="form-title">Réinitialiser le mot de passe</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder="Nouveau mot de passe"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            
                            required
                        />
                         <FaLock className='icon' />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder="Confirmer le mot de passe"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                         <FaLock className='icon' />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="submit-btn">
                        Réinitialiser le mot de passe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
