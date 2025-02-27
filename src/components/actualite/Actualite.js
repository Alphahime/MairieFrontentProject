import React, { useEffect, useState } from "react";
import { getActualites } from "../api"; // Importez la fonction getActualites
import { Link } from "react-router-dom"; // Pour la navigation vers les détails
import "./Actualite.css";
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Actualite = () => {
    const [actualites, setActualites] = useState([]); // État pour stocker les actualités
    const [loading, setLoading] = useState(true); // État pour gérer le chargement
    const [error, setError] = useState(null); // État pour gérer les erreurs

    // Récupérer les actualités au chargement du composant
    useEffect(() => {
        const fetchActualites = async () => {
            try {
                const data = await getActualites(); // Appel de l'API
                setActualites(data); // Mettre à jour l'état avec les données
                setLoading(false); // Désactiver le chargement
            } catch (error) {
                setError(error.message); // Gérer l'erreur
                setLoading(false); // Désactiver le chargement
            }
        };

        fetchActualites();
    }, []);

    // Afficher un message de chargement
    if (loading) {
        return <div className="loading">Chargement en cours...</div>;
    }

    // Afficher un message d'erreur
    if (error) {
        return <div className="error">Erreur : {error}</div>;
    }

    return (
        <div className="bigcontainactu">
             <Header />

             <div className="banniere">
             <h1>Actualités</h1>
            </div>
        <div className="actualite-container">
           
           
            <div className="actualite-grid">
                {actualites.map((actualite) => (
                    <Link to={`/actualites/${actualite.id}`} key={actualite.id} className="actualite-card">
                        <img src={actualite.image_url} alt={actualite.titre} className="actualite-image" />
                        <h2>{actualite.titre}</h2>
                    </Link>
                ))}
            </div>
           
        </div>
        <Footer />
        </div>
    );
};

export default Actualite;