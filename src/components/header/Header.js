import React from "react";
import "./Header.css";
import Topbar from '../Topbar/Topbar';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header" className="header-main fixed-top">
      <Topbar />

      <div className="header-branding d-flex align-items-center">
        <div className="header-container position-relative d-flex align-items-center justify-content-between">
          <div className="header-logo"></div>
          <nav id="header-navmenu" className="header-navmenu">
            <ul>
              <li className="header-dropdown">
                <Link to="/" className="active">Accueil</Link>
                <ul className="header-dropdown-menu">
                  <li>
                    <a href="#services-side">Services en ligne</a>
                  </li>
                </ul>
              </li>

              <li className="header-dropdown">
                <a href="#about">Municipalité <i className="bi bi-chevron-down"></i></a>
                <ul className="header-dropdown-menu">
                  <li>
                    <Link to="/conseil-municipal">Conseil municipal</Link>
                  </li>
                  <li className="header-dropdown">
                    <a href="#conseil-municipal">Exécutif Municipal <i className="bi bi-chevron-right"></i></a>
                    <ul className="header-dropdown-menu">
                      <li><Link to="/maire-adjoint">Maire et Adjoints</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/cabinet-du-maire">Cabinet du Maire</Link>
                  </li>
                  <li className="header-dropdown">
                    <a href="#administration">Administration <i className="bi bi-chevron-right"></i></a>
                    <ul className="header-dropdown-menu">
                      <li><Link to="/secretariat-municipal">Secrétariat Municipal</Link></li>
                      <li><Link to="/dagf">DAGF</Link></li>
                      <li><Link to="/service-etat-civil">État Civil</Link></li>
                      <li><Link to="/service-technique">Service Technique</Link></li>
                      <li><Link to="/marche-public">Bureau des Marchés Publics</Link></li>
                      <li><Link to="/bureau-developpement-local">Bureau de développement Local</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="header-dropdown">
                <a href="#about">Documentation <i className="bi bi-chevron-down"></i></a>
                <ul className="header-dropdown-menu">
                  <li>
                    <Link to="/pdc">PDC</Link>
                  </li>
                  <li>
                    <Link to="/deliberation">Délibération</Link>
                  </li>
                </ul>
              </li>

              <li><Link to="/agenda">Les projets</Link></li>
              <li><Link to="/Historique">Historique</Link></li>

              <li className="header-dropdown">
                <a href="/actualite">Actualités <i className="bi bi-chevron-down"></i></a>
                <ul className="header-dropdown-menu">
                  <li><a href="/actualite">Culture</a></li>
                  <li><a href="/actualite">Budget municipal</a></li>
                  <li><a href="/actualite">Urbanisme</a></li>
                </ul>
              </li>

              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;