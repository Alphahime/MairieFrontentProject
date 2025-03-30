import React from "react";
import "./PAI.css";
import PAI_PDF from "../../assets/images/PAI 25.pdf";
import Header from '../header/Header';
import Footer from '../footer/Footer';
const PAI = () => {
  return (
    <div className="bigcontainpai">
     <Header />
  
    <div className="pai-container">
        
      <h1>Projet Annuel Investissement (PAI)</h1>
      <iframe 
        src={PAI_PDF} 
        title="PAI Document"
        width="100%"
        height="600px"
      />
      <p>Télécharger le <a href={PAI_PDF} download>PDF ici</a>.</p>
     
    </div>
    <Footer />
    </div>
  );
};

export default PAI;