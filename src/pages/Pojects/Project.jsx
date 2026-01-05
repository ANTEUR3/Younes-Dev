import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "swiper/css";
const Project = ({ project }) => {
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
        navigation={{nextEl:'.nextEl',prevEl:'.prevEl'}}
        style={{
          height: "400px",
          position: "relative",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {project?.images?.map((image) => (
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
          className="swiper-button-next slider-arrow"
        >
          <ArrowBackIosNewIcon sx={{cursor:'pointer'}} className="prevEl" />
          <Typography sx={{fontWeight:'bold'}}>prev</Typography>
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
          className="swiper-button-prev slider-arrow"
        >
          <Typography sx={{fontWeight:'bold'}}>next</Typography>

          <ArrowForwardIosIcon sx={{cursor:'pointer'}} className="nextEl" />
        </Box>
        <div className="swiper-pagination"></div>
      </Swiper>
    </Container>
  );
};

export default Project;
