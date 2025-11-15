"use client";

import { Box, Image, Flex } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

const images = [
  "https://shorthand.com/the-craft/raster-images/assets/5kVrMqC0wp/sh-unsplash_5qt09yibrok-4096x2731.jpeg",
  "https://shorthand.com/the-craft/types-of-image-file-formats/assets/UPhtO6IIvn/sh-unsplash_4qgbmezb56c-4096x2731.jpeg",
  "https://shorthand.com/the-craft/raster-images/assets/5kVrMqC0wp/sh-unsplash_5qt09yibrok-4096x2731.jpeg",
];

export default function Carousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      const next = (index + 1) % images.length;
      scrollToIndex(next);
      setIndex(next);
    }, 3000);

    return () => clearInterval(timer);
  }, [index]);

  const scrollToIndex = (i: number) => {
    scrollRef.current?.scrollTo({
      left: scrollRef.current.clientWidth * i,
      behavior: "smooth",
    });
  };

  // Detect slide when swipe is done
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const width = scrollRef.current.clientWidth;

    const newIndex = Math.round(scrollLeft / width);
    setIndex(newIndex);
  };

  return (
    <Box w="full" overflow="hidden" position="relative">
      {/* SWIPE CAROUSEL */}
      <Flex
        ref={scrollRef}
        overflowX="scroll"
        scrollSnapType="x mandatory"
        onScroll={handleScroll}
        sx={{
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
        gap={4}
      >
        {images.map((src, idx) => (
          <Box key={idx} flex="0 0 100%" scrollSnapAlign="center">
            <Image
              src={src}
              w="100%"
              h={{ base: "220px", md: "180px" }}
              objectFit="cover"
              rounded="xl"
            />
          </Box>
        ))}
      </Flex>

      <Flex
        position="absolute"
        bottom="12px"
        left="50%"
        transform="translateX(-50%)"
        gap={2}
      >
        {images.map((_, i) => (
          <Box
            key={i}
            h="4px"
            w={i === index ? "28px" : "14px"}
            bg={i === index ? "white" : "whiteAlpha.500"}
            rounded="full"
            transition="all 0.3s"
          />
        ))}
      </Flex>
    </Box>
  );
}
