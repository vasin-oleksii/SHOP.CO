import {
  Flex,
  Heading,
  Text,
  Link,
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
import { CheckIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useCategoryState } from "../../store/store";
import { useEffect, useState } from "react";

const Filters = () => {
  const [dataForSubmit, setDataForSubmit] = useState({
    category: "",
    color: "",
    size: "",
    style: "",
    title: "",
    price: "",
  });

  const { changeParametrsOfSearch } = useCategoryState();

  useEffect(() => {
    changeParametrsOfSearch(dataForSubmit);
  }, [dataForSubmit]);

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
            <ChevronRightIcon />
          </Box>
        </Flex>

        <Divider m="24px 0px" />

        <VStack>
          {["T-shirts", "Hoodie", "Shorts"].map((title, i) => {
            return (
              <Flex justify="space-between" align="center" w="100%" key={i}>
                <Link>
                  <Text>{title}</Text>
                </Link>
                <Box>
                  <ChevronRightIcon />
                </Box>
              </Flex>
            );
          })}
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
                    setDataForSubmit((prevState) => {
                      return { ...prevState, color: `${color}` };
                    })
                  }
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {color === dataForSubmit.color ? (
                    <CheckIcon color={color === "white" ? "black" : "white"} />
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

          <Grid
            mt="20px"
            templateColumns="repeat(2, minmax(10px, 80px))"
            width="100%"
            alignContent="center"
          >
            {["Large", "Small", "Medium", "XX-Large", "One Size"].map(
              (size, i) => {
                return (
                  <Box
                    key={i}
                    width="72px"
                    onClick={() =>
                      setDataForSubmit((prevState) => {
                        return { ...prevState, size: `${size}` };
                      })
                    }
                  >
                    {size}
                  </Box>
                );
              }
            )}
          </Grid>
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
            {["Casual"].map((title, i) => {
              return (
                <Flex justify="space-between" align="center" w="100%" key={i}>
                  <Link>
                    <Text>{title}</Text>
                  </Link>
                  <Box>
                    <ChevronRightIcon />
                  </Box>
                </Flex>
              );
            })}
          </VStack>
        </Box>

        <ButtonRoundProps colorBtn="black" mt="24px" width="100%" p="0px 16px">
          Apply Filter
        </ButtonRoundProps>
      </Flex>
    </Flex>
  );
};

export default Filters;
