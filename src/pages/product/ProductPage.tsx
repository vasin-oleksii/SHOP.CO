import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Img,
  HStack,
  Grid,
  Spinner,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import StarRatings from "../../components/common/StarRatings";
import DiscountPrice from "../../components/common/DiscountPrice";

import { useEffect, useState } from "react";
import CrumbLink from "../../components/common/CrumbLink";
import DividerCustom from "../../components/common/divider/DividerCustom";
import ButtonFilter from "../../components/common/buttons/ButtonFilter";
import ColorOption from "../caregory/filterSheets/ColorOption";
import { CATEGORY } from "../../constants/Filtes";
import AddToCart from "./addToCart/AddToCart";
import TabsForChoice from "./tabsForChoice/TabsForChoice";
import useFetch from "../../components/shared/hooks/useFetch";
import SpinnerCustom from "./spinnerCustom/SpinnerCustom";

interface ProductState {
  title: string;
  images: string[];
  price: number;
  old_price?: number | undefined;
  rating: number;
  description: string;
  color: string;
}

const ProductPage = () => {
  const { COLORS, SIZE } = CATEGORY;
  const { pathname } = useLocation();

  const [productId, setProductId] = useState<string>("");
  const [product, setProduct] = useState<undefined | ProductState>(undefined);

  const { data, isLoading } = useFetch(
    // @ts-ignore
    productId && { url: `${import.meta.env.VITE_API_URL}?id=${productId}` }
  );
  console.log(data[0]);

  useEffect(() => {
    if (data[0]) {
      setProduct(data[0]);
    }
  }, [data]);

  const [showImage, setShowImage] = useState<number>(0);

  const handleShowImage = (number: number) => {
    setShowImage(number);
  };

  useEffect(() => {
    const searchId = () => {
      pathname.split("/").filter((url) => {
        const lengthId = 20;
        if (url.length > lengthId) {
          setProductId(url);
        }
      });
    };
    searchId();
  }, []);

  return (
    <>
      <Box>
        <Container maxW="container.xl">
          <DividerCustom />

          <Box mt={{ base: "20px", xl: "24px" }}>
            <CrumbLink pathname={pathname} />
          </Box>
          {isLoading && !product && <SpinnerCustom />}
          {product && (
            <Grid
              templateColumns={{ base: "minmax(100px, 430px)", md: "50% 50%" }}
              mt={{ base: "23px", lg: "39px" }}
              justifyContent="center"
            >
              <Flex
                width="100%"
                flexDir={{ base: "column-reverse", lg: "row" }}
              >
                <Flex
                  flexDir={{ base: "row", lg: "column" }}
                  height="100%"
                  justify={{ base: "center", lg: "initial" }}
                  mt={{ base: "12px", lg: "0px" }}
                >
                  {product.images.map((img, i) => {
                    const isFirstItem = i === 0;

                    return (
                      <Box
                        key={i}
                        border={i === showImage ? "2px solid black" : ""}
                        cursor="pointer"
                        borderRadius="22px"
                        width={{ base: "100px", lg: "100px", xl: "130px" }}
                        height={{ base: "100px", lg: "100%" }}
                        mt={{
                          base: "0px",
                          lg: isFirstItem ? "" : "14px",
                        }}
                        ml={{ base: isFirstItem ? "0px" : "13px", lg: "0px" }}
                      >
                        <Img
                          src={img}
                          borderRadius="20px"
                          objectFit="cover"
                          height="100%"
                          onClick={() => handleShowImage(i)}
                        />
                      </Box>
                    );
                  })}
                </Flex>
                <Box ml={{ base: "", lg: "14px" }}>
                  {product.images.map((img, i) => {
                    if (i === showImage) {
                      return (
                        <Img
                          src={img}
                          key={i}
                          borderRadius="20px"
                          objectFit="cover"
                          maxW="100%"
                          height="100%"
                        />
                      );
                    }
                  })}
                </Box>
              </Flex>
              <Flex
                flexDirection="column"
                ml={{ base: "0", md: "29px", lg: "39px" }}
              >
                <Heading fontSize={{ base: "24px", lg: "40px" }}>
                  {product.title}
                </Heading>
                <Box mt={{ base: "26px", lg: "16px" }}>
                  <StarRatings
                    rating={product.rating}
                    ratingMax={5}
                    starBig={true}
                  />
                </Box>

                <HStack mt={{ base: "12px", lg: "14px" }}>
                  <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="bold">
                    ${product.price}
                  </Text>
                  {product.old_price && (
                    <DiscountPrice
                      priceNow={product.price}
                      pricePrev={product.old_price}
                      isBig={true}
                    />
                  )}
                </HStack>
                <Text mt="24px">{product.description}</Text>
                <DividerCustom />

                <Box mt="24px">
                  <Text>Select Colors</Text>
                  <HStack mt="16px">
                    {COLORS.map((color, i) => {
                      const isActiveElement =
                        color === product.color.toLowerCase();

                      return (
                        <ColorOption
                          key={i}
                          color={color}
                          isSelected={isActiveElement}
                          onClick={() => {}}
                        />
                      );
                    })}
                  </HStack>
                </Box>

                <DividerCustom />

                <Box mt="24px">
                  <Text>Choose Size</Text>
                  <HStack mt="16px">
                    {SIZE.map((size, i) => {
                      const isActive = size.toLowerCase() === "large";

                      return (
                        <ButtonFilter
                          key={i}
                          text={size}
                          isActive={isActive}
                          isBig
                        />
                      );
                    })}
                  </HStack>
                </Box>

                <DividerCustom />
                <Box mt="24px">
                  <AddToCart />
                </Box>
              </Flex>
            </Grid>
          )}
          <TabsForChoice />
        </Container>
      </Box>
    </>
  );
};

export default ProductPage;
