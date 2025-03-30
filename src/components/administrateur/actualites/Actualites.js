import React, { useEffect, useState } from 'react';
import { getActualites, addActualite, updateActualite, deleteActualite } from '../../api';
import Sidebar from '../sidebar/Sidebar';
import { FaPlus, FaEdit, FaTrash, FaSearch, FaUserCircle } from 'react-icons/fa';
import './Actualites.css';

const API_URL = 'http://localhost:8000';

const Actualites = () => {
    const [actualites, setActualites] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        id: null,
        titre: '',
        contenu: '',
        date_publication: '',
        auteur: '',
        image: null,
        image_url: '',
        categorie: 'Culture', // Valeur par défaut
        statut: 'À la une' // Valeur par défaut
    });
    const [imagePreview, setImagePreview] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Options pour les select
    const categories = ['Culture', 'Éducation', 'Sport', 'Politique', 'Économie', 'Santé'];
    const statuts = ['À la une', 'Publié', 'Brouillon', 'Archivé'];

    useEffect(() => {
        fetchActualites();
    }, []);

    const fetchActualites = async () => {
        try {
            const data = await getActualites();
            setActualites(data);
        } catch (error) {
            console.error('Erreur lors de la récupération des actualités:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
        }
        setFormData({
            ...formData,
            image: file,
            image_url: ''
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('titre', formData.titre);
        formDataToSend.append('contenu', formData.contenu);
        formDataToSend.append('date_publication', formData.date_publication);
        formDataToSend.append('auteur', formData.auteur);
        formDataToSend.append('categorie', formData.categorie);
        formDataToSend.append('statut', formData.statut);
        if (formData.image) {
            formDataToSend.append('image', formData.image);
        }

        try {
            if (isEditMode) {
                await updateActualite(formData.id, formDataToSend);
            } else {
                await addActualite(formDataToSend);
            }
            setShowForm(false);
            setImagePreview(null);
            fetchActualites();
        } catch (error) {
            console.error('Erreur lors de l\'ajout ou de la modification de l\'actualité:', error);
        }
    };

    const handleEdit = (actualite) => {
        setFormData(actualite);
        setIsEditMode(true);
        setShowForm(true);
        setImagePreview(actualite.image_url ? `${API_URL}/storage/${actualite.image_url}` : null);
    };

    const handleDelete = async (id) => {
        try {
            await deleteActualite(id);
            fetchActualites();
        } catch (error) {
            console.error('Erreur lors de la suppression de l\'actualité:', error);
        }
    };

    const handleAdd = () => {
        setFormData({
            id: null,
            titre: '',
            contenu: '',
            date_publication: '',
            auteur: '',
            image: null,
            image_url: '',
            categorie: 'Culture', // Réinitialiser à la valeur par défaut
            statut: 'À la une' // Réinitialiser à la valeur par défaut
        });
        setIsEditMode(false);
        setImagePreview(null);
        setShowForm(true);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = actualites.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />

            <div className="main-content">
                <header className="header">
                    <div className="search-bar">
                        <FaSearch className="search-icon" />
                        <input type="text" placeholder="Rechercher..." />
                    </div>
                    <div className="user-info">
                        <FaUserCircle className="user-icon" />
                        <span>Admin</span>
                    </div>
                </header>

                <div className="actualites-container">
                    <h1>Gestion des Actualités</h1>
                    <button className="add-button" onClick={handleAdd}>
                        <FaPlus /> Ajouter
                    </button>

                    {showForm && (
                        <div className="popup">
                            <div className="popup-content">
                                <h2>{isEditMode ? 'Modifier une Actualité' : 'Ajouter une Actualité'}</h2>
                                <form onSubmit={handleSubmit} className="form-grid">
                                    <div className="form-column">
                                        <label>Titre:</label>
                                        <input type="text" name="titre" value={formData.titre} onChange={handleInputChange} required />
                                        <label>Contenu:</label>
                                        <textarea name="contenu" value={formData.contenu} onChange={handleInputChange} required />
                                        <label>Date de Publication:</label>
                                        <input type="datetime-local" name="date_publication" value={formData.date_publication} onChange={handleInputChange} required />
                                    </div>
                                    <div className="form-column">
                                        <label>Auteur:</label>
                                        <input type="text" name="auteur" value={formData.auteur} onChange={handleInputChange} required />
                                        <label>Image:</label>
                                        
                                        {(imagePreview || formData.image_url) && (
                                            <div style={{ marginBottom: '10px' }}>
                                                <img 
                                                    src={imagePreview || `${API_URL}/storage/${formData.image_url}`} 
                                                    alt="Preview" 
                                                    style={{ 
                                                        width: '100px', 
                                                        height: '100px',
                                                        objectFit: 'cover',
                                                        borderRadius: '4px'
                                                    }} 
                                                />
                                            </div>
                                        )}
                                        
                                        <input 
                                            type="file" 
                                            name="image" 
                                            onChange={handleFileChange} 
                                            accept="image/*"
                                        />
                                        
                                        <label>Catégorie:</label>
                                        <select 
                                            name="categorie" 
                                            value={formData.categorie} 
                                            onChange={handleInputChange}
                                            required
                                        >
                                            {categories.map((cat) => (
                                                <option key={cat} value={cat}>{cat}</option>
                                            ))}
                                        </select>
                                        
                                        <label>Statut:</label>
                                        <select 
                                            name="statut" 
                                            value={formData.statut} 
                                            onChange={handleInputChange}
                                            required
                                        >
                                            {statuts.map((statut) => (
                                                <option key={statut} value={statut}>{statut}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-buttons">
                                        <button type="submit" className="submit-button">
                                            {isEditMode ? 'Modifier' : 'Ajouter'}
                                        </button>
                                        <button 
                                            type="button" 
                                            className="cancel-button" 
                                            onClick={() => {
                                                setShowForm(false);
                                                setImagePreview(null);
                                            }}
                                        >
                                            Annuler
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    <table className="actualites-table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Titre</th>
                                <th>Auteur</th>
                                <th>Date de Publication</th>
                                <th>Catégorie</th>
                                <th>Statut</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((actu) => (
                                <tr key={actu.id}>
                                    <td>
                                        {actu.image_url && (
                                            <img 
                                                src={`${API_URL}/storage/${actu.image_url}`} 
                                                alt={actu.titre} 
                                                style={{ 
                                                    width: '50px', 
                                                    height: '50px', 
                                                    objectFit: 'cover',
                                                    borderRadius: '4px'
                                                }} 
                                            />
                                        )}
                                    </td>
                                    <td>{actu.titre}</td>
                                    <td>{actu.auteur}</td>
                                    <td>{new Date(actu.date_publication).toLocaleString()}</td>
                                    <td>{actu.categorie}</td>
                                    <td>{actu.statut}</td>
                                    <td>
                                        <button className="edit-button" onClick={() => handleEdit(actu)}>
                                            <FaEdit />
                                        </button>
                                        <button className="delete-button" onClick={() => handleDelete(actu.id)}>
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="pagination">
                        {Array.from({ length: Math.ceil(actualites.length / itemsPerPage) }, (_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => paginate(i + 1)}
                                className={currentPage === i + 1 ? 'active' : ''}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Actualites;