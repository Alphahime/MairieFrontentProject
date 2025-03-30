import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getActualites } from '../api';
import './ActualitesList.css';

const ActualitesList = () => {
  const [actualites, setActualites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActualites = async () => {
      try {
        const data = await getActualites();
        setActualites(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchActualites();
  }, []);

  if (loading) return <div className="loading">Chargement en cours...</div>;
  if (error) return <div className="error">Erreur: {error}</div>;

  return (
    <section id="actualites" className="actualites-section">
      <div className="title-container">
        <h2>Actualités et Annonces</h2>
        <div className="title-decoration">
          <span>
            <span></span>
            <span></span>
          </span>
        </div>
      </div>
      <div className="actualites-container">
        {actualites.map((actualite) => (
          <div className="card" key={actualite.id}>
            {actualite.image_url && (
              <img
                src={`http://localhost:8000/storage/${actualite.image_url}`}
                alt={actualite.titre}
                className="card-image"
                onError={(e) => {
                  e.target.src = '/placeholder-image.jpg';
                }}
              />
            )}
            <div className="card-content-wrapper">
              <div className="card-status" style={{
                backgroundColor: actualite.statut === 'À la une' ? '#ffcc00' : '#4CAF50',
                color: actualite.statut === 'À la une' ? '#000' : '#fff',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: 'bold',
                marginBottom: '8px',
                display: 'inline-block'
              }}>
                {actualite.statut}
              </div>
              <h3 className="card-title">{actualite.titre}</h3>
              <p className="card-content">
                {actualite.contenu.length > 100 
                  ? `${actualite.contenu.substring(0, 100)}...` 
                  : actualite.contenu}
              </p>
              <Link to={`/actualites/${actualite.id}`} className="card-link">
                <span>Découvrir</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActualitesList;