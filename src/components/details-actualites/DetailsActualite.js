import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Pour récupérer l'ID de l'actualité depuis l'URL
import { getActualites } from "../api"; // Importez la fonction getActualites
import "./DetailsActualite.css";
import Header from '../header/Header';
import Footer from '../footer/Footer';

const DetailsActualite = () => {
    const { id } = useParams(); // Récupérer l'ID de l'actualité depuis l'URL
    const [actualite, setActualite] = useState(null); // État pour stocker les détails de l'actualité
    const [loading, setLoading] = useState(true); // État pour gérer le chargement
    const [error, setError] = useState(null); // État pour gérer les erreurs

    // Récupérer les détails de l'actualité au chargement du composant
    useEffect(() => {
        const fetchActualite = async () => {
            try {
                const data = await getActualites(); // Récupérer toutes les actualités
                const selectedActualite = data.find((item) => item.id === parseInt(id)); // Trouver l'actualité correspondante
                if (selectedActualite) {
                    setActualite(selectedActualite); // Mettre à jour l'état avec les détails de l'actualité
                } else {
                    setError("Actualité non trouvée");
                }
                setLoading(false); // Désactiver le chargement
            } catch (error) {
                setError(error.message); // Gérer l'erreur
                setLoading(false); // Désactiver le chargement
            }
        };

        fetchActualite();
    }, [id]);

    // Afficher un message de chargement
    if (loading) {
        return <div className="loading">Chargement en cours...</div>;
    }

    // Afficher un message d'erreur
    if (error) {
        return <div className="error">Erreur : {error}</div>;
    }

    // Afficher les détails de l'actualité
    return (
        <div className="bigcontaindetail">
              <Header />

              <div className="banniere">
              <h1>{actualite.titre}</h1>
           
            </div>
        <div className="details-actualite-container">
          
            
            <img src={actualite.image_url} alt={actualite.titre} className="details-image" />
            <p className="date-publication">
                Publié le {new Date(actualite.date_publication).toLocaleDateString()} par {actualite.auteur}
            </p>
            <p className="categorie">Catégorie : {actualite.categorie}</p>
            <p className="contenu">{actualite.contenu}</p>
          
        </div>
        <Footer />
        </div>
    );
};

export default DetailsActualite;