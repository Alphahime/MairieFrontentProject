import React, { useEffect, useState } from 'react';
import { getActualites, addActualite, updateActualite, deleteActualite } from '../../api';
import Sidebar from '../sidebar/Sidebar';
import { FaPlus, FaEdit, FaTrash, FaSearch, FaUserCircle } from 'react-icons/fa';
import './Actualites.css';

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
        categorie: '',
        statut: ''
    });
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        fetchActualites();
    }, []);

    const fetchActualites = async () => {
        const data = await getActualites();
        setActualites(data);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEditMode) {
            await updateActualite(formData.id, formData);
        } else {
            await addActualite(formData);
        }
        setShowForm(false);
        fetchActualites();
    };

    const handleEdit = (actualite) => {
        setFormData(actualite);
        setIsEditMode(true);
        setShowForm(true);
    };

    const handleDelete = async (id) => {
        await deleteActualite(id);
        fetchActualites();
    };

    const handleAdd = () => {
        setFormData({
            id: null,
            titre: '',
            contenu: '',
            date_publication: '',
            auteur: '',
            image: null,
            categorie: '',
            statut: ''
        });
        setIsEditMode(false);
        setShowForm(true);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = actualites.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div style={{ display: 'flex' }}>
            {/* Sidebar */}
            <Sidebar />

            <div className="main-content">
                {/* Header avec champ de recherche et icône de personne connectée */}
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

                {/* Contenu principal */}
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
                                        <input type="file" name="image" onChange={handleFileChange} />
                                        <label>Catégorie:</label>
                                        <input type="text" name="categorie" value={formData.categorie} onChange={handleInputChange} required />
                                        <label>Statut:</label>
                                        <input type="text" name="statut" value={formData.statut} onChange={handleInputChange} required />
                                    </div>
                                    <div className="form-buttons">
                                        <button type="submit" className="submit-button">
                                            {isEditMode ? 'Modifier' : 'Ajouter'}
                                        </button>
                                        <button type="button" className="cancel-button" onClick={() => setShowForm(false)}>
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
                </div>
            </div>
        </div>
    );
};

export default Actualites;