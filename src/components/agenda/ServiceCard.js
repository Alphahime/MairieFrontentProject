import React from 'react';
import './Agenda.css'; 

const ServiceCard = ({ imageSrc, title, description, icon }) => {
  return (
    <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
      <div className="service-item">
        <div className="img">
          <img src={imageSrc} className="img-fluid" alt={title} />
        </div>
        <div className="details position-relative">
          <div className="icon">
            <i className={`bi ${icon}`}></i>
          </div>
          <a href="service-details.html" className="stretched-link">
            <h3>{title}</h3>
          </a>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
