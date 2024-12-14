import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import des composants
import Home from "./components/home/Home";
import Blog from "./components/blog/Blog";
import Administrateur from "./components/administrateur/Administrateur";
import Evenement from "./components/evenement/Evenement";
import Rendezvous from "./components/rendezvous/Rendezvous";
import Historique from "./components/historique/Historique";
import Agenda from "./components/agenda/Agenda";
import Contact from './components/contact/Contact';
import BannerSlider from "./components/BannerSlider"
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/administrateur" element={<Administrateur />} />
          <Route path="/evenement" element={<Evenement />} />
          <Route path="/rendezvous" element={<Rendezvous />} />
          <Route path="/Historique" element={<Historique />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/slider" element={<BannerSlider />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
