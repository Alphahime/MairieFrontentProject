import React from 'react';
import './Contact.css'; 
import Header from '../header/Header';
import Footer from '../footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


const Contact = () => {
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
                    <p>Dakar, Sénégal</p>
                  </div>
                </div>

                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                  <i className="bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>Téléphone</h3>
                    <p>+221 77 675 48 07</p>
                  </div>
                </div>

                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>Email</h3>
                    <p>alphandiaye383@gmail.com</p>
                  </div>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
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
              <form
                action="forms/contact.php"
                method="post"
                className="php-email-form"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <label htmlFor="name-field" className="pb-2">Nom et Prénom</label>
                    <input type="text" name="name" id="name-field" className="form-control" required />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email-field" className="pb-2">Email</label>
                    <input type="email" className="form-control" name="email" id="email-field" required />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="subject-field" className="pb-2">Objet</label>
                    <input type="text" className="form-control" name="subject" id="subject-field" required />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="message-field" className="pb-2">Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows="10"
                      id="message-field"
                      required
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                
                    <div className="error-message"></div>
                    

                    <button className="btn btn-primary">Envoyer</button>

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
