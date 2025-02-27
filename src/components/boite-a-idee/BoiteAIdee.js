import React, { useState } from "react";
import "./BoiteAIdee.css";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { submitBoiteIdee } from "../api";

const BoiteAIdee = () => {
    const [titre, setTitre] = useState("");
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");
    const [statut, setStatut] = useState("en attente");
    const [confirmationMessage, setConfirmationMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            await submitBoiteIdee(titre, description, email, statut);
            setConfirmationMessage("Votre idée a été envoyée avec succès!");
            setLoading(false);

            // Réinitialisation des champs
            setTitre("");
            setDescription("");
            setEmail("");
            setStatut("en attente");
        } catch (error) {
            console.error("Error submitting idea:", error);
            setLoading(false);
            setConfirmationMessage("Une erreur est survenue lors de l'envoi de l'idée.");
        }
    };

    return (
        <div className="bigcontent">
              <Header />
        <div className="boite-idee-container">
          
            <div className="banniere">
                <h1>Boîte à idées</h1>
                <p>Partagez vos idées pour améliorer notre service !</p>
            </div>

            {confirmationMessage && (
                <div className="confirmation-message">
                    <p>{confirmationMessage}</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="boite-idee-form">
                <div className="form-group">
                    <label htmlFor="titre">Titre de l'idée</label>
                    <input
                        type="text"
                        id="titre"
                        placeholder="Ex: Nouvelle fonctionnalité"
                        value={titre}
                        onChange={(e) => setTitre(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description de l'idée</label>
                    <textarea
                        id="description"
                        placeholder="Décrivez votre idée en quelques mots..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email (facultatif)</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Ex: votremail@exemple.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <button type="submit" disabled={loading} className="submit-button">
                    {loading ? "Envoi en cours..." : "Soumettre"}
                </button>
            </form>
         
        </div>
        <Footer />
        </div>
    );
};

export default BoiteAIdee;