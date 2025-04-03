import React, { useState, useEffect } from "react";
import './Rendezvous.css';
import { createRendezVous } from "../api";
import Header from '../header/Header';
import Footer from '../footer/Footer';

const RendezVous = () => {
    const [formData, setFormData] = useState({
        nom_utilisateur: "",
        email: "",
        telephone: "",
        service: "Consultation",
        date_rendez_vous: new Date().toISOString().slice(0, 16),
        motif: "",
        statut: "en_attente",
    });

    const [errors, setErrors] = useState({
        nom_utilisateur: "",
        email: "",
        telephone: "",
        motif: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);

    // Effet pour masquer automatiquement le message de succès après 5 secondes
    useEffect(() => {
        if (showSuccess) {
            const timer = setTimeout(() => {
                setShowSuccess(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [showSuccess]);

    const validateField = (name, value) => {
        let error = "";
        
        switch (name) {
            case "nom_utilisateur":
                if (!value.trim()) error = "Le nom est requis";
                else if (value.length < 2) error = "Le nom doit contenir au moins 2 caractères";
                break;
            case "email":
                if (!value) error = "L'email est requis";
                else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    error = "Veuillez entrer un email valide";
                }
                break;
            case "telephone":
                if (value && !/^[0-9+\s]{8,20}$/.test(value)) {
                    error = "Numéro de téléphone invalide";
                }
                break;
            case "motif":
                if (!value.trim()) error = "Le motif est requis";
                else if (value.length < 10) error = "Le motif doit contenir au moins 10 caractères";
                break;
            default:
                break;
        }
        
        return error;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        const error = validateField(name, value);
        setErrors({
            ...errors,
            [name]: error
        });

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        let isValid = true;

        Object.keys(formData).forEach(key => {
            if (key !== "service" && key !== "date_rendez_vous" && key !== "statut") {
                const error = validateField(key, formData[key]);
                newErrors[key] = error;
                if (error) isValid = false;
            }
        });

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!validateForm()) {
            setIsSubmitting(false);
            return;
        }

        try {
            await createRendezVous({
                ...formData,
                service: "Consultation",
                date_rendez_vous: formData.date_rendez_vous.replace("T", " ") + ":00"
            });
            
            setSuccessMessage("Votre rendez-vous a été enregistré avec succès !");
            setShowSuccess(true);
            
            setFormData({
                nom_utilisateur: "",
                email: "",
                telephone: "",
                service: "Consultation",
                date_rendez_vous: new Date().toISOString().slice(0, 16),
                motif: "",
                statut: "en_attente",
            });
            setErrors({
                nom_utilisateur: "",
                email: "",
                telephone: "",
                motif: ""
            });
        } catch (error) {
            console.error("Erreur :", error);
            setSuccessMessage("Une erreur est survenue lors de l'envoi du formulaire.");
            setShowSuccess(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bigcontainrv">
            <Header />
            <div className="banniere">
                <h1>Prendre un rendez-vous</h1>
            </div>
            <div className="rendez-vous-container">
                {showSuccess && (
                    <div className={`success-message ${showSuccess ? 'visible' : ''}`}>
                        {successMessage}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="rendez-vous-form" noValidate>
                    {/* Le reste du formulaire reste inchangé */}
                    <div className="form-row">
                        <div className="form-group">
                            <label>Nom :</label>
                            <input
                                type="text"
                                name="nom_utilisateur"
                                value={formData.nom_utilisateur}
                                onChange={handleChange}
                                required
                                className={errors.nom_utilisateur ? "invalid" : ""}
                            />
                            {errors.nom_utilisateur && (
                                <span className="error-message">{errors.nom_utilisateur}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label>Email :</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className={errors.email ? "invalid" : ""}
                            />
                            {errors.email && (
                                <span className="error-message">{errors.email}</span>
                            )}
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
                                className={errors.telephone ? "invalid" : ""}
                            />
                            {errors.telephone && (
                                <span className="error-message">{errors.telephone}</span>
                            )}
                        </div>
                        <input type="hidden" name="service" value={formData.service} />
                    </div>

                    <div className="form-row">
                        <input type="hidden" name="date_rendez_vous" value={formData.date_rendez_vous} />
                        <div className="form-group full-width">
                            <label>Motif :</label>
                            <textarea
                                name="motif"
                                value={formData.motif}
                                onChange={handleChange}
                                required
                                className={errors.motif ? "invalid" : ""}
                            />
                            {errors.motif && (
                                <span className="error-message">{errors.motif}</span>
                            )}
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        className="submit-button"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Envoi en cours..." : "Soumettre"}
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default RendezVous;