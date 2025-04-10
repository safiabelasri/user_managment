# Étape 1 : Construction de l'application
FROM node:22 AS build

WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Étape 2 : Image finale
FROM node:22

WORKDIR /app

# Copier les fichiers construits depuis l'étape "build"
COPY --from=build /app /app

# Exposer le port de l'application
EXPOSE 5000

# Commande par défaut pour démarrer l'application
CMD ["node", "server.js"]