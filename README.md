# AuthFrontAPI

ApiFront alloMedia est une application front-end construite avec Vite et React, permettant aux utilisateurs de s'inscrire, de se connecter et d'interagir avec une API pour gérer les données utilisateur. Ce projet vise à offrir une interface utilisateur simple et efficace pour l'authentification et la gestion des utilisateurs.

## Table des matières

- [Fonctionnalités](#fonctionnalités)
- [Technologies Utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Contribuer](#contribuer)
- [Auteurs](#auteurs)
- [License](#license)

## Fonctionnalités

- **Inscription des utilisateurs** : Permet aux utilisateurs de créer un compte en fournissant un nom d'utilisateur, une adresse e-mail, un mot de passe et un numéro de téléphone.
- **Connexion des utilisateurs** : Permet aux utilisateurs de se connecter avec leur nom d'utilisateur et mot de passe.
- **Validation des formulaires** : Assure que les données saisies par l'utilisateur sont valides avant de les soumettre à l'API.
- **Validation des e-mails** : Vérifie la validité des adresses e-mail fournies lors de l'inscription ou de la réinitialisation de mot de passe.
- **Validation OTP** : Envoie un code OTP aux utilisateurs pour valider certaines actions (par exemple, lors de la réinitialisation de mot de passe).
- **Réinitialisation du mot de passe** : Permet aux utilisateurs de demander une réinitialisation de leur mot de passe via un e-mail et de le modifier après validation du code OTP.
- **Notifications** : Affiche des messages de succès ou d'erreur grâce à `react-toastify`.

## Technologies Utilisées

- **Vite** : Un outil de construction rapide pour les projets modernes de développement web.
- **React** : Bibliothèque JavaScript pour construire des interfaces utilisateur.
- **Axios** : Bibliothèque pour effectuer des requêtes HTTP.
- **React Router** : Pour la gestion de la navigation entre les différentes pages de l'application.
- **React Toastify** : Pour afficher des notifications dans l'application.
- **CSS** : Pour le style et la mise en page de l'application.

## Installation

### Prérequis

Assurez-vous d'avoir [Node.js](https://nodejs.org/) et [npm](https://www.npmjs.com/) installés sur votre machine.

### Étapes d'installation

1. **Clonez le dépôt** :

   ```bash
   git clone https://github.com/votre-utilisateur/ApiFront-alloMedia.git
