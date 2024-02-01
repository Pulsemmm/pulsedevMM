import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import adidas from "../../assets/images/home/Frame 25.webp";
import basket from "../../assets/images/home/Frame 26.webp";
import bauer from "../../assets/images/home/Frame 27.webp";
import karma from "../../assets/images/home/Frame 28.webp";
import recording from "../../assets/images/home/Frame 29.webp";
import universal from "../../assets/images/home/Frame 30.webp";
import training from "../../assets/images/home/Frame 31.webp";
import music from "../../assets/images/home/Frame 32.webp";
import mTV from "../../assets/images/home/mTV.webp";
import mazda from "../../assets/images/home/mazda.webp";
import gap from "../../assets/images/home/gap.webp";
import integrity from "../../assets/images/home/integrity.webp";
import nike from "../../assets/images/home/nike.webp";
import keg from "../../assets/images/home/keg.webp";
import boss from "../../assets/images/home/boss.webp";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Scrollbar, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <div>
      <div className="team-slider">
        <Swiper
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Adjust autoplay settings as needed
          scrollbar={{
            hide: false,
          }}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Scrollbar, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={adidas} alt="img" />
            <img src={basket} alt="img" />
            <img src={bauer} alt="img" />
            <img src={karma} alt="img" />
            <img src={recording} alt="img" />
            <img src={universal} alt="img" />
            <img src={training} alt="img" />
            <img src={music} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={mTV} alt="img" />
            <img src={mazda} alt="img" />
            <img src={gap} alt="img" />
            <img src={integrity} alt="img" />
            <img src={recording} alt="img" />
            <img src={nike} alt="img" />
            <img src={keg} alt="img" />
            <img src={boss} alt="img" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
