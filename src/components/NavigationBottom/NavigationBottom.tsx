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

interface IProps {
  active?:
    | "home-section"
    | "mempelai-section"
    | "tanggal-section"
    | "galery-section"
    | "ucapan-section";
}

const NavigationBottom: React.FC<IProps> = ({ active }): JSX.Element => {
  return (
    <Center
      bg={"#212529"}
      roundedTop={"xl"}
      p={2}
      justifyContent={"space-between"}
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
        <HomeIcon
          style={{
            color:
              active === "home-section" ? "white" : "rgba(255,255,255,0.4)",
          }}
        />
        <Text
          fontSize={"sm"}
          color={active === "home-section" ? "white" : "rgba(255,255,255,0.4)"}
        >
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
        <Users
          style={{
            color:
              active === "mempelai-section" ? "white" : "rgba(255,255,255,0.4)",
          }}
        />
        <Text
          fontSize={"sm"}
          color={
            active === "mempelai-section" ? "white" : "rgba(255,255,255,0.4)"
          }
        >
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
        <CalendarHeart
          style={{
            color:
              active === "tanggal-section" ? "white" : "rgba(255,255,255,0.4)",
          }}
        />
        <Text
          fontSize={"sm"}
          color={
            active === "tanggal-section" ? "white" : "rgba(255,255,255,0.4)"
          }
        >
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
        <Images
          style={{
            color:
              active === "galery-section" ? "white" : "rgba(255,255,255,0.4)",
          }}
        />
        <Text
          fontSize={"sm"}
          color={
            active === "galery-section" ? "white" : "rgba(255,255,255,0.4)"
          }
        >
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
        <MessageCircle
          style={{
            color:
              active === "ucapan-section" ? "white" : "rgba(255,255,255,0.4)",
          }}
        />
        <Text
          fontSize={"sm"}
          color={
            active === "ucapan-section" ? "white" : "rgba(255,255,255,0.4)"
          }
        >
          Ucapan
        </Text>
      </Flex>
    </Center>
  );
};

export default NavigationBottom;
