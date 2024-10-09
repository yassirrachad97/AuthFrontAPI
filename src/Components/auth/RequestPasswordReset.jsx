import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const RequestPasswordReset = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:3000/api/auth/request-password-reset', { email });
            toast.success('Le lien de réinitialisation a été envoyé à votre adresse e-mail.');
        } catch (error) {
            if (error.response && error.response.data) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Une erreur est survenue.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Réinitialiser le mot de passe</h2>
            <input
                type="email"
                placeholder="Entrez votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type="submit" disabled={loading}>
                {loading ? 'Chargement...' : 'Envoyer'}
            </button>
        </form>
    );
};

export default RequestPasswordReset;
