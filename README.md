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

Documentation de l'API – Backend Express.js
L’API permet d’effectuer les opérations CRUD (Create, Read, Update, Delete) sur les utilisateurs.

🔗 URL de base
arduino
Copier
Modifier
http://localhost:5000
🔍 GET /users
Description : Récupère la liste de tous les utilisateurs.
Requête : aucune
Réponse :

json
Copier
Modifier
[
  {
    "id": 1,
    "name": "Jean Dupont",
    "email": "jean@example.com"
  },
  ...
]
Code HTTP : 200 OK

➕ POST /users
Description : Crée un nouvel utilisateur.
Corps attendu :

json
Copier
Modifier
{
  "name": "Jean Dupont",
  "email": "jean@example.com"
}
Réponse :

json
Copier
Modifier
{
  "message": "Utilisateur ajouté avec succès"
}
Code HTTP : 201 Created

📝 PUT /users/:id
Description : Modifie les informations d’un utilisateur par ID.
Exemple d’URL : /users/1
Corps attendu :

json
Copier
Modifier
{
  "name": "Jean Dupont",
  "email": "jean@example.com"
}
Réponse :

json
Copier
Modifier
{
  "message": "Utilisateur mis à jour"
}
Code HTTP : 200 OK

❌ DELETE /users/:id
Description : Supprime un utilisateur par ID.
Exemple d’URL : /users/1
Réponse :

json
Copier
Modifier
{
  "message": "Utilisateur supprimé"
}
Code HTTP : 200 OK



