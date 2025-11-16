import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { CircleUser, MessageCircle, Send, UserRoundCheck } from "lucide-react";

const FormUcapan = () => {
  return (
    <Box border={"1px solid rgba(255,255,255,0.2)"} p={5} mt={5} rounded={"lg"}>
      <Text
        my={3}
        textAlign={"center"}
        fontSize={"2rem"}
        textStyle={"fontEsthetic"}
      >
        Ucapan & Doa
      </Text>

      <Stack spacing={3}>
        <FormControl color={"white"}>
          <FormLabel
            fontSize={"1rem"}
            display={"flex"}
            gap={1}
            alignItems={"center"}
          >
            <CircleUser
              style={{ color: "rgba(255,255,255,0.8)", width: 24, height: 24 }}
            />{" "}
            Nama
          </FormLabel>
          <Input
            border={"1px solid rgba(255,255,255,0.2)"}
            rounded={"full"}
            type="email"
            placeholder="Masukan nama"
          />
        </FormControl>
        <FormControl color={"white"}>
          <FormLabel
            fontSize={"1rem"}
            display={"flex"}
            gap={1}
            alignItems={"center"}
          >
            <UserRoundCheck
              style={{ color: "rgba(255,255,255,0.8)", width: 24, height: 24 }}
            />{" "}
            Kehadiran
          </FormLabel>
          <Select
            border={"1px solid rgba(255,255,255,0.2)"}
            rounded={"full"}
            placeholder="Pilib kehadiran"
          >
            <option value="option1">✅ Hadir</option>
            <option value="option2">❌ Tidak bisa hadir</option>
          </Select>
        </FormControl>
        <FormControl color={"white"}>
          <FormLabel
            fontSize={"1rem"}
            display={"flex"}
            gap={1}
            alignItems={"center"}
          >
            <MessageCircle
              style={{ color: "rgba(255,255,255,0.8)", width: 24, height: 24 }}
            />{" "}
            Ucapan & Doa
          </FormLabel>
          <Textarea
            border={"1px solid rgba(255,255,255,0.2)"}
            rounded={"lg"}
            rows={5}
          />
        </FormControl>
      </Stack>
      <Button
        w={"100%"}
        mt={5}
        rounded={"full"}
        bg={"#0A6FFD"}
        _hover={{ backgroundColor: "#0A6FFD80" }}
        leftIcon={
          <Send
            style={{ color: "rgba(255,255,255,0.8)", width: 18, height: 18 }}
          />
        }
      >
        Send
      </Button>
    </Box>
  );
};

export default FormUcapan;
