import React from "react";
import "./Header.css";
import Topbar from '../Topbar/Topbar';

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header id="header" className="header fixed-top">
       <Topbar />
   

      <div className="branding d-flex align-items-center">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <div className="logo"></div>
          <nav id="navmenu" className="navmenu">
            <ul>
            <li>
            <Link to="/" className="active">Accueil</Link>
           </li>
              <li className="dropdown">
                <a href="#about">Municipalité <i className="bi bi-chevron-down"></i></a>
                <ul className="dropdown-menu">
                <li>
                <Link to="/Historique">Historique de la mairie</Link>
                </li>
                <li>
               <Link to="/service-technique">Service Technique</Link>
               </li>
               <li>
               <Link to="/service-social">Service Social</Link>
               </li>
                <li>
                <Link to="/Historique">Service Finance</Link>
                </li><li><li>
                <Link to="/Historique">Service Etat Civil</Link>
                </li>
                <Link to="/Historique">Secrétariat Municipal</Link>
                </li>
                </ul>
              </li>
              <li><Link to="/agenda">Les projets</Link></li>
              <li><a href="#services-side">Services en ligne</a></li>
              <li className="dropdown">
                <a href="#">Actualités <i className="bi bi-chevron-down"></i></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Culture</a></li>
                  <li><a href="#">Budget municipal</a></li>
                  <li><a href="#">Urbanisme</a></li>
                  <li className="dropdown">
                   
                   
                  </li>
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
