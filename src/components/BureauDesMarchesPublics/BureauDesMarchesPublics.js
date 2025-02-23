import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { FaFileAlt, FaSignOutAlt, FaFolder, FaCalendarAlt, FaBullhorn } from 'react-icons/fa'; // Import des icônes
import './BureauDesMarchesPublics.css';

const BureauDesMarchesPublics = () => {
  return (

    <div className="bigcontent">
         <Header />
    <div className="bureau-container">
        
      <h1>Le Bureau des Marchés Publics</h1>
      <p>
        Le bureau des marchés publics est chargé de veiller à la qualité des dossiers de passation des marchés
        ainsi qu’au bon fonctionnement de la commission des marchés de la commune. Il s’occupe notamment :
      </p>
      <ul>
        <li><FaFileAlt /> Examen préalable de tous documents à soumettre au Maire en matière de marché public</li>
        <li><FaSignOutAlt /> Examen préalable de tous documents à transmettre à des tiers en matière de marché public</li>
        <li><FaFolder /> Examen préalable de tous documents à signer avec des tiers en matière de marché public</li>
        <li><FaCalendarAlt /> Classement et archivage des documents relatifs aux marchés publics passés par la commune</li>
        <li><FaBullhorn /> Établissement, en début d’année, du plan de passation des marchés de la commune</li>
        <li><FaBullhorn /> Établissement de l’avis général de passation des marchés et sa publication</li>
      </ul>
    
    </div>
    <Footer />
    </div>
  );
};

export default BureauDesMarchesPublics;
