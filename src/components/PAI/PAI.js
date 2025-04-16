import React from "react";
import "./PAI.css";
import PAI_PDF from "../../assets/images/PAI 25.pdf";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaDownload, FaEye } from 'react-icons/fa';

const PAI = () => {
  return (
    <div className="bigcontainpai">
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
      
      <div className="pai-container">
        <h1>Projet Annuel d'Investissement (PAI)</h1>
        
        <div className="pdf-options">
          <a 
            href={PAI_PDF} 
            target="_blank" 
            rel="noopener noreferrer"
            className="pdf-button"
          >
            <FaEye /> Visualiser
          </a>
          <a 
            href={PAI_PDF} 
            download 
            className="pdf-button"
          >
            <FaDownload /> Télécharger
          </a>
        </div>
        
        <div className="pdf-viewer-container">
          <iframe 
            src={`${PAI_PDF}#view=FitH`}
            title="Document PAI"
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

export default PAI;