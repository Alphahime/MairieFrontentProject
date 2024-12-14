import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./BannerSlider.css";
import pecheImage from "../assets/images/peche.jpeg";
import cemThiaroyeImage from "../assets/images/cemthiaroyesurmer.jpg";
import thiaroyeHistoryImage from "../assets/images/thiaroyehistory.jpeg";

const BannerSlider = () => {
  const sliderRef = React.useRef(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [
    {
      image: pecheImage,
      text: "Découvrez la pêche artisanale.",
      link: "#explore-peche", 
    },
    {
      image: cemThiaroyeImage,
      text: "Explorez CEM Thiaroye-sur-Mer.",
      link: "#explore-cem",
    },
    {
      image: thiaroyeHistoryImage,
      text: "Découvrez l'histoire de Thiaroye.",
      link: "#explore-history",
    },
  ];

  return (
    <div className="banner-slider">
      {/* Boutons de navigation */}
      <button
        className="slider-btn left-btn"
        onClick={() => sliderRef.current.slickPrev()}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        className="slider-btn right-btn"
        onClick={() => sliderRef.current.slickNext()}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      <Slider ref={sliderRef} {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={`Slide ${index + 1}`} />
            <div className="slide-text">
              <p>{slide.text}</p>
              <a href={slide.link} className="explore-btn">
                Explorer
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
