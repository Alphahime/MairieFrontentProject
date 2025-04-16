import React from "react";
import "./Deliberation.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
// Import des fichiers PDF
import deliberation016 from "../../assets/images/D_lib_ration nø016 du 09 Octobre 2024.pdf";
import deliberation013 from "../../assets/images/D_lib_ration nø013 du 31 Juillet 2024.pdf";
import deliberation012 from "../../assets/images/D_lib_ration nø12 du 31 Juillet 2024.pdf";
import deliberation011 from "../../assets/images/D_lib_ration nø11 du 31 Juillet 2024.pdf";
import deliberation010 from "../../assets/images/D_lib_ration nø010 du 27 Juin 2024.pdf";
import deliberation009 from "../../assets/images/D_lib_ration nø009 du 27 Juin 2024.pdf";
import deliberation008 from "../../assets/images/D_lib_ration nø008 du 27 Juin 2024.pdf";
import deliberation007 from "../../assets/images/D_lib_ration nø007 du 27 Juin 2024.pdf";
import deliberation006 from "../../assets/images/D_lib_ration nø06 du 28 Mars 2024.pdf";
import deliberation005 from "../../assets/images/D_lib_ration nø05 du 28 Mars 2024.pdf";
import deliberation003 from "../../assets/images/D_lib_ration nø03 du 28 Mars 2024.pdf";
import deliberation002 from "../../assets/images/D_lib_ration nø02 du 28 Mars 2024.pdf";
import deliberation001 from "../../assets/images/D_lib_ration nø01 du 28 Mars 2024.pdf";
import deliberation004 from "../../assets/images/D_lib_raion nø04 du 28 Mars 2024.pdf";

const Deliberation = () => {
  // Liste des délibérations avec leurs noms et fichiers PDF
  const deliberations = [
    { name: "Délibération n°016 du 09 Octobre 2024", file: deliberation016 },
    { name: "Délibération n°013 du 31 Juillet 2024", file: deliberation013 },
    { name: "Délibération n°12 du 31 Juillet 2024", file: deliberation012 },
    { name: "Délibération n°11 du 31 Juillet 2024", file: deliberation011 },
    { name: "Délibération n°010 du 27 Juin 2024", file: deliberation010 },
    { name: "Délibération n°009 du 27 Juin 2024", file: deliberation009 },
    { name: "Délibération n°008 du 27 Juin 2024", file: deliberation008 },
    { name: "Délibération n°007 du 27 Juin 2024", file: deliberation007 },
    { name: "Délibération n°06 du 28 Mars 2024", file: deliberation006 },
    { name: "Délibération n°05 du 28 Mars 2024", file: deliberation005 },
    { name: "Délibération n°03 du 28 Mars 2024", file: deliberation003 },
    { name: "Délibération n°02 du 28 Mars 2024", file: deliberation002 },
    { name: "Délibération n°01 du 28 Mars 2024", file: deliberation001 },
    { name: "Délibération n°04 du 28 Mars 2024", file: deliberation004 },
  ];

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
      <div className="deliberation-container">
        <h1>Délibérations</h1>
        <p>
          Retrouvez ici toutes les délibérations du Conseil Municipal de Thiaroye Sur Mer. Vous pouvez visualiser ou télécharger chaque document.
        </p>

        {/* Liste des délibérations */}
        <div className="deliberation-list">
          {deliberations.map((deliberation, index) => (
            <div key={index} className="deliberation-item">
              <h3>{deliberation.name}</h3>
              <div className="deliberation-actions">
                <a
                  href={deliberation.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="deliberation-link"
                >
                  📄 Visualiser
                </a>
                <a
                  href={deliberation.file}
                  download={`${deliberation.name}.pdf`}
                  className="deliberation-link"
                >
                  ⬇️ Télécharger
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Deliberation;