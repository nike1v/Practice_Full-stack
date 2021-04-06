import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };

  return (
    <section className="stickySlider">
      <Slider {...settings}>
        <img
          src="https://i.natgeofe.com/n/8a4cd21e-3906-4c9d-8838-b13ef85f4b6e/tpc18-outdoor-gallery-1002418-12000351_01.jpg?w=636\&h=424"
          height="240"
          alt="carousel#1"
        />
        <img
          src="https://ifpnews.com/wp-content/uploads/2020/04/Ilam-Nature-15.jpg"
          height="240"
          alt="carousel#2"
        />
        <img
          src="https://besthqwallpapers.com/Uploads/20-3-2020/125476/thumb2-bohinj-lake-sunset-hdr-beautiful-nature-slovenia.jpg"
          height="240"
          alt="carousel#3"
        />
      </Slider>
    </section>
  );
};

export default Carousel;
