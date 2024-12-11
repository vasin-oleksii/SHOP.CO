import { Box, Flex, Grid, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";
import StarRatings from "../../../components/common/StarRatings";
import DiscountPrice from "../../../components/common/DiscountPrice";
import DividerCustom from "../../../components/common/divider/DividerCustom";
import { CATEGORY } from "../../../constants/Filtes";
import ColorOption from "../../caregory/filterSheets/ColorOption";
import ButtonFilter from "../../../components/common/buttons/ButtonFilter";
import AddToCart from "../addToCart/AddToCart";
import { ProductState } from "../ProductPage";

const InfoCard = ({ product }: { product: ProductState }) => {
  const { COLORS, SIZE } = CATEGORY;

  return (
    <Flex flexDirection="column" ml={{ base: "0", md: "29px", lg: "39px" }}>
      <Heading fontSize={{ base: "24px", lg: "40px" }}>{product.title}</Heading>
      <Box mt={{ base: "26px", lg: "16px" }}>
        <StarRatings rating={product.rating} ratingMax={5} starBig={true} />
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
        <Grid
          mt="16px"
          gridTemplateColumns="repeat(auto-fill, minmax(37px, 1fr))"
          gap="16px"
        >
          {COLORS.map((color, i) => {
            const isActiveElement = color === product.color.toLowerCase();

            return (
              <ColorOption
                key={i}
                color={color}
                isSelected={isActiveElement}
                onClick={() => {}}
              />
            );
          })}
        </Grid>
      </Box>

      <DividerCustom />

      <Box mt="24px">
        <Text>Choosee Size</Text>
        <HStack mt="16px" wrap="wrap">
          {SIZE.map((size, i) => {
            const isActive = size === product.size;

            return (
              <ButtonFilter key={i} text={size} isActive={isActive} isBig />
            );
          })}
        </HStack>
      </Box>

      <DividerCustom />
      <Box mt="24px">
        <AddToCart product={product} />
      </Box>
    </Flex>
  );
};

export default InfoCard;