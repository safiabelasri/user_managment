# Utilisation de l'image de base Node.js Alpine
FROM node:16

# Définition du répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers du projet dans le conteneur
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier les fichiers du projet dans le conteneur
COPY . .

# Exposer le port 5000
EXPOSE 5000

# Démarrer l'application
CMD ["node", "server.js"]
