import React from "react";
import classes from "./style.module.css";
// lazy load image
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Lazy } from "swiper";
import "swiper/css";
// effect swiper
import "swiper/css/effect-fade";
// autoplay
import "swiper/css/autoplay";
SwiperCore.use([Autoplay, EffectFade, Lazy]);

export const SliderBanner = (props) => {
  const { imgOrg, data, img500 } = props;
  return (
    <React.Fragment>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 6000,
        }}
        loop={true}
        effect="fade"
        modules={[EffectFade, Autoplay, Lazy]}
        lazy={true}
        preloadImages={false}
        parallax={true}
        className="w-100"
      >
        {data.map(
          (movie, index) =>
            index < 10 && (
              <SwiperSlide data-swiper-autoplay="2000" key={movie.id}>
                <div
                  className={`d-flex align-items-center ${classes.header}`}
                  style={{
                    backgroundImage: `url(${imgOrg + movie.backdrop_path})`,
                  }}
                >
                  <div className="d-flex align-items-center justify-content-center w-100 px-3">
                    <div className="col-12 col-md-6">
                      <h1 className={classes.header_title}>{movie.title}</h1>
                      <p className={classes.header_overview}>
                        {movie.overview}
                      </p>
                      <Link to={`/movie/${movie.id}`}>
                        <button className={classes.btn_infowatch}>
                          More info
                        </button>
                      </Link>
                    </div>
                    <div className="d-none d-md-block">
                      <LazyLoadImage
                        src={img500 + movie.poster_path}
                        alt={movie.title}
                        className={classes.img_movie}
                        effect="blur"
                        threshold={100}
                        delayMethod="debounce"
                        delayTime={300}
                        placeholderSrc={img500 + movie.poster_path}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
        )}
      </Swiper>
    </React.Fragment>
  );
};
