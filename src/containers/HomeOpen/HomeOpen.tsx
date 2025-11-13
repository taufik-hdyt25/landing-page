"use client";

import { IPagesParams } from "@/interfaces/IBaseParams";
import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CalendarHeart, Clock8, MapPin } from "lucide-react";
import React from "react";

const HomeOpen: React.FC<IPagesParams> = ({ params }) => {
  return (
    <Box w="100%" h="100vh" bg={"#DE847B"}>
      <Text
        textAlign={"center"}
        fontSize={24}
        textStyle={"dancing"}
        color={"#B95C50"}
        py={3}
        mb={0}
        bg={"myColor.bg-primary"}
      >
        A &R
      </Text>

      <Box
        bgImage="url('/images/wedding.png')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        h={"25vh"}
        w={"full"}
        pt={2}
        mt={-2}
      >
        <Box mt={10}>
          <Text
            textAlign={"center"}
            fontSize={24}
            textStyle={"caladea"}
            color={"white"}
          >
            THE WEDDING
          </Text>
          <Text
            textAlign={"center"}
            fontSize={24}
            mt={5}
            textStyle={"caladea"}
            color={"white"}
            letterSpacing={10}
          >
            MALVIN & JEANNETE
          </Text>
        </Box>
      </Box>

      <Box px={10} mt={20} pos="relative">
        <Image
          src="/images/flower1.png"
          pos="absolute"
          top="0"
          left="50%"
          transform="translate(-50%, -50%)"
        />
        <Box color="red" h="50vh" w="full" bg="#FEDFE3" p={5} shadow={"md"}>
          <Box border={"1px"} h={"full"} borderColor={"#BB9096"} px={5}>
            <Center flexDirection={"column"} my={10}>
              <Image src="/images/ring.png" />
              <Text
                textAlign={"center"}
                fontSize={36}
                textStyle={"dancing"}
                color={"#965A00"}
                pt={3}
                mb={0}
                bg={"myColor.bg-primary"}
              >
                Akad nikah
              </Text>
            </Center>

            <Stack spacing={5}>
              <HStack align="center" spacing={3}>
                <CalendarHeart />
                <Text fontSize={14} color="black">
                  Monday, April 8th 2022
                </Text>
              </HStack>

              <HStack align="center" spacing={3}>
                <Clock8 />
                <Text fontSize={14} color="black">
                  07.00 PM
                </Text>
              </HStack>

              <HStack align="start" spacing={3}>
                <Box flexShrink={0}>
                  <MapPin />
                </Box>
                <Text color="black" fontSize={14}>
                  Masjid Dian Al-Mahri Jl.Pancoranmas, cinere, Depok
                </Text>
              </HStack>
            </Stack>

            <Button w={"full"} rounded={"full"} mt={6}>
              Open Map
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeOpen;
