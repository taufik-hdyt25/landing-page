import { Box, Button, Center, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MailOpen } from "lucide-react";
const MotionMail = motion(MailOpen);
const MotionBox = motion(Box);

interface IProps {
  onOpenInviataion?: () => void;
  params?: any;
}

const OpenFirst: React.FC<IProps> = ({ onOpenInviataion, params }) => {
  return (
    <MotionBox
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      h={"full"}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <Text
        textAlign={"center"}
        fontSize={34}
        textStyle={"fontEsthetic"}
        color={"white"}
        fontWeight={"bold"}
      >
        The Wedding Of
      </Text>

      <Box p={0.5} bg={"white"} rounded={"full"} mt={3}>
        <Image h={44} w={44} rounded={"full"} src="/images/bg.webp" />
      </Box>

      <Text
        textAlign={"center"}
        fontSize={34}
        mt={10}
        textStyle={"fontEsthetic"}
        color={"white"}
        mb={5}
      >
        Taufik & Hidayat
      </Text>

      {params.to !== "" && (
        <Box textAlign={"center"}>
          <Text mt={8} fontSize={"sm"}>
            Kepada Yth Bapak/Ibu/Saudara/i
          </Text>
          <Text>{params?.to}</Text>
        </Box>
      )}

      <Center>
        <Button
          onClick={onOpenInviataion}
          leftIcon={
            <MotionMail
              style={{ height: 20, width: 20 }}
              animate={{
                y: [0, -6, 0], // gerak naik, turun
              }}
              transition={{
                duration: 2, // durasi satu siklus
                repeat: Infinity, // ulang terus
                ease: "easeInOut", // gerak halus
              }}
            />
          }
          px={10}
          rounded={"full"}
          mt={5}
          color={"black"}
        >
          Open Invitation
        </Button>
      </Center>
    </MotionBox>
  );
};

export default OpenFirst;
