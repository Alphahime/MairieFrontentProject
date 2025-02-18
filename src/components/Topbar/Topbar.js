import React from 'react';
import './Topbar.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn , FaWhatsapp } from 'react-icons/fa'; // Icônes réseaux sociaux
import { FaXTwitter } from "react-icons/fa6"
function Topbar() {
  return (
    <div className="topbar">
     <div className="topbar-left">
  <p>
    <i className="bi bi-telephone"></i> (+221) 33 849 81 81 | 
    <i className="bi bi-clock"></i> Du Lundi au Vendredi: 08h - 16h
  </p>
</div>

      <div className="footer-socialstopbar">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        <a href="https://wa.me/221338498181" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
      </div>
    </div>
  );
}

export default Topbar;
