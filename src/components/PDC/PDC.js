import React from "react";
import "./PDC.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import pdcPDF from "../../assets/images/PDC de Thiaroye Sur Mer - Mars 2024 vf.pdf"; // Import du fichier PDF
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
const PDC = () => {
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
      <div className="pdc-container">
        <h1>Plan de Développement Communal (PDC)</h1>
        <p>
          Le Plan de Développement Communal (PDC) de Thiaroye Sur Mer est un document stratégique qui guide les actions de développement de la commune. Vous pouvez visualiser ou télécharger le document ci-dessous.
        </p>

        {/* Lien pour visualiser ou télécharger le PDF */}
        <div className="pdc-document">
          <a
            href={pdcPDF}
            target="_blank"
            rel="noopener noreferrer"
            className="pdc-link"
          >
            📄 Visualiser le PDC
          </a>
          <a
            href={pdcPDF}
            download="PDC de Thiaroye Sur Mer - Mars 2024 vf.pdf"
            className="pdc-link"
          >
            ⬇️ Télécharger le PDC
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PDC;