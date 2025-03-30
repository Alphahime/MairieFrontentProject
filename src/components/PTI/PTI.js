import React from "react";
import "./PTI.css";
import PTI_PDF from "../../assets/images/PTI 25-27.pdf";
import Header from '../header/Header';
import Footer from '../footer/Footer';
const PTI = () => {
  return (
    <div className="bigcontainpti">
          <Header />
    <div className="pti-container">
       
      <h1>Projet Triennal Investissement (PTI)</h1>
      <iframe 
        src={PTI_PDF} 
        title="PTI Document"
        width="100%"
        height="600px"
      />
      <p>Télécharger le <a href={PTI_PDF} download>PDF ici</a>.</p>
     
    </div>
    <Footer />
    </div>
  );
};

export default PTI;