import React, { useState } from 'react';
import './Contact.css'; 
import Header from '../header/Header';
import Footer from '../footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Contact = () => {
  const [formData, setFormData] = useState({
    nom_utilisateur: '',
    email: '',
    telephone: '',
    service: 'contact_general',
    date_rendez_vous: new Date().toISOString().slice(0, 16),
    motif: '',
    statut: 'en_attente'
  });

  const [errors, setErrors] = useState({
    nom_utilisateur: '',
    email: '',
    telephone: '',
    motif: ''
  });

  const [message, setMessage] = useState({ text: '', type: '' });
  const [isLoading, setIsLoading] = useState(false);

  const validateField = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'nom_utilisateur':
        if (!value.trim()) error = 'Le nom est requis';
        else if (value.length < 2) error = 'Le nom doit contenir au moins 2 caractères';
        break;
      case 'email':
        if (!value) error = 'L\'email est requis';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Email invalide';
        break;
      case 'telephone':
        if (value && !/^[0-9 +-]{8,20}$/.test(value)) error = 'Numéro de téléphone invalide';
        break;
      case 'motif':
        if (!value.trim()) error = 'Le message est requis';
        else if (value.length < 10) error = 'Le message doit contenir au moins 10 caractères';
        break;
      default:
        break;
    }
    
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validation en temps réel
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, value)
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  const validateForm = () => {
    const newErrors = {
      nom_utilisateur: validateField('nom_utilisateur', formData.nom_utilisateur),
      email: validateField('email', formData.email),
      telephone: validateField('telephone', formData.telephone),
      motif: validateField('motif', formData.motif)
    };

    setErrors(newErrors);

    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    const submissionData = {
      ...formData,
      service: 'contact_general',
      date_rendez_vous: new Date().toISOString()
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/rendez-vous', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de l\'envoi du formulaire');
      }

      setMessage({ 
        text: 'Votre message a été envoyé avec succès!', 
        type: 'success' 
      });
      
      setFormData({
        nom_utilisateur: '',
        email: '',
        telephone: '',
        motif: '',
        service: 'contact_general',
        date_rendez_vous: new Date().toISOString().slice(0, 16),
        statut: 'en_attente'
      });

    } catch (error) {
      setMessage({ 
        text: error.message || 'Une erreur est survenue', 
        type: 'error' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <Header />

      <div className="bannercontact">
        <h1>Contact</h1>
      </div>

      <div className="contact section" id="contact">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {/* Contact Info Section */}
            <div className="col-lg-5">
              <div className="info-wrap">
                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h3>Adresse</h3>
                    <p>Thiaroye sur Mer, Dakar, Sénégal</p>
                  </div>
                </div>

                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                  <i className="bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>Téléphone</h3>
                    <p>(+221) 33 872 71 41</p>
                  </div>
                </div>

                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>Email</h3>
                    <p>contact@thiaroye.com</p>
                  </div>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.716060682644!2d-17.384932!3d14.7432123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10ca829c4b01d%3A0x986f50b3692bb8f9!2sThiaroye%20sur%20Mer!5e0!3m2!1sfr!2ssn!4v1620000000000!5m2!1sfr!2ssn"
                  frameBorder="0"
                  style={{ border: 0, width: '100%', height: '270px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="col-lg-7">
              <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <label htmlFor="nom_utilisateur" className="pb-2">Nom et Prénom</label>
                    <input 
                      type="text" 
                      name="nom_utilisateur" 
                      id="nom_utilisateur" 
                      className={`form-control ${errors.nom_utilisateur ? 'is-invalid' : ''}`}
                      value={formData.nom_utilisateur}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required 
                    />
                    {errors.nom_utilisateur && (
                      <div className="invalid-feedback">{errors.nom_utilisateur}</div>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email" className="pb-2">Email</label>
                    <input 
                      type="email" 
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      name="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required 
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="telephone" className="pb-2">Téléphone</label>
                    <input 
                      type="tel" 
                      className={`form-control ${errors.telephone ? 'is-invalid' : ''}`}
                      name="telephone" 
                      id="telephone" 
                      value={formData.telephone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.telephone && (
                      <div className="invalid-feedback">{errors.telephone}</div>
                    )}
                  </div>

                  {/* Champs cachés */}
                  <input type="hidden" name="service" value="contact_general" />
                  <input type="hidden" name="date_rendez_vous" value={new Date().toISOString()} />

                  <div className="col-md-12">
                    <label htmlFor="motif" className="pb-2">Message</label>
                    <textarea
                      className={`form-control ${errors.motif ? 'is-invalid' : ''}`}
                      name="motif"
                      rows="5"
                      id="motif"
                      value={formData.motif}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    ></textarea>
                    {errors.motif && (
                      <div className="invalid-feedback">{errors.motif}</div>
                    )}
                  </div>

                  <div className="col-md-12 text-center">
                    {message.text && (
                      <div className={`alert alert-${message.type === 'success' ? 'success' : 'danger'}`}>
                        {message.text}
                      </div>
                    )}
                    
                    <button type="submit" className="btn btn-primary" disabled={isLoading}>
                      {isLoading ? 'Envoi en cours...' : 'Envoyer le message'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;