import React from "react";
import "./ProjetRestructuration.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import restructurationPDF from "../../assets/images/RESTRUCTURATION URBAINE DE THIAROYE SUR MER ET ENVIRONS.pdf";

const ProjetRestructuration = () => {
  return (
    <div className="bigcontent">
      <Header />
      <div className="pdc-containerprojet">
        <h1>Projet de restructuration urbaine</h1>
        
        <p>
          Ce document présente le projet complet de restructuration urbaine de Thiaroye sur Mer,
          incluant les plans d'aménagement, les études techniques et le calendrier de mise en œuvre.
          Un programme ambitieux pour transformer durablement le cadre de vie des habitants.
        </p>
        
        {/* Lien pour visualiser ou télécharger le PDF */}
        <div className="pdc-documentprojet">
          <a
            href={restructurationPDF}
            target="_blank"
            rel="noopener noreferrer"
            className="pdc-linkprojet"
          >
            📄 Visualiser le document complet
          </a>
          <a
            href={restructurationPDF}
            download="RESTRUCTURATION URBAINE DE THIAROYE SUR MER ET ENVIRONS.pdf"
            className="pdc-linkprojet"
          >
            ⬇️ Télécharger le PDF
          </a>
        </div>

        
      </div>
      <Footer />
    </div>
  );
};

export default ProjetRestructuration;