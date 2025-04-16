import React from "react";
import "./PTI.css";
import PTI_PDF from "../../assets/images/PTI 25-27.pdf";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaDownload, FaEye } from 'react-icons/fa';

const PTI = () => {
  return (
    <div className="bigcontainpti">
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
      
      <div className="pti-container">
        <h1>Projet Triennal d'Investissement (PTI)</h1>
        
        <div className="pdf-options">
          <a 
            href={PTI_PDF} 
            target="_blank" 
            rel="noopener noreferrer"
            className="pdf-button"
          >
            <FaEye /> Visualiser
          </a>
          <a 
            href={PTI_PDF} 
            download 
            className="pdf-button"
          >
            <FaDownload /> Télécharger
          </a>
        </div>
        
        <div className="pdf-viewer-container">
          <iframe 
            src={`${PTI_PDF}#view=FitH`}
            title="Document PTI"
            width="100%"
            height="600px"
            style={{ border: 'none' }}
            loading="lazy"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PTI;