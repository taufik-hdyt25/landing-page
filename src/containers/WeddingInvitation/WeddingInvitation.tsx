"use client";

import { IPagesParams } from "@/interfaces/IBaseParams";
import { Box, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { MainPage, OpenFirst } from "./Partials";
import { configEnv } from "@/lib/configEnv";
import AudioPlay from "./Partials/Main/Partials/AudioPlay";

const WeddingInvitation: React.FC<IPagesParams> = ({ params }) => {
  const { isOpen, onOpen } = useDisclosure();
  const isProd = configEnv.isProd || false;
  const [wantToPlay, setWantToPlay] = useState(false);

  return (
    <Box w="100%" h="100vh">
      {isProd === "true" && (
        <Box w="100%" h="100vh">
          {!isOpen ? (
            <OpenFirst
              params={params}
              onOpenInviataion={() => {
                onOpen();
                setWantToPlay(true);
              }}
            />
          ) : (
            <MainPage />
          )}
        </Box>
      )}
      {isProd === "false" && (
        <Box w="100%" h="100vh">
          {!isOpen ? (
            <OpenFirst
              params={params}
              onOpenInviataion={() => {
                onOpen();
                setWantToPlay(true);
              }}
            />
          ) : (
            <MainPage />
          )}
        </Box>
      )}

      {isOpen && (
        <AudioPlay setWantToPlay={setWantToPlay} wantToPlay={wantToPlay} />
      )}
    </Box>
  );
};

export default WeddingInvitation;
