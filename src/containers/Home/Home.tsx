"use client";

import Header from "@/components/HeaderHome";
import { IPagesParams } from "@/interfaces/IBaseParams";
import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
const MotionBox = motion(Box);

const Home: React.FC<IPagesParams> = ({ params }) => {
  const brands = [
    { src: "/images/brands/woox.png", alt: "woox" },
    { src: "/images/brands/bit.png", alt: "bit" },
    { src: "/images/brands/ankr.png", alt: "ankr" },
    { src: "/images/brands/ex.png", alt: "ex" },
    { src: "/images/brands/meta.png", alt: "meta" },
  ];
  return (
    <Box>
      <Header />

      <Box
        rounded={"md"}
        mx={20}
        p={8}
        bg={"white"}
        mt={-10}
        zIndex={99}
        pos={"relative"}
        shadow={"md"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {brands.map((brand, index) => (
          <MotionBox
            key={brand.alt}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <Image src={brand.src} alt={brand.alt} maxW="100px" />
          </MotionBox>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
