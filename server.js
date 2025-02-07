const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connexion à SQLite
const db = new sqlite3.Database('./users.db', (err) => {
    if (err) {
        console.error('❌ Erreur de connexion à SQLite:', err.message);
    } else {
        console.log('✅ Connecté à SQLite');

        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            role TEXT NOT NULL
        )`, (tableErr) => {
            if (tableErr) {
                console.error("❌ Erreur lors de la création de la table :", tableErr.message);
            } else {
                console.log("📌 Table 'users' vérifiée.");
            }
        });
    }
});

// 🚀 Route pour tester le serveur
app.get('/', (req, res) => {
    res.send('✅ Serveur Express.js en cours d\'exécution !');
});

// 📌 Récupérer tous les utilisateurs
app.get('/users', (req, res) => {
    console.log("📥 Requête reçue pour récupérer les utilisateurs...");
    
    db.all("SELECT * FROM users", [], (err, rows) => {
        if (err) {
            console.error("❌ Erreur SQLite :", err.message);
            return res.status(500).json({ error: err.message });
        }
        console.log("📌 Utilisateurs envoyés :", rows);
        res.json(rows);
    });
});

// ➕ Ajouter un utilisateur
app.post('/users', (req, res) => {
    const { name, email, role } = req.body;
    if (!name || !email || !role) {
        return res.status(400).json({ error: "⚠️ Tous les champs sont obligatoires." });
    }

    const query = `INSERT INTO users (name, email, role) VALUES (?, ?, ?)`;
    db.run(query, [name, email, role], function (err) {
        if (err) {
            console.error("❌ Erreur lors de l'ajout de l'utilisateur :", err.message);
            return res.status(400).json({ error: err.message });
        }
        console.log(`✅ Utilisateur ajouté avec ID ${this.lastID}`);
        res.json({ id: this.lastID, name, email, role });
    });
});

// ✏️ Modifier un utilisateur
app.put('/users/:id', (req, res) => {
    const { name, email, role } = req.body;
    const { id } = req.params;

    if (!name || !email || !role) {
        return res.status(400).json({ error: "⚠️ Tous les champs sont obligatoires pour la mise à jour." });
    }

    const query = `UPDATE users SET name = ?, email = ?, role = ? WHERE id = ?`;
    db.run(query, [name, email, role, id], function (err) {
        if (err) {
            console.error("❌ Erreur lors de la mise à jour :", err.message);
            return res.status(400).json({ error: err.message });
        }
        console.log(`✅ Utilisateur ${id} mis à jour`);
        res.json({ message: '✅ Utilisateur mis à jour avec succès' });
    });
});

// 🗑️ Supprimer un utilisateur
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;

    const query = `DELETE FROM users WHERE id = ?`;
    db.run(query, [id], function (err) {
        if (err) {
            console.error("❌ Erreur lors de la suppression :", err.message);
            return res.status(400).json({ error: err.message });
        }
        console.log(`🗑️ Utilisateur ${id} supprimé`);
        res.json({ message: '✅ Utilisateur supprimé avec succès' });
    });
});

// 🚀 Démarrer le serveur
app.listen(PORT, () => {
    console.log(`🚀 Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
