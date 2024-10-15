import {
  Box,
  Divider,
  Flex,
  Heading,
  Text,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import CardPreview from "../../components/common/CardPreview";
import { useCategoryState } from "../../store/store";

import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";

const ITEMS_PER_PAGE = 9;

const ViewClothes = () => {
  const { data, dataPerPage, isLoading, fetchDataPerPage, fetchData } =
    useCategoryState();
  const [searchParams, setSearchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState<number>(
    Number(searchParams.get("page")) || 1
  );

  const numberOfLastPage = Math.ceil(data.length / ITEMS_PER_PAGE);

  useEffect(() => {
    fetchDataPerPage(ITEMS_PER_PAGE, currentPage);
    fetchData();
  }, []);

  useEffect(() => {
    fetchDataPerPage(ITEMS_PER_PAGE, currentPage);
  }, [currentPage]);

  // Update URL searchParams whenever the page changes
  useEffect(() => {
    setSearchParams({ page: String(currentPage) });
  }, [currentPage, setSearchParams]);

  const handleNext = () => {
    if (currentPage < numberOfLastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onPageChange = (numOfPage: number) => {
    setCurrentPage(numOfPage);
  };

  return (
    <Box width="100%" ml="20px">
      <Flex
        justify="space-between"
        align="center"
        width="100%"
        flexDirection="column"
      >
        <Flex align="end" justify="space-between" width="100%">
          <Heading>Casual {isLoading ? "Loading..." : ""}</Heading>
          <Flex align="center" justify="center">
            <Text>Showing 1-10 of 100 Products</Text>
            <Flex ml="12px">
              Sort by:
              <Flex
                flexDirection="row"
                align="center"
                justify="center"
                fontWeight="bold"
                ml="6px"
              >
                Most Popular<Box>Icon</Box>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Grid
          templateColumns="repeat(auto-fit, minmax(270px, 1fr))"
          gap="20px"
          width="100%"
          mt={{ base: "35px", lg: "25px" }}
        >
          {dataPerPage.map(
            (
              { title, images, price, old_price, rating, description, id },
              i
            ) => (
              <Link
                to={`/product/${id}`}
                key={id}
                state={{
                  title,
                  images,
                  price,
                  old_price,
                  rating,
                  description,
                }}
              >
                <GridItem key={i}>
                  <CardPreview
                    title={title}
                    images={images}
                    price={price}
                    old_price={old_price}
                    rating={rating}
                  />
                </GridItem>
              </Link>
            )
          )}
        </Grid>
        <Divider mt="34px" />
        <Flex width="100%" justify="space-between" align="center" mt="20px">
          <Button onClick={handlePrev}>Prev</Button>
          <Pagination
            currentPage={currentPage}
            numberOfLastPage={numberOfLastPage}
            onPageChange={onPageChange}
          />

          <Button onClick={handleNext}>Next</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ViewClothes;
