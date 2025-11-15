import { Box, Button, Center, Flex, HStack, Text } from "@chakra-ui/react";
import { MapPinned } from "lucide-react";
import HeartAnimation from "./Animation/HeartAnimation";
import { motion } from "framer-motion";
const MotionBox = motion(Box);

const TanggalSection = () => {
  return (
    <Box>
      <Box>
        <Text
          fontSize={"2rem"}
          textStyle={"fontEsthetic"}
          color={"white"}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Moment Bahagia
        </Text>

        <HStack
          mx={10}
          mt={5}
          align={"stretch"}
          justify={"space-between"}
          border={"1px solid rgba(255,255,255,0.5)"}
          py={3}
          rounded={"full"}
          px={10}
        >
          <Center flexDirection={"column"}>
            <Text>403</Text>
            <Text fontSize={"xs"}>Hari</Text>
          </Center>
          <Center flexDirection={"column"}>
            <Text>22</Text>
            <Text fontSize={"xs"}>Jam</Text>
          </Center>
          <Center flexDirection={"column"}>
            <Text>14</Text>
            <Text fontSize={"xs"}>Menit</Text>
          </Center>
          <Center flexDirection={"column"}>
            <Text>55</Text>
            <Text fontSize={"xs"}>Detik</Text>
          </Center>
        </HStack>

        <Text fontSize={"xs"} textAlign={"center"} mt={5}>
          Dengan memohon rahmat dan ridho Allah <br /> Subhanahu Wa Ta'ala,
          insyaAllah kami akan <br /> menyelenggarakan acara:
        </Text>

        <Flex justify={"end"} mr={10}>
          <HeartAnimation />
        </Flex>

        <MotionBox
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Text
            fontSize={"2rem"}
            textStyle={"fontEsthetic"}
            color={"white"}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            Akad
          </Text>
          <Text fontSize={"xs"} textAlign={"center"} mt={3}>
            Pukul 10.00 WIB - Selesai
          </Text>
        </MotionBox>
        <MotionBox
          mt={10}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Text
            fontSize={"2rem"}
            textStyle={"fontEsthetic"}
            color={"white"}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            Resepsi
          </Text>
          <Text fontSize={"xs"} textAlign={"center"} mt={3}>
            Pukul 13.00 WIB - Selesai
          </Text>
        </MotionBox>

        <Flex justify={"start"} ml={10}>
          <HeartAnimation />
        </Flex>

        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Center>
            <Button
              variant={"outline"}
              size={"sm"}
              _hover={{
                bg: "white",
                color: "black",
              }}
              cursor={"pointer"}
              leftIcon={<MapPinned style={{ width: 16, height: 16 }} />}
              px={5}
              mt={5}
              rounded={"full"}
              py={3}
            >
              Lihat Google Maps
            </Button>
          </Center>

          <Text fontSize={"xs"} textAlign={"center"} mt={3} mx={3}>
            RT 10 RW 02, Desa Pajerukan, Kec. Kalibagor, Kab. Banyumas, Jawa
            Tengah 53191.
          </Text>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default TanggalSection;
