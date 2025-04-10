# 📦 User Management App

Une application fullstack pour gérer des utilisateurs, construite avec :

- ✅ React.js (Frontend)
- ✅ Express.js + SQLite (Backend)
- ✅ Docker + Docker Compose
- ✅ GitHub Actions (CI/CD)

## 🚀 Fonctionnalités

- Ajouter, modifier, supprimer des utilisateurs.
- Architecture conteneurisée.
- Base de données SQLite légère.
- CI/CD via GitHub Actions.

## ⚙️ Lancer le projet

```bash
docker-compose up --build

Documentation de l'API REST – Backend (Express.js)
L’API permet d’effectuer les opérations CRUD sur les utilisateurs via les endpoints suivants :

Méthode	Endpoint	Description	Corps attendu (JSON)	Réponse HTTP
GET	/users	Récupère tous les utilisateurs	–	200 OK
POST	/users	Ajoute un nouvel utilisateur	{ "name": "Jean", "email": "jean@example.com" }	201 Created
PUT	/users/:id	Modifie un utilisateur existant	{ "name": "Jean", "email": "jean@newmail.com" }	200 OK
DELETE	/users/:id	Supprime un utilisateur	–	200 OK
