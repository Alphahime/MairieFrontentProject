import React from 'react';
import './Topbar.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn , FaWhatsapp } from 'react-icons/fa'; // Icônes réseaux sociaux
import { FaXTwitter } from "react-icons/fa6"
function Topbar() {
  return (
    <div className="topbar">
     <div className="topbar-left">
  <p>
    <i className="bi bi-telephone"></i> (+221) 33 872 71 41 | 
    <i className="bi bi-clock"></i> Du Lundi au Vendredi: 08h - 16h
  </p>
</div>

      <div className="footer-socialstopbar">
        <a href="https://www.facebook.com/share/1EVtUkvYSq/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://x.com/Communetsm?t=lpUH5oepjzxHGYPOy099kg&s=08" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
        <a href="https://www.instagram.com/communedethiaroyesurmer?utm_source=qr&igsh=MWVhcnV5a2xoOWRxcA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com/posts/commune-de-thiaroye-sur-mer_thiaroyebiaehubaebg-thiaroyebubess-inclusion-activity-7300974448248041474-lHVx?utm_source=share&utm_medium=member_android&rcm=ACoAAFabC74BvQC5UDj5BE4V_HfpFqruPwDdt6g" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        <a href="https://whatsapp.com/channel/0029VamEcIiC1Fu4BtJnKk1q" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
      </div>
    </div>
  );
}

export default Topbar;
