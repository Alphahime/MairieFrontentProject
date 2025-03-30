import React, { useState, useEffect } from 'react';
import './BoiteAIdee.css';
import { API_URL } from '../../api';
import { FaEdit, FaTrash, FaSpinner } from 'react-icons/fa';

const BoiteAIdee = () => {
    const [ideas, setIdeas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchIdeas = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(`${API_URL}/boite-a-idees`);
            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }
            const data = await response.json();
            console.log("Données reçues:", data); // Vérification des données
            setIdeas(data.data || []);
        } catch (error) {
            console.error('Erreur:', error);
            setError(error.message);
            setIdeas([]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchIdeas();
    }, []);

    return (
        <div className="boite-a-idee-container">
            <header className="boite-header">
                <h1>Boîte à Idées</h1>
            </header>

            {error && (
                <div className="error-message">
                    Erreur: {error}
                </div>
            )}

            {isLoading ? (
                <div className="loading-container">
                    <FaSpinner className="spinner" />
                    <p>Chargement en cours...</p>
                </div>
            ) : ideas.length === 0 ? (
                <div className="empty-state">
                    <p>Aucune idée disponible.</p>
                </div>
            ) : (
                <div className="table-container">
                    <table className="ideas-table">
                        <thead>
                            <tr>
                                <th>Titre</th>
                                <th>Description</th>
                                <th>Auteur</th>
                                <th>Statut</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ideas.map(idea => (
                                <tr key={idea.id}>
                                    <td>{idea.titre || 'N/A'}</td>
                                    <td>{idea.description || 'Aucune description'}</td>
                                    <td>{idea.auteur || 'Anonyme'}</td>
                                    <td>
                                        <span className={`status-badge ${idea.statut}`}>{idea.statut || 'Inconnu'}</span>
                                    </td>
                                    <td className="actions-cell">
                                        <button className="edit-button" title="Modifier">
                                            <FaEdit />
                                        </button>
                                        <button className="delete-button" title="Supprimer">
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default BoiteAIdee;
