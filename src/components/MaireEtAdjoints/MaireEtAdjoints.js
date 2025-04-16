import React from "react";
import "./MaireEtAdjoints.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { FaUser, FaUsers, FaHandshake, FaTasks, FaBuilding } from "react-icons/fa"; // Import des icônes
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
const MaireEtAdjoints = () => {
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
      <div className="maire-adjoints-container">
        {/* Section Exécutif Municipal */}
        <section className="executif-section">
          <h1>L'Exécutif Municipal</h1>
          <p>
            L'Exécutif Municipal est composé du Maire et de ses adjoints. Le Maire est le représentant de la collectivité locale et est chargé, sous le contrôle du Conseil Municipal, de diverses missions.
          </p>

          {/* Rôles du Maire */}
          <div className="maire-roles">
            <h2><FaUser /> Rôles du Maire</h2>
            <p>
              Le Maire est chargé des missions suivantes :
            </p>
            <ul>
              <li>Conserver, entretenir et administrer les propriétés et les biens de la commune.</li>
              <li>Gérer les revenus, surveiller les services communaux et la comptabilité communale.</li>
              <li>Préparer et proposer le budget, ordonnancer les dépenses et prescrire l’exécution des recettes.</li>
              <li>Diriger les travaux communaux.</li>
              <li>Veiller à l’exécution des programmes de développement financés par la commune.</li>
              <li>Pourvoir aux mesures relatives à la voirie municipale.</li>
              <li>Souscrire les marchés, passer les baux des biens et les adjudications des travaux communaux.</li>
              <li>Représenter la commune en justice.</li>
              <li>Prendre des mesures pour la protection de l’environnement.</li>
              <li>Nommer aux emplois communaux.</li>
              <li>Apporter assistance aux lieux de culte.</li>
              <li>Exécuter les décisions du Conseil Municipal.</li>
            </ul>
          </div>
        </section>

        {/* Section Bureau Municipal */}
        <section className="bureau-section">
          <h2><FaUsers /> Le Bureau Municipal</h2>
          <p>
            Le Maire est secondé par ses adjoints qui forment avec lui le Bureau Municipal. Le Bureau Municipal est notamment chargé de :
          </p>
          <ul>
            <li>L’établissement de l’ordre du jour des séances du Conseil.</li>
            <li>L’assistance aux services administratifs et techniques.</li>
            <li>La surveillance de la rentrée des impôts, taxes et droits municipaux.</li>
            <li>La détermination du mode d’exécution des travaux communaux.</li>
          </ul>

          {/* Liste des adjoints */}
          <div className="adjoints-list">
            <h3><FaHandshake /> Les Adjoints au Maire</h3>
            <ul>
              <li><strong>Moustapha SARR</strong> - 1er adjoint en charge de l'administration générale et des finances</li>
              <li><strong>Yayi Bayam DIOUF</strong> - 2ème adjointe en charge du développement économique, de la promotion de la femme et de la petite enfance</li>
              <li><strong>Abdou Aziz GUEYE</strong> - 3ème adjoint en charge de la coopération et des partenariats</li>
              <li><strong>Fatoumata Binetou TOURE</strong> - 4ème adjointe en charge de l’éducation et de la formation</li>
              <li><strong>Alpha Mouhamadou GUEYE</strong> - 5ème adjoint en charge de la Jeunesse, des sports, de la culture et des loisirs</li>
            </ul>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default MaireEtAdjoints;