import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Supprimer le token du localStorage
    localStorage.removeItem('token');
    
    // Rediriger l'utilisateur vers la page de connexion
    navigate('/login');
  };

  return (
    
    <div>
      <h1>Bienvenue sur la page Accueil !</h1>
      <button onClick={handleLogout}>Se déconnecter</button>
    </div>
  );
};

export default Home;
