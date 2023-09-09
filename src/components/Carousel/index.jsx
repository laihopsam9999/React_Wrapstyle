import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import useStyleCarousel from "../Carousel/style.js";

import Product from "../Product/index.jsx";

SwiperCore.use([Navigation, Pagination]);

function Carousel(props) {
  const classes = useStyleCarousel();

  return (
    <div className={classes.carouselThree}>
      <Swiper
        tag="section"
        wrapperTag="ul"
        slidesPerView={4}
        spaceBetween={25}
        // freeMode={true}
        navigation
        // pagination
        onInit={(swiper) => console.log("Swiper initialized!", swiper)}
        onSlideChange={(swiper) =>
          console.log("Slides index changed to: ", swiper.activeIndex)
        }
        id="main"
      >
        {props.courseHome.map((courseItem) => {
          return (
            <SwiperSlide key={courseItem.id} tag="li">
              <Product course={courseItem} key={courseItem.id} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
    // <h1>sam</h1>
  );
}
export default Carousel;
