import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getActualites } from "../api";
import "./DetailsActualite.css";
import Header from '../header/Header';
import Footer from '../footer/Footer';

const API_URL = 'http://localhost:8000'; // À adapter selon votre configuration

const DetailsActualite = () => {
    const { id } = useParams();
    const [actualite, setActualite] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchActualite = async () => {
            try {
                const data = await getActualites();
                const selectedActualite = data.find((item) => item.id === parseInt(id));
                if (selectedActualite) {
                    setActualite(selectedActualite);
                } else {
                    setError("Actualité non trouvée");
                }
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchActualite();
    }, [id]);

    if (loading) {
        return <div className="loading">Chargement en cours...</div>;
    }

    if (error) {
        return <div className="error">Erreur : {error}</div>;
    }

    return (
        <div className="bigcontaindetail">
            <Header />
            <div className="banniere">
                <h1>{actualite.titre}</h1>
            </div>
            <div className="details-actualite-container">
                {actualite.image_url && (
                    <img 
                        src={`${API_URL}/storage/${actualite.image_url}`} 
                        alt={actualite.titre} 
                        className="details-image"
                        onError={(e) => {
                            e.target.src = '/placeholder-image.jpg'; // Image de remplacement si erreur
                        }}
                    />
                )}
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