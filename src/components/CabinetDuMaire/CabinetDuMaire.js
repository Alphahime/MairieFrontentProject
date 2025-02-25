import React from "react";
import "./CabinetDuMaire.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import maireImage from "../../assets/images/mairethiaroyesurmer.jpg"; // Import de l'image
import { FaCalendarAlt, FaEnvelope, FaUsers, FaHandshake, FaBullhorn } from "react-icons/fa"; // Import des icônes

const CabinetDuMaire = () => {
  return (
    <div className="bigcontentcab">
      <Header />
      <div className="cabinet-container">
        {/* Bannière avec image */}
        <div className="cabinet-banner" style={{ backgroundImage: `url(${maireImage})` }}>
          <div className="banner-overlaycab">
            <h1>Le Cabinet du Maire</h1>
            <p>
              Une équipe dédiée à faciliter le travail du Maire et à renforcer les liens avec la communauté.
            </p>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="cabinet-content">
          <section className="cabinet-intro">
            <h2>Rôle du Cabinet</h2>
            <p>
              Le cabinet est une équipe constituée de collaborateurs directs du Maire. Il a pour rôle de faciliter le travail du Maire, de superviser son agenda et ses déplacements, et de veiller à la communication institutionnelle de la commune.
            </p>
          </section>

          {/* Missions du Cabinet */}
          <section className="cabinet-missions">
            <h2>Missions du Cabinet</h2>
            <div className="mission-cards">
              {/* Carte 1 : Organisation des réunions */}
              <div className="mission-card">
                <FaCalendarAlt className="mission-icon" />
                <h3>Organisation des réunions</h3>
                <p>Organisation des réunions programmées avec le Maire et des réunions du conseil municipal.</p>
              </div>

              {/* Carte 2 : Gestion du courrier */}
              <div className="mission-card">
                <FaEnvelope className="mission-icon" />
                <h3>Gestion du courrier</h3>
                <p>Enregistrement et acheminement du courrier aux destinataires.</p>
              </div>

              {/* Carte 3 : Cérémonies et activités */}
              <div className="mission-card">
                <FaUsers className="mission-icon" />
                <h3>Cérémonies et activités</h3>
                <p>Organisation des cérémonies et activités officielles du Maire.</p>
              </div>

              {/* Carte 4 : Partenariats */}
              <div className="mission-card">
                <FaHandshake className="mission-icon" />
                <h3>Partenariats</h3>
                <p>Gestion des partenariats avec les partenaires techniques et financiers.</p>
              </div>

              {/* Carte 5 : Communication */}
              <div className="mission-card">
                <FaBullhorn className="mission-icon" />
                <h3>Communication</h3>
                <p>Veille à la communication institutionnelle de la commune.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CabinetDuMaire;