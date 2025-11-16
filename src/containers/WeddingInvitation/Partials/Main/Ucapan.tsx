import { useCopyToClipboardById } from "@/hooks/useCopyClipboard";
import { actionGetListComment } from "@/services/comment/comment.func";
import { IComments } from "@/services/comment/comment.types";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  HStack,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  Check,
  Copy,
  CreditCard,
  Gift,
  Github,
  Info,
  Instagram,
  Landmark,
  MapPin,
  Music,
  PhoneCall,
} from "lucide-react";
import { MdOutlinePayments } from "react-icons/md";
import { TbCreditCardPay } from "react-icons/tb";
import FormUcapan from "./Partials/FormUcapan";
import ListUcapan from "./Partials/ListUcapan";
import Pagination from "./Partials/Pagination";
import { useRouter } from "next/navigation";

interface IProps {
  params?: any;
}
const UcapanSection = ({ params }: IProps) => {
  const { data, isLoading } = actionGetListComment();
  const router = useRouter();
  const comments = data && (data as any);

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

      <Box bg={"#212529"}>
        <Text
          mb={3}
          textAlign={"center"}
          fontSize={"2rem"}
          textStyle={"fontEsthetic"}
        >
          Love Gift
        </Text>
        <Text textAlign={"center"} fontSize={"1rem"}>
          Dengan hormat, bagi Anda yang ingin <br /> memberikan tanda kasih
          kepada kami, dapat <br /> melalui:
        </Text>

        <GiftSection />
        <FormUcapan params={params} />

        <Box p={3}>
          {isLoading && (
            <Stack>
              {[1, 2, 3].map((val, idx) => (
                <Skeleton
                  key={"loading" + idx}
                  bg={"#343A40"}
                  rounded={"lg"}
                  height="100px"
                />
              ))}
            </Stack>
          )}
          {comments && comments?.data?.length > 0 && !isLoading && (
            <Stack spacing={3}>
              {comments?.data?.map((val: IComments, idx: number) => (
                <ListUcapan params={params} key={idx + "comment"} data={val} />
              ))}
            </Stack>
          )}
          {comments && comments?.data?.length > 0 && !isLoading && (
            <Pagination
              data={{
                ...comments?.pagination,
                count: comments?.data?.length || 0,
              }}
              handleNext={() => {
                if (
                  comments &&
                  Number(params.page) >= comments?.pagination?.totalPages
                )
                  return;
                const param = new URLSearchParams({
                  page: `${Number(params.page) + 1}`,
                });
                router.push(`/comments?${param.toString()}`);
              }}
              handlePrev={() => {
                if (Number(params.page) === 1) return;
                const param = new URLSearchParams({
                  page: `${Number(params.page) - 1}`,
                });
                router.push(`/comments?${param.toString()}`);
              }}
            />
          )}
        </Box>

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
            fill="black"
            fillOpacity="1"
            d="M0,192L40,181.3C80,171,160,149,240,149.3C320,149,400,171,480,165.3C560,160,640,128,720,128C800,128,880,160,960,186.7C1040,213,1120,235,1200,218.7C1280,203,1360,149,1400,122.7L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          />
        </Box>
      </Box>
      <Text fontSize={"1rem"} textAlign={"center"}>
        Terima kasih atas perhatian dan doa restu <br /> Anda, yang menjadi
        kebahagiaan serta <br /> kehormatan besar bagi kami.
      </Text>

      <Text
        my={3}
        textAlign={"center"}
        fontSize={"2rem"}
        textStyle={"fontEsthetic"}
      >
        Wassalamualaikum <br /> Warahmatullahi <br /> Wabarakatuh
      </Text>
      <Text
        mt={5}
        textAlign={"center"}
        fontSize={"2rem"}
        textStyle={"fontArabic"}
      >
        اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ
      </Text>
      <Divider mx={2} my={5} borderColor={"rgba(255,255,255,0.4)"} />

      <Text my={3} textAlign={"center"} fontSize={"0.8rem"}>
        🤍 Build with Taufik.H
      </Text>

      <Center gap={5}>
        <Flex gap={1}>
          <Github
            style={{
              color: " rgba(255, 255, 255, 0.8)",
              width: 18,
              height: 18,
            }}
          />
          <Button
            as="a"
            href="https://github.com/taufik-hdyt25"
            target="_blank"
            rel="noopener noreferrer"
            color={"blue.500"}
            variant={"link"}
          >
            Github
          </Button>
        </Flex>
        <Flex gap={1}>
          <Instagram
            style={{
              color: " rgba(255, 255, 255, 0.8)",
              width: 18,
              height: 18,
            }}
          />
          <Button
            as="a"
            href="https://www.instagram.com/taufikhdyt.id"
            target="_blank"
            rel="noopener noreferrer"
            variant={"link"}
            color={"blue.500"}
          >
            Intagram
          </Button>
        </Flex>
        <Flex gap={1}>
          <Music
            style={{
              color: " rgba(255, 255, 255, 0.8)",
              width: 18,
              height: 18,
            }}
          />
          <Button
            as="a"
            href="https://youtu.be/ZeFpigRaXbI?si=LKu2g9bxEg8OPObl"
            target="_blank"
            rel="noopener noreferrer"
            variant={"link"}
            color={"blue.500"}
          >
            Music
          </Button>
        </Flex>
      </Center>
    </Box>
  );
};

export default UcapanSection;

const GiftSection = () => {
  const { copied, copyToClipboard } = useCopyToClipboardById();

  return (
    <Box>
      <Box bg={"#343A40"} p={0} mx={3} shadow={"lg"} mt={10} rounded={"lg"}>
        <Accordion allowMultiple>
          <AccordionItem textColor={"white"} border={"none"}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize={"sm"}>
                  <HStack>
                    <MdOutlinePayments
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        width: 24,
                        height: 24,
                      }}
                    />
                    <Text>Transfer</Text>
                  </HStack>
                  {/* <HStack mt={3}>
                    <FiUser
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        width: 20,
                        height: 20,
                      }}
                    />
                    <Text>Taufik H</Text>
                  </HStack> */}
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
              <HStack mt={3} justify={"space-between"}>
                <HStack>
                  <CreditCard
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      width: 24,
                      height: 24,
                    }}
                  />
                  <Text>0050724352</Text>
                </HStack>
                <Box
                  onClick={() => copyToClipboard("bca", "083871940605")}
                  as="span"
                  cursor="pointer"
                  color="rgba(255,255,255,0.5)"
                  _hover={{ color: "white" }}
                >
                  {copied?.bca ? (
                    <Check width={14} height={14} />
                  ) : (
                    <Copy width={14} height={14} />
                  )}
                </Box>
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
                    <TbCreditCardPay
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        width: 24,
                        height: 24,
                      }}
                    />
                    <Text>Gopay</Text>
                  </HStack>
                  {/* <HStack mt={3}>
                    <FiUser
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        width: 20,
                        height: 20,
                      }}
                    />
                    <Text>Taufik H</Text>
                  </HStack> */}
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
                  onClick={() => copyToClipboard("gopay", "083871940605")}
                  as="span"
                  cursor="pointer"
                  color="rgba(255,255,255,0.5)"
                  _hover={{ color: "white" }}
                >
                  {copied?.gopay ? (
                    <Check width={14} height={14} />
                  ) : (
                    <Copy width={14} height={14} />
                  )}
                </Box>
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
                  {/* <HStack mt={3}>
                    <FiUser
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        width: 20,
                        height: 20,
                      }}
                    />
                    <Text>Taufik H</Text>
                  </HStack> */}
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
            <AccordionPanel pb={4} fontSize={"1rem"}>
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
                  onClick={() => copyToClipboard("gifthp", "083871940605")}
                  as="span"
                  cursor="pointer"
                  color="rgba(255,255,255,0.5)"
                  _hover={{ color: "white" }}
                >
                  {copied?.gifthp ? (
                    <Check width={14} height={14} />
                  ) : (
                    <Copy width={14} height={14} />
                  )}
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
                  onClick={() =>
                    copyToClipboard("address", "RT 10 RW 02, Desa Pajerukan,")
                  }
                >
                  {copied?.address ? (
                    <Check width={14} height={14} />
                  ) : (
                    <Copy width={14} height={14} />
                  )}
                </Box>
              </HStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};
