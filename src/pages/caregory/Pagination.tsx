import { Flex, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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

  for (let i = 1; i <= numberOfLastPage; i++) {
    if (
      i === 1 ||
      i >= numberOfLastPage - 2 ||
      (i >= currentPage - 2 && i <= currentPage + 2)
    ) {
      pagination.push(
        <Link to={`?page=${i}`} key={i}>
          <Box
            onClick={() => onPageChange(i)}
            mx="5px"
            cursor="pointer"
            p="10px 16px"
            borderRadius="8px"
            background={currentPage === i ? "grey" : ""}
            color={currentPage === i ? "black" : "greyText"}
            _hover={{ background: "grey", color: "black" }}
          >
            {i}
          </Box>
        </Link>
      );
    } else {
      pagination.push(
        <Flex color="greyText" align="center" key={i}>
          .
        </Flex>
      );
    }
  }

  return <Flex>{pagination}</Flex>;
};

export default Pagination;
