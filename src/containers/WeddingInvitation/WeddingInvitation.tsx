"use client";

import { IPagesParams } from "@/interfaces/IBaseParams";
import { Box, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { MainPage, OpenFirst } from "./Partials";
import { configEnv } from "@/lib/configEnv";

const WeddingInvitation: React.FC<IPagesParams> = ({ params }) => {
  const { isOpen, onOpen } = useDisclosure();
  const isProd = configEnv.isProd || false;

  if (isProd === "true") {
    return (
      <Box w="100%" h="100vh">
        {!isOpen ? (
          <OpenFirst params={params} onOpenInviataion={onOpen} />
        ) : (
          <MainPage />
        )}
      </Box>
    );
  }

  return (
    <Box w="100%" h="100vh">
      {isOpen ? (
        <OpenFirst params={params} onOpenInviataion={onOpen} />
      ) : (
        <MainPage />
      )}
    </Box>
  );
};

export default WeddingInvitation;
