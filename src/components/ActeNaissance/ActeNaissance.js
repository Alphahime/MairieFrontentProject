import React, { useState } from 'react';
import './ActeNaissance.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function ActeNaissance() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    dateNaissance: '',
    lieuNaissance: '',
    nomPere: '',
    nomMere: '',
    email: '',
    telephone: '',
    adresse: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis :', formData);
    alert('Votre demande a été envoyée avec succès !');
  };

  return (
   
    <div className="acte-naissance">
          <Header />
          <div className="bannerform">
         Demande d'Acte de Naissance
       </div>
    
      <div className="form-container">
        <h1>Demande d'acte de naissance</h1>
        <p>Veuillez remplir le formulaire ci-dessous pour faire votre demande.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nom :</label>
            <input type="text" name="nom" value={formData.nom} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Prénom :</label>
            <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Date de naissance :</label>
            <input type="date" name="dateNaissance" value={formData.dateNaissance} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Lieu de naissance :</label>
            <input type="text" name="lieuNaissance" value={formData.lieuNaissance} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Nom du père :</label>
            <input type="text" name="nomPere" value={formData.nomPere} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Nom de la mère :</label>
            <input type="text" name="nomMere" value={formData.nomMere} onChange={handleChange} required />
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
            <label>Adresse :</label>
            <textarea name="adresse" value={formData.adresse} onChange={handleChange} required></textarea>
          </div>

          <button type="submit">Envoyer la demande</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ActeNaissance;
