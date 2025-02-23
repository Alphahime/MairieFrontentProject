import React, { useState, useEffect } from "react";
import "./BoiteAIdee.css";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { submitBoiteIdee } from "../api";

const BoiteAIdee = () => {
    const [titre, setTitre] = useState("");
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");
    const [statut, setStatut] = useState("en attente");
    const [confirmationMessage, setConfirmationMessage] = useState(""); // State for the confirmation message
    const [loading, setLoading] = useState(false);

    // Fonction de soumission de l'idée
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const nouvelleIdee = await submitBoiteIdee(titre, description, email, statut);
            setConfirmationMessage("Votre idée a été envoyée avec succès!");
            setLoading(false);

            // Réinitialisation des champs du formulaire
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
        <div className="boite-idee-container">
              <Header />
              {/* Bannière sous le header */}
            <div className="banniere">
                <h1>Boîte à idées</h1>
            </div>


            {confirmationMessage && (
                <div className="confirmation-message">
                    <p>{confirmationMessage}</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="boite-idee-form">
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Titre de l'idée"
                        value={titre}
                        onChange={(e) => setTitre(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Description de l'idée"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>

                <div className="input-group">
                    <input
                        type="email"
                        placeholder="Email (facultatif)"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
       
                </div>

                <button type="submit" disabled={loading} className="bouttonidea">
                    {loading ? "Envoi en cours..." : "Soumettre"}
                </button>
            </form>
            <Footer />
        </div>
    );
};

export default BoiteAIdee;
