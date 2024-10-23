import { Flex, Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const MAXIM_POINT = 3;

const Pagination = ({
  currentPage,
  numberOfLastPage,
  onPageChange,
  isLoading,
}: {
  currentPage: number;
  numberOfLastPage: number;
  onPageChange: (page: number) => void;
  isLoading: boolean;
}) => {
  const pagination = [];
  const toShowIcons = window.innerWidth > 500 ? 2 : 1;
  const isMobileScreen = window.innerWidth < 500;
  let countOfPoint = 0;

  const handleNext = () => {
    if (currentPage < numberOfLastPage) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

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

  return (
    <>
      <Button
        onClick={handlePrev}
        border="1px solid rgba(0, 0, 0, 0.1)"
        background="white"
        _hover={{ border: "1px solid rgba(0, 0, 0, 0.5)" }}
        _active={{ background: "greyLight" }}
        fontSize={{ base: "xs", md: "sm" }}
        p={{ base: "8px 12px", sm: "8px 14px" }}
        opacity={currentPage === 1 ? ".3" : "1"}
        isLoading={isLoading}
      >
        <ArrowBackIcon mr="10px" /> Prev
      </Button>

      <Flex maxW="300px">{pagination}</Flex>

      <Button
        onClick={handleNext}
        border="1px solid rgba(0, 0, 0, 0.1)"
        background="white"
        _hover={{ border: "1px solid rgba(0, 0, 0, 0.5)" }}
        _active={{ background: "greyLight" }}
        fontSize={{ base: "xs", md: "sm" }}
        p={{ base: "8px 12px", sm: "8px 14px" }}
        opacity={numberOfLastPage === currentPage ? ".3" : "1"}
        isLoading={isLoading}
      >
        Next <ArrowForwardIcon ml="10px" />
      </Button>
    </>
  );
};

export default Pagination;
