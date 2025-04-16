import React, { useState } from 'react';
import './Footer.css'; 
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  // États pour la newsletter
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setMessage({ text: 'Veuillez entrer une adresse email valide', type: 'error' });
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch('http://127.0.0.1:8000/api/newsletters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de l\'inscription');
      }

      setMessage({ 
        text: data.message || 'Merci pour votre inscription à notre newsletter!', 
        type: 'success' 
      });
      setEmail('');
    } catch (error) {
      setMessage({ 
        text: error.message || 'Erreur lors de l\'inscription', 
        type: 'error' 
      });
    } finally {
      setIsLoading(false);
    }
  };

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

       {/* Section Newsletter - Seule partie modifiée */}
       <div className="footer-section">
          <h4>Inscription à la Newsletter</h4>
          <p>Recevez les dernières nouvelles et mises à jour de la mairie.</p>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input 
              type="email" 
              placeholder="Votre email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              aria-label="Adresse email pour la newsletter"
            />
            <button 
              type="submit" 
              disabled={isLoading}
              aria-busy={isLoading}
            >
              {isLoading ? 'Envoi en cours...' : "S'inscrire"}
            </button>
          </form>
          {message.text && (
            <div className={`newsletter-message ${message.type}`}>
              {message.text}
            </div>
          )}
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