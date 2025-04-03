import React, { useState } from 'react';
import './Home.css';
import { FaFileAlt, FaClipboard, FaCalendarAlt, FaBuilding ,FaHistory, FaRegFileAlt ,FaRegCalendarAlt, FaRegBuilding , FaRegHandshake} from 'react-icons/fa';
// import { FaFileAlt, FaClipboard, FaCalendarAlt, FaBuilding, FaRegFileAlt, FaRegCalendarAlt, FaRegBuilding, FaRegHandshake } from 'react-icons/fa';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { FaPhoneAlt, FaEnvelope, FaShareAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import BannerSlider from "../BannerSlider";
import pecheImage from '../../assets/images/peche.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Actualite from '../ActualiteList/ActualitesList';

import logoAfricainePetrole from "../../assets/images/logoafricainepetrole.jpeg";
import logoAuchan from "../../assets/images/logoauchan.png";
import logoConseil from "../../assets/images/logoconseil.jpeg";
import logoDeegnala from "../../assets/images/logodeegnala.png";
import logoHorizonSansFrontiere from "../../assets/images/logohorizonsansfrontiere.jpeg";
import logoHumanAfrican from "../../assets/images/logohumanafrican.jpeg";
import logoKing from "../../assets/images/logoking.png";
import logoPamecas from "../../assets/images/logopamecas.jpeg";
import logoRikotlo from "../../assets/images/logorikotlo.png";
import logoSonaged from "../../assets/images/logosonaged.png";
import logoNestle from "../../assets/images/logonestle.png";
import logoPolaris from "../../assets/images/logoploaris.jpeg";
import logoIsmo from "../../assets/images/logoismo.jpeg";
import logoMontpelier from "../../assets/images/montepelier.png";
import logoBesport from "../../assets/images/logobesport.png";
import logoTmtv from "../../assets/images/logotmtv.jpg";
import logoElite from "../../assets/images/logoelite.jpeg";

AOS.init();


const Home = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSubDropdownOpen, setSubDropdownOpen] = useState(false);

  


  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleSubDropdown = () => {
    setSubDropdownOpen(!isSubDropdownOpen);
  };

  const [showSocial, setShowSocial] = useState(false);

  // Fonction pour afficher les icônes sociales
  const handleShareHover = () => {
    setShowSocial(true);
  };

  // Fonction pour masquer les icônes sociales
  const handleShareLeave = () => {
    setShowSocial(false);
  };

  
  return (
    
    <div className="index-page">
   <Header />



      <main className="main">
      
      <BannerSlider />

      

     {/* Section Actualités - Version simplifiée pour la page d'accueil */}
     <section className="home-actualites">
      <div className="title-container">
      <h2>Actualités et Annonces</h2>
        <div className="title-decoration">
          <span>
            <span></span>
            <span></span>
          </span>
        </div>
      </div>
      
      <Actualite limit={3} homePage={true} />
      
      <div className="voir-plus-container">
        <Link to="/actualite" className="voir-plus-btn">
          Voir toutes les actualités
        </Link>
      </div>
    </section>



<section id="about" className="about">
      <div className="container">
        <div className="content-wrapper">
          {/* Image */}
          <div className="image-wrapper">
            <img
              src={require('../../assets/images/mairethiaroyesurmer.jpg')}
              alt="Monsieur le Maire de Thiaroye sur Mer"
            />
            <div className="bannermaire">
              <h3>Me El Mamadou NDIAYE<br />Maire de Thiaroye sur mer</h3>
            </div>
          </div>

          {/* Texte */}
          <div className="text-wrapper">
            <div className="title-container">
      <h2>Mot du Maire</h2>
      <div className="title-decoration">
        <span>
          <span></span>
          <span></span>
        </span>
      </div>
    </div>
            <p>
              Chers visiteurs,<br />
              Bienvenue sur le site de notre municipalité !<br />
              Nous sommes ravis de vous accueillir sur le site officiel de la commune de Thiaroye sur mer. Cet espace a été conçu pour vous offrir une navigation simple et intuitive afin de vous tenir informés de toutes les actualités, événements et services locaux.
              Notre municipalité, pleine de dynamisme, une communauté diverse et ancrée dans sa culture avec le village historique des lébous de Thiaroye, est un véritable carrefour de vie avec une histoire riche qui vous sera racontée à travers ce site.
              Que vous soyez résident, un futur habitant ou simplement de passage, chercheurs, étudiants, vous découvrirez ici tout ce qui fait le charme de Thiaroye sur mer : son histoire, ses projets et programmes, ses initiatives, ses illustres fils et ses acteurs engagés pour bâtir une Commune Viable, Compétitive et Attractive.
              Pour tout savoir sur les différents services administratifs, les documents importants, ainsi que les projets à venir, nous vous invitons à aller à la découverte de nos rubriques. N’hésitez pas à consulter notre actualité au quotidien pour être au fait des diverses activités et manifestations qui animent notre communauté.
              Vous trouverez également des informations sur la manière de nous contacter pour toute question ou suggestion. Nous sommes à votre écoute et souhaitons favoriser les échanges.
            </p>
          </div>
        </div>

        {/* Réseaux sociaux */}
       {/* Réseaux sociaux */}
       <div className="social-iconsmaire">
  <ul class="wrapper">
    <li class="icon facebook">
      <span class="tooltip">Facebook</span>
      <svg
        viewBox="0 0 320 512"
        height="1.2em"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
        ></path>
      </svg>
    </li>
    <li class="icon twitter">
      <span class="tooltip">X</span>
      <svg
        height="1.8em"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        class="twitter"
      >
        <path
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        ></path>
      </svg>
    </li>
    <li class="icon linkedin">
      <span class="tooltip">LinkedIn</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1.2em"
        fill="currentColor"
        class="bi bi-linkedin"
        viewBox="0 0 16 16"
      >
        <path
          d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
        ></path>
      </svg>
    </li>
  </ul>
</div>
      </div>
    </section>


  



      </main>

     

      
      <div className="title-container">
      <h2>Accès rapide aux services</h2>
      <div className="title-decoration">
        <span>
          <span></span>
          <span></span>
        </span>
      </div>
    </div>
<section id="quick-services" className="quick-services-section" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${pecheImage})` }}>
  <div className="text-side">
    <div className="cards">
      <p className="card-title">Services en ligne</p>
      <p className="small-desc">
        Découvrez les services en ligne proposés par votre mairie pour simplifier vos démarches administratives.
        Accédez à des services tels que la demande de certificats, l'inscription aux événements municipaux,
        la prise de rendez-vous avec les services de la mairie, et bien plus encore.
      </p>
      <div className="go-corner">
        <div className="go-arrow">→</div>
      </div>
    </div>
  </div>

  <div id="services-side" className="services-side">
    <div className="services-container">
      <Link to="/acte-naissance" className="service-card-link">
        <div className="service-card">
          <FaFileAlt className="service-icon" />
          <h3 className="service-title">Demande d’acte de naissance</h3>
        </div>
      </Link>

      <Link to="/agenda" className="service-card-link">
      <div className="service-card">
      <FaClipboard className="service-icon" />
     <h3 className="service-title">Consultation des projets municipaux</h3>
    </div>
    </Link>

      <Link to="/rendezvous" className="service-card-link">
        <div className="service-card">
          <FaCalendarAlt className="service-icon" />
          <h3 className="service-title">Prendre un rendez-vous</h3>
        </div>
      </Link>

      <div className="service-card">
        <FaBuilding className="service-icon" />
        <h3 className="service-title">Demande de permis de construction</h3>
      </div>

      <Link to="/acte-naissance" className="service-card-link">
        <div className="service-card">
          <FaRegFileAlt className="service-icon" />
          <h3 className="service-title">Extrait de naissance</h3>
        </div>
      </Link>

      <Link to="/acte-naissance" className="service-card-link">
        <div className="service-card">
          <FaRegCalendarAlt className="service-icon" />
          <h3 className="service-title">Bulletin de décès</h3>
        </div>
      </Link>

      <Link to="/acte-naissance" className="service-card-link">
        <div className="service-card">
          <FaRegBuilding className="service-icon" />
          <h3 className="service-title">Certificat de mariage</h3>
        </div>
      </Link>

      <Link to="/acte-naissance" className="service-card-link">
        <div className="service-card">
          <FaRegHandshake className="service-icon" />
          <h3 className="service-title">Certificat de divorce</h3>
        </div>
      </Link>
    </div>
  </div>
</section>

  
<section id="personnalites-mairie" className="personnalites-section">
  
   
      <div className="title-container">
      <h2> L'équipe de la mairie</h2>
      <div className="title-decoration">
        <span>
          <span></span>
          <span></span>
        </span>
      </div>
    </div>
  <a href="/conseil-municipal" className="members-btn" style={{textDecoration: 'none'}}>
  <i className="fas fa-users"></i> Tous les membres
</a>

      <div className="personnalites-container">
        
        {/* Card for Personnalité 1 */}
        <div className="personnalite-card">
          <div className="personnalite-image">
          <img
        src={require('../../assets/images/inconnu.jpg')}
        alt="Lancement du budget participatif"
        className="card-personnalite"
      />
          </div>
          <div className="personnalite-info">
            <h3 className="personnalite-name">Mr le Maire</h3>
            <p className="personnalite-role">Maire de la Ville</p>
            <div className="personnalite-contact">
              <div className="contact-icon">
                <FaPhoneAlt className="phone-icon" />
                <p className="contact-info">+123456789</p>
              </div>
              <div className="contact-icon">
                <FaEnvelope className="email-icon" />
                <p className="contact-info">email@mairie.com</p>
              </div>
            </div>
            <div 
              className="share-icon" 
              onMouseEnter={handleShareHover} 
              onMouseLeave={handleShareLeave}
            >
              <FaShareAlt className="share-icon" />
              {showSocial && (
                <div className="social-icon">
                  <FaFacebookF className="social-icon" />
                  <FaTwitter className="social-icon" />
                  <FaLinkedinIn className="social-icon" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Card for Personnalité 2 */}
        <div className="personnalite-card">
          <div className="personnalite-image">
          <img
        src={require('../../assets/images/inconnu.jpg')}
        alt="Lancement du budget participatif"
        className="card-personnalite"
      />
          </div>
          <div className="personnalite-info">
            <h3 className="personnalite-name">Moustapha SARR </h3>
            <p className="personnalite-role">1er adjoint en charge de l'administration générale et des finances</p>
            <div className="personnalite-contact">
              <div className="contact-icon">
                <FaPhoneAlt className="phone-icon" />
                <p className="contact-info">+987654321</p>
              </div>
              <div className="contact-icon">
                <FaEnvelope className="email-icon" />
                <p className="contact-info">email2@mairie.com</p>
              </div>
            </div>
            <div 
              className="share-icon" 
              onMouseEnter={handleShareHover} 
              onMouseLeave={handleShareLeave}
            >
              <FaShareAlt className="share-icon" />
              {showSocial && (
                <div className="social-icon">
                  <FaFacebookF className="social-icon" />
                  <FaTwitter className="social-icon" />
                  <FaLinkedinIn className="social-icon" />
                </div>
              )}
            </div>
          </div>
        </div>

      
        {/* Card for Personnalité 2 */}
        <div className="personnalite-card">
          <div className="personnalite-image">
          <img
        src={require('../../assets/images/inconnu.jpg')}
        alt="Lancement du budget participatif"
        className="card-personnalite"
      />
          </div>
          <div className="personnalite-info">
            <h3 className="personnalite-name">Yayi Bayam DIOUF</h3>
            <p className="personnalite-role"> 2ème adjointe en charge du développement économique, de la promotion de la femme et de la petite enfance
            </p>
            <div className="personnalite-contact">
              <div className="contact-icon">
                <FaPhoneAlt className="phone-icon" />
                <p className="contact-info">+987654321</p>
              </div>
              <div className="contact-icon">
                <FaEnvelope className="email-icon" />
                <p className="contact-info">email2@mairie.com</p>
              </div>
            </div>
            <div 
              className="share-icon" 
              onMouseEnter={handleShareHover} 
              onMouseLeave={handleShareLeave}
            >
              <FaShareAlt className="share-icon" />
              {showSocial && (
                <div className="social-icon">
                  <FaFacebookF className="social-icon" />
                  <FaTwitter className="social-icon" />
                  <FaLinkedinIn className="social-icon" />
                </div>
              )}
            </div>
          </div>
        </div>

        
        {/* Card for Personnalité 2 */}
        <div className="personnalite-card">
          <div className="personnalite-image">
          <img
        src={require('../../assets/images/inconnu.jpg')}
        alt="Lancement du budget participatif"
        className="card-personnalite"
      />
          </div>
          <div className="personnalite-info">
            <h3 className="personnalite-name">Abdou Aziz GUEYE </h3>
            <p className="personnalite-role">3ème adjoint en charge de la coopération et des partenariats
            </p>
            <div className="personnalite-contact">
              <div className="contact-icon">
                <FaPhoneAlt className="phone-icon" />
                <p className="contact-info">+987654321</p>
              </div>
              <div className="contact-icon">
                <FaEnvelope className="email-icon" />
                <p className="contact-info">email2@mairie.com</p>
              </div>
            </div>
            <div 
              className="share-icon" 
              onMouseEnter={handleShareHover} 
              onMouseLeave={handleShareLeave}
            >
              <FaShareAlt className="share-icon" />
              {showSocial && (
                <div className="social-icon">
                  <FaFacebookF className="social-icon" />
                  <FaTwitter className="social-icon" />
                  <FaLinkedinIn className="social-icon" />
                </div>
              )}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  
       {/* Section Partenaires */}
       <section className="partners-section">
       <div className="title-container">
      <h2> Nos partenaires</h2>
      <div className="title-decoration">
        <span>
          <span></span>
          <span></span>
        </span>
      </div>
    </div>
        <div className="partners-grid">
          {/* Logo 1 */}
          <div className="partner-card">
            <img src={logoAfricainePetrole} alt="Africaine Pétrole" className="partner-logo" />
          </div>
          {/* Logo 2 */}
          <div className="partner-card">
            <img src={logoAuchan} alt="Auchan" className="partner-logo" />
          </div>
          {/* Logo 3 */}
          <div className="partner-card">
            <img src={logoConseil} alt="Conseil" className="partner-logo" />
          </div>
          {/* Logo 4 */}
          <div className="partner-card">
            <img src={logoDeegnala} alt="Deegnala" className="partner-logo" />
          </div>
          {/* Logo 5 */}
          <div className="partner-card">
            <img src={logoHorizonSansFrontiere} alt="Horizon Sans Frontière" className="partner-logo" />
          </div>
          {/* Logo 6 */}
          <div className="partner-card">
            <img src={logoHumanAfrican} alt="Human African" className="partner-logo" />
          </div>
          {/* Logo 7 */}
          <div className="partner-card">
            <img src={logoKing} alt="King" className="partner-logo" />
          </div>
          {/* Logo 8 */}
          <div className="partner-card">
            <img src={logoPamecas} alt="Pamecas" className="partner-logo" />
          </div>
          {/* Logo 9 */}
          <div className="partner-card">
            <img src={logoRikotlo} alt="Rikotlo" className="partner-logo" />
          </div>
          {/* Logo 10 */}
          <div className="partner-card">
            <img src={logoSonaged} alt="Sonaged" className="partner-logo" />
          </div>
           {/* Logo 11 */}
           <div className="partner-card">
            <img src={logoNestle} alt="Nestle" className="partner-logo" />
          </div>
           {/* Logo 12 */}
           <div className="partner-card">
            <img src={logoPolaris} alt="Polaris" className="partner-logo" />
          </div>
           {/* Logo 13 */}
           <div className="partner-card">
            <img src={logoIsmo} alt="Ismo" className="partner-logo" />
          </div>
           {/* Logo 14 */}
           <div className="partner-card">
            <img src={logoMontpelier} alt="Ismo" className="partner-logo" />
          </div>
            {/* Logo 13 */}
            <div className="partner-card">
            <img src={logoBesport} alt="Ismo" className="partner-logo" />
          </div>
           {/* Logo 13 */}
           <div className="partner-card">
            <img src={logoTmtv} alt="Ismo" className="partner-logo" />
          </div>
            {/* Logo 13 */}
            <div className="partner-card">
            <img src={logoElite} alt="Ismo" className="partner-logo" />
          </div>
        </div>
      </section>

    <Footer />

    </div>

    
  );
};

export default Home;
