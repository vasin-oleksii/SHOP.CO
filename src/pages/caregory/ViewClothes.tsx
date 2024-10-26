import { Box, Divider, Flex, Heading, Grid, GridItem } from "@chakra-ui/react";
import CardPreview from "../../components/common/CardPreview";
import { useCategoryState } from "../../store/useCategoryState";

import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";
import SkeletonOnFetch from "../../components/common/skelets/SkeletonOnFetch";
import CardPreviewSkelet from "../../components/common/skelets/CardPreviewSkelet";
import ErrorMessage from "./ErrorMessage";
import HeadViewClothes from "./HeadViewClothes";
import { ITEMS_PER_PAGE } from "../../constants/Filtes";
import { keys } from "../../constants/ViewClothes";

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
    const searchParamsValues = keys.reduce((params, key) => {
      params[key] = searchParams.get(key);
      return params;
    }, {} as Record<(typeof keys)[number], string | null>);
    console.log(searchParamsValues);
    changeParametrsOfSearch(searchParamsValues);
  }, []);

  console.log(parametrsOfSearch);
  const { color, size, style, category, price, title } = parametrsOfSearch;
  const objectOfSearch = {
    page: `${currentPage}`,
    ...(color && { color }),
    ...(size && { size }),
    ...(style && { style }),
    ...(category && { category }),
    ...(price && { price }),
    ...(title && { title }),
  };

  useEffect(() => {
    if (currentPage > numberOfLastPage && numberOfLastPage !== 0) {
      setSearchParams({ page: `1` });
      setCurrentPage(1);
    } else {
      setSearchParams(objectOfSearch);
    }
  }, [numberOfLastPage, dataAll]);

  useEffect(() => {
    fetchDataPerPage(ITEMS_PER_PAGE, currentPage);
  }, [currentPage, parametrsOfSearch]);

  useEffect(() => {
    setSearchParams(objectOfSearch);
  }, [parametrsOfSearch]);

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
          <HeadViewClothes
            currentPage={currentPage}
            showError={showError}
            dataLength={dataAll.length}
          />
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
            dataPerPage.map((state, i) => {
              const { id, ...rest } = state;
              return (
                <Link to={`/product/${id}`} key={id} state={{ ...rest }}>
                  <GridItem
                    key={i}
                    justifyContent="center"
                    alignItems="center"
                    display="flex"
                  >
                    <CardPreview {...rest} />
                  </GridItem>
                </Link>
              );
            })
          )}
        </Grid>
        <Divider mt="34px" />
        <Flex width="100%" justify="space-between" align="center" mt="20px">
          <Pagination
            currentPage={currentPage}
            numberOfLastPage={numberOfLastPage}
            onPageChange={onPageChange}
            isLoading={isLoading}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default ViewClothes;
