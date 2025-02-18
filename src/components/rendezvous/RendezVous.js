import React, { useState } from 'react';
import './Rendezvous.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function RendezVous() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    date: '',
    heure: '',
    motif: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Rendez-vous enregistré avec succès !');
    console.log(formData);
  };

  return (
    <div className="rendezvous-container">
      <Header />
      <div className="banner-rendezvous">Prendre un Rendez-vous</div>

      <form className="rendezvous-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nom :</label>
          <input type="text" name="nom" value={formData.nom} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Prénom :</label>
          <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email :</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Téléphone :</label>
          <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Date du rendez-vous :</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Heure :</label>
          <input type="time" name="heure" value={formData.heure} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Motif du rendez-vous :</label>
          <textarea name="motif" value={formData.motif} onChange={handleChange} required />
        </div>

        <button type="submit" className="submit-btn">Envoyer la demande</button>
      </form>

      <Footer />
    </div>
  );
}

export default RendezVous;
