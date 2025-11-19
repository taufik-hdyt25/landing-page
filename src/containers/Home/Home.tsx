"use client";

import { IPagesParams } from "@/interfaces/IBaseParams";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Home: React.FC<IPagesParams> = ({ params }) => {
  return (
    <Box>
      <Text>Ini adalah home</Text>
    </Box>
  );
};

export default Home;
