import CardPreview from "./CardPreview";
import { Box, Grid, Heading, Spinner, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
//! import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ClothesPreview = () => {
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    const numberOfProductsUppload = 8;

    const fetchData = async () => {
      try {
        const results = await fetch(
          `https://api.escuelajs.co/api/v1/products?offset=0&limit=${numberOfProductsUppload}`
        );
        const data = await results.json();

        setNewProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const isLoading = newProducts.length === 0;

  return (
    <VStack justify="center">
      <Heading>NEW ARRIVALS</Heading>
      {isLoading ? (
        <Spinner
          thickness="5px"
          speed="0.65s"
          emptyColor="gray.200"
          color="black"
          size="xl"
        />
      ) : (
        <Box mt={{ base: "32px", lg: "56px" }}>
          <Grid templateColumns="repeat(4, 1fr)" gap="20px">
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
        </Box>
      )}
    </VStack>
  );
};

export default ClothesPreview;
