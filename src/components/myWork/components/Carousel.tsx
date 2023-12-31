import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import articles from "@/articles/articles.json";
import ArticleCard from "./ArticleCard";

const Carousel = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  let initialWidth = 0;
  if (typeof window !== "undefined") {
    initialWidth = window.innerWidth;
  }
  const [width, setWidth] = useState(initialWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  const handleSlideChange = (swiper: {
    realIndex: React.SetStateAction<number>;
  }) => {
    setActiveSlideIndex(swiper.realIndex);
  };

  return (
    <div className="container w-[80vw] sm:w-[90vw]  mx-auto my-5 sm:my-0">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        centeredSlidesBounds={false}
        loop={true}
        slidesPerView={
          width < 600 ? 1 : width < 740 ? 1.7 : width < 1200 ? 3.7 : 4
        }
        onSlideChange={handleSlideChange}
        coverflowEffect={{
          rotate: 0,
          depth: 100,
          stretch: -50,
          slideShadows: false,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        <div className="swiper_container h-[20rem] sm:h-[24rem] lg:h-[30rem]">
          {articles.map((article, key) => {
            return (
              <SwiperSlide
                key={key}
                className={`flex justify-center  h-[20rem] sm:h-[24rem] lg:h-[30rem]`}
              >
                <ArticleCard
                  article={article}
                  isActive={key === activeSlideIndex}
                />
              </SwiperSlide>
            );
          })}
        </div>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow scale-[40%] sm:scale-100"></div>
          <div className="swiper-button-next slider-arrow scale-[40%] sm:scale-100"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
