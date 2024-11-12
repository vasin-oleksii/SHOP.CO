import {
  Flex,
  Heading,
  Text,
  VStack,
  Grid,
  Box,
  Divider,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Portal,
} from "@chakra-ui/react";

import ButtonRoundProps from "../../../components/common/buttons/ButtonRound";
import { CheckCircleIcon, CloseIcon, SmallAddIcon } from "@chakra-ui/icons";
import { useCategoryState } from "../../../store/useCategoryState";
import { ReactNode, useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import settings from "../../../assets/icons/settings.svg";
import ButtonFilter from "../../../components/common/buttons/ButtonFilter";
import GroupInputs from "../GroupInputs";
import { CATEGORY } from "../../../constants/Filtes";
import { useFilterState } from "../../../store/useFilterState";
import ColorOption from "./ColorOption";

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
  const {
    showFilter: showFilterMobile,
    toggleShowFilter: toggleShowFilterMobile,
  } = useFilterState();

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
    setDataForSubmit((prevState) => {
      return { ...prevState, [key]: value === prevState[key] ? "" : value };
    });
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

  const renderCategories = () => (
    <VStack>
      {CATEGORYS.map((category, i) => {
        const isActive = category.toLowerCase() === dataForSubmit.category;

        return (
          <FilterOption
            key={i}
            isActive={isActive}
            label={category}
            onClick={() =>
              handleDataForSubmit({
                key: "category",
                value: category,
              })
            }
          />
        );
      })}
    </VStack>
  );
  function Overlay() {
    return (
      <Portal>
        <Box
          position="absolute"
          width="100vw"
          height="100%"
          background="rgba(0, 0, 0, 0.2)"
          top={0}
          zIndex={999}
          onClick={() => toggleShowFilterMobile()}
        ></Box>
      </Portal>
    );
  }
  const MainContainer = ({ children }: { children: ReactNode }) => (
    <Flex
      display={showFilterMobile ? "flex" : { base: "none", lg: "flex" }}
      h={
        showFilterMobile
          ? { base: "1200px", sm: "1100px", md: "1000px" }
          : { base: "100%" }
      }
      position={showFilterMobile ? "absolute" : "relative"}
      ml={showFilterMobile ? { base: "-9px", sm: "0px" } : { base: "0px" }}
      zIndex={10000}
    >
      {children}
    </Flex>
  );
  const FilterContainer = ({ children }: { children: ReactNode }) => (
    <Flex
      className="Filter"
      p={!isShowFilter ? "20px 24px" : "20px 24px 66px 24px"}
      w="295px"
      borderColor="greyLight"
      borderStyle="solid"
      borderWidth="1px"
      borderRadius="20px"
      flexDirection="column"
      width={showFilterMobile ? "96vw" : "300px"}
      background="white"
    >
      {children}
    </Flex>
  );
  const Header = () => (
    <Flex align="center" justify="space-between" width="100%">
      <Heading fontSize={"lg"}>Filters</Heading>
      {showFilterMobile ? (
        <Box
          cursor="pointer"
          onClick={() => {
            toggleShowFilterMobile();
          }}
        >
          <CloseIcon />
        </Box>
      ) : (
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
      )}
    </Flex>
  );
  const PriceOption = () => (
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
  );
  const ColorsOption = () => (
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
          <ColorOption
            key={i}
            color={color}
            isSelected={isActiveElement}
            onClick={() => handleDataForSubmit({ key: "color", value: color })}
          />
        );
      })}
    </Grid>
  );
  const SizeOption = () => (
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
            onClick={() => handleDataForSubmit({ key: "size", value: size })}
            key={i}
            text={size}
            isActive={isActive}
          />
        );
      })}
    </Flex>
  );
  const StyleOption = () => (
    <VStack mt="20px">
      {STYLE.map((style, i) => {
        const isActiveElement = style.toLowerCase() === dataForSubmit.style;

        return (
          <Flex
            justify="space-between"
            align="center"
            w="100%"
            key={i}
            onClick={() => handleDataForSubmit({ key: "style", value: style })}
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
  );

  return (
    <>
      {showFilterMobile && <Overlay />}
      <MainContainer>
        <FilterContainer>
          <Header />
          <Divider m="24px 0px" />

          {isShowFilter && (
            <>
              {renderCategories()}

              <Divider m="24px 0px" />

              <GroupInputs
                title="Price"
                category="price"
                localData={dataForSubmit}
              >
                <PriceOption />
              </GroupInputs>

              <Divider m="24px 0px" />

              <GroupInputs
                title="Colors"
                category="color"
                localData={dataForSubmit}
              >
                <ColorsOption />
              </GroupInputs>

              <Divider m="24px 0px" />

              <GroupInputs
                title="Size"
                category="size"
                localData={dataForSubmit}
              >
                <SizeOption />
              </GroupInputs>
              <Divider m="24px 0px" />

              <GroupInputs
                title="Dress Style"
                category="style"
                localData={dataForSubmit}
              >
                <StyleOption />
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
          )}
        </FilterContainer>
      </MainContainer>
    </>
  );
};

export default FilterSheets;

const FilterOption = ({
  isActive,
  label,
  onClick,
}: {
  isActive: boolean;
  label: string;
  onClick: () => void;
}) => (
  <Flex
    justify="space-between"
    align="center"
    w="100%"
    cursor="pointer"
    onClick={onClick}
  >
    <Text
      fontSize="md"
      fontWeight={isActive ? 700 : ""}
      color={isActive ? "black" : "greyText"}
    >
      {label}
    </Text>

    <Box>
      {isActive ? <CheckCircleIcon /> : <SmallAddIcon color="greyText" />}
    </Box>
  </Flex>
);
