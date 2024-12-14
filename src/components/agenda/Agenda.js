// src/components/agenda/Agenda.js
import React from "react";
import "./Agenda.css";
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Agenda = () => {
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

      {/* Agenda Sections */}
      <section className="agenda-section">
        <h3>Projets en Cours</h3>
        <div className="agenda-items-container">
          <div className="agenda-item">
            <img
              src={require("../../assets/images/peche.jpeg")}
              alt="Réhabilitation du marché central"
              className="agenda-item-image"
            />
            <div className="agenda-item-content">
              <strong>Réhabilitation du marché central :</strong> Projet en cours pour moderniser et rénover le marché central afin de promouvoir le commerce local.
            </div>
            <button class="button2">Voir plus</button>
          </div>
          
          <div className="agenda-item">
            <img
              src={require("../../assets/images/peche.jpeg")}
              alt="Construction du centre communautaire"
              className="agenda-item-image"
            />
            <div className="agenda-item-content">
              <strong>Construction du centre communautaire :</strong> En construction, ce centre fournira un espace polyvalent pour les événements communautaires.
            </div>
            <button class="button2">Voir plus</button>
          </div>
        </div>
      </section>

      <section className="agenda-section">
        <h3>Réalisation Récentes</h3>
        <div className="agenda-items-container">
          <div className="agenda-item">
            <img
              src={require("../../assets/images/peche.jpeg")}
              alt="Modernisation du réseau d'assainissement"
              className="agenda-item-image"
            />
            <div className="agenda-item-content">
              <strong>Modernisation du réseau d'assainissement :</strong> Terminé, ce projet a amélioré l'infrastructure d'assainissement de la ville.
            </div>
            <button class="button2">Voir plus</button>
          </div>
          <div className="agenda-item">
            <img
              src={require("../../assets/images/peche.jpeg")}
              alt="Amélioration de l'éclairage public"
              className="agenda-item-image"
            />
            <div className="agenda-item-content">
              <strong>Amélioration de l'éclairage public :</strong> Achevé récemment, le projet a renforcé la sécurité publique la nuit.
            </div>
            <button class="button2">Voir plus</button>
          </div>
        </div>
      </section>

      <section className="agenda-section">
        <h3>À Venir</h3>
        <div className="agenda-items-container">
          <div className="agenda-item">
            <img
              src={require("../../assets/images/peche.jpeg")}
              alt="Éco-quartier"
              className="agenda-item-image"
            />
            <div className="agenda-item-content">
              <strong>Éco-quartier :</strong> Un projet visant à créer un quartier durable et respectueux de l'environnement.
            </div>
            
            <button class="button2">Voir plus</button>

          </div>
          <div className="agenda-item">
            <img
              src={require("../../assets/images/peche.jpeg")}
              alt="Rénovation de la bibliothèque municipale"
              className="agenda-item-image"
            />
            <div className="agenda-item-content">
              <strong>Rénovation de la bibliothèque municipale :</strong> Prévu pour 2025, ce projet offrira un espace plus moderne pour les citoyens.
            </div>
            <button class="button2">Voir plus</button>

            
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Agenda;
