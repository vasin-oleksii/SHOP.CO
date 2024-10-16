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
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import SkeletonOnFetch from "../../components/common/skelets/SkeletonOnFetch";
import CardPreviewSkelet from "../../components/common/skelets/CardPreviewSkelet";
import ErrorMessage from "./ErrorMessage";

const ITEMS_PER_PAGE = window.innerWidth > 961 ? 9 : 6;

const ViewClothes = () => {
  const {
    dataAll,
    dataPerPage,
    isLoading,
    fetchDataPerPage,
    parametrsOfSearch,
    changeParametrsOfSearch,
  } = useCategoryState();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>(
    Number(searchParams.get("page")) || 1
  );

  const showError =
    typeof dataAll === "string" && typeof dataPerPage === "string";

  const numberOfLastPage = Math.ceil(dataAll.length / ITEMS_PER_PAGE);

  useEffect(() => {
    const keys = ["color", "category", "size", "style", "title"] as const;

    const searchParamsValues = keys.reduce((params, key) => {
      params[key] = searchParams.get(key);
      return params;
    }, {} as Record<(typeof keys)[number], string | null>);

    changeParametrsOfSearch(searchParamsValues);
  }, []);

  const { color, size, style, category } = parametrsOfSearch;

  const objectOfSearch = {
    page: `${currentPage}`,
    ...(color && { color }),
    ...(size && { size }),
    ...(style && { style }),
    ...(category && { category }),
  };

  useEffect(() => {
    if (currentPage > numberOfLastPage) {
      setSearchParams({ page: `1` });
      setCurrentPage(1);
    } else {
      setSearchParams(objectOfSearch);
    }
  }, [currentPage, numberOfLastPage]);

  useEffect(() => {
    fetchDataPerPage(ITEMS_PER_PAGE, currentPage);
  }, [currentPage, parametrsOfSearch]);

  useEffect(() => {
    setSearchParams(objectOfSearch);
  }, [parametrsOfSearch]);

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
    <Box width="100%" ml={{ base: "", lg: "20px" }}>
      <Flex
        justify="space-between"
        align="center"
        width="100%"
        flexDirection="column"
      >
        <Flex align="end" justify="space-between" width="100%">
          <Heading>Casual</Heading>
          <Flex align="center" justify="center">
            <Text fontSize={{ base: "md", sm: "sm" }}>
              Showing {currentPage * ITEMS_PER_PAGE - 9}-
              {showError ? 0 : currentPage * ITEMS_PER_PAGE} of{" "}
              {showError ? 0 : dataAll.length} Products
            </Text>
            <Flex
              ml="12px"
              display={{ base: "none", md: "flex" }}
              fontSize={{ base: "xs", md: "sm" }}
            >
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
            <Flex ml="12px" display={{ base: "flex", md: "none" }}>
              <ArrowBackIcon />
            </Flex>
          </Flex>
        </Flex>
        <Grid
          templateColumns={{
            base: "repeat(2, minmax(1px, 270px))",
            md: "repeat(auto-fit, minmax(290px, 1fr))",
          }}
          gap={{ base: "14px", md: "20px" }}
          width="100%"
          mt={{ base: "35px", lg: "25px" }}
          justifyContent="center"
          alignItems="center"
          mx="auto"
        >
          {showError ? (
            <ErrorMessage name="No clothing meets the requirements" />
          ) : isLoading ? (
            <SkeletonOnFetch
              numOfSkeletons={ITEMS_PER_PAGE}
              skeletItem={<CardPreviewSkelet />}
            />
          ) : (
            dataPerPage.map(
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
                  <GridItem
                    key={i}
                    justifyContent="center"
                    alignItems="center"
                    display="flex"
                  >
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
            )
          )}
        </Grid>
        <Divider mt="34px" />
        <Flex width="100%" justify="space-between" align="center" mt="20px">
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
          <Pagination
            currentPage={currentPage}
            numberOfLastPage={numberOfLastPage}
            onPageChange={onPageChange}
          />

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
        </Flex>
      </Flex>
    </Box>
  );
};

export default ViewClothes;
