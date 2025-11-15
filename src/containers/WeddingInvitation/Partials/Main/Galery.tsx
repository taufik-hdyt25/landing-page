"use client";
import { Box, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import GaleryCaoursel from "./Animation/Carousel";
import GaleryCarousel from "./Animation/Carousel";
const MotionStack = motion(Stack);

const GalerySection = () => {
  return (
    <Box
      border={"1px solid rgba(255,255,255,0.5)"}
      mx={4}
      rounded={"2xl"}
      p={3}
      mt={10}
    >
      <Text
        my={3}
        textAlign={"center"}
        fontSize={"2rem"}
        textStyle={"fontEsthetic"}
      >
        Galery
      </Text>

      <MotionStack
        spacing={5}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <GaleryCarousel />
      </MotionStack>
    </Box>
  );
};

export default GalerySection;
