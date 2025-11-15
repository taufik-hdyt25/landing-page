"use client";

import { Center, Flex, Text } from "@chakra-ui/react";
import {
  CalendarHeart,
  HomeIcon,
  Images,
  MessageCircle,
  Users,
} from "lucide-react";
import { JSX } from "react";

interface IProps {}

const NavigationBottom: React.FC<IProps> = ({}): JSX.Element => {
  return (
    <Center
      bg={"#212529"}
      roundedTop={"xl"}
      p={2}
      justifyContent={"space-between"}
      pos={"sticky"}
      bottom={0}
      w={"Full"}
      zIndex={99}
      borderTop={"1px solid rgba(255,255,255,0.3)"}
    >
      <Flex
        flexDirection={"column"}
        align={"center"}
        cursor={"pointer"}
        onClick={() => {
          const el = document.getElementById("home-section");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <HomeIcon style={{ color: "white" }} />
        <Text fontSize={"sm"} color={"white"}>
          Home
        </Text>
      </Flex>
      <Flex
        flexDirection={"column"}
        align={"center"}
        cursor={"pointer"}
        onClick={() => {
          const el = document.getElementById("mempelai-section");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <Users style={{ color: "white" }} />
        <Text fontSize={"sm"} color={"white"}>
          Mempelai
        </Text>
      </Flex>
      <Flex
        flexDirection={"column"}
        align={"center"}
        cursor={"pointer"}
        onClick={() => {
          const el = document.getElementById("tanggal-section");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <CalendarHeart style={{ color: "white" }} />
        <Text fontSize={"sm"} color={"white"}>
          Tanggal
        </Text>
      </Flex>
      <Flex
        flexDirection={"column"}
        align={"center"}
        cursor={"pointer"}
        onClick={() => {
          const el = document.getElementById("galery-section");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <Images style={{ color: "white" }} />
        <Text fontSize={"sm"} color={"white"}>
          Galery
        </Text>
      </Flex>
      <Flex
        flexDirection={"column"}
        align={"center"}
        cursor={"pointer"}
        onClick={() => {
          const el = document.getElementById("ucapan-section");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <MessageCircle style={{ color: "white" }} />
        <Text fontSize={"sm"} color={"white"}>
          Ucapan
        </Text>
      </Flex>
    </Center>
  );
};

export default NavigationBottom;
