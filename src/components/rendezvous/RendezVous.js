import React, { useState } from "react";
import './Rendezvous.css';
import { createRendezVous } from "../api";
import Header from '../header/Header';
import Footer from '../footer/Footer';
const RendezVous = () => {
    const [formData, setFormData] = useState({
        nom_utilisateur: "",
        email: "",
        telephone: "",
        service: "",
        date_rendez_vous: "",
        motif: "",
        statut: "En attente",
    });

    // Gérer les changements dans le formulaire
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Soumettre le formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Convertir la date pour respecter le format attendu par Laravel
    const formattedDate = formData.date_rendez_vous
    ? formData.date_rendez_vous.replace("T", " ") + ":00"
    : "";


        try {
            await createRendezVous(formData);
            alert("Rendez-vous ajouté avec succès !");
            setFormData({
                nom_utilisateur: "",
                email: "",
                telephone: "",
                service: "",
                date_rendez_vous: "",
                motif: "",
                statut: "En attente",
            });
        } catch (error) {
            console.error("Erreur :", error);
            alert("Erreur lors de l'ajout du rendez-vous.");
        }
    };

    return (

      <div className="bigcontainrv">
         <Header />

         <div className="banniere">
         <h1>Prendre un rendez-vous</h1>
           
          </div>
        <div className="rendez-vous-container">
         
           

            {/* Formulaire d'ajout de rendez-vous */}
            <form onSubmit={handleSubmit} className="rendez-vous-form">
                <div className="form-row">
                    <div className="form-group">
                        <label>Nom :</label>
                        <input
                            type="text"
                            name="nom_utilisateur"
                            value={formData.nom_utilisateur}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email :</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Téléphone :</label>
                        <input
                            type="text"
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Service :</label>
                        <input
                            type="text"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Date et heure :</label>
                        <input
                            type="datetime-local"
                            name="date_rendez_vous"
                            value={formData.date_rendez_vous}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Motif :</label>
                        <textarea
                            name="motif"
                            value={formData.motif}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <button type="submit" className="submit-button">
                    Soumettre
                </button>
            </form>
           
        </div>
        <Footer />
        </div>
    );
};

export default RendezVous;