import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  Flex,
  HStack,
  Text,
} from "@chakra-ui/react";
import {
  BanknoteArrowUp,
  Copy,
  CreditCard,
  Gift,
  Info,
  Landmark,
  MapPin,
  PhoneCall,
  User,
} from "lucide-react";
import FormUcapan from "./Partials/FormUcapan";
import ListUcapan from "./Partials/ListUcapan";
import Pagination from "./Partials/Pagination";

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

        <GiftSection />
        <FormUcapan />

        <Box>
          <ListUcapan />
          <Pagination />
        </Box>
      </Box>
    </Box>
  );
};

export default UcapanSection;

const GiftSection = () => {
  return (
    <Box>
      <Box bg={"#343A40"} p={0} mx={3} shadow={"lg"} mt={10} rounded={"lg"}>
        <Accordion allowMultiple>
          <AccordionItem textColor={"white"} border={"none"}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize={"sm"}>
                  <HStack>
                    <BanknoteArrowUp
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        width: 24,
                        height: 24,
                      }}
                    />
                    <Text>Transfer</Text>
                  </HStack>
                  <HStack mt={3}>
                    <User
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        width: 24,
                        height: 24,
                      }}
                    />
                    <Text>Taufik H</Text>
                  </HStack>
                </Box>

                <Flex
                  align={"center"}
                  gap={1}
                  border={"1px solid rgba(255,255,255,0.5)"}
                  px={2}
                  rounded={"full"}
                  cursor={"pointer"}
                >
                  <Info style={{ width: 14, height: 14 }} />
                  <Text fontSize={"xs"}>Info</Text>
                </Flex>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={"sm"}>
              <Divider />
              <HStack mt={3}>
                <Landmark
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    width: 24,
                    height: 24,
                  }}
                />
                <Text>Bank Central Asia</Text>
              </HStack>
              <HStack mt={3}>
                <CreditCard
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    width: 24,
                    height: 24,
                  }}
                />
                <Text>0050724352</Text>
              </HStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      <Box bg={"#343A40"} p={0} mx={3} shadow={"lg"} mt={3} rounded={"lg"}>
        <Accordion allowMultiple>
          <AccordionItem textColor={"white"} border={"none"}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize={"sm"}>
                  <HStack>
                    <BanknoteArrowUp
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        width: 24,
                        height: 24,
                      }}
                    />
                    <Text>Qris</Text>
                  </HStack>
                  <HStack mt={3}>
                    <User
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        width: 24,
                        height: 24,
                      }}
                    />
                    <Text>Taufik H</Text>
                  </HStack>
                </Box>

                <Flex
                  align={"center"}
                  gap={1}
                  border={"1px solid rgba(255,255,255,0.5)"}
                  px={2}
                  rounded={"full"}
                  cursor={"pointer"}
                >
                  <Info style={{ width: 14, height: 14 }} />
                  <Text fontSize={"xs"}>Info</Text>
                </Flex>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={"sm"}>
              <Divider />
              <HStack mt={3}>
                <Landmark
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    width: 24,
                    height: 24,
                  }}
                />
                <Text>Bank Central Asia</Text>
              </HStack>
              <HStack mt={3}>
                <CreditCard
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    width: 24,
                    height: 24,
                  }}
                />
                <Text>0050724352</Text>
              </HStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      <Box bg={"#343A40"} p={0} mx={3} shadow={"lg"} mt={3} rounded={"lg"}>
        <Accordion allowMultiple>
          <AccordionItem textColor={"white"} border={"none"}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize={"sm"}>
                  <HStack>
                    <Gift
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        width: 24,
                        height: 24,
                      }}
                    />
                    <Text>Gift</Text>
                  </HStack>
                  <HStack mt={3}>
                    <User
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        width: 24,
                        height: 24,
                      }}
                    />
                    <Text>Taufik H</Text>
                  </HStack>
                </Box>

                <Flex
                  align={"center"}
                  gap={1}
                  border={"1px solid rgba(255,255,255,0.5)"}
                  px={2}
                  rounded={"full"}
                  cursor={"pointer"}
                >
                  <Info style={{ width: 14, height: 14 }} />
                  <Text fontSize={"xs"}>Info</Text>
                </Flex>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={"sm"}>
              <Divider />
              <HStack mt={3} justify={"space-between"}>
                <Flex align={"center"} gap={1}>
                  <PhoneCall
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      width: 20,
                      height: 20,
                    }}
                  />
                  <Text>083871940605</Text>
                </Flex>
                <Box
                  as="span"
                  cursor="pointer"
                  color="rgba(255,255,255,0.5)"
                  _hover={{ color: "white" }}
                >
                  <Copy width={14} height={14} />
                </Box>
              </HStack>
              <HStack mt={3} justify={"space-between"}>
                <Flex align={"center"} gap={1}>
                  <MapPin
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      width: 20,
                      height: 20,
                    }}
                  />
                  <Text>RT 10 RW 02, Desa Pajerukan,</Text>
                </Flex>

                <Box
                  as="span"
                  cursor="pointer"
                  color="rgba(255,255,255,0.5)"
                  _hover={{ color: "white" }}
                >
                  <Copy width={14} height={14} />
                </Box>
              </HStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};
