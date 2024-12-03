import { Box, Flex, HStack, Img, Select, Text } from "@chakra-ui/react";
import { useReviewsState } from "../../../store/useReviewsState";
import settingsBlack from "../../../assets/icons/settingsBlack.svg";
import ButtonRound from "../../../components/common/buttons/ButtonRound";

const HeaderReviews = ({ totlaReviews }: { totlaReviews: number }) => {
  const fetchReviewsPerPage = useReviewsState(
    (state) => state.fetchReviewsPerPage
  );

  return (
    <Flex
      justify="space-between"
      align="center"
      mt={{ base: "16px", md: "24px" }}
    >
      <Flex align="center">
        <Text fontSize={{ base: "20px", md: "24px" }} fontWeight={700}>
          All Reviews
        </Text>
        <Text ml="8px" mt="6px" color="greyText">{`(${totlaReviews})`}</Text>
      </Flex>
      <HStack spacing="10px">
        <Box
          background="greyLight"
          borderRadius="50%"
          _hover={{ opacity: 0.6 }}
        >
          <Img src={settingsBlack} p="12px" cursor="pointer" />
        </Box>
        <Box>
          <Select
            placeholder="Latest"
            borderRadius="62px"
            background="greyLight"
            border="none"
          >
            <option value="best">Best</option>
            <option value="low">Low</option>
          </Select>
        </Box>
        <ButtonRound colorBtn="black" p="14.5px 30px" border="1px solid black">
          Write a Review
        </ButtonRound>
      </HStack>
    </Flex>
  );
};

export default HeaderReviews;
