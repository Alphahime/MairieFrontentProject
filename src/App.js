import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

// Import des composants
import Home from "./components/home/Home";
import Blog from "./components/blog/Blog";
import Evenement from "./components/evenement/Evenement";
import RendezVous from "./components/rendezvous/RendezVous";
import Actualite from './components/actualite/Actualite'; 
import DetailsActualite from "./components/details-actualites/DetailsActualite";
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
import Connexion from "./components/authentication/connexion/Connexion";
import BoiteAIdee from "./components/boite-a-idee/BoiteAIdee";
import BureauDesMarchesPublics from './components/BureauDesMarchesPublics/BureauDesMarchesPublics';
import BureauDeDeveloppementLocal from './components/BureauDeDeveloppementLocal/BureauDeDeveloppementLocal';
import DAGF from './components/DAGF/DAGF';
import CabinetDuMaire from "./components/CabinetDuMaire/CabinetDuMaire";
import ConseilMunicipal from "./components/ConseilMunicipal/ConseilMunicipal"; 
import MaireEtAdjoints from "./components/MaireEtAdjoints/MaireEtAdjoints";
import PDC from "./components/PDC/PDC"; 
import Deliberation from "./components/Deliberation/Deliberation";
import HomeAdmin from "./components/administrateur/home-admin/HomeAdmin";
import GestionRendezVous from "./components/administrateur/gestion-rendez-vous/GestionRendezVous";
import BoiteAIdeeadmin from "./components/administrateur/boite-a-idee/BoiteAIdee";
import Actualites from "./components/administrateur/actualites/Actualites";
import Projets from "./components/administrateur/projets/Projets";
import DemandeDocuments from "./components/administrateur/demande-documents/DemandeDocuments";
import PAI from "./components/PAI/PAI";
import PTI from "./components/PTI/PTI";
import ProjetRestructuration from './components/projet-restructuration/ProjetRestructuration';

// Contexte d'authentification
import { AuthProvider, useAuth } from "./context/AuthContext";

// Composant ProtectedRoute
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/connexion" replace />;
  }

  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Routes>
            {/* Routes publiques */}
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/evenement" element={<Evenement />} />
            <Route path="/rendezvous" element={<RendezVous />} />
            <Route path="/Historique" element={<Historique />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/slider" element={<BannerSlider />} />
            <Route path="/topbar" element={<Topbar />} />
            <Route path="/service-social" element={<ServiceSocial />} />
            <Route path="/service-finance" element={<ServiceFinance />} />
            <Route path="/service-etat-civil" element={<ServiceEtatCivil />} />
            <Route path="/secretariat-municipal" element={<SecretariatMunicipal />} />
            <Route path="/service-technique" element={<ServiceTechnique />} />
            <Route path="/acte-naissance" element={<ActeNaissance />} />
            <Route path="/projets-municipaux" element={<ProjetsMunicipaux />} />
            <Route path="/permis-construction" element={<PermisConstruction />} />
            <Route path="/extrait-naissance" element={<ExtraitNaissance />} />
            <Route path="/bulletin-deces" element={<BulletinDeces />} />
            <Route path="/certificat-mariage" element={<CertificatMariage />} />
            <Route path="/certificat-divorce" element={<CertificatDivorce />} />
            <Route path="/actualite" element={<Actualite />} /> 
            <Route path="/actualites/:id" element={<DetailsActualite />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/boite-a-idees" element={<BoiteAIdee />} />
            <Route path="/marche-public" element={<BureauDesMarchesPublics/>} />
            <Route path="/bureau-developpement-local" element={<BureauDeDeveloppementLocal/>} />
            <Route path="/dagf" element={<DAGF />} />
            <Route path="/cabinet-du-maire" element={<CabinetDuMaire />} /> 
            <Route path="/conseil-municipal" element={<ConseilMunicipal />} />
            <Route path="/maire-adjoint" element={<MaireEtAdjoints />} />
            <Route path="/pdc" element={<PDC />} />
            <Route path="/deliberation" element={<Deliberation />} />
            <Route path="/pai" element={<PAI />} />
            <Route path="/pti" element={<PTI />} />
            <Route path="/projet-restructuration" element={<ProjetRestructuration />} />

            {/* Routes admin protégées */}
            {/* Super Admin - Accès complet */}
  <Route path="/admin" element={
    <ProtectedRoute allowedRoles={['super_admin']}>
      <HomeAdmin />
    </ProtectedRoute>
  } />
         
  {/* Responsable Rendez-vous */}
  <Route path="/admin/gestion-rendez-vous" element={
    <ProtectedRoute allowedRoles={['super_admin', 'responsable_rendezvous']}>
      <GestionRendezVous />
    </ProtectedRoute>
  } />
           {/* Responsable Boîte à idées */}
  <Route path="/admin/boite-a-idee" element={
    <ProtectedRoute allowedRoles={['super_admin', 'responsable_idees']}>
      <BoiteAIdeeadmin />
    </ProtectedRoute>
  } />

            {/* Responsable Actualités */}
  <Route path="/admin/actualites" element={
    <ProtectedRoute allowedRoles={['super_admin', 'responsable_actualites']}>
      <Actualites />
    </ProtectedRoute>
  } />

          {/* Responsable Projets */}
  <Route path="/admin/projets" element={
    <ProtectedRoute allowedRoles={['super_admin', 'responsable_projets']}>
      <Projets />
    </ProtectedRoute>
  } />
             {/* Responsable Documents */}
  <Route path="/admin/demande-documents" element={
    <ProtectedRoute allowedRoles={['super_admin', 'responsable_documents']}>
      <DemandeDocuments />
    </ProtectedRoute>
  } />

          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;