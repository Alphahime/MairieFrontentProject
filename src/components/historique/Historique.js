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
          <h1>Historique de Thiaroye sur Mer</h1>
          <p>Découvrez l'histoire riche et inspirante de Thiaroye sur Mer, une commune aux racines profondes et à l'avenir prometteur.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          {/* Section 1 : Origines et Fondation */}
          <div className="section-item">
            <img
              src={require("../../assets/images/historique1.jpg")}
              alt="Origines et Fondation"
              className="section-image"
            />
            <div className="section-text">
              <h2>Origines et Fondation</h2>
              <p>
                L'histoire de Thiaroye sur Mer remonte au 18ème siècle, lors de la deuxième vague de peuplement du Cap-Vert. Fondé par des migrants venus du Djoloff et du Cayor, le village a été créé entre 1770 et 1780 par Médoune NIANG. Après une épidémie de peste en 1912, les habitants se sont déplacés pour s'installer définitivement sur le site actuel en 1916.
              </p>
            </div>
          </div>

          {/* Section 2 : Événements Historiques */}
          <div className="section-item reverse">
            <img
              src={require("../../assets/images/historique2.jpg")}
              alt="Événements Historiques"
              className="section-image"
            />
            <div className="section-text">
              <h2>Événements Historiques</h2>
              <ul className="accordion">
                <li>
                  <button
                    className={`accordion-button ${
                      activeDate === "1831" ? "active" : ""
                    }`}
                    onClick={() => toggleContent("1831")}
                  >
                    <strong>1831 :</strong> Bataille de Pikine
                  </button>
                  {activeDate === "1831" && (
                    <p className="accordion-content">
                      Thiaroye a participé à la bataille de Pikine en 1831, opposant Matari Anta Diop aux dignitaires de Ndakarou dirigés par l’Imam Matar Sylla.
                    </p>
                  )}
                </li>
                <li>
                  <button
                    className={`accordion-button ${
                      activeDate === "1944" ? "active" : ""
                    }`}
                    onClick={() => toggleContent("1944")}
                  >
                    <strong>1944 :</strong> Massacre de Thiaroye
                  </button>
                  {activeDate === "1944" && (
                    <p className="accordion-content">
                      Le 1er décembre 1944, le massacre des Tirailleurs sénégalais a eu lieu au camp militaire de Thiaroye. Ces anciens combattants réclamaient le paiement de leurs indemnités. Ce tragique événement a marqué l'histoire de la commune.
                    </p>
                  )}
                </li>
                <li>
                  <button
                    className={`accordion-button ${
                      activeDate === "2012" ? "active" : ""
                    }`}
                    onClick={() => toggleContent("2012")}
                  >
                    <strong>2012 :</strong> Reconnaissance par la France
                  </button>
                  {activeDate === "2012" && (
                    <p className="accordion-content">
                      En 2012, le Président français François Hollande a reconnu la répression sanglante de 1944 et a décidé de partager les archives françaises sur ce drame avec le Sénégal.
                    </p>
                  )}
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3 : Organisation Communautaire */}
          <div className="section-item">
            <img
              src={require("../../assets/images/historique3.jpg")}
              alt="Organisation Communautaire"
              className="section-image"
            />
            <div className="section-text">
              <h2>Organisation Communautaire</h2>
              <p>
                Thiaroye sur Mer est structurée autour d'une organisation traditionnelle lébou. Le Chef de village est choisi parmi les descendants de Médoune NIANG. La commune est également dirigée par un Conseil des Djambours, l'Association des Freys, et d'autres institutions traditionnelles qui veillent au respect des us et coutumes.
              </p>
            </div>
          </div>

          {/* Section 4 : Économie et Culture */}
          <div className="section-item reverse">
            <img
              src={require("../../assets/images/historique1.jpg")}
              alt="Économie et Culture"
              className="section-image"
            />
            <div className="section-text">
              <h2>Économie et Culture</h2>
              <p>
                Thiaroye sur Mer est une commune côtière à fort potentiel économique, principalement basé sur la pêche. Avec plus de 170 pirogues débarquant quotidiennement, la pêche est un pilier économique. La commune abrite également des industries comme Phillip Morris et Nestlé Sénégal. Sur le plan culturel, Thiaroye est riche en traditions lébou, avec des cérémonies comme le NDAWRABINE et des hommages aux tuur.
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