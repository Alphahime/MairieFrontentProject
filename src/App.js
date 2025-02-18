import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import des composants
import Home from "./components/home/Home";
import Blog from "./components/blog/Blog";
import Administrateur from "./components/administrateur/Administrateur";
import Evenement from "./components/evenement/Evenement";
import RendezVous from "./components/rendezvous/RendezVous";

import Actualite from './components/actualite/Actualite'; 

import Historique from "./components/historique/Historique";
import Agenda from "./components/agenda/Agenda";
import Contact from './components/contact/Contact';
import BannerSlider from "./components/BannerSlider"
import Topbar from './components/Topbar/Topbar';

import ServiceTechnique from './components/ServiceTechnique/ServiceTechnique';
import ServiceSocial from './components/ServiceSocial/ServiceSocial';
import ServiceFinance from './components/ServiceFinance/ServiceFinance';
import ServiceEtatCivil from './components/ServiceEtatCivil/ServiceEtatCivil';
import SecretariatMunicipal from './components/SecretariatMunicipal/SecretariatMunicipal';


import ActeNaissance from "./components/ActeNaissance/ActeNaissance";
import ProjetsMunicipaux from "./components/ProjetsMunicipaux/ProjetsMunicipaux";
import PermisConstruction from "./components/PermisConstruction/PermisConstruction";
import ExtraitNaissance from "./components/ExtraitNaissance/ExtraitNaissance";
import BulletinDeces from "./components/BulletinDeces/BulletinDeces";
import CertificatMariage from "./components/CertificatMariage/CertificatMariage";
import CertificatDivorce from "./components/CertificatDivorce/CertificatDivorce";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/administrateur" element={<Administrateur />} />
          <Route path="/evenement" element={<Evenement />} />
          <Route path="/rendezvous" element={<RendezVous />} />
          <Route path="/Historique" element={<Historique />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/slider" element={<BannerSlider />} />
          <Route path="/topbar" element={<Topbar />} />
          
          {/* <Route path="/service-technique" element={<ServiceSocial />} /> */}
          <Route path="/service-social" element={<ServiceSocial />} />
          <Route path="/service-finance" element={<ServiceFinance />} />
          <Route path="/service-etat-civil" element={<ServiceEtatCivil />} />
          <Route path="/secretariat-municipal" element={<SecretariatMunicipal />} />
          <Route path="/service-technique" element={<ServiceTechnique />} />
        
          <Route path="/acte-naissance" element={<ActeNaissance />} />
          <Route path="/projets-municipaux" element={<ProjetsMunicipaux />} />
          <Route path="/permis-construction" component={<PermisConstruction />} />
          <Route path="/extrait-naissance" element={<ExtraitNaissance />} />
          <Route path="/bulletin-deces" element={<BulletinDeces />} />
          <Route path="/certificat-mariage" element={<CertificatMariage />} />
          <Route path="/certificat-divorce" element={<CertificatDivorce />} />

          <Route path="/actualite" element={<Actualite />} /> 

        </Routes>
      </div>
    </Router>
  );
}

export default App;
