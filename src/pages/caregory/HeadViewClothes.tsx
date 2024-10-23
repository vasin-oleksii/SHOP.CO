import { ArrowBackIcon } from "@chakra-ui/icons";
import { Flex, Select, Text } from "@chakra-ui/react";
import { ITEMS_PER_PAGE } from "../../constants/Filtes";

const HeadViewClothes = ({
  currentPage,
  showError,
  dataLength,
}: {
  currentPage: number;
  showError: boolean;
  dataLength: number;
}) => {
  return (
    <Flex align="center" justify="center">
      <Text fontSize={{ base: "md", sm: "sm" }}>
        Showing {currentPage === 1 ? 1 : currentPage * ITEMS_PER_PAGE - 9}-
        {showError
          ? 0
          : currentPage * ITEMS_PER_PAGE > dataLength
          ? dataLength
          : currentPage * ITEMS_PER_PAGE}{" "}
        of {showError ? 0 : dataLength} Products
      </Text>
      <Flex
        ml="12px"
        display={{ base: "none", md: "flex" }}
        fontSize={{ base: "xs", md: "sm" }}
        align="center"
        justify="center"
      >
        Sort by:
        <Flex
          flexDirection="row"
          align="center"
          justify="center"
          fontWeight="bold"
          ml="-10px"
        >
          <Select
            placeholder="Most Popular"
            fontWeight="700"
            border="none"
            fontSize="md"
          >
            <option value="option1">API is shit 😥</option>
          </Select>
        </Flex>
      </Flex>
      <Flex ml="12px" display={{ base: "flex", md: "none" }}>
        <ArrowBackIcon />
      </Flex>
    </Flex>
  );
};

export default HeadViewClothes;
