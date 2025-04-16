import React, { useState, useEffect } from "react";
import "./BoiteAIdee.css";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { submitBoiteIdee } from "../api";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
const BoiteAIdee = () => {
    const [formData, setFormData] = useState({
        titre: "",
        description: "",
        email: "",
        statut: "en attente"
    });

    const [errors, setErrors] = useState({
        titre: "",
        description: "",
        email: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);

    // Masquer automatiquement le message après 5 secondes
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
            case "titre":
                if (!value.trim()) error = "Le titre est requis";
                else if (value.length < 5) error = "Le titre doit contenir au moins 5 caractères";
                break;
            case "description":
                if (!value.trim()) error = "La description est requise";
                else if (value.length < 20) error = "La description doit contenir au moins 20 caractères";
                break;
            case "email":
                if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    error = "Veuillez entrer un email valide";
                }
                break;
            default:
                break;
        }
        
        return error;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        // Validation en temps réel
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

        // Valider chaque champ requis
        ['titre', 'description'].forEach(key => {
            const error = validateField(key, formData[key]);
            newErrors[key] = error;
            if (error) isValid = false;
        });

        // Valider email si rempli
        if (formData.email) {
            const emailError = validateField('email', formData.email);
            newErrors.email = emailError;
            if (emailError) isValid = false;
        }

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
            await submitBoiteIdee(
                formData.titre, 
                formData.description, 
                formData.email, 
                formData.statut
            );
            
            setSuccessMessage("Votre idée a été envoyée avec succès ! Merci pour votre contribution.");
            setShowSuccess(true);
            
            // Réinitialisation du formulaire
            setFormData({
                titre: "",
                description: "",
                email: "",
                statut: "en attente"
            });
            setErrors({
                titre: "",
                description: "",
                email: ""
            });
        } catch (error) {
            console.error("Erreur lors de l'envoi:", error);
            setSuccessMessage("Une erreur est survenue lors de l'envoi de votre idée. Veuillez réessayer.");
            setShowSuccess(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bigcontent">
            <Header />
               <div className="mobile-back-container">
                        <Link 
                          to="/" 
                          className="mobile-back-button"
                          aria-label="Retour au conseil municipal"
                        >
                          <FaArrowLeft aria-hidden="true" />
                          <span>Retour</span>
                        </Link>
                      </div>
            <div className="boite-idee-container">
                <div className="banniere">
                    <h1>Boîte à idées</h1>
                    <p>Partagez vos idées pour améliorer notre service !</p>
                </div>

                {showSuccess && (
                    <div className={`success-message ${showSuccess ? 'visible' : ''}`}>
                        {successMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="boite-idee-form" noValidate>
                    <div className="form-group">
                        <label htmlFor="titre">Titre de l'idée *</label>
                        <input
                            type="text"
                            id="titre"
                            name="titre"
                            placeholder="Ex: Nouvelle fonctionnalité"
                            value={formData.titre}
                            onChange={handleChange}
                            className={errors.titre ? "invalid" : ""}
                            required
                        />
                        {errors.titre && (
                            <span className="error-message">{errors.titre}</span>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description de l'idée *</label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Décrivez votre idée en détails..."
                            value={formData.description}
                            onChange={handleChange}
                            className={errors.description ? "invalid" : ""}
                            required
                        ></textarea>
                        {errors.description && (
                            <span className="error-message">{errors.description}</span>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email (facultatif)</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Ex: votremail@exemple.com"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? "invalid" : ""}
                        />
                        {errors.email && (
                            <span className="error-message">{errors.email}</span>
                        )}
                    </div>

                    <button 
                        type="submit" 
                        className="submit-button"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Envoi en cours..." : "Soumettre mon idée"}
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default BoiteAIdee;