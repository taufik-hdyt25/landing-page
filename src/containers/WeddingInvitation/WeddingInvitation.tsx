"use client";

import { IPagesParams } from "@/interfaces/IBaseParams";
import { Box, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { MainPage, OpenFirst } from "./Partials";

const WeddingInvitation: React.FC<IPagesParams> = ({ params }) => {
  const { isOpen, onOpen } = useDisclosure();

  return (
    <Box w="100%" h="100vh">
      {isOpen ? <OpenFirst onOpenInviataion={onOpen} /> : <MainPage />}
    </Box>
  );
};

export default WeddingInvitation;
