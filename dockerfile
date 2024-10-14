# Utiliser l'image Node.js version 20 comme base
FROM node:20-alpine

# Définit le répertoire de travail dans le conteneur
WORKDIR /app

# Copie uniquement le fichier package.json et package-lock.json (si présent) pour installer les dépendances
COPY package*.json ./

# Installe les dépendances de l'application
RUN npm install

# Copie tous les fichiers de l'application dans le conteneur
COPY . .

# Configure l'environnement pour que le serveur Vite écoute sur 0.0.0.0
ENV HOST=0.0.0.0

# Expose le port 5173 utilisé par Vite en mode développement
EXPOSE 5173

# Commande pour démarrer l'application React en mode développement
CMD ["npm", "run", "dev"]
