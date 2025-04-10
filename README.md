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

Documentation de l'API :
Méthode	Endpoint	Description	Corps attendu (JSON)	Réponse HTTP
GET	/users	Récupère tous les utilisateurs	–	200 OK
POST	/users	Ajoute un nouvel utilisateur	{id: 4,name: 'Safia Belasri',email: 'admin@gmail.com',rôle: 'Admin'},	201 Created
PUT	/users/:id	Modifie un utilisateur existant	{id: 4,name: 'Safia Belasri',email: 'admin@gmail.com',rôle: 'Admin'},	200 OK
DELETE	/users/:id	Supprime un utilisateur		200 OK

