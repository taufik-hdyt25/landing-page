"use client";

import { Center, Flex, Text } from "@chakra-ui/react";
import { JSX } from "react";
import { GrGallery } from "react-icons/gr";
import { IoChatbubblesOutline, IoPeople } from "react-icons/io5";
import { LuCalendarHeart } from "react-icons/lu";
import { RiHome6Line } from "react-icons/ri";

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
        <RiHome6Line
          style={{
            color:
              active === "home-section" ? "white" : "rgba(255,255,255,0.4)",
            width: 24,
            height: 24,
            transform: active === "home-section" ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.25s ease, color 0.25s ease",
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
        <IoPeople
          style={{
            color:
              active === "mempelai-section" ? "white" : "rgba(255,255,255,0.4)",
            width: 24,
            height: 24,
            transform:
              active === "mempelai-section" ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.25s ease, color 0.25s ease",
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
        <LuCalendarHeart
          style={{
            color:
              active === "tanggal-section" ? "white" : "rgba(255,255,255,0.4)",
            width: 20,
            height: 20,
            transform: active === "tanggal-section" ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.25s ease, color 0.25s ease",
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
        <GrGallery
          style={{
            color:
              active === "galery-section" ? "white" : "rgba(255,255,255,0.4)",
            width: 18,
            height: 18,
            transform: active === "galery-section" ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.25s ease, color 0.25s ease",
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
        <IoChatbubblesOutline
          style={{
            color:
              active === "ucapan-section" ? "white" : "rgba(255,255,255,0.4)",
            width: 24,
            height: 24,
            transform: active === "ucapan-section" ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.25s ease, color 0.25s ease",
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
