import "swiper/css";
import "./slider.scss";
import "swiper/css/bundle";

import { Swiper, SwiperSlide } from "swiper/react";
import DButton from "./../../components/3dButton/3dButton.jsx";

import SwiperCore, { EffectCoverflow, Autoplay } from "swiper/core";
import { MDBTypography } from "mdb-react-ui-kit";

SwiperCore.use([EffectCoverflow, Autoplay]);

const Slider = ({ imgs }) => {
  return (
    <Swiper
      effect={"coverflow"}
      coverflowEffect={{ rotate: 50, stretch: 0, depth: 100, modifier: 1 }}
      spaceBetween={100}
      slidesPerView={3}
      loop={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      centeredSlides={true}
      className="swiper"
    >
      {imgs
        ? imgs.map((el) => (
            <SwiperSlide className="swiper-slide">
              <img
                src={el}
                key={el}
                alt="sliderImg"
                className="swiper-slide__img"
              />
              <MDBTypography className="heading-secondary slide-heading">
                Zoo
              </MDBTypography>
              <div className="swiper-slide__button">
                <DButton text="Mint Now" />
              </div>
            </SwiperSlide>
          ))
        : ""}
    </Swiper>
  );
};

export default Slider;
