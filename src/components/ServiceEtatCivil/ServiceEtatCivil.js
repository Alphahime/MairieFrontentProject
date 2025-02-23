import React from "react";
import { FaBuilding, FaUserTie, FaMapMarkerAlt } from "react-icons/fa";
import "./ServiceEtatCivil.css";
import Header from '../header/Header';
import Footer from '../footer/Footer';
const ServiceEtatCivil = () => {
  return (
    <div className="bigcontent">
          <Header />
    <div className="etat-civil-container">
      
      <div className="header-etat-civil">
        <h1>Service de l'État Civil</h1>
      </div>

      <div className="content-etat-civil">
        <section className="section-etat-civil">
          <h2><FaBuilding className="icon" /> La Division de l'État Civil</h2>
          <p>
            La fonction d’officier d’état civil est dévolue au Maire. Conformément
            aux dispositions de l’article 108 du Code Général des Collectivités
            Territoriales (CGCT), il peut déléguer cette fonction à :
          </p>
          <ul>
            <li> Un adjoint</li>
            <li> Un conseiller municipal</li>
            <li> Un ou plusieurs agents communaux âgés d’au moins 21 ans</li>
          </ul>
        </section>

        <section className="section-etat-civil">
          <h2><FaUserTie className="icon" /> Rôle de l'Officier d'État Civil</h2>
          <p>
            L’officier de l’état civil est chargé de :
          </p>
          <ul>
            <li>Réception des déclarations des naissances et des décès</li>
            <li>Célébration ou constatation des mariages</li>
            <li>Rédaction des actes et conservation des registres</li>
            <li> Délivrance de copies et extraits d’actes d’état civil</li>
          </ul>
        </section>

        <section className="section-etat-civil">
          <h2><FaMapMarkerAlt className="icon" /> Centres d'État Civil</h2>
          <p>
            La commune dispose de :
          </p>
          <ul>
            <li> Un centre principal créé en 1978</li>
            <li> Un centre secondaire créé en 2024</li>
          </ul>
        </section>
      </div>
     
    </div>
    <Footer />
    </div>
  );
};

export default ServiceEtatCivil;
