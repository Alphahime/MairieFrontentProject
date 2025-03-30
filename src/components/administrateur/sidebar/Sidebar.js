import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaCalendarAlt,
  FaLightbulb,
  FaNewspaper,
  FaProjectDiagram,
  FaFileAlt,
} from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Administration</h2>
      <ul>
        <li>
          <Link to="/admin/gestion-rendez-vous">
            <FaCalendarAlt className="icon" /> Gestion des Rendez-vous
          </Link>
        </li>
        <li>
          <Link to="/admin/boite-a-idee">
            <FaLightbulb className="icon" /> Boîte à Idées
          </Link>
        </li>
        <li>
          <Link to="/admin/actualites">
            <FaNewspaper className="icon" /> Actualités
          </Link>
        </li>
        <li>
          <Link to="/admin/projets">
            <FaProjectDiagram className="icon" /> Projets
          </Link>
        </li>
        <li>
          <Link to="/admin/demande-documents">
            <FaFileAlt className="icon" /> Demande de Documents
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;