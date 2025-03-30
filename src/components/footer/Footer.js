import React from 'react';
import './Footer.css'; 
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Mairie Thiaroye Sur Mer</h3>
          <p className="footer-address">Adresse: Pikine, Thiaroye Sur Mer</p>
        </div>

        <div className="footer-section">
          <h4>Téléphone</h4>
          <p>(+221) 33 872 71 41</p>
          <h4>Email</h4>
          <p>contact@thiaroye.com</p>
        </div>

        {/* Section Newsletter */}
        <div className="footer-section">
          <h4>Inscription à la Newsletter</h4>
          <p>Recevez les dernières nouvelles et mises à jour de la mairie.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Votre email" required />
            <button type="submit">S'inscrire</button>
          </form>
        </div>

        {/* Bouton vers Contact */}
        <div className="footer-section">
          <h4>Une question ?</h4>
          <Link to="/contact" className="contact-btn">Nous Contacter</Link>
        </div>

        {/* Boîte à idées */}
        <div className="footer-section">
          <h4>Boîte à idées</h4>
          <Link to="/boite-a-idees" className="idea-btn">Accéder</Link>
        </div>
      </div>

      {/* Réseaux Sociaux */}
      <div className="footer-socials">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
      </div>

      {/* Bas du footer */}
      <div className="footer-bottom">
        <p>© 2025 Thiaroye sur mer </p>
      </div>
    </footer>
  );
};

export default Footer;
