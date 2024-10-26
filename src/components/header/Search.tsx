import {
  Box,
  HStack,
  Link,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Portal,
} from "@chakra-ui/react";
import Cart from "../../assets/icons/Cart.svg";
import User from "../../assets/icons/User.svg";
import { ReactSVG } from "react-svg";
import { useEffect, useState } from "react";

import SearchLitle from "../../assets/icons/SearchLitle.svg";
import SearchIcon from "../../assets/icons/Search.svg";
import InputIconLeft from "../common/inputs/InputIconLeft";

import { useLocation, useNavigate } from "react-router-dom";
import { useCategoryState } from "../../store/useCategoryState";

const Search = () => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const { parametrsOfSearch, changeParametrsOfSearch } = useCategoryState();
  const [searchValueInput, setSearchValueInput] = useState(
    parametrsOfSearch.title || "Loading..."
  );

  useEffect(() => {
    setSearchValueInput(parametrsOfSearch.title);
  }, [parametrsOfSearch.title]);

  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const onKeyDownSearch = (key: string) => {
    if (key === "Enter" && isHomePage) {
      navigate(`/category?page=1&title=${searchValueInput}`);
    }

    if (key === "Enter") {
      changeParametrsOfSearch({
        ...parametrsOfSearch,
        title: searchValueInput,
      });
    }
  };

  const onClickSearch = () => {
    changeParametrsOfSearch({
      ...parametrsOfSearch,
      title: searchValueInput,
    });
    if (isHomePage) {
      navigate(`/category?page=1&title=${searchValueInput}`);
    }
  };

  return (
    <>
      <InputIconLeft
        maxWidth="602px"
        display={{ base: "none", lg: "block" }}
        placeholder="Search for products..."
        bgInput={"greyLight"}
        colorInput={"greyText"}
        valueInput={searchValueInput}
        onChange={(e) => setSearchValueInput(e.target.value)}
        onKeyDown={(e) => onKeyDownSearch(e.key)}
      >
        <ReactSVG src={SearchLitle} onClick={onClickSearch} />
      </InputIconLeft>

      <HStack spacing="16px">
        <Popover>
          <PopoverTrigger>
            <Link
              display={{ base: "block", lg: "none" }}
              onClick={() => setIsFocus(true)}
            >
              <ReactSVG src={SearchIcon} />
            </Link>
          </PopoverTrigger>
          <Portal>
            <Box position="absolute" zIndex={1000}>
              <PopoverContent borderRadius="66px" width="100vw" zIndex={1000}>
                <PopoverArrow />

                <InputIconLeft
                  onKeyDown={(e) => onKeyDownSearch(e.key)}
                  valueInput={searchValueInput}
                  onChange={(e) => setSearchValueInput(e.target.value)}
                >
                  <ReactSVG src={SearchLitle} onClick={onClickSearch} />
                </InputIconLeft>
                <PopoverCloseButton size="sm" />
              </PopoverContent>
            </Box>
          </Portal>
        </Popover>

        <Link>
          <ReactSVG src={Cart} />
        </Link>
        <Link>
          <ReactSVG src={User} />
        </Link>
      </HStack>

      {isFocus && (
        <Portal>
          <Box
            background="rgba(0,0,0, 0.2)"
            width="100vw"
            height="100%"
            position="absolute"
            top="0"
            zIndex={100}
            onClick={() => setIsFocus(false)}
          ></Box>
        </Portal>
      )}
    </>
  );
};

export default Search;
