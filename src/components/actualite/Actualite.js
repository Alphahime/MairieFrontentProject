import React from 'react';
import './Actualite.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Image from '../../assets/images/image.png';  
function Actualite() {
  return (
    <div className="actualite-container">
      <Header />

   {/* Bannière en haut de la page avec image et superposition sombre */}
   <div className="actualite-banner" style={{ backgroundImage: `url(${Image})` }}>
        <div className="banner-overlay">
          <h2>Actualité en détail</h2>
        </div>
      </div>
      <div className="actualite-content-wrapper">
        {/* Détail de l'actualité */}
        <div className="actualite-detail">
          <h3 className="actualite-title">Foire 2024</h3>
          <img src={Image} alt="Foire 2024" className="actualite-image" />
          <p className="actualite-description">
            Une réunion publique se tiendra le 10 décembre à 18h pour discuter des nouveaux projets.
            Cet événement est l'occasion de découvrir les dernières innovations en matière de développement durable.
            Nous vous invitons à venir nombreux pour échanger avec des experts et participer à des ateliers pratiques.
          </p>
          <p className="actualite-extended-description">
            La foire 2024 regroupe des entreprises, des institutions et des particuliers qui œuvrent pour un avenir plus
            vert et plus responsable. Ne manquez pas cette chance unique de vous informer et de participer à des projets
            porteurs d’avenir. Venez découvrir de nouvelles technologies, des produits écologiques et bien plus encore.
          </p>
          <a href="#" className="card-link"><span>Découvrir</span></a>
        </div>

        {/* Actualités similaires */}
        <div className="actualite-similaires">
          <h4>Actualités similaires</h4>
          <div className="similar-actualite-card">
            <h5>Conférence 2024</h5>
            <p>Participez à la conférence annuelle le 15 janvier à 10h. Un événement phare pour les professionnels du secteur.</p>
            <a href="#" className="card-link"><span>Découvrir</span></a>
          </div>
          <div className="similar-actualite-card">
            <h5>Webinaire sur les projets</h5>
            <p>Assistez à un webinaire en ligne sur les nouveaux projets le 5 février. Une occasion de poser vos questions en direct.</p>
            <a href="#" className="card-link"><span>Découvrir</span></a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Actualite;
