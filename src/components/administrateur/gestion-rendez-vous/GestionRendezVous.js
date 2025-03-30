import React, { useState, useEffect } from 'react';
import { getRendezVous, updateRendezVous , deleteRendezVous } from '../../api';
import './GestionRendezVous.css';

const GestionRendezVous = () => {
  const [rendezVous, setRendezVous] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('tous'); // 'tous', 'confirmes', 'en_attente', 'annules'
  const handleDelete = async (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce rendez-vous ?")) {
      try {
        await deleteRendezVous(id);
        setRendezVous(rendezVous.filter(rdv => rdv.id !== id));
      } catch (error) {
        console.error("Erreur lors de la suppression:", error);
      }
    }
  };
  useEffect(() => {
    const fetchRendezVous = async () => {
      try {
        const data = await getRendezVous();
        setRendezVous(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRendezVous();
  }, []);

  const handleStatutChange = async (id, nouveauStatut) => {
    try {
      await updateRendezVous(id, { statut: nouveauStatut });
      setRendezVous(rendezVous.map(rdv => 
        rdv.id === id ? { ...rdv, statut: nouveauStatut } : rdv
      ));
    } catch (error) {
      console.error("Erreur lors de la mise à jour:", error);
    }
  };

  const filteredRendezVous = rendezVous.filter(rdv => {
    if (filter === 'tous') return true;
    return rdv.statut === filter;
  });

  if (loading) return <div className="loading">Chargement en cours...</div>;
  if (error) return <div className="error">Erreur: {error}</div>;

  return (
    <div className="gestion-rendez-vous-container">
      <h1>Gestion des Rendez-vous</h1>
      
      <div className="filters">
        <button 
          onClick={() => setFilter('tous')}
          className={filter === 'tous' ? 'active' : ''}
        >
          Tous
        </button>
        <button 
          onClick={() => setFilter('confirmé')}
          className={filter === 'confirmé' ? 'active' : ''}
        >
          Confirmés
        </button>
        <button 
          onClick={() => setFilter('en_attente')}
          className={filter === 'en_attente' ? 'active' : ''}
        >
          En attente
        </button>
        <button 
          onClick={() => setFilter('annulé')}
          className={filter === 'annulé' ? 'active' : ''}
        >
          Annulés
        </button>
      </div>

      <div className="table-responsive">
        <table className="rendez-vous-table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Email</th>
              <th>Téléphone</th>
              <th>Service</th>
              <th>Date</th>
              <th>Motif</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRendezVous.map(rdv => (
              <tr key={rdv.id} className={`statut-${rdv.statut}`}>
                <td>{rdv.nom_utilisateur}</td>
                <td>{rdv.email}</td>
                <td>{rdv.telephone || '-'}</td>
                <td>{rdv.service}</td>
                <td>{new Date(rdv.date_rendez_vous).toLocaleDateString()}</td>
                <td>{rdv.motif}</td>
                <td>
                  <span className={`badge statut-${rdv.statut}`}>
                    {rdv.statut}
                  </span>
                </td>
                <td className="actions">
                  {rdv.statut === 'en_attente' && (
                    <>
                      <button 
                        onClick={() => handleStatutChange(rdv.id, 'confirmé')}
                        className="btn-accepter"
                      >
                        Accepter
                      </button>
                      <button 
                        onClick={() => handleStatutChange(rdv.id, 'annulé')}
                        className="btn-refuser"
                      >
                        Refuser
                      </button>
                    </>
                  )}
                  {rdv.statut !== 'en_attente' && (
                    <button 
                      onClick={() => handleStatutChange(rdv.id, 'en_attente')}
                      className="btn-reset"
                    >
                      Réinitialiser
                    </button>
                  )}

<button
  onClick={() => handleDelete(rdv.id)}
  className="btn-supprimer"
  title="Supprimer"
>
  <i className="fas fa-trash-alt"></i>
</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GestionRendezVous;