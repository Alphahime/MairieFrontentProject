import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { FaFileAlt, FaSignOutAlt, FaFolder, FaCalendarAlt, FaBullhorn } from 'react-icons/fa'; // Import des icônes
import './BureauDesMarchesPublics.css';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
const BureauDesMarchesPublics = () => {
  return (
    <div className="bigcontent">
      <Header />
       <div className="mobile-back-container">
                  <Link 
                    to="/" 
                    className="mobile-back-button"
                    aria-label="Retour au conseil municipal"
                  >
                    <FaArrowLeft aria-hidden="true" />
                    <span>Retour</span>
                  </Link>
                </div>
      <div className="bureau-container">
        {/* Texte en haut */}
        <div className="bureau-text">
          <h1>Le Bureau des Marchés Publics</h1>
          <p>
            Le bureau des marchés publics est chargé de veiller à la qualité des dossiers de passation des marchés
            ainsi qu’au bon fonctionnement de la commission des marchés de la commune. Il s’occupe notamment :
          </p>
        </div>

        {/* Cartes en dessous */}
        <div className="cards-containerbureau">
          {/* Carte 1 : Examen préalable des documents soumis au Maire */}
          <div className="cardbureau">
            <FaFileAlt className="iconbureau" />
            <h2>Examen préalable des documents soumis au Maire</h2>
            <p>Examen des documents relatifs aux marchés publics avant soumission au Maire.</p>
          </div>

          {/* Carte 2 : Examen préalable des documents transmis à des tiers */}
          <div className="cardbureau">
            <FaSignOutAlt className="iconbureau" />
            <h2>Examen préalable des documents transmis à des tiers</h2>
            <p>Vérification des documents avant transmission à des tiers.</p>
          </div>

          {/* Carte 3 : Examen préalable des documents signés avec des tiers */}
          <div className="cardbureau">
            <FaFolder className="iconbureau" />
            <h2>Examen préalable des documents signés avec des tiers</h2>
            <p>Examen des documents avant signature avec des partenaires externes.</p>
          </div>

          {/* Carte 4 : Classement et archivage des documents */}
          <div className="cardbureau">
            <FaCalendarAlt className="iconbureau" />
            <h2>Classement et archivage des documents</h2>
            <p>Organisation et archivage des documents relatifs aux marchés publics.</p>
          </div>

          {/* Carte 5 : Plan de passation des marchés */}
          <div className="cardbureau">
            <FaBullhorn className="iconbureau" />
            <h2>Plan de passation des marchés</h2>
            <p>Établissement du plan annuel de passation des marchés.</p>
          </div>

          {/* Carte 6 : Avis général de passation des marchés */}
          <div className="cardbureau">
            <FaBullhorn className="iconbureau" />
            <h2>Avis général de passation des marchés</h2>
            <p>Publication de l'avis général de passation des marchés.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BureauDesMarchesPublics;