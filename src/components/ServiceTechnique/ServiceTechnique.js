import React from 'react';
import './ServiceTechnique.css';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import bannerImage from '../../assets/images/peche.jpeg';
import routeImage from '../../assets/images/entretientroutes.avif'; // Image pour Entretien des Routes
import espacesVertsImage from '../../assets/images/espacevert.avif'; // Image pour Espaces Verts
import eclairageImage from '../../assets/images/éclailéragepublic.jpg'; // Image pour Éclairage Public
import dechetsImage from '../../assets/images/gestiondechet.jpg'; // Image pour Gestion des Déchets

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
            <div className="axe-image" style={{ backgroundImage: `url(${routeImage})` }}></div>
            <h2>Entretien des Routes</h2>
            <p>
              Nous assurons la maintenance des routes, la réparation des nids-de-poule, et la signalisation 
              pour garantir la sécurité des usagers.
            </p>
          </div>
          <div className="axe">
            <div className="axe-image" style={{ backgroundImage: `url(${espacesVertsImage})` }}></div>
            <h2>Espaces Verts</h2>
            <p>
              Nos équipes entretiennent les parcs, jardins et espaces verts pour offrir un cadre de vie agréable 
              et respectueux de l'environnement.
            </p>
          </div>
          <div className="axe">
            <div className="axe-image" style={{ backgroundImage: `url(${eclairageImage})` }}></div>
            <h2>Éclairage Public</h2>
            <p>
              Nous veillons à l'installation et à la maintenance de l'éclairage public pour assurer la sécurité 
              et le confort des habitants.
            </p>
          </div>
          <div className="axe">
            <div className="axe-image" style={{ backgroundImage: `url(${dechetsImage})` }}></div>
            <h2>Gestion des Déchets</h2>
            <p>
              Nous mettons en place des solutions pour la collecte et le traitement des déchets, en favorisant 
              le recyclage et la réduction des déchets.
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