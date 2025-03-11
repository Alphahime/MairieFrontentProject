import React, { useState, useEffect } from 'react';
import './BoiteAIdee.css';
import { API_URL } from '../../api'; // Import de l'URL de l'API
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa'; // Import des icônes

const BoiteAIdee = () => {
    const [ideas, setIdeas] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [formData, setFormData] = useState({
        id: null,
        titre: '',
        description: '',
        image: null,
        auteur: 'Anonymous',
        statut: 'pending'
    });
    const [isEditMode, setIsEditMode] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Fetch ideas with pagination
    const fetchIdeas = async (page = 1) => {
        setIsLoading(true);
        try {
            const response = await fetch(`${API_URL}/boite-a-idees?page=${page}`);
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des idées');
            }
            const data = await response.json();
            if (data && data.data) {
                setIdeas(data.data);
                setTotalPages(data.last_page);
                setCurrentPage(data.current_page);
            } else {
                setIdeas([]); // Assurez-vous que `ideas` est un tableau vide si `data.data` est undefined
            }
        } catch (error) {
            console.error('Error fetching ideas:', error);
            setIdeas([]); // Assurez-vous que `ideas` est un tableau vide en cas d'erreur
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchIdeas();
    }, []);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle image upload
    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    // Open popup for adding or editing an idea
    const openPopup = (idea = null) => {
        if (idea) {
            setFormData({ ...idea, image: null });
            setIsEditMode(true);
        } else {
            setFormData({
                id: null,
                titre: '',
                description: '',
                image: null,
                auteur: 'Anonymous',
                statut: 'pending'
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
        const url = isEditMode ? `${API_URL}/boite-a-idees/${formData.id}` : `${API_URL}/boite-a-idees`;
        const method = isEditMode ? 'PUT' : 'POST';

        const data = new FormData();
        data.append('titre', formData.titre);
        data.append('description', formData.description);
        data.append('auteur', formData.auteur);
        data.append('statut', formData.statut);
        if (formData.image) {
            data.append('image', formData.image);
        }

        try {
            const response = await fetch(url, {
                method,
                body: data,
            });
            if (response.ok) {
                fetchIdeas(currentPage);
                closePopup();
            }
        } catch (error) {
            console.error('Error submitting idea:', error);
        }
    };

    // Delete an idea
    const handleDelete = async (id) => {
        try {
            await fetch(`${API_URL}/boite-a-idees/${id}`, { method: 'DELETE' });
            fetchIdeas(currentPage);
        } catch (error) {
            console.error('Error deleting idea:', error);
        }
    };

    return (
        <div className="boite-a-idee">
            <h1>Boîte à Idées</h1>
            <button className="add-button" onClick={() => openPopup()}>
                <FaPlus /> Ajouter une idée
            </button>

            {/* Tableau des idées */}
            <table>
                <thead>
                    <tr>
                        <th>Titre</th>
                        <th>Description</th>
                        <th>Auteur</th>
                        <th>Image</th>
                        <th>Statut</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading ? (
                        <tr>
                            <td colSpan="6" style={{ textAlign: 'center' }}>Chargement en cours...</td>
                        </tr>
                    ) : ideas && ideas.length > 0 ? (
                        ideas.map(idea => (
                            <tr key={idea.id}>
                                <td>{idea.titre}</td>
                                <td>{idea.description}</td>
                                <td>{idea.auteur}</td>
                                <td>
                                    {idea.image && <img src={`${API_URL}/storage/${idea.image}`} alt={idea.titre} width="50" />}
                                </td>
                                <td>{idea.statut}</td>
                                <td>
                                    <button onClick={() => openPopup(idea)}><FaEdit /></button>
                                    <button onClick={() => handleDelete(idea.id)}><FaTrash /></button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" style={{ textAlign: 'center' }}>Aucune idée trouvée.</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => fetchIdeas(i + 1)}
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
                        <h2>{isEditMode ? 'Modifier une idée' : 'Ajouter une idée'}</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="titre"
                                placeholder="Titre"
                                value={formData.titre}
                                onChange={handleInputChange}
                                required
                            />
                            <textarea
                                name="description"
                                placeholder="Description"
                                value={formData.description}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="file"
                                name="image"
                                onChange={handleImageChange}
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

export default BoiteAIdee;