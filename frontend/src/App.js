import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", role: "" });
  const [editingUser, setEditingUser] = useState(null);

  // Charger les utilisateurs
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Erreur chargement utilisateurs", error));
  };

  // Gérer les changements de formulaire
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Ajouter un utilisateur
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      axios
        .put(`http://localhost:5000/users/${editingUser.id}`, form)
        .then(() => {
          fetchUsers();
          setEditingUser(null);
          setForm({ name: "", email: "", role: "" });
        })
        .catch((error) => console.error("Erreur mise à jour", error));
    } else {
      axios
        .post("http://localhost:5000/users", form)
        .then(() => {
          fetchUsers();
          setForm({ name: "", email: "", role: "" });
        })
        .catch((error) => console.error("Erreur ajout", error));
    }
  };

  // Modifier un utilisateur
  const handleEdit = (user) => {
    setEditingUser(user);
    setForm(user);
  };

  // Supprimer un utilisateur
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/users/${id}`)
      .then(() => fetchUsers())
      .catch((error) => console.error("Erreur suppression", error));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">📊 Gestion des Utilisateurs</h1>

      {/* Formulaire d'ajout/modification */}
      <form onSubmit={handleSubmit} className="mb-4 p-3 border rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Nom</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Rôle</label>
          <select
            className="form-control"
            name="role"
            value={form.role}
            onChange={handleChange}
            required
          >
            <option value="">Sélectionnez un rôle</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </div>
        <button type="submit" className="btn btn-success">
          {editingUser ? "Mettre à jour" : "Ajouter"}
        </button>
        {editingUser && (
          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={() => {
              setEditingUser(null);
              setForm({ name: "", email: "", role: "" });
            }}
          >
            Annuler
          </button>
        )}
      </form>

      {/* Tableau des utilisateurs */}
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Rôle</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button className="btn btn-primary btn-sm me-2" onClick={() => handleEdit(user)}>
                    Modifier
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>
                    Supprimer
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                Aucun utilisateur trouvé.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
