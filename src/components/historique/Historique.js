import React, { useState } from "react";
import "./Historique.css";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Historique = () => {
  const [activeDate, setActiveDate] = useState(null);

  const toggleContent = (date) => {
    setActiveDate(activeDate === date ? null : date);
  };

  return (
    <main className="historique-page">
      <Header />
      <section className="hero-historique">
        <div className="hero-overlay">
          <h1>Historique de la mairie</h1>
          <p>Découvrez le parcours riche et inspirant de Thiaroye sur Mer.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          {/* Section 1 */}
          <div className="section-item">
            <img
              src={require("../../assets/images/historique1.jpg")}
              alt="Un Héritage Riche"
              className="section-image"
            />
            <div className="section-text">
              <h2>Un Héritage riche</h2>
              <p>
                La Mairie de Thiaroye Sur Mer a été fondée en [année]. Depuis lors,
                elle a évolué pour devenir un pilier central de la communauté,
                soutenant le développement économique, social et culturel.
              </p>
            </div>
          </div>

          {/* Section 2 with Accordion */}
          <div className="section-item reverse">
            <img
              src={require("../../assets/images/historique2.jpg")}
              alt="Moments Marquants"
              className="section-image"
            />
            <div className="section-text">
              <h2>Les Moments marquants</h2>
              <ul className="accordion">
                <li>
                  <button
                    className={`accordion-button ${
                      activeDate === "1960" ? "active" : ""
                    }`}
                    onClick={() => toggleContent("1960")}
                  >
                    <strong>1960 :</strong> Fondation officielle de la mairie.
                  </button>
                  {activeDate === "1960" && (
                    <p className="accordion-content">
                      La mairie a été fondée en 1960, jouant un rôle central dans le
                      développement communautaire.
                    </p>
                  )}
                </li>
                <li>
                  <button
                    className={`accordion-button ${
                      activeDate === "1975" ? "active" : ""
                    }`}
                    onClick={() => toggleContent("1975")}
                  >
                    <strong>1975 :</strong> Premier projet d'infrastructure moderne.
                  </button>
                  {activeDate === "1975" && (
                    <p className="accordion-content">
                      En 1975, la mairie a lancé son premier projet d'infrastructure
                      moderne, améliorant la connectivité locale.
                    </p>
                  )}
                </li>
                <li>
                  <button
                    className={`accordion-button ${
                      activeDate === "1990" ? "active" : ""
                    }`}
                    onClick={() => toggleContent("1990")}
                  >
                    <strong>1990 :</strong> Introduction des services numériques.
                  </button>
                  {activeDate === "1990" && (
                    <p className="accordion-content">
                      En 1990, des services numériques innovants ont été introduits
                      pour moderniser les interactions avec les citoyens.
                    </p>
                  )}
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="section-item">
            <img
              src={require("../../assets/images/historique3.jpg")}
              alt="Vision pour l'Avenir"
              className="section-image"
            />
            <div className="section-text">
              <h2>Une vision pour l'avenir</h2>
              <p>
                La Mairie continue de travailler pour le bien-être de ses citoyens,
                avec des initiatives axées sur l'innovation et la durabilité.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Historique;
