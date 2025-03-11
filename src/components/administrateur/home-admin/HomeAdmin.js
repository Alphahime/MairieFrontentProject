import React, { useEffect, useState } from 'react';
import './HomeAdmin.css';
import {
    getRendezVous,
    getBoiteIdees,
    getDocuments,
    getProjets,
    getActualites,
    deleteRendezVous,
    deleteBoiteIdee,
    deleteDocument,
    deleteProjet,
    deleteActualite
} from '../../api';

const ITEMS_PER_PAGE = 5; // Nombre d'éléments par page

const HomeAdmin = () => {
    const [rendezVous, setRendezVous] = useState([]);
    const [boiteIdees, setBoiteIdees] = useState([]);
    const [documents, setDocuments] = useState([]);
    const [projets, setProjets] = useState([]);
    const [actualites, setActualites] = useState([]);
    const [currentPage, setCurrentPage] = useState({
        rendezVous: 1,
        boiteIdees: 1,
        documents: 1,
        projets: 1,
        actualites: 1
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const rendezVousData = await getRendezVous();
                const boiteIdeesData = await getBoiteIdees();
                const documentsData = await getDocuments();
                const projetsData = await getProjets();
                const actualitesData = await getActualites();

                setRendezVous(rendezVousData);
                setBoiteIdees(boiteIdeesData);
                setDocuments(documentsData);
                setProjets(projetsData);
                setActualites(actualitesData);
            } catch (error) {
                console.error("Erreur lors de la récupération des données:", error);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (type, id) => {
        try {
            switch (type) {
                case 'rendezVous':
                    await deleteRendezVous(id);
                    setRendezVous(rendezVous.filter(item => item.id !== id));
                    break;
                case 'boiteIdee':
                    await deleteBoiteIdee(id);
                    setBoiteIdees(boiteIdees.filter(item => item.id !== id));
                    break;
                case 'document':
                    await deleteDocument(id);
                    setDocuments(documents.filter(item => item.id !== id));
                    break;
                case 'projet':
                    await deleteProjet(id);
                    setProjets(projets.filter(item => item.id !== id));
                    break;
                case 'actualite':
                    await deleteActualite(id);
                    setActualites(actualites.filter(item => item.id !== id));
                    break;
                default:
                    break;
            }
        } catch (error) {
            console.error("Erreur lors de la suppression:", error);
        }
    };

    const truncateText = (text, wordLimit = 10) => {
        const words = text.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return text;
    };

    const handlePageChange = (type, page) => {
        setCurrentPage(prevState => ({
            ...prevState,
            [type]: page
        }));
    };

    const getPaginatedData = (data, type) => {
        const startIndex = (currentPage[type] - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return data.slice(startIndex, endIndex);
    };

    return (
        <div className="home-admin">
            <h1>Tableau de Bord Administrateur</h1>

            <div className="grid-containeradmin">
                {/* Colonne de gauche */}
                <div className="column">
                    <div className="grid-itemadmin">
                        <h2>Rendez-vous</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Service</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getPaginatedData(rendezVous, 'rendezVous').map((rv) => (
                                    <tr key={rv.id}>
                                        <td>{truncateText(rv.nom_utilisateur)}</td>
                                        <td>{truncateText(rv.service)}</td>
                                        <td>
                                            <button onClick={() => handleDelete('rendezVous', rv.id)}>🗑️</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="pagination">
                            {Array.from({ length: Math.ceil(rendezVous.length / ITEMS_PER_PAGE) }, (_, i) => (
                                <button key={i + 1} onClick={() => handlePageChange('rendezVous', i + 1)}>
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid-itemadmin">
                        <h2>Boîte à Idées</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Titre</th>
                                    <th>Auteur</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getPaginatedData(boiteIdees, 'boiteIdees').map((idee) => (
                                    <tr key={idee.id}>
                                        <td>{truncateText(idee.titre)}</td>
                                        <td>{truncateText(idee.auteur)}</td>
                                        <td>
                                            <button onClick={() => handleDelete('boiteIdee', idee.id)}>🗑️</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="pagination">
                            {Array.from({ length: Math.ceil(boiteIdees.length / ITEMS_PER_PAGE) }, (_, i) => (
                                <button key={i + 1} onClick={() => handlePageChange('boiteIdees', i + 1)}>
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid-itemadmin">
                        <h2>Demandes de Documents</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Numéro d'acte</th>
                                    <th>Année de naissance</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getPaginatedData(documents, 'documents').map((doc) => (
                                    <tr key={doc.id}>
                                        <td>{truncateText(doc.numero_de_acte)}</td>
                                        <td>{doc.annee_de_naissance}</td>
                                        <td>
                                            <button onClick={() => handleDelete('document', doc.id)}>🗑️</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="pagination">
                            {Array.from({ length: Math.ceil(documents.length / ITEMS_PER_PAGE) }, (_, i) => (
                                <button key={i + 1} onClick={() => handlePageChange('documents', i + 1)}>
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Colonne de droite */}
                <div className="column">
                    <div className="grid-itemadmin">
                        <h2>Projets</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Responsable</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getPaginatedData(projets, 'projets').map((projet) => (
                                    <tr key={projet.id}>
                                        <td>{truncateText(projet.nom)}</td>
                                        <td>{truncateText(projet.responsable)}</td>
                                        <td>
                                            <button onClick={() => handleDelete('projet', projet.id)}>🗑️</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="pagination">
                            {Array.from({ length: Math.ceil(projets.length / ITEMS_PER_PAGE) }, (_, i) => (
                                <button key={i + 1} onClick={() => handlePageChange('projets', i + 1)}>
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid-itemadmin">
                        <h2>Actualités</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Titre</th>
                                    <th>Auteur</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getPaginatedData(actualites, 'actualites').map((actu) => (
                                    <tr key={actu.id}>
                                        <td>{truncateText(actu.titre)}</td>
                                        <td>{truncateText(actu.auteur)}</td>
                                        <td>
                                            <button onClick={() => handleDelete('actualite', actu.id)}>🗑️</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="pagination">
                            {Array.from({ length: Math.ceil(actualites.length / ITEMS_PER_PAGE) }, (_, i) => (
                                <button key={i + 1} onClick={() => handlePageChange('actualites', i + 1)}>
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAdmin;