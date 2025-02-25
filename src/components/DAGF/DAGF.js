import React from 'react';
import './DAGF.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { FaMoneyBillAlt, FaChartLine, FaBook, FaUsers, FaReceipt } from 'react-icons/fa';

const DAGF = () => {
  return (
    <div className="bigcontentdaggf">
      <Header />
      <div className="dagf-container">
        {/* Texte en haut */}
        <div className="dagf-text">
          <h1>Division de l’Administration Générale et des Finances (DAGF)</h1>
          <p>
            La Division de l’Administration Générale et des Finances (DAGF) assure la gestion administrative et financière de la commune. Elle est responsable de la comptabilité, du budget, des études financières, des recettes et de la fiscalité. Elle veille également à l'exécution des contrats et à la gestion des ressources matérielles.
          </p>
        </div>

        {/* Cartes en dessous */}
        <div className="cards-containerdagf">
          {/* Carte 1 : Comptabilité et Budget */}
          <div className="cardagf">
            <FaMoneyBillAlt className="icondagf" />
            <h2>Comptabilité et Budget</h2>
            <p>Tenue de la comptabilité, élaboration du budget et établissement du compte administratif.</p>
          </div>

          {/* Carte 2 : Exécution Financière */}
          <div className="cardagf">
            <FaChartLine className="icondagf" />
            <h2>Exécution Financière</h2>
            <p>Exécution des contrats, marchés et commandes en collaboration avec les autres services.</p>
          </div>

          {/* Carte 3 : Études et Planification Financière */}
          <div className="cardagf">
            <FaBook className="icondagf" />
            <h2>Études et Planification Financière</h2>
            <p>Conduite des études financières et planification des ressources.</p>
          </div>

          {/* Carte 4 : Comptabilité des Matières */}
          <div className="cardagf">
            <FaUsers className="icondagf" />
            <h2>Comptabilité des Matières</h2>
            <p>Gestion des approvisionnements et tenue de la comptabilité des matières.</p>
          </div>

          {/* Carte 5 : Recettes et Fiscalité */}
          <div className="cardagf">
            <FaReceipt className="icondagf" />
            <h2>Recettes et Fiscalité</h2>
            <p>Établissement des ordres de recettes et suivi des recouvrements.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DAGF;