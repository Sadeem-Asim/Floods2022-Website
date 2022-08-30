import "swiper/css";
import "./slider.scss";
import "swiper/css/bundle";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

<<<<<<< HEAD
import SwiperCore, { EffectCoverflow, Autoplay } from "swiper/core";
// import { MDBTypography } from "mdb-react-ui-kit";
=======
import SwiperCore, { Autoplay } from "swiper/core";
import { MDBBtn } from "mdb-react-ui-kit";
// import { getSliderUtilityClass } from "@mui/base";
>>>>>>> 23ca4c1ee84b4ad7d2cd5ae946f5ebac5e77a6bd

SwiperCore.use([Autoplay]);

const Slider = ({ imgs }) => {
  return (
<<<<<<< HEAD
    <Swiper
      effect={"coverflow"}
      coverflowEffect={{ rotate: 50, stretch: 0, depth: 100, modifier: 1 }}
      centeredSlides={true}
      spaceBetween={50}
      slidesPerView={"3"}
      loop={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
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
        </SwiperSlide>
      ))}
    </Swiper>
=======
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
>>>>>>> 23ca4c1ee84b4ad7d2cd5ae946f5ebac5e77a6bd
  );
};

export default Slider;
