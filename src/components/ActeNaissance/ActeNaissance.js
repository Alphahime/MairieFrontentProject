import React, { useState } from "react";
import "./ActeNaissance.css";
import { API_URL } from "../api";
import Header from '../header/Header';
import Footer from '../footer/Footer';
const ActeNaissance = () => {
    // États pour gérer les champs du formulaire
    const [numeroDeActe, setNumeroDeActe] = useState("");
    const [anneeDeNaissance, setAnneeDeNaissance] = useState("");
    const [message, setMessage] = useState("");

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Vérifier que les champs ne sont pas vides
        if (!numeroDeActe || !anneeDeNaissance) {
            setMessage("Veuillez remplir tous les champs.");
            return;
        }

        try {
            // Envoyer les données à l'API
            const response = await fetch(`${API_URL}/documents`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    numero_de_acte: numeroDeActe,
                    annee_de_naissance: anneeDeNaissance,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                setMessage("Document ajouté avec succès !");
                setNumeroDeActe(""); // Réinitialiser le champ
                setAnneeDeNaissance(""); // Réinitialiser le champ
            } else {
                const errorData = await response.json();
                setMessage(`Erreur : ${errorData.message || "Une erreur s'est produite."}`);
            }
        } catch (error) {
            console.error("Erreur lors de l'envoi des données :", error);
            setMessage("Une erreur s'est produite lors de l'envoi des données.");
        }
    };

    return (

      <div className="bigcontainacte">
          <Header />

          <div className="banniere">
          <h2>Formulaire de demande</h2>
                <p>Recevez vos documents administratif en moins de 24h !</p>
            </div>
        <div className="acte-naissance-container">
         
           
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="numeroDeActe">Numéro de l'acte :</label>
                    <input
                        type="text"
                        id="numeroDeActe"
                        value={numeroDeActe}
                        onChange={(e) => setNumeroDeActe(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="anneeDeNaissance">Année de naissance :</label>
                    <input
                        type="number"
                        id="anneeDeNaissance"
                        value={anneeDeNaissance}
                        onChange={(e) => setAnneeDeNaissance(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">
                    Ajouter
                </button>
            </form>
            {message && <p className="message">{message}</p>}
          
        </div>
        <Footer />
        </div>
    );
};

export default ActeNaissance;