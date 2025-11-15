import { Box, Text } from "@chakra-ui/react";

const UcapanSection = () => {
  return (
    <Box>
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

      <Box bg={"#212529"} p={3}>
        <Text
          my={3}
          textAlign={"center"}
          fontSize={"2rem"}
          textStyle={"fontEsthetic"}
        >
          Love Gift
        </Text>
        <Text textAlign={"center"} fontSize={"sm"}>
          Dengan hormat, bagi Anda yang ingin <br /> memberikan tanda kasih
          kepada kami, dapat <br /> melalui:
        </Text>
      </Box>
    </Box>
  );
};

export default UcapanSection;
