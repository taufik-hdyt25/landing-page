"use client";

import { NAVMENU } from "@/constants";
import { capitalizeWords } from "@/helpers/formatText";
import { Box, Flex, HStack, Link, Text } from "@chakra-ui/react";
import { Search } from "lucide-react";
import React, { JSX, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const HeaderHome: React.FC<IProps> = ({ children }): JSX.Element => {
  return (
    <Box>
      <Box
        py={3}
        gap={2}
        bgImage={"url(/bg-hero.png)"}
        bgPosition={"center"}
        objectFit={"cover"}
        w="full"
        h={"50vh"}
        pos={"relative"}
      >
        <HStack
          bg={"myColor.bg-primary"}
          py={5}
          mx={20}
          rounded={"md"}
          shadow={"sm"}
          my={10}
          px={10}
          justify={"space-between"}
          pos="relative"
          zIndex={10}
        >
          <Text fontWeight={"bold"}>Zjox Softwarks</Text>

          <HStack spacing={20}>
            <Flex align={"center"} gap={10}>
              {NAVMENU.map((v, i) => (
                <Link
                  key={v.path}
                  _hover={{
                    textDecoration: "none",
                    color: "myColor.primary",
                  }}
                  href={`#${v.name}`}
                >
                  {capitalizeWords(v.name)}
                </Link>
              ))}
            </Flex>

            <Search />
          </HStack>
        </HStack>

        <Text
          mx={20}
          fontSize={"2rem"}
          color={"white"}
          zIndex={10}
          pos={"relative"}
          fontFamily={"font.title"}
          fontWeight={"bold"}
          lineHeight={1.7}
        >
          Lets make <br /> software together!
        </Text>
        <Box
          zIndex={1}
          pos={"absolute"}
          roundedTopRight={"3xl"}
          top={0}
          width={"50%"}
          h={"full"}
          bg={"black"}
          opacity={0.5}
        />
      </Box>
    </Box>
  );
};

export default HeaderHome;
