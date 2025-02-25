import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { FaUsers, FaSchool, FaRegBuilding, FaChartLine } from 'react-icons/fa'; // Importer les icônes
import './BureauDeDeveloppementLocal.css';

const BureauDeDeveloppementLocal = () => {
  return (
    <div className="bigcontent">
      <Header />
      <div className="bdl-container">
        {/* Texte en haut */}
        <div className="bdl-text">
          <h1>Bureau de Développement Local</h1>
          <p>
            Convaincu qu’on ne pourrait prétendre au développement ou à l'émergence d’une collectivité locale
            comme Thiaroye sur mer sans faire la promotion de son économie locale, Monsieur le Maire a jugé nécessaire
            la création dès son arrivée à la tête de la municipalité d’un Bureau du Développement Local (BDL).
          </p>
          <p>
            Ce bureau, chargé de la planification, de l’exécution, de l’opérationnalisation et du suivi des programmes
            et projets déclinés dans le Plan de Développement Communal (PDC), est constitué de 4 pôles :
          </p>
        </div>

        {/* Cartes en dessous */}
        <div className="cards-containerbdl">
          {/* Carte 1 : Pôle coopération décentralisée, économie et développement territorial */}
          <div className="cardbdl">
            <FaUsers className="iconbdl" />
            <h2>Coopération décentralisée, économie et développement territorial</h2>
            <p>Promotion de l'économie locale et coopération avec les partenaires.</p>
          </div>

          {/* Carte 2 : Pôle éducation, santé et inclusion sociale */}
          <div className="cardbdl">
            <FaSchool className="iconbdl" />
            <h2>Éducation, santé et inclusion sociale</h2>
            <p>Amélioration des services éducatifs, sanitaires et sociaux.</p>
          </div>

          {/* Carte 3 : Pôle action jeunesse, sport et culture */}
          <div className="cardbdl">
            <FaRegBuilding className="iconbdl" />
            <h2>Action jeunesse, sport et culture</h2>
            <p>Encadrement des jeunes et promotion des activités sportives et culturelles.</p>
          </div>

          {/* Carte 4 : Pôle suivi et évaluation */}
          <div className="cardbdl">
            <FaChartLine className="iconbdl" />
            <h2>Suivi et évaluation</h2>
            <p>Suivi des projets et évaluation des résultats.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BureauDeDeveloppementLocal;