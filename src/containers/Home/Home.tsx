"use client";

import Header from "@/components/HeaderHome";
import { IPagesParams } from "@/interfaces/IBaseParams";
import {
  Box,
  Card,
  Center,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ArrowRight, CheckIcon } from "lucide-react";
import React from "react";
import { CardProject } from "./Partials";
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
    <Box mb={10}>
      <Header />

      <Box bg={"white"}>
        <Box
          rounded={"md"}
          mx={32}
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

      <Grid
        templateColumns={"1fr 1fr"}
        pt={10}
        h={"fit-content"}
        px={20}
        pb={20}
        gap={5}
        bg={"white"}
      >
        <GridItem pos={"relative"}>
          <HStack ml={16} zIndex={10}>
            <Image
              zIndex={10}
              w={"301px"}
              src="/images/about1.png"
              alt="about1"
            />
            <Stack>
              <Image w={"321px"} src="/images/about2.png" alt="about2" />
              <Image w={"321px"} src="/images/about3.png" alt="about3" />
            </Stack>
          </HStack>

          <Box
            pos={"absolute"}
            bottom={-10}
            left={0}
            bgImage={"url(/svg/circle.svg)"}
            bgRepeat={"no-repeat"}
            bgSize={"contain"}
            w={"118px"}
            h={"118px"}
            justifyContent={"center"}
            alignContent={"center"}
          >
            <Image
              pos={"relative"}
              zIndex={11}
              bgSize={"cover"}
              src="/svg/partials1.svg"
            />
          </Box>
        </GridItem>
        <GridItem>
          <Center>
            <Image zIndex={11} bgSize={"cover"} src="/svg/partials2.svg" />
          </Center>
          <Heading color={"myColor.primary"}>About US</Heading>
          <Text>
            Concept Softworks is a software company, we develop custom built
            software for clients - covering everything from financial
            institutions & medical companies all the way to tech companies and
            government organizations.
          </Text>
        </GridItem>
      </Grid>

      <Box mx={20} my={18}>
        <HStack justify={"space-between"}>
          <Heading size={"lg"} color={"myColor.primary"}>
            Projects
          </Heading>
          <Image
            pos={"relative"}
            zIndex={11}
            bgSize={"cover"}
            src="/svg/drug.svg"
          />
        </HStack>
        <Box overflowX="auto" w="full" className="hide-scrollbar" mt={2}>
          <HStack spacing={4} minW="max-content">
            <CardProject />
            <CardProject />
            <CardProject />
            <CardProject />
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
