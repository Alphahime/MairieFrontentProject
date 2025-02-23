import React from 'react';
import { FaBuilding, FaRoad, FaMap, FaCarAlt } from 'react-icons/fa'; // Importation des icônes
import './ServiceTechnique.css';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import bannerImage from '../../assets/images/peche.jpeg';

const ServiceTechnique = () => {
  return (
    <div className="service-container">
      <Header />
      <div className="service-technique">
        {/* Bannière en bas de la page */}
        <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
          <div className="banner-content">
            <h2>Engagés pour votre quotidien</h2>
            <p>
              Les services techniques de la mairie travaillent chaque jour pour améliorer votre cadre de vie.
              Pour toute demande ou information, contactez-nous via notre service dédié.
            </p>
          </div>
        </div>

        {/* Section principale */}
        <main className="main-content">
          <h1>Service Technique</h1>
          <p>
            Le service technique de la mairie est un pilier essentiel pour assurer le bon fonctionnement 
            et l'amélioration continue des infrastructures publiques. Découvrez nos missions et engagements.
          </p>

          {/* Axes détaillés des services */}
          <section className="services-axes">
            <div className="axe">
              <div className="axe-image" style={{ backgroundImage: `url(${bannerImage})` }}></div>
              <h2><FaBuilding /> Bureau de la Planification et des Études</h2>
              <p>
                Les services techniques sont chargés de la conception, de l’étude et de l’exécution des travaux publics.
              </p>
            </div>
            <div className="axe">
              <div className="axe-image" style={{ backgroundImage: `url(${bannerImage})` }}></div>
              <h2><FaRoad /> Bureau de l’Aménagement Urbain</h2>
              <p>
                Le bureau de l’aménagement urbain régule les opérations d'urbanisme pour une meilleure organisation des espaces.
              </p>
            </div>
            <div className="axe">
              <div className="axe-image" style={{ backgroundImage: `url(${bannerImage})` }}></div>
              <h2><FaMap /> Bureau de la Voirie et Réseaux Divers</h2>
              <p>
                Ils assurent l'entretien des routes et la gestion des infrastructures liées à la mobilité.
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default ServiceTechnique;
