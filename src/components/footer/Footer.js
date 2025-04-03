import React from 'react';
import './Footer.css'; 
import { Link } from "react-router-dom";
import { FaFacebookF , FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Mairie de Thiaroye sur mer</h3>
          <p className="footer-address">Adresse: Pikine, Thiaroye sur mer</p>
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
        <a href="https://www.facebook.com/share/1EVtUkvYSq/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://x.com/Communetsm?t=lpUH5oepjzxHGYPOy099kg&s=08" target="_blank" rel="noopener noreferrer">
  <FaXTwitter />
</a>
        <a href="https://www.instagram.com/communedethiaroyesurmer?utm_source=qr&igsh=MWVhcnV5a2xoOWRxcA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com/posts/commune-de-thiaroye-sur-mer_thiaroyebiaehubaebg-thiaroyebubess-inclusion-activity-7300974448248041474-lHVx?utm_source=share&utm_medium=member_android&rcm=ACoAAFabC74BvQC5UDj5BE4V_HfpFqruPwDdt6g" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
      </div>

      {/* Bas du footer */}
      <div className="footer-bottom">
        <p>© 2025 Thiaroye sur mer </p>
      </div>
    </footer>
  );
};

export default Footer;
