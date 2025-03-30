import React, { useEffect, useState } from 'react';
import { getProjets } from '../api';
import { FaFilter, FaCalendarCheck, FaCalendarDay, FaCalendarTimes, FaSearch } from 'react-icons/fa'; // Icônes pour les filtres et la recherche
import './Agenda.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Agenda = () => {
    const [projets, setProjets] = useState([]);
    const [filtreStatut, setFiltreStatut] = useState('Tous'); // État pour le filtre
    const [searchTerm, setSearchTerm] = useState(''); // État pour la recherche
    const [currentPage, setCurrentPage] = useState(1); // État pour la pagination
    const projectsPerPage = 6; // Nombre de projets par page

    useEffect(() => {
        const fetchProjets = async () => {
            try {
                const data = await getProjets();
                setProjets(data);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjets();
    }, []);

    // Filtrer les projets en fonction du statut et du terme de recherche
    const projetsFiltres = projets.filter((projet) => {
        const matchesStatut = filtreStatut === 'Tous' || projet.statut === filtreStatut;
        const matchesSearch = projet.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              projet.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesStatut && matchesSearch;
    });

    // Pagination logic
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projetsFiltres.slice(indexOfFirstProject, indexOfLastProject);

    // Change page
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Calcul du nombre total de pages
    const totalPages = Math.ceil(projetsFiltres.length / projectsPerPage);

    // Générer les numéros de page à afficher
    const getPageNumbers = () => {
        const pageNumbers = [];
        const maxPagesToShow = 3; // Nombre de pages à afficher autour de la page actuelle

        // Ajouter les premières pages
        for (let i = 1; i <= Math.min(3, totalPages); i++) {
            pageNumbers.push(i);
        }

        // Ajouter les pages autour de la page actuelle
        if (currentPage > 3 + maxPagesToShow) {
            pageNumbers.push('...'); // Ajouter des points de suspension pour indiquer des pages manquantes
        }

        for (let i = Math.max(1, currentPage - maxPagesToShow); i <= Math.min(totalPages, currentPage + maxPagesToShow); i++) {
            if (!pageNumbers.includes(i)) {
                pageNumbers.push(i);
            }
        }

        // Ajouter les dernières pages
        if (currentPage < totalPages - maxPagesToShow - 1) {
            pageNumbers.push('...'); // Ajouter des points de suspension pour indiquer des pages manquantes
        }

        for (let i = Math.max(1, totalPages - 2); i <= totalPages; i++) {
            if (!pageNumbers.includes(i)) {
                pageNumbers.push(i);
            }
        }

        return pageNumbers;
    };

    return (
        <div className="agenda-container">
            <Header />
            {/* Bannière */}
            <div className="banner">
                <h1>Projets/Programmes</h1>
                <p>Découvrez tous les projets et programmes de la mairie .</p>
            </div>

            {/* Filtres et recherche */}
            <div className="filtre-recherche-container">
                {/* Boutons de filtre */}
                <div className="filtre-buttons">
                    <button 
                        onClick={() => setFiltreStatut('Tous')}
                        className={filtreStatut === 'Tous' ? 'active' : ''}
                    >
                        <FaFilter /> Tous
                    </button>
                    <button 
                        onClick={() => setFiltreStatut('En cours')}
                        className={filtreStatut === 'En cours' ? 'active' : ''}
                    >
                        <FaCalendarDay /> En cours
                    </button>
                    <button 
                        onClick={() => setFiltreStatut('Planifié')}
                        className={filtreStatut === 'Planifié' ? 'active' : ''}
                    >
                        <FaCalendarCheck /> Planifié
                    </button>
                    <button 
                        onClick={() => setFiltreStatut('Terminé')}
                        className={filtreStatut === 'Terminé' ? 'active' : ''}
                    >
                        <FaCalendarTimes /> Terminé
                    </button>
                </div>

                {/* Champ de recherche */}
                <div className="search-bar">
                    <FaSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="Rechercher un projet..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Liste des projets */}
            <div className="projets-grid">
                {currentProjects.map((projet) => (
                    <div key={projet.id} className="projet-card">
                         <img src={projet.image_url} alt={projet.nom} className="projet-image" />
                        <h2>{projet.nom}</h2>
                        <p className="description">{projet.description}</p>
                        <div className="details">
                            <p><strong>Date de début:</strong> {new Date(projet.date_debut).toLocaleDateString()}</p>
                            {projet.date_fin && (
                                <p><strong>Date de fin:</strong> {new Date(projet.date_fin).toLocaleDateString()}</p>
                            )}
                            <p><strong>Statut:</strong> <span className="statut" style={{ color: '#32bde8' }}>{projet.statut}</span></p>
                            <p><strong>Budget:</strong> {projet.budget} XOF</p>
                            <p><strong>Responsable:</strong> {projet.responsable}</p>
                        </div>
                       
                    </div>
                ))}
            </div>

            {/* Pagination personnalisée */}
            <div className="pagination-container">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Précédent
                </button>
                {getPageNumbers().map((page, index) => (
                    page === '...' ? (
                        <span key={index} className="ellipsis">...</span>
                    ) : (
                        <button
                            key={index}
                            onClick={() => handlePageChange(page)}
                            className={currentPage === page ? 'active' : ''}
                        >
                            {page}
                        </button>
                    )
                ))}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Suivant
                </button>
            </div>

            <Footer />
        </div>
    );
};

export default Agenda;