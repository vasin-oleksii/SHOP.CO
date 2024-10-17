import {
  Flex,
  Heading,
  Text,
  VStack,
  Grid,
  GridItem,
  Box,
  Divider,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Button,
} from "@chakra-ui/react";

import ButtonRoundProps from "../../components/common/buttons/ButtonRound";
import { CheckCircleIcon, CheckIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useCategoryState } from "../../store/store";
import { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import settings from "../../assets/icons/settings.svg";

const Filters = () => {
  const [dataForSubmit, setDataForSubmit] = useState({
    category: "",
    color: "",
    size: "",
    style: "",
    title: "",
    price: "",
  });

  const { changeParametrsOfSearch, parametrsOfSearch } = useCategoryState();

  useEffect(() => {
    setDataForSubmit(parametrsOfSearch);
  }, [parametrsOfSearch]);

  const handleDataForSubmit = ({
    key,
    value,
  }: {
    key: keyof typeof dataForSubmit;
    value: string;
  }) => {
    if (value.toLowerCase() === dataForSubmit[key]) {
      setDataForSubmit((prevState) => {
        return { ...prevState, [key]: `` };
      });
    } else {
      setDataForSubmit((prevState) => {
        return {
          ...prevState,
          [key]: `${value.toLowerCase()}`,
        };
      });
    }
  };

  const clearData = () => {
    setDataForSubmit({
      category: "",
      color: "",
      size: "",
      style: "",
      title: "",
      price: "",
    });
    changeParametrsOfSearch({});
  };

  return (
    <Flex display={{ base: "none", lg: "flex" }} h="100%">
      <Flex
        className="Filter"
        p={"20px 24px 66px 24px"}
        w="295px"
        borderColor="greyLight"
        borderStyle="solid"
        borderWidth="1px"
        borderRadius="20px"
        flexDirection="column"
      >
        <Flex align="center" justify="space-between" width="100%">
          <Heading fontSize={{ base: "", lg: "lg" }}>Filters</Heading>
          <Box>
            <ReactSVG src={settings} />
          </Box>
        </Flex>

        <Divider m="24px 0px" />

        <VStack>
          {["T-shirts", "Hoodie", "Shorts", "Blazers", "Dresses", "Suits"].map(
            (category, i) => {
              return (
                <Flex
                  justify="space-between"
                  align="center"
                  w="100%"
                  key={i}
                  cursor="pointer"
                  onClick={() =>
                    handleDataForSubmit({ key: "category", value: category })
                  }
                >
                  <Text
                    fontSize="md"
                    fontWeight={
                      category.toLowerCase() === dataForSubmit.category
                        ? 700
                        : ""
                    }
                    color={
                      category.toLowerCase() === dataForSubmit.category
                        ? "black"
                        : "greyText"
                    }
                  >
                    {category}
                  </Text>

                  <Box>
                    {category.toLowerCase() === dataForSubmit.category ? (
                      <CheckCircleIcon />
                    ) : (
                      <ChevronRightIcon />
                    )}
                  </Box>
                </Flex>
              );
            }
          )}
        </VStack>

        <Divider m="24px 0px" />

        <VStack>
          <Flex align="center" justify="space-between" width="100%">
            <Heading fontSize={{ base: "", lg: "lg" }}>Price</Heading>
            <Box>
              <ChevronRightIcon />
            </Box>
          </Flex>

          <Box mt="20px" width="100%">
            <RangeSlider
              defaultValue={[50, 250]}
              min={0}
              max={300}
              step={10}
              borderRadius="20px"
            >
              <RangeSliderTrack bg="grey" height="6px">
                <RangeSliderFilledTrack bg="black" />
              </RangeSliderTrack>
              <RangeSliderThumb boxSize={6} index={0} bg="black" />
              <RangeSliderThumb boxSize={6} index={1} bg="black" />
            </RangeSlider>
          </Box>
        </VStack>

        <Divider m="24px 0px" />

        <VStack>
          <Flex align="center" justify="space-between" width="100%">
            <Heading fontSize={{ base: "", lg: "lg" }}>Colors</Heading>
            <Box>
              <ChevronRightIcon />
            </Box>
          </Flex>

          <Grid
            mt="20px"
            templateColumns="repeat(auto-fill, minmax(40px, 50px))"
            width="100%"
            gap="15px"
            alignContent="center"
            justifyContent="center"
            alignItems="center"
          >
            {[
              "white",
              "pink",
              "black",
              "red",
              "navy",
              "green",
              "grey",
              "gray",
            ].map((color, i) => {
              const isActiveElement = color === dataForSubmit.color;

              return (
                <GridItem
                  key={i}
                  textAlign="center"
                  background={`${color}`}
                  height="37px"
                  width="37px"
                  borderRadius="100%"
                  borderWidth="1px"
                  borderStyle="solid"
                  borderColor="rgba(0, 0, 0, 0.1)"
                  onClick={() =>
                    handleDataForSubmit({ key: "color", value: color })
                  }
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  cursor="pointer"
                >
                  {isActiveElement ? (
                    <CheckIcon
                      color={
                        color === "white" || color === "grey"
                          ? "black"
                          : "white"
                      }
                    />
                  ) : (
                    ""
                  )}
                </GridItem>
              );
            })}
          </Grid>
        </VStack>

        <Divider m="24px 0px" />

        <VStack>
          <Flex align="center" justify="space-between" width="100%">
            <Heading fontSize={{ base: "", lg: "lg" }}>Size</Heading>
            <Box>
              <ChevronRightIcon />
            </Box>
          </Flex>

          <Flex
            mt="20px"
            width="100%"
            alignContent="center"
            flexWrap="wrap"
            gap="8px"
          >
            {["Large", "Small", "Medium", "XX-Large", "One Size"].map(
              (size, i) => {
                return (
                  <Button
                    key={i}
                    fontSize="sm"
                    p="10px 20px"
                    background="greyLight"
                    onClick={() =>
                      handleDataForSubmit({ key: "size", value: size })
                    }
                    display="inline-block"
                    borderRadius="62px"
                    color="greyText"
                    isActive={size.toLowerCase() === dataForSubmit.size}
                    _hover={{ color: "white", background: "greyText" }}
                    _active={{ color: "white", background: "black" }}
                    fontWeight="500"
                  >
                    {size}
                  </Button>
                );
              }
            )}
          </Flex>
        </VStack>

        <Divider m="24px 0px" />

        <Box>
          <Flex align="center" justify="space-between" width="100%">
            <Heading fontSize={{ base: "", lg: "lg" }}>Dress Style</Heading>
            <Box>
              <ChevronRightIcon />
            </Box>
          </Flex>

          <VStack mt="20px">
            {["Casual", "Formal", "Party"].map((style, i) => {
              const isActiveElement =
                style.toLowerCase() === dataForSubmit.style;

              return (
                <Flex
                  justify="space-between"
                  align="center"
                  w="100%"
                  key={i}
                  onClick={() =>
                    handleDataForSubmit({ key: "style", value: style })
                  }
                  cursor="pointer"
                >
                  <Text
                    fontSize="md"
                    fontWeight={isActiveElement ? 700 : ""}
                    color={isActiveElement ? "black" : "greyText"}
                  >
                    {style}
                  </Text>

                  <Box>
                    {isActiveElement ? (
                      <CheckCircleIcon />
                    ) : (
                      <ChevronRightIcon />
                    )}
                  </Box>
                </Flex>
              );
            })}
          </VStack>
        </Box>

        <ButtonRoundProps
          colorBtn="black"
          mt="24px"
          width="100%"
          p="0px 16px"
          onClick={() => changeParametrsOfSearch(dataForSubmit)}
        >
          Apply Filter
        </ButtonRoundProps>
        <Text
          align="center"
          color="greyText"
          cursor="pointer"
          onClick={() => clearData()}
        >
          Reset
        </Text>
      </Flex>
    </Flex>
  );
};

export default Filters;
