import { Flex, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MAXIM_POINT = 3;

const Pagination = ({
  currentPage,
  numberOfLastPage,
  onPageChange,
}: {
  currentPage: number;
  numberOfLastPage: number;
  onPageChange: (page: number) => void;
}) => {
  const pagination = [];
  const toShowIcons = window.innerWidth > 500 ? 2 : 1;
  const isMobileScreen = window.innerWidth < 500;
  let countOfPoint = 0;

  for (let i = 1; i <= numberOfLastPage; i++) {
    if (
      i === 1 ||
      i >= numberOfLastPage - (isMobileScreen ? 0 : toShowIcons) ||
      (i >= currentPage - toShowIcons && i <= currentPage + toShowIcons)
    ) {
      pagination.push(
        <Link to={`?page=${i}`} key={i}>
          <Box
            onClick={() => onPageChange(i)}
            mx="5px"
            cursor="pointer"
            p={{ base: "8px 10px", sm: "10px 16px" }}
            borderRadius="8px"
            background={currentPage === i ? "grey" : ""}
            color={currentPage === i ? "black" : "greyText"}
            _hover={{ background: "grey", color: "black" }}
            fontSize={{ base: "xs", md: "sm" }}
          >
            {i}
          </Box>
        </Link>
      );
    } else {
      countOfPoint += 1;

      if (countOfPoint <= MAXIM_POINT)
        pagination.push(
          <Flex
            color="greyText"
            align="center"
            key={i}
            fontSize={{ base: "xs", md: "sm" }}
          >
            .
          </Flex>
        );
    }
  }

  return <Flex maxW="300px"> {pagination}</Flex>;
};

export default Pagination;