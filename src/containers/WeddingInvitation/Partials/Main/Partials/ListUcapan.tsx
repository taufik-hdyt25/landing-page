import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { IoArrowUndo } from "react-icons/io5";

const ListUcapan = () => {
  const [isReply, setIsReply] = useState(false);

  return (
    <Box bg={"#343A40"} p={3} shadow={"lg"} mt={5} rounded={"lg"}>
      <HStack justify={"space-between"}>
        <Text fontSize={"sm"} display={"flex"} gap={1} align={"center"}>
          Sahabat{" "}
          <IoMdCheckmarkCircle style={{ width: 18, height: 18 }} fill="green" />
        </Text>
        <Text fontSize={"xs"}>3 Jam yang lalu</Text>
      </HStack>
      <Divider my={2} />
      <Text fontSize={"1rem"}>
        Anjir keren banget nih jadi pengen smoga menjadi keluarga yang sakinah
        mawadah dan warohmah yah
      </Text>

      {!isReply && (
        <Button
          onClick={() => setIsReply(true)}
          variant={"outline"}
          size={"sm"}
          mt={2}
        >
          Reply
        </Button>
      )}

      {isReply && (
        <Box>
          <Flex align={"center"} gap={1} mt={2}>
            <IoArrowUndo style={{ width: 18, height: 18, color: "white" }} />
            <Text fontSize={"sm"}>Reply</Text>
          </Flex>
          <Textarea
            mt={3}
            p={2}
            fontSize={"sm"}
            color={"white"}
            border={"1px solid rgba(255,255,255,0.2)"}
            rows={3}
          />

          <Flex gap={2} align={"center"} justify={"end"} mt={3}>
            <Button
              onClick={() => setIsReply(false)}
              variant={"outline"}
              size={"sm"}
            >
              Cancel
            </Button>
            <Button variant={"outline"} size={"sm"}>
              Send
            </Button>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default ListUcapan;
