import React, { useState } from "react";
import "./Connexion.css";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api"; // Importez la fonction d'API

const Connexion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Utilisez la fonction importée de api.js
      const data = await loginUser(email, password);

      // Stocke le token et les données utilisateur
      login(data.token, {
        email: data.user.email,
        role: data.user.role,
        name: data.user.name
      });

      // Redirection basée sur le rôle
      switch(data.user.role) {
        case 'super_admin':
          navigate('/admin');
          break;
        case 'responsable_actualites':
          navigate('/admin/actualites');
          break;
        case 'responsable_rendezvous':
          navigate('/admin/gestion-rendez-vous');
          break;
        case 'responsable_documents':
          navigate('/admin/demande-documents');
          break;
        case 'responsable_idees':
          navigate('/admin/boite-a-idee');
          break;
        case 'responsable_projets':
          navigate('/admin/projets');
          break;
        default:
          navigate('/');
      }

    } catch (err) {
      setError(err.message || "Email ou mot de passe incorrect");
      console.error("Erreur de connexion:", err);
    }
  };

  return (
    <div className="connexion-container">
      <h2>Connexion</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Mot de passe" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit" className="bouttonauth">Se connecter</button>
      </form>
    </div>
  );
};

export default Connexion;