import { Box, Center, Grid, GridItem, Text } from "@chakra-ui/react";
import Home from "./Main/Home";
import NavigationBottom from "@/components/NavigationBottom/NavigationBottom";
import { useActiveSection } from "@/hooks/useActiveSection";

const MainPage = () => {
  const ids = [
    "home-section",
    "mempelai-section",
    "tanggal-section",
    "galery-section",
    "ucapan-section",
  ];

  const active: any =
    useActiveSection(ids, "scroll-container") || "home-section";

  return (
    <Box>
      <Grid templateColumns={{ base: "1fr", md: "1fr 378px" }} h={"100vh"}>
        <GridItem
          bgImage="url('/images/bg.webp')"
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          overflow="hidden"
          position={"relative"}
          display={{ base: "none", md: "grid" }}
        >
          <Box
            position="absolute"
            top={0}
            left={0}
            w="full"
            h="full"
            bg="blackAlpha.800"
            zIndex={1}
          />

          <Center h={"full"} position="relative" zIndex={2}>
            <Box
              p={8}
              bg={"rgba(0,0,0,0.5)"}
              rounded={"30px"}
              textAlign={"center"}
            >
              <Text fontSize={24} textStyle={"fontEsthetic"} color={"white"}>
                Taufik & Hidayat
              </Text>
              <Text fontSize={14} mt={3} color={"white"}>
                Rabu, 15 Maret 2023
              </Text>
            </Box>
          </Center>
        </GridItem>
        <GridItem pos={"relative"} overflowY={"auto"} id="scroll-container">
          <Home />
          <NavigationBottom active={active} />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default MainPage;
