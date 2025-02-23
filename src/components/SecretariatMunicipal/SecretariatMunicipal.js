import React from "react";
import "./SecretariatMunicipal.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const SecretariatMunicipal = () => {
  return (
    <div className="contentheader"> 
  <Header />
    <div className="secretariat-container">
    
      <div className="content">
        <h1>Le Secrétariat municipal</h1>
        <p>
          Le secrétaire municipal est nommé par le Maire après avis consultatif
          du représentant de l’État parmi les agents et fonctionnaires de la
          hiérarchie A ou B de la fonction publique ou de niveau équivalent dans
          des conditions précisées par décret.
        </p>
        <p>Il assiste aux réunions du bureau municipal avec voix consultative.</p>
        <p>
          Il coordonne l’organisation et le fonctionnement des services municipaux
          et veille à l’exécution des décisions prises par le Maire.
        </p>
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default SecretariatMunicipal;
