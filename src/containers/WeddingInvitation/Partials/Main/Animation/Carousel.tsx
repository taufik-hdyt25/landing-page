"use client";

import { Box, Button, Image } from "@chakra-ui/react";
import { ArrowLeft, LeafIcon } from "lucide-react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1536 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1536, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const images = [
  "https://shorthand.com/the-craft/raster-images/assets/5kVrMqC0wp/sh-unsplash_5qt09yibrok-4096x2731.jpeg",
  "https://shorthand.com/the-craft/types-of-image-file-formats/assets/UPhtO6IIvn/sh-unsplash_4qgbmezb56c-4096x2731.jpeg",
  "https://shorthand.com/the-craft/raster-images/assets/5kVrMqC0wp/sh-unsplash_5qt09yibrok-4096x2731.jpeg",
];

const GeleryCarousel = () => {
  return (
    <div className="w-full">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={2000}
        arrows={false}
        containerClass="carousel-container"
      >
        {images.map((src, index) => (
          <Box key={index} className="carousel-inner-box">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width="100%"
              height={{ base: "fit-content", md: 178 }}
              objectFit="cover"
            />
          </Box>
        ))}
      </Carousel>
    </div>
  );
};

export default GeleryCarousel;
