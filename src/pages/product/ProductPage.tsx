import { Box, Container } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import CrumbLink from "../../components/common/CrumbLink";
import DividerCustom from "../../components/common/divider/DividerCustom";

import TabsForChoice from "./tabsForChoice/TabsForChoice";
import useFetch from "../../components/shared/hooks/useFetch";
import SpinnerCustom from "./spinnerCustom/SpinnerCustom";
import Gallery from "./gallery/Gallery";
import WrapperCard from "./wrapperCard/WrapperCard";
import InfoCard from "./infoCard/InfoCard";

export interface ProductState {
  title: string;
  images: string[];
  price: number;
  old_price?: number | undefined;
  rating: number;
  description: string;
  color: string;
  size: string;
}

const ProductPage = () => {
  const { pathname } = useLocation();

  const [productId, setProductId] = useState<string>("");
  const [product, setProduct] = useState<undefined | ProductState>();

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
            <WrapperCard>
              <Gallery product={product} />
              <InfoCard product={product} />
            </WrapperCard>
          )}
          <TabsForChoice product={product} />
        </Container>
      </Box>
    </>
  );
};

export default ProductPage;
