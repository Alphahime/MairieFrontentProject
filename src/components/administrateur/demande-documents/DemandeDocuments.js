import React, { useState, useEffect } from 'react';
import './DemandeDocuments.css';
import { API_URL } from '../../api'; // Import de l'URL de l'API
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa'; // Import des icônes

const DemandeDocuments = () => {
    const [documents, setDocuments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [formData, setFormData] = useState({
        id: null,
        numero_de_acte: '',
        annee_de_naissance: ''
    });
    const [isEditMode, setIsEditMode] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Fetch documents with pagination
    const fetchDocuments = async (page = 1) => {
        setIsLoading(true);
        try {
            const response = await fetch(`${API_URL}/documents?page=${page}`);
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des documents');
            }
            const data = await response.json();
            if (data && data.data) {
                setDocuments(data.data);
                setTotalPages(data.last_page);
                setCurrentPage(data.current_page);
            } else {
                setDocuments([]); // Assurez-vous que `documents` est un tableau vide si `data.data` est undefined
            }
        } catch (error) {
            console.error('Error fetching documents:', error);
            setDocuments([]); // Assurez-vous que `documents` est un tableau vide en cas d'erreur
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchDocuments();
    }, []);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Open popup for adding or editing a document
    const openPopup = (document = null) => {
        if (document) {
            setFormData({ ...document });
            setIsEditMode(true);
        } else {
            setFormData({
                id: null,
                numero_de_acte: '',
                annee_de_naissance: ''
            });
            setIsEditMode(false);
        }
        setIsPopupOpen(true);
    };

    // Close popup
    const closePopup = () => {
        setIsPopupOpen(false);
    };

    // Submit form (add or edit)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = isEditMode ? `${API_URL}/documents/${formData.id}` : `${API_URL}/documents`;
        const method = isEditMode ? 'PUT' : 'POST';

        try {
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                fetchDocuments(currentPage);
                closePopup();
            }
        } catch (error) {
            console.error('Error submitting document:', error);
        }
    };

    // Delete a document
    const handleDelete = async (id) => {
        try {
            await fetch(`${API_URL}/documents/${id}`, { method: 'DELETE' });
            fetchDocuments(currentPage);
        } catch (error) {
            console.error('Error deleting document:', error);
        }
    };

    return (
        <div className="demande-documents">
            <h1>Demande de Documents</h1>
            <button className="add-button" onClick={() => openPopup()}>
                <FaPlus /> Ajouter un document
            </button>

            {/* Tableau des documents */}
            <table>
                <thead>
                    <tr>
                        <th>Numéro de l'acte</th>
                        <th>Année de naissance</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading ? (
                        <tr>
                            <td colSpan="3" style={{ textAlign: 'center' }}>Chargement en cours...</td>
                        </tr>
                    ) : documents && documents.length > 0 ? (
                        documents.map(document => (
                            <tr key={document.id}>
                                <td>{document.numero_de_acte}</td>
                                <td>{document.annee_de_naissance}</td>
                                <td>
                                    <button onClick={() => openPopup(document)}><FaEdit /></button>
                                    <button onClick={() => handleDelete(document.id)}><FaTrash /></button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" style={{ textAlign: 'center' }}>Aucun document trouvé.</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => fetchDocuments(i + 1)}
                        className={currentPage === i + 1 ? 'active' : ''}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>

            {/* Popup formulaire */}
            {isPopupOpen && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>{isEditMode ? 'Modifier un document' : 'Ajouter un document'}</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="numero_de_acte"
                                placeholder="Numéro de l'acte"
                                value={formData.numero_de_acte}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="number"
                                name="annee_de_naissance"
                                placeholder="Année de naissance"
                                value={formData.annee_de_naissance}
                                onChange={handleInputChange}
                                required
                            />
                            <button type="submit">{isEditMode ? 'Modifier' : 'Ajouter'}</button>
                            <button type="button" onClick={closePopup}>Annuler</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DemandeDocuments;