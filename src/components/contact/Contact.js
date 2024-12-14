// src/components/contact/Contact.js

import React from 'react';
import './Contact.css'; 
import Header from '../header/Header';
import Footer from '../footer/Footer';
const Contact = () => {
  return (
    <div className="contact-container">
        <Header />
      <h1 className='titlecontact'>Thiaroye Sur Mer Contact</h1>

      <div className="breadcrumbs">
        <p>Accueil  &gt;  Contact</p>
      </div>

      <div className="contact-info">
        <h2>Contact</h2>
        <p>Adresse postale de la commune de Dakar Plateau</p>
        <p>1087367</p>
        <p><strong>OBTENIR L'ITINÉRAIRE</strong></p>

        <div className="social-media">
          <h3>Social Media</h3>
          <p>Secrétaire Municipal: sm@dakarplateau.com</p>
          <p>Directeur de Cabinet: dc@dakarplateau.com</p>
          <p>Telephone: (+221) 33 968 10 48</p>
          <p>Du Lundi au Vendredi: 08H:00 - 16H:00</p>
        </div>

        <h3>Contacts d'urgence de la commune de Dakar Plateau</h3>

        <p>Merci de remplir ce formulaire pour vos demandes de renseignements ou réclamations.</p>
      </div>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Prénom - Nom</label>
          <input type="text" id="name" name="name" placeholder="Votre nom" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Votre email" required />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Sujet</label>
          <input type="text" id="subject" name="subject" placeholder="Votre sujet" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Votre message</label>
          <textarea id="message" name="message" placeholder="Votre message" required></textarea>
        </div>

        <button type="submit">Envoyer</button>
      </form>
      <Footer />
    </div>
  );
};

export default Contact;
