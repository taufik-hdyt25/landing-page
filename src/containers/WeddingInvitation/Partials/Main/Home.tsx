import { Box, Button, Center, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { CalendarHeart, Heart } from "lucide-react";
const MotionBox = motion(Box);
const MotionHeart = motion(Heart);

const Home = () => {
  return (
    <Box>
      <Box
        position="relative"
        bg="blue.400"
        h="350px"
        overflow="hidden"
        bgImage="url('/images/bg.webp')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          w="full"
          h="full"
          bg="blackAlpha.700"
          zIndex={1}
        />

        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          pos={"relative"}
          zIndex={2}
        >
          <Box color="white" textAlign="center" pt="100px" fontSize="2xl">
            <Text
              fontSize={24}
              textStyle={"fontEsthetic"}
              color={"white"}
              fontWeight={"bold"}
            >
              Taufik & Hidayat
            </Text>
            <Text fontSize={14} mt={3} color={"white"}>
              Rabu, 15 Maret 2023
            </Text>
            <Button
              size={"sm"}
              leftIcon={<CalendarHeart style={{ width: 14 }} />}
              variant={"outline"}
              fontSize={"xs"}
              mt={4}
              rounded={"full"}
              px={5}
            >
              Save Google Calender
            </Button>
          </Box>
        </MotionBox>

        <Box
          as="svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          position="absolute"
          bottom="0"
          left="0"
          width="100vw"
          height="120px"
          display="block"
          zIndex={1}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86
          C626.18,1.9,684.52-2.49,741.3,3.69c61,6.56,119.85,24.33,
          179.11,39.15,66.86,16.72,136.45,28.83,205.59,19.72V120H0
          V16.48A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="black"
          />
        </Box>
      </Box>

      <Box>
        <Center flexDirection={"column"}>
          <Text
            fontWeight={"600"}
            textStyle={"fontArabic"}
            color={"white"}
            fontSize={"2rem"}
          >
            بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
          </Text>
          <Text
            fontSize={"2rem"}
            textStyle={"fontEsthetic"}
            color={"white"}
            textAlign={"center"}
            lineHeight="1.2"
            mt={10}
          >
            Assalamualaikum <br /> Warahmatullahi Wabarakatuh
          </Text>
        </Center>

        <MotionHeart
          size={34}
          style={{
            color: "white",
            opacity: 0.5,
            marginTop: 20,
            marginLeft: 10,
          }}
          animate={{
            y: [0, -6, 0], // gerak naik, turun
          }}
          transition={{
            duration: 2, // durasi satu siklus
            repeat: Infinity, // ulang terus
            ease: "easeInOut", // gerak halus
          }}
        />
      </Box>
    </Box>
  );
};

export default Home;
