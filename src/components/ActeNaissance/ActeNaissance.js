import React, { useState } from "react";
import "./ActeNaissance.css";
import { API_URL } from "../api";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
const ActeNaissance = () => {
    // États pour gérer les champs du formulaire
    const [formData, setFormData] = useState({
        numero_de_acte: "",
        annee_de_naissance: "",
        nom: "",
        prenom: "",
        telephone: "",
        type_document: "acte_naissance" // Valeur par défaut
    });

    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState({ text: "", type: "" });

    // Options pour le type de document
    const documentTypes = [
        { value: "acte_naissance", label: "Acte de naissance" },
        { value: "acte_mariage", label: "Acte de mariage" },
        { value: "acte_deces", label: "Acte de décès" },
        { value: "bulletin_naissance", label: "Bulletin de naissance" },
        { value: "bulletin_deces", label: "Bulletin de décès" },
        { value: "certificat_mariage", label: "Certificat de mariage" },
        { value: "certificat_divorce", label: "Certificat de divorce" },
        { value: "jugement_divorce", label: "Jugement de divorce" },
        { value: "livret_famille", label: "Livret de famille" },
        { value: "copie_integrale", label: "Copie intégrale" },
        { value: "autre", label: "Autre document" }
    ];

    // Validation des champs
    const validateField = (name, value) => {
        let error = "";
        
        switch (name) {
            case "numero_de_acte":
                if (!value.trim()) error = "Le numéro d'acte est requis";
                break;
            case "annee_de_naissance":
                if (!value) error = "L'année de naissance est requise";
                else if (parseInt(value) < 1900 || parseInt(value) > new Date().getFullYear()) {
                    error = `L'année doit être entre 1900 et ${new Date().getFullYear()}`;
                }
                break;
            case "nom":
                if (!value.trim()) error = "Le nom est requis";
                else if (value.length < 2) error = "Le nom doit contenir au moins 2 caractères";
                break;
            case "prenom":
                if (!value.trim()) error = "Le prénom est requis";
                else if (value.length < 2) error = "Le prénom doit contenir au moins 2 caractères";
                break;
            case "telephone":
                if (!value.trim()) error = "Le téléphone est requis";
                else if (!/^(?:(?:\+|00)221|0)?[67]\d{8}$/.test(value)) {
                    error = "Format de téléphone invalide (ex: 771234567)";
                }
                break;
            case "type_document":
                if (!value.trim()) error = "Le type de document est requis";
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

        // Valider chaque champ
        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key]);
            newErrors[key] = error;
            if (error) isValid = false;
        });

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            setMessage({ text: "Veuillez corriger les erreurs dans le formulaire", type: "error" });
            return;
        }

        try {
            // Envoyer les données à l'API
            const response = await fetch(`${API_URL}/documents`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                setMessage({ 
                    text: "Demande de document envoyée avec succès !", 
                    type: "success" 
                });
                // Réinitialiser le formulaire
                setFormData({
                    numero_de_acte: "",
                    annee_de_naissance: "",
                    nom: "",
                    prenom: "",
                    telephone: "",
                    type_document: "acte_naissance"
                });
            } else {
                const errorData = await response.json();
                setMessage({ 
                    text: `Erreur : ${errorData.message || "Une erreur s'est produite."}`, 
                    type: "error" 
                });
            }
        } catch (error) {
            console.error("Erreur lors de l'envoi des données :", error);
            setMessage({ 
                text: "Une erreur s'est produite lors de l'envoi des données.", 
                type: "error" 
            });
        }
    };

    return (
        <div className="bigcontainacte">
            <Header />
            <div className="banniere">
                <h2>Formulaire de demande de document</h2>
                <p>Recevez vos documents administratifs en moins de 24h !</p>
            </div>
            <div className="acte-naissance-container">
                {message.text && (
                    <div className={`message ${message.type}`}>
                        {message.text}
                    </div>
                )}
                
                <form onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                        <label htmlFor="type_document">Type de document *</label>
                        <select
                            id="type_document"
                            name="type_document"
                            value={formData.type_document}
                            onChange={handleChange}
                            className={errors.type_document ? "invalid" : ""}
                        >
                            {documentTypes.map((type) => (
                                <option key={type.value} value={type.value}>
                                    {type.label}
                                </option>
                            ))}
                        </select>
                        {errors.type_document && (
                            <span className="error-message">{errors.type_document}</span>
                        )}
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="nom">Nom *</label>
                            <input
                                type="text"
                                id="nom"
                                name="nom"
                                value={formData.nom}
                                onChange={handleChange}
                                className={errors.nom ? "invalid" : ""}
                            />
                            {errors.nom && <span className="error-message">{errors.nom}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="prenom">Prénom *</label>
                            <input
                                type="text"
                                id="prenom"
                                name="prenom"
                                value={formData.prenom}
                                onChange={handleChange}
                                className={errors.prenom ? "invalid" : ""}
                            />
                            {errors.prenom && <span className="error-message">{errors.prenom}</span>}
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="telephone">Téléphone *</label>
                        <input
                            type="tel"
                            id="telephone"
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                            placeholder="Ex: 771234567"
                            className={errors.telephone ? "invalid" : ""}
                        />
                        {errors.telephone && <span className="error-message">{errors.telephone}</span>}
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="numero_de_acte">Numéro d'acte *</label>
                            <input
                                type="text"
                                id="numero_de_acte"
                                name="numero_de_acte"
                                value={formData.numero_de_acte}
                                onChange={handleChange}
                                className={errors.numero_de_acte ? "invalid" : ""}
                            />
                            {errors.numero_de_acte && <span className="error-message">{errors.numero_de_acte}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="annee_de_naissance">Année de naissance *</label>
                            <input
                                type="number"
                                id="annee_de_naissance"
                                name="annee_de_naissance"
                                value={formData.annee_de_naissance}
                                onChange={handleChange}
                                min="1900"
                                max={new Date().getFullYear()}
                                className={errors.annee_de_naissance ? "invalid" : ""}
                            />
                            {errors.annee_de_naissance && <span className="error-message">{errors.annee_de_naissance}</span>}
                        </div>
                    </div>

                    <button type="submit" className="submit-button">
                        Envoyer la demande
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default ActeNaissance;