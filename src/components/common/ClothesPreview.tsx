import CardPreview from "./CardPreview";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Spinner,
  useTheme,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
//! import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ButtonRound from "./buttons/ButtonRound";

const ClothesPreview = () => {
  const theme = useTheme();

  const [newProducts, setNewProducts] = useState([]);
  const [numberOfProductsUppload, setNumberOfProductsUppload] =
    useState<number>(4);
  const [isLoadingData, setIsLoadingData] = useState<boolean>(false);

  const updateNumberOfProductsUpload = (): void => {
    setNumberOfProductsUppload((prevState) => prevState + 4);
  };

  const updateProducts = (data: any) => {
    setNewProducts(data);
  };

  const fetchData = async () => {
    setIsLoadingData(true);
    try {
      const results = await fetch(
        `https://api.escuelajs.co/api/v1/products?offset=0&limit=${numberOfProductsUppload}`
      );
      const data = await results.json();

      updateProducts(data);
      setIsLoadingData(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [numberOfProductsUppload]);

  const isLoading = newProducts.length === 0;

  return (
    <VStack justify="center">
      <Heading>NEW ARRIVALS</Heading>
      {isLoading ? (
        <Spinner
          mt="50px"
          thickness="5px"
          speed="0.65s"
          emptyColor="gray.200"
          color="black"
          size="xl"
        />
      ) : (
        <Box mt={{ base: "32px", lg: "56px" }}>
          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            gap="20px"
          >
            {newProducts.map(({ id, title, images, price }) => {
              return (
                <CardPreview
                  title={title}
                  images={images}
                  price={price}
                  key={id}
                />
              );
            })}
          </Grid>

          <Flex justify="center" mt={{ base: "28px", lg: "38px" }}>
            <ButtonRound
              colorBtn="white"
              onClick={updateNumberOfProductsUpload}
              p="16px 80px"
              m="0 auto"
              border={`1px solid ${theme.colors.grey}`}
              isLoading={isLoadingData}
            >
              View All
            </ButtonRound>
          </Flex>
        </Box>
      )}
      2
    </VStack>
  );
};

export default ClothesPreview;
