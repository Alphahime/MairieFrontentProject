import React from 'react';
import { FaBuilding, FaRoad, FaMap } from 'react-icons/fa'; // Importation des icônes
import './ServiceTechnique.css';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
const ServiceTechnique = () => {
  return (
    <div className="service-container">
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
      <div className="service-technique">
        {/* Section principale */}
        <main className="main-content">
          <h1>Division des Services Techniques</h1>
          <p>
            Les services techniques sont chargés de la conception, de l’étude et de l’exécution des travaux publics.
            Ils ont aussi pour mission l’entretien du patrimoine immobilier de la commune. Ils assurent également
            l’entretien courant, la gestion des opérations d’urbanisme, et régulent le stationnement pour une
            meilleure mobilité des biens et des personnes.
          </p>

          {/* Axes détaillés des services */}
          <section className="services-axes">
            {/* Bureau de la Planification et des Études */}
            <div className="axe">
              <FaBuilding className="iconaxe" />
              <h2>Bureau de la Planification et des Études</h2>
              <p>
                Chargé de la conception, de l’étude et de l’exécution des travaux publics.
              </p>
            </div>

            {/* Bureau de l’Aménagement Urbain */}
            <div className="axe">
              <FaRoad className="iconaxe" />
              <h2>Bureau de l’Aménagement Urbain</h2>
              <p>
                Régule les opérations d'urbanisme pour une meilleure organisation des espaces.
              </p>
            </div>

            {/* Bureau de la Voirie et Réseaux Divers */}
            <div className="axe">
              <FaMap className="iconaxe" />
              <h2>Bureau de la Voirie et Réseaux Divers</h2>
              <p>
                Assure l'entretien des routes et la gestion des infrastructures liées à la mobilité.
              </p>
            </div>
          </section>
        </main>

       
      </div>
      <Footer />
    </div>
  );
};

export default ServiceTechnique;