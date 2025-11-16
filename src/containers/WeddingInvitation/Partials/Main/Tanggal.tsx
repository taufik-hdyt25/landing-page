import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MapPinned } from "lucide-react";
import HeartAnimation from "./Animation/HeartAnimation";
import CountDownTime from "./Partials/CountDownTIme";
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

        <CountDownTime />

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
