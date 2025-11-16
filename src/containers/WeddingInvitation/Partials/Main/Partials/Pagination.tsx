import { IPagination } from "@/services/comment/comment.types";
import { Center, Grid, GridItem } from "@chakra-ui/react";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

interface IProps {
  data?: IPagination;
  handleNext: () => void;
  handlePrev: () => void;
}
const Pagination = ({ data, handleNext, handlePrev }: IProps) => {
  return (
    <Center>
      <Grid
        templateColumns={"1fr 1fr 1fr"}
        w={"fit-content"}
        bg={"#343A40"}
        shadow={"lg"}
        mt={5}
        rounded={"lg"}
        color={"white"}
        placeItems="center"
        p={1}
        gap={1}
      >
        <GridItem
          display={"flex"}
          gap={2}
          alignItems={"center"}
          fontSize={"sm"}
          p={1}
          _hover={{ bg: "white", color: "black", rounded: "full" }}
          cursor={"pointer"}
          onClick={handlePrev}
        >
          <CircleChevronLeft style={{ width: 18, height: 18 }} /> Prev
        </GridItem>
        <GridItem bg={"#212529"} p={1} px={2} rounded={"lg"}>
          {data?.count}/{data?.total}
        </GridItem>
        <GridItem
          cursor={"pointer"}
          _hover={{ bg: "white", color: "black", rounded: "full" }}
          display={"flex"}
          gap={2}
          alignItems={"center"}
          fontSize={"sm"}
          p={1}
          onClick={handleNext}
        >
          Next
          <CircleChevronRight style={{ width: 18, height: 18 }} />
        </GridItem>
      </Grid>
    </Center>
  );
};

export default Pagination;
