import {
  AspectRatio,
  Box,
  Button,
  Center,
  Circle,
  Flex,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import HeartAnimation from "./Animation/HeartAnimation";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useState } from "react";
const MotionBox = motion(Box);
const CenterBox = motion(Center);
const HeartMotion = motion(Heart);
const MempelaiSection = () => {
  const [isOpenStory, setIsOpenStory] = useState(false);
  return (
    <Box>
      <Box
        as="svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        position="absolute"
        bottom="0"
        left="0"
        width="100%"
        height="80px"
        display="block"
        zIndex={1}
      >
        {/* Definisi gradasi */}
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#000" stopOpacity="1" />
            <stop offset="100%" stopColor="#000" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Gelombang dengan kiri tinggi */}
        <path
          fill="url(#waveGradient)"
          d="M0,160L60,150C120,140,240,120,360,130C480,140,600,180,720,200C840,220,960,220,1080,190C1200,160,1320,100,1380,70L1440,40V320H0Z"
        />
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

        <Flex justify={"start"} ml={3}>
          <HeartAnimation />
        </Flex>

        <CenterBox flexDirection={"column"} pos={"relative"}>
          <Box p={0.5} bg={"white"} rounded={"full"} mt={3}>
            <Image h={44} w={44} rounded={"full"} src="/images/cowo.webp" />
          </Box>

          <Text
            textAlign={"center"}
            fontSize={34}
            mt={10}
            textStyle={"fontEsthetic"}
            color={"white"}
          >
            Taufik
          </Text>
          <Text fontWeight={"600"} textAlign={"center"} color={"white"} mt={3}>
            Putra ke-1
          </Text>
          <Box fontSize={12}>
            <Text textAlign={"center"} color={"white"}>
              Bapak ...
            </Text>
            <Text textAlign={"center"} color={"white"}>
              dan
            </Text>
            <Text textAlign={"center"} color={"white"}>
              Ibu ...
            </Text>
          </Box>
        </CenterBox>
        <Text
          textAlign={"center"}
          fontSize={"5rem"}
          mt={5}
          textStyle={"fontEsthetic"}
          color={"white"}
        >
          &
        </Text>

        <Flex justify={"end"} mr={3}>
          <HeartAnimation />
        </Flex>

        <CenterBox
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          flexDirection={"column"}
          pos={"relative"}
        >
          <Box p={0.5} bg={"white"} rounded={"full"} mt={3}>
            <Image h={44} w={44} rounded={"full"} src="/images/cewe.webp" />
          </Box>

          <Text
            textAlign={"center"}
            fontSize={34}
            mt={10}
            textStyle={"fontEsthetic"}
            color={"white"}
          >
            Hidayat
          </Text>
          <Text fontWeight={"600"} textAlign={"center"} color={"white"} mt={3}>
            Putri ke-1
          </Text>
          <Box fontSize={12}>
            <Text textAlign={"center"} color={"white"}>
              Bapak ...
            </Text>
            <Text textAlign={"center"} color={"white"}>
              dan
            </Text>
            <Text textAlign={"center"} color={"white"}>
              Ibu ...
            </Text>
          </Box>
        </CenterBox>

        <Flex justify={"start"} ml={3}>
          <HeartAnimation />
        </Flex>

        <Box
          as="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          transform="rotate(180deg)"
          width="100%"
          height="auto"
          display="block"
          overflow="hidden"
        >
          <path
            fill="#212529"
            fillOpacity="1"
            d="M0,192L40,181.3C80,171,160,149,240,149.3C320,149,400,171,480,165.3C560,160,640,128,720,128C800,128,880,160,960,186.7C1040,213,1120,235,1200,218.7C1280,203,1360,149,1400,122.7L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          />
        </Box>

        <MotionBox pos={"relative"} zIndex={2} bg={"#212529"} px={3} py={5}>
          <Box color="white" textAlign="center" fontSize="2xl" zIndex={3}>
            <Text
              fontSize={"2rem"}
              textStyle={"fontEsthetic"}
              color={"white"}
              textAlign={"center"}
            >
              Allah Subhanahu Wa <br /> Ta'ala berfirman
            </Text>

            <MotionBox
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              p={5}
              fontSize={"sm"}
              bg={"#343A40"}
              textAlign={"center"}
              shadow={"md"}
              rounded={"md"}
              mt={5}
            >
              <Text>
                Dan segala sesuatu Kami ciptakan <br /> berpasang-pasangan agar
                kamu <br />
                mengingat (kebesaran Allah).
              </Text>
              <Text mt={3}>QS. Adh-Dhariyat: 49</Text>
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.4 }}
              p={5}
              fontSize={"sm"}
              bg={"#343A40"}
              textAlign={"center"}
              shadow={"md"}
              rounded={"md"}
              mt={5}
            >
              <Text>
                dan sesungguhnya Dialah yang <br /> menciptakan pasangan
                laki-laki dan <br />
                perempuan.
              </Text>
              <Text mt={3}>QS. An-Najm: 45</Text>
            </MotionBox>
          </Box>
          <Box
            p={5}
            fontSize={"sm"}
            bg={"#343A40"}
            textAlign={"center"}
            shadow={"md"}
            rounded={"3xl"}
            mt={5}
          >
            <Text fontSize={"2rem"} textStyle={"fontEsthetic"}>
              Love Story
            </Text>
            <AspectRatio mt={5} ratio={16 / 9} w="full">
              <Image
                src="/images/bg.webp"
                alt="love-story"
                objectFit="cover"
                rounded="3xl"
              />
            </AspectRatio>

            <Box
              mt={5}
              overflowY={isOpenStory ? "auto" : "hidden"}
              maxH="200px"
              rounded={"md"}
              pos={"relative"}
              css={{
                "&::-webkit-scrollbar": { display: "none" },
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <VStack align="stretch" spacing={10}>
                <TimelineItem />
              </VStack>

              {!isOpenStory && (
                <Box
                  position="absolute"
                  inset={0}
                  backdropFilter="blur(2px)"
                  bg="rgba(255,255,255,0.02)"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Button
                    onClick={() => setIsOpenStory(true)}
                    variant={"outline"}
                    size={"sm"}
                    _hover={{
                      bg: "transparent",
                    }}
                    cursor={"pointer"}
                    leftIcon={
                      <HeartMotion
                        style={{ height: 20, width: 20 }}
                        animate={{
                          y: [0, -6, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    }
                    rounded={"full"}
                    color={"white"}
                  >
                    Lihat Story
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default MempelaiSection;

const TimelineItem: React.FC = () => {
  const steps = [
    {
      title: "💼 Awal Pertemuan Sederhana",
      desc: "Pada Januari 2025, Wahyu, seorang desainer grafis berusia 28 tahun, bertemu Riski, copywriter yang dikenal cerdas dan pendiam, dalam proyek branding perusahaan. Interaksi mereka di ruang rapat terbatas pada urusan kerja, penuh adab dan profesional. Tanpa Wahyu ketahui, Riski sebenarnya pernah melihat karya desain Wahyu di lomba nasional dua tahun lalu dan kagum dengan bakatnya. Namun, sesuai prinsipnya, Riski menjaga jarak dan hanya fokus pada tugas, menghindari interaksi yang tidak perlu.",
    },
    {
      title: "💞 Benih Cinta dalam Ujian",
      desc: "Memasuki Februari 2025, proyek mereka menghadapi krisis: klien menolak konsep awal dan mengancam membatalkan kontrak. Di tengah tekanan, Riski tampil dengan solusi kreatif yang menyelamatkan proyek, membuat Wahyu terkesan dengan ketenangan dan kecerdasannya. Diam-diam, Wahyu mulai memperhatikan Riski lebih dalam, terutama melalui unggahan media sosialnya yang penuh dengan nilai keimanan dan kesabaran. Merasa ada kesamaan visi, Wahyu beristikharah dan memutuskan memulai taaruf. Ia menghubungi seorang ustaz terpercaya sebagai perantara. Kejutan muncul saat Riski mengaku bahwa ia juga telah lama memperhatikan Wahyu, namun menahan diri hingga ada niat yang jelas, sebuah pengakuan yang membuat hati Wahyu hangat.",
    },
    {
      title: "💍 Langkah Menuju Ridha Allah",
      desc: "Proses taaruf berjalan penuh keikhlasan, dengan pendamping yang memastikan setiap langkah sesuai syariat. Wahyu dan Riski saling terbuka tentang impian membangun keluarga yang diridhai Allah. Namun, sebuah ujian datang: keluarga Riski ragu karena latar belakang ekonomi Wahyu yang sederhana. Di sinilah plot twist terungkap—Wahyu mempresentasikan rencana usaha sosial berbasis seni yang telah ia kembangkan diam-diam, menunjukkan visinya untuk memberi manfaat bagi umat. Presentasi itu meluluhkan hati keluarga Riski. Pada Maret 2025, setelah istikharah dan mendapat restu keluarga, Wahyu melamar Riski dalam acara sederhana namun penuh makna. Dengan niat tulus, mereka melangkah menuju pernikahan, yakin bahwa Allah telah merajut kisah mereka dengan indah.",
    },
  ];
  return (
    <VStack align="stretch" spacing={0} position="relative">
      {steps.map((step, index) => {
        const isLast = false;

        return (
          <Flex key={index} position="relative" align="stretch">
            <Box
              position="relative"
              mr={3}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              {!isLast && (
                <Box
                  position="absolute"
                  top="30px"
                  left="50%"
                  transform="translateX(-50%)"
                  w="2px"
                  h="calc(100% - 30px)"
                  bg="gray.400"
                  zIndex={0}
                />
              )}

              <Circle
                size="30px"
                bg="gray.800"
                color="white"
                border="2px solid"
                borderColor="gray.500"
                zIndex={1}
                flexShrink={0}
              >
                <Text fontSize="sm" fontWeight="bold">
                  {index + 1}
                </Text>
              </Circle>
            </Box>

            <Box flex="1" textAlign="left" pb={3}>
              <Text fontWeight="bold" fontSize="sm">
                {step.title}
              </Text>
              <Text mt={1} fontSize="xs" color="gray.200" lineHeight="1.7">
                {step.desc}
              </Text>
            </Box>
          </Flex>
        );
      })}
    </VStack>
  );
};
