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
      <ul>
        <li><FaUsers size={24} /> <strong>Pôle coopération décentralisée, économie et développement territorial</strong></li>
        <li><FaSchool size={24} /> <strong>Pôle éducation, santé et inclusion sociale</strong></li>
        <li><FaRegBuilding size={24} /> <strong>Pôle action jeunesse, sport et culture</strong></li>
        <li><FaChartLine size={24} /> <strong>Pôle suivi et évaluation</strong></li>
      </ul>
     
    </div>
     <Footer />
 </div>
  );
};

export default BureauDeDeveloppementLocal;
