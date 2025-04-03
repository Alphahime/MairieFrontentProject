import React, { useState, useEffect } from 'react';
import './DemandeDocuments.css';
import { getDocuments, deleteDocument, confirmDocument } from '../../api';
import { FaTrash, FaCheck, FaSpinner } from 'react-icons/fa';

const DemandeDocuments = () => {
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalPages: 1
    });
    const [processing, setProcessing] = useState({
        delete: null,
        confirm: null
    });

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                setLoading(true);
                const response = await getDocuments(pagination.currentPage);
                setDocuments(response.data);
                setPagination(response.pagination);
            } catch (err) {
                setError(err.message);
                console.error("Erreur de récupération:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchDocuments();
    }, [pagination.currentPage]);

    const handlePageChange = (newPage) => {
        setPagination(prev => ({ ...prev, currentPage: newPage }));
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Êtes-vous sûr de vouloir supprimer ce document ?")) return;
        
        try {
            setProcessing(prev => ({ ...prev, delete: id }));
            await deleteDocument(id);
            setDocuments(prev => prev.filter(doc => doc.id !== id));
        } catch (err) {
            setError(err.message);
            console.error("Erreur de suppression:", err);
        } finally {
            setProcessing(prev => ({ ...prev, delete: null }));
        }
    };

    const handleConfirm = async (id) => {
        try {
            setProcessing(prev => ({ ...prev, confirm: id }));
            await confirmDocument(id);
            setDocuments(prev => prev.map(doc => 
                doc.id === id ? { ...doc, statut: 'confirmé' } : doc
            ));
        } catch (err) {
            setError(err.message);
            console.error("Erreur de confirmation:", err);
        } finally {
            setProcessing(prev => ({ ...prev, confirm: null }));
        }
    };

    if (loading) return <div className="loading">Chargement en cours...</div>;
    if (error) return <div className="error">Erreur: {error}</div>;

    return (
        <div className="document-container">
            <h2>Liste des Documents</h2>
            <table>
                <thead>
                    <tr>
                        <th>Type Document</th>
                        <th>Numéro Acte</th>
                        <th>Année Naissance</th>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Téléphone</th>
                        <th>Statut</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {documents.length > 0 ? (
                        documents.map((doc) => (
                            <tr key={doc.id}>
                                <td>{doc.type_document || 'Non spécifié'}</td>
                                <td>{doc.numero_de_acte}</td>
                                <td>{doc.annee_de_naissance}</td>
                                <td>{doc.nom}</td>
                                <td>{doc.prenom}</td>
                                <td>{doc.telephone}</td>
                                <td>
                                    <span className={`status-badge ${doc.statut}`}>
                                        {doc.statut}
                                    </span>
                                </td>
                                <td className="actions">
                                    <button
                                        onClick={() => handleConfirm(doc.id)}
                                        disabled={processing.confirm === doc.id || doc.statut === 'confirmé'}
                                        className={`confirm-btn ${doc.statut === 'confirmé' ? 'confirmed' : ''}`}
                                    >
                                        {processing.confirm === doc.id ? (
                                            <FaSpinner className="spinner" />
                                        ) : (
                                            <FaCheck />
                                        )}
                                        {doc.statut === 'confirmé' ? 'Confirmé' : 'Confirmer'}
                                    </button>
                                    <button
                                        onClick={() => handleDelete(doc.id)}
                                        disabled={processing.delete === doc.id}
                                        className="delete-btn"
                                    >
                                        {processing.delete === doc.id ? (
                                            <FaSpinner className="spinner" />
                                        ) : (
                                            <FaTrash />
                                        )}
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8">Aucun document disponible</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {pagination.totalPages > 1 && (
                <div className="pagination">
                    {Array.from({ length: pagination.totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => handlePageChange(i + 1)}
                            className={pagination.currentPage === i + 1 ? 'active' : ''}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DemandeDocuments;