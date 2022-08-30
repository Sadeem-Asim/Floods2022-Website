import "swiper/css";
import "./slider.scss";
import "swiper/css/bundle";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Autoplay } from "swiper/core";
import { MDBBtn } from "mdb-react-ui-kit";
// import { getSliderUtilityClass } from "@mui/base";

SwiperCore.use([Autoplay]);

const Slider = ({ imgs }) => {
  return (
    <>
      <Swiper
        spaceBetween={80}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        observer={true}
        observeParents={true}
        pagination={true}
        centeredSlides={true}
        className="swiper"
      >
        {imgs.map((el) => (
          <SwiperSlide className="swiper-slide">
            <img
              src={el}
              key={el}
              alt="sliderImg"
              className="swiper-slide__img"
            />
            <div className="swiper-slide__button-container">
              <Link to="/">
                <MDBBtn className="swiper-slide__button">Mint Now</MDBBtn>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      )
    </>
  );
};

export default Slider;
