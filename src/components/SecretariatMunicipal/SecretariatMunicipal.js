import React from "react";
import { FaUserTie, FaHandshake, FaTasks, FaUsers } from "react-icons/fa"; // Importation des icônes
import "./SecretariatMunicipal.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
const SecretariatMunicipal = () => {
  return (
    <div className="contentheader">
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
      <div className="secretariat-container">
        {/* Texte en haut */}
        <div className="content">
          <h1>Le Secrétariat Municipal</h1>
          <p>
            Le secrétaire municipal est nommé par le Maire après avis consultatif
            du représentant de l’État parmi les agents et fonctionnaires de la
            hiérarchie A ou B de la fonction publique ou de niveau équivalent dans
            des conditions précisées par décret.
          </p>
          <p>Il assiste aux réunions du bureau municipal avec voix consultative.</p>
          <p>
            Il coordonne l’organisation et le fonctionnement des services municipaux
            et veille à l’exécution des décisions prises par le Maire.
          </p>
        </div>

        {/* Cartes en dessous */}
        <div className="cards-containersecretariat">
          {/* Carte 1 : Nomination et rôle */}
          <div className="cardsecretariat">
            <FaUserTie className="iconsecretariat" />
            <h2>Nomination et Rôle</h2>
            <p>
              Nommé par le Maire, le secrétaire municipal assiste aux réunions du bureau municipal avec voix consultative.
            </p>
          </div>

          {/* Carte 2 : Coordination des services */}
          <div className="cardsecretariat">
            <FaHandshake className="iconsecretariat" />
            <h2>Coordination des Services</h2>
            <p>
              Il coordonne l’organisation et le fonctionnement des services municipaux.
            </p>
          </div>

          {/* Carte 3 : Exécution des décisions */}
          <div className="cardsecretariat">
            <FaTasks className="iconsecretariat" />
            <h2>Exécution des Décisions</h2>
            <p>
              Il veille à l’exécution des décisions prises par le Maire.
            </p>
          </div>

          {/* Carte 4 : Collaboration avec les élus */}
          <div className="cardsecretariat">
            <FaUsers className="iconsecretariat" />
            <h2>Collaboration avec les Élus</h2>
            <p>
              Il travaille en étroite collaboration avec les élus pour assurer la bonne gouvernance.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SecretariatMunicipal;