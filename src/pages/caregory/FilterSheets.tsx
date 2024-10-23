import {
  Flex,
  Heading,
  Text,
  VStack,
  Grid,
  GridItem,
  Box,
  Divider,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

import ButtonRoundProps from "../../components/common/buttons/ButtonRound";
import { CheckCircleIcon, CheckIcon, SmallAddIcon } from "@chakra-ui/icons";
import { useCategoryState } from "../../store/useCategoryState";
import { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import settings from "../../assets/icons/settings.svg";
import ButtonFilter from "../../components/common/buttons/ButtonFilter";
import GroupInputs from "./GroupInputs";
import { CATEGORY } from "../../constants/Filtes";

const FilterSheets = () => {
  const { SIZE, STYLE, CATEGORYS, COLORS } = CATEGORY;

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
          <Heading fontSize={"lg"}>Filters</Heading>
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
              {CATEGORYS.map((category, i) => {
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
                        <SmallAddIcon color="greyText" />
                      )}
                    </Box>
                  </Flex>
                );
              })}
            </VStack>

            <Divider m="24px 0px" />

            <GroupInputs title="Price" category="price">
              <Box mt="20px" width="100%" p="0px 10px">
                <Slider
                  defaultValue={Number(dataForSubmit.price)}
                  min={0}
                  max={150}
                  step={5}
                  borderRadius="20px"
                  onChange={(price) =>
                    handleDataForSubmit({
                      key: "price",
                      value: `${price}`,
                    })
                  }
                >
                  <SliderTrack bg="greyLight">
                    <SliderFilledTrack bg="black" />
                  </SliderTrack>
                  <SliderThumb boxSize={6} bg="black" position="relative" />
                  <Box position="absolute" top="70%" color="greyText" right={0}>
                    {Number(dataForSubmit.price) === 0
                      ? "All"
                      : dataForSubmit.price + "$"}
                  </Box>
                </Slider>
              </Box>
            </GroupInputs>

            <Divider m="24px 0px" />

            <GroupInputs title="Colors" category="color">
              <Grid
                mt="20px"
                templateColumns="repeat(auto-fill, minmax(40px, 50px))"
                width="100%"
                gap="15px"
                alignContent="center"
                justifyContent="center"
                alignItems="center"
              >
                {COLORS.map((color, i) => {
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

            <GroupInputs title="Size" category="size">
              <Flex
                mt="20px"
                width="100%"
                alignContent="center"
                flexWrap="wrap"
                gap="8px"
              >
                {SIZE.map((size, i) => {
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
                })}
              </Flex>
            </GroupInputs>

            <Divider m="24px 0px" />

            <GroupInputs title="Dress Style" category="style">
              <VStack mt="20px">
                {STYLE.map((style, i) => {
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
                          <SmallAddIcon color="greyText" />
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
