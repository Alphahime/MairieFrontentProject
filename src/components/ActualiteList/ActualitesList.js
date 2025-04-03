import React, { useEffect, useState } from "react";
import { getActualites } from "../api";
import { Link } from "react-router-dom";
import "./ActualitesList.css";


const API_URL = 'http://localhost:8000'; // À adapter selon votre configuration

const Actualite = () => {
    const [actualites, setActualites] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchActualites = async () => {
            try {
                const data = await getActualites();
                setActualites(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchActualites();
    }, []);

    if (loading) {
        return <div className="loading">Chargement en cours...</div>;
    }

    if (error) {
        return <div className="error">Erreur : {error}</div>;
    }

    return (
        <div className="bigcontainactu">
           
          
            <div className="actualite-container">
                <div className="actualite-grid">
                    {actualites.map((actualite) => (
                        <Link to={`/actualites/${actualite.id}`} key={actualite.id} className="actualite-card">
                            <div className="card-header">
                                <span className="date-publication">
                                    {new Date(actualite.date_publication).toLocaleDateString('fr-FR', {
                                        day: 'numeric',
                                        month: 'short'
                                    })}
                                </span>
                            </div>
                            {actualite.image_url && (
                                <img 
                                    src={`${API_URL}/storage/${actualite.image_url}`} 
                                    alt={actualite.titre} 
                                    className="actualite-image" 
                                    onError={(e) => {
                                        e.target.src = '/placeholder-image.jpg'; // Image de remplacement si erreur
                                    }}
                                />
                            )}
                            <h2>{actualite.titre}</h2>
                        </Link>
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default Actualite;