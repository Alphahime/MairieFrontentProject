import React, { useState } from "react";
import "./Agenda.css";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { FaPlay, FaCheckCircle, FaClock } from 'react-icons/fa'; // Import des icônes

const Agenda = () => {
  const [filter, setFilter] = useState("all"); // Etat pour filtrer les projets

  // Fonction pour filtrer les projets
  const filterProjects = (status) => {
    setFilter(status);
  };

  const projects = [
    { title: "Réhabilitation du marché central", status: "ongoing", description: "Projet en cours pour moderniser et rénover le marché central.", image: "peche.jpeg" },
    { title: "Construction du centre communautaire", status: "ongoing", description: "En construction, ce centre fournira un espace polyvalent pour les événements communautaires.", image: "peche.jpeg" },
    { title: "Modernisation du réseau d'assainissement", status: "completed", description: "Terminé, ce projet a amélioré l'infrastructure d'assainissement de la ville.", image: "peche.jpeg" },
    { title: "Amélioration de l'éclairage public", status: "completed", description: "Achevé récemment, le projet a renforcé la sécurité publique la nuit.", image: "peche.jpeg" },
    { title: "Éco-quartier", status: "upcoming", description: "Un projet visant à créer un quartier durable et respectueux de l'environnement.", image: "peche.jpeg" },
    { title: "Rénovation de la bibliothèque municipale", status: "upcoming", description: "Prévu pour 2025, ce projet offrira un espace plus moderne pour les citoyens.", image: "peche.jpeg" },
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.status === filter);

  return (
    <div id="services" className="agenda">
      <Header />
      
      {/* Banner Section */}
      <div className="agenda-banner">
        <img
          src={require("../../assets/images/peche.jpeg")}
          alt="Agenda Mairie"
          className="agenda-banner-image"
        />
        <div className="agenda-banner-text">
          <h1>Les Projets et Réalisations de la Mairie</h1>
          <p>Suivez l'évolution de nos projets en cours, réalisés et à venir pour améliorer notre communauté.</p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="agenda-filter-buttons">
        <button onClick={() => filterProjects("ongoing")}><FaPlay /> En cours</button>
        <button onClick={() => filterProjects("completed")}><FaCheckCircle /> Terminé</button>
        <button onClick={() => filterProjects("upcoming")}><FaClock /> À venir</button>
        <button onClick={() => filterProjects("all")}>Tous</button>
      </div>

      {/* Agenda Sections */}
      <section className="agenda-section">
        <h3>Projets</h3>
        <div className="agenda-items-container">
          {filteredProjects.map((project, index) => (
            <div className="agenda-item" key={index}>
              <div className={`agenda-item-icon ${project.status}`}>
                {/* {project.status === "ongoing" && <FaPlay />}
                {project.status === "completed" && <FaCheckCircle />}
                {project.status === "upcoming" && <FaClock />} */}
              </div>
              <img
                src={require(`../../assets/images/${project.image}`)}
                alt={project.title}
                className="agenda-item-image"
              />
              <div className="agenda-item-content">
                <strong>{project.title}</strong>: {project.description}
              </div>
              <button className="button2">Voir plus</button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Agenda;
