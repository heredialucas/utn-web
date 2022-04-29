import { Swiper, SwiperSlide } from "swiper/react";
import { Img } from "@chakra-ui/react";
import Image from "../../assets/images/img5.jpeg";

import "swiper/css";

export default function Slider() {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      <SwiperSlide>
        <Img w={"100vw"} src={Image}></Img>
      </SwiperSlide>
      <SwiperSlide>
        <Img w={"100vw"} src={Image}></Img>
      </SwiperSlide>
      <SwiperSlide>
        <Img w={"100vw"} src={Image}></Img>
      </SwiperSlide>
      <SwiperSlide>
        <Img w={"100vw"} src={Image}></Img>
      </SwiperSlide>
    </Swiper>
  );
}
