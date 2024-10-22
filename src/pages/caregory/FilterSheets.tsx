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
} from "@chakra-ui/react";

import ButtonRoundProps from "../../components/common/buttons/ButtonRound";
import { CheckCircleIcon, CheckIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useCategoryState } from "../../store/useCategoryState";
import { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import settings from "../../assets/icons/settings.svg";
import ButtonFilter from "../../components/common/buttons/ButtonFilter";
import GroupInputs from "./GroupInputs";

const FilterSheets = () => {
  const [dataForSubmit, setDataForSubmit] = useState({
    category: "",
    color: "",
    size: "",
    style: "",
    title: "",
    price: "",
  });

  const [isShowFilter, setIsShowFilter] = useState(true);

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
    value = value.toLowerCase();
    if (value === dataForSubmit[key]) {
      setDataForSubmit((prevState) => {
        return { ...prevState, [key]: `` };
      });
    } else {
      setDataForSubmit((prevState) => {
        return {
          ...prevState,
          [key]: `${value}`,
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
        p={!isShowFilter ? "20px 24px" : "20px 24px 66px 24px"}
        w="295px"
        borderColor="greyLight"
        borderStyle="solid"
        borderWidth="1px"
        borderRadius="20px"
        flexDirection="column"
      >
        <Flex align="center" justify="space-between" width="100%">
          <Heading fontSize={{ base: "", lg: "lg" }}>Filters</Heading>
          <Box
            onClick={() => setIsShowFilter((prevState) => !prevState)}
            cursor="pointer"
            p="4px"
            transition="all 0.2s"
            _hover={{
              background: "grey",
              borderRadius: "3px",
              transition: "all 0.2s ",
            }}
          >
            <ReactSVG src={settings} />
          </Box>
        </Flex>

        <Divider m="24px 0px" />

        {isShowFilter ? (
          <>
            <VStack>
              {[
                "T-shirts",
                "Hoodie",
                "Shorts",
                "Blazers",
                "Dresses",
                "Suits",
              ].map((category, i) => {
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
              })}
            </VStack>

            <Divider m="24px 0px" />

            <GroupInputs title="Price">
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
            </GroupInputs>

            <Divider m="24px 0px" />

            <GroupInputs title="Colors">
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
            </GroupInputs>

            <Divider m="24px 0px" />

            <GroupInputs title="Size">
              <Flex
                mt="20px"
                width="100%"
                alignContent="center"
                flexWrap="wrap"
                gap="8px"
              >
                {["Large", "Small", "Medium", "XX-Large", "One Size"].map(
                  (size, i) => {
                    const isActive = size.toLowerCase() === dataForSubmit.size;

                    return (
                      <ButtonFilter
                        onClick={() =>
                          handleDataForSubmit({ key: "size", value: size })
                        }
                        key={i}
                        text={size}
                        isActive={isActive}
                      />
                    );
                  }
                )}
              </Flex>
            </GroupInputs>

            <Divider m="24px 0px" />

            <GroupInputs title="Dress Style">
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
            </GroupInputs>

            <Divider m="24px 0px" />

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
          </>
        ) : null}
      </Flex>
    </Flex>
  );
};

export default FilterSheets;
