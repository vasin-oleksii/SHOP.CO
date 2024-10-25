import { Flex, Select, Text } from "@chakra-ui/react";
import { ITEMS_PER_PAGE } from "../../constants/Filtes";
import settingsBlack from "../../assets/icons/settingsBlack.svg";
import { ReactSVG } from "react-svg";
import { useFilterState } from "../../store/useFilterState";
import { useEffect, useState } from "react";
import { useCategoryState } from "../../store/useCategoryState";

const HeadViewClothes = ({
  currentPage,
  showError,
  dataLength,
}: {
  currentPage: number;
  showError: boolean;
  dataLength: number;
}) => {
  const [sortBy, setSortBy] = useState<string | undefined>("");
  const { changeParametrsOfSearch } = useCategoryState();
  const { toggleShowFilter } = useFilterState();

  useEffect(() => {
    changeParametrs();
  }, [sortBy]);

  const changeParametrs = () => {
    switch (sortBy) {
      case "colors":
        changeParametrsOfSearch({ color: "black|navy" });
        break;
      case "cheap":
        changeParametrsOfSearch({ price: "5" });
        break;
      case "expensive":
        changeParametrsOfSearch({ price: "9" });
        break;
      default:
        changeParametrsOfSearch({});
        break;
    }
  };

  return (
    <Flex align="center" justify="center">
      <Text fontSize={{ base: "sm", sm: "md" }}>
        Showing {currentPage === 1 ? 1 : currentPage * ITEMS_PER_PAGE - 9}-
        {showError
          ? 0
          : currentPage * ITEMS_PER_PAGE > dataLength
          ? dataLength
          : currentPage * ITEMS_PER_PAGE}{" "}
        of {showError ? 0 : dataLength} Products
      </Text>
      <Flex
        ml="12px"
        fontSize={{ base: "xs", md: "sm" }}
        align="center"
        justify="center"
        display={{ base: "none", lg: "flex" }}
      >
        Sort by:
        <Flex
          flexDirection="row"
          align="center"
          justify="center"
          fontWeight="bold"
          ml="-10px"
        >
          <Select
            placeholder="Most popular"
            fontWeight="700"
            border="none"
            fontSize="md"
            onChange={(e) =>
              setSortBy(e.target.value === undefined ? "" : e.target.value)
            }
          >
            <option value="colors"> Popular colors</option>
            <option value="cheap">{"Most cheap $"} </option>
            <option value="expensive">{"Expensive $$$"} </option>
          </Select>
        </Flex>
      </Flex>
      <Flex
        ml="12px"
        display={{ base: "flex", lg: "none" }}
        p="10px"
        background="grey"
        borderRadius="100%"
        cursor="pointer"
        onClick={() => toggleShowFilter()}
      >
        <ReactSVG src={settingsBlack} />
      </Flex>
    </Flex>
  );
};

export default HeadViewClothes;
