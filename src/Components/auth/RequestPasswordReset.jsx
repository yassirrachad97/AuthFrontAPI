import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { MdEmail } from 'react-icons/md';

const RequestPasswordReset = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email); 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setEmailError('Veuillez entrer un email valide.');
            return;
        }

        try {
            await axios.post('http://localhost:3000/api/auth/request-password-reset', { email });
            setEmailSent(true);
            toast.success('Un lien de réinitialisation a été envoyé à votre adresse e-mail.');
        } catch (error) {
            if (error.response && error.response.status === 404) {
                toast.error('Utilisateur non trouvé.');
            } else if (error.response && error.response.status === 400) {
                toast.error("Veuillez vérifier d'abord votre email.");
            } else {
                toast.error('Une erreur est survenue, veuillez réessayer plus tard.');
            }
        }
    };

    return (
        <div className="wrapper reset-password-page"> 
            <div className="form-box reset-password">
                <h1 className="form-title">Réinitialiser le mot de passe</h1>
                {emailSent ? (
                    <p>Veuillez vérifier votre e-mail pour réinitialiser votre mot de passe.</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="input-box">
                            <input
                                type="email"
                                placeholder="Entrez votre adresse e-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{ borderColor: emailError ? 'red' : '#ccc' }}
                                required
                            />
                            <MdEmail className="icon" />
                            {emailError && <p className="error-message">{emailError}</p>}
                        </div>
                        <button type="submit" className="submit-btn">
                            Envoyer le lien de réinitialisation
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default RequestPasswordReset;
