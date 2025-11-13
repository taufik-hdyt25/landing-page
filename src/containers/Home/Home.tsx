"use client";

import { IPagesParams } from "@/interfaces/IBaseParams";
import { Box, Button, Center, Image, Text } from "@chakra-ui/react";
import React from "react";

const Home: React.FC<IPagesParams> = ({ params }) => {
  return (
    <Box
      w="100%"
      h="100vh"
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
    >
      <Text
        textAlign={"center"}
        fontSize={24}
        textStyle={"caladea"}
        color={"#B95C50"}
      >
        THE WEDDING
      </Text>
      <Box
        w={"full"}
        h={"50vh"}
        bgImage="url('/images/home.png')"
        bgSize="contain"
        bgPosition="center"
        bgRepeat="no-repeat"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {/* <Text fontSize={24} textStyle={"caladea"} color={"#B95C50"}>
          THE WEDDING
        </Text> */}
        <Text fontSize={24} textStyle={"dancing"} color={"#B95C50"}>
          ANDI 💍 RINDI
        </Text>
      </Box>

      <Center>
        <Button px={16} rounded={"full"} mt={10}>
          Buka Undangan
        </Button>
      </Center>
    </Box>
  );
};

export default Home;
