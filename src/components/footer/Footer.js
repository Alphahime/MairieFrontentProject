// src/components/footer/Footer.js

import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Mairie Thiaroye Sur Mer</h3>
          <p className="footer-address">Adresse: Pikine , Thiaroye Sur Mer</p>
        </div>

        <div className="footer-section">
          <h4>Téléphone</h4>
          <p>(+221) 33 000 00 00</p>
          <h4>Email</h4>
          <p>contact@thiaroy.com</p>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>Secrétariat Municipal</li>
            <li>Service Social</li>
            <li>Service Finance</li>
            <li>Service Etat Civil</li>
            <li>Service Technique</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Liens Utiles</h4>
          <ul>
            <li><a href="https://www.senegalais.net">Etat du Sénégal</a></li>
            <li><a href="https://www.presidence.sn">Présidence</a></li>
            <li><a href="https://www.assemblee.sn">Assemblée Nationale</a></li>
            <li><a href="https://www.collectivites-territoriales.sn">Ministère collectivités territoriales</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Réclamations</h4>
          <button className="reclamation-btn">Cliquez ici pour réclamation</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 THIAROYE SUR MER - Réalisé par Expert plus contact.expertplus.sn Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
