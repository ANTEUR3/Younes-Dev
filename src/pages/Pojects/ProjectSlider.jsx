import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

import "swiper/css";
const ProjectSlider = ({ images , index }) => {
  return (
    <Container>
          <Swiper
        effect="coverflow"
        grabCursor
        loop
        slidesPerView="auto"
        centeredSlides
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 2.5,
        }}
        pagination={{el:'',clickable:true}}
        navigation={{nextEl:`.nextEl${index}`,prevEl:`.prevEl${index}`}}
        style={{
          height: "400px",
          position: "relative",
          width:'550px'
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {images?.map((image) => (
          <SwiperSlide>
            <img style={{ width: "100%", height: "90%" }} src={image} alt="" />
          </SwiperSlide>
        ))}
        <Box
          gap={2}
          alignItems={"center"}
          display={"flex"}
          justifyContent={"start"}
          zIndex={1}
          position={"absolute"}
          bottom={1}
          left={3}
          className={`swiper-button-next slider-arrow prevEl${index}`}
          sx={{backgroundColor:'rgba(23, 81, 168, 1)',borderRadius:'100%',padding:1,color:'white',fontSize:'32px'}}
        >
          <GrFormPrevious  />
        </Box>
        <Box
          gap={2}
          alignItems={"center"}
          display={"flex"}
          justifyContent={"start"}
          zIndex={1}
          position={"absolute"}
          bottom={1}
          right={3}
          className={`swiper-button-prev slider-arrow nextEl${index}`}
          sx={{backgroundColor:'rgba(23, 81, 168, 1)',borderRadius:'100%',padding:1,color:'white',fontSize:'32px'}}
        >
          <GrFormNext    />
        </Box>
        <div className="swiper-pagination"></div>
      </Swiper>      
    </Container>
  );
};

export default ProjectSlider;
