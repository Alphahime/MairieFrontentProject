import React, { useState } from "react";
import "./Connexion.css";
import { loginUser } from "../../api"; 

const Connexion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);

    // Appel à l'API pour l'authentification
    const result = await loginUser(email, password); 
    if (result && result.token) {
      console.log("Connexion réussie:", result);
      // Gère la suite après une connexion réussie (stockage du token, redirection, etc.)
    } else {
      console.log("Erreur de connexion");
      // Afficher un message d'erreur ou une autre action
    }
  };

  return (
    <div className="connexion-container">
      <h2>Connexion</h2>
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
