import { getTimeLeft, TimeLeft } from "@/helpers/times";
import { Center, HStack, Text } from "@chakra-ui/react";
import moment from "moment-timezone";
import { useEffect, useState } from "react";

const CountDownTime = () => {
  const date = moment.tz("2026-12-24 08:00", "Asia/Jakarta").toDate();

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft(date));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(date));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
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
        <Text>{timeLeft.days}</Text>
        <Text fontSize={"xs"}>Hari</Text>
      </Center>
      <Center flexDirection={"column"}>
        <Text>{timeLeft.hours}</Text>
        <Text fontSize={"xs"}>Jam</Text>
      </Center>
      <Center flexDirection={"column"}>
        <Text>{timeLeft.minutes}</Text>
        <Text fontSize={"xs"}>Menit</Text>
      </Center>
      <Center flexDirection={"column"}>
        <Text>{timeLeft.seconds}</Text>
        <Text fontSize={"xs"}>Detik</Text>
      </Center>
    </HStack>
  );
};

export default CountDownTime;
