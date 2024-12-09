import { Box, Container } from "@chakra-ui/react";
import { useLocation, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import CrumbLink from "../../components/common/CrumbLink";
import DividerCustom from "../../components/common/divider/DividerCustom";

import TabsForChoice from "./tabsForChoice/TabsForChoice";
import useFetch from "../../components/shared/hooks/useFetch";

import Gallery from "./gallery/Gallery";
import WrapperCard from "./wrapperCard/WrapperCard";
import InfoCard from "./infoCard/InfoCard";
import GallerySkelet from "./gallery/GallerySkelet";
import InfoCardSkelet from "./infoCard/InfoCardSkelet";
import ClothesPreview from "../../components/common/ClothesPreview";

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
const NUM_OF_UPPLOAD_ITEM = 4;

const ProductPage = () => {
  const urlParams = useParams();
  const { pathname } = useLocation();

  const [productId, setProductId] = useState<string>("");
  const [product, setProduct] = useState<undefined | ProductState>();

  const { data, isLoading } = useFetch(
    // @ts-ignore
    { url: `${import.meta.env.VITE_API_URL}?id=${productId || ""}` }
  );

  useEffect(() => {
    const product = data[0];
    product && setProduct(product);
  }, [data]);

  useEffect(() => {
    setProductId(urlParams.id || "");
  }, [urlParams]);

  const showSkelets = isLoading || product === undefined;

  return (
    <>
      <Box>
        <Container maxW="container.xl">
          <Box mt={{ base: "20px", xl: "24px" }}>
            <CrumbLink pathname={pathname} />
          </Box>

          {showSkelets && (
            <WrapperCard>
              <GallerySkelet />
              <InfoCardSkelet />
            </WrapperCard>
          )}

          {product && (
            <WrapperCard>
              <Gallery product={product} />
              <InfoCard product={product} />
            </WrapperCard>
          )}
          <TabsForChoice product={product} />
          <Box mt={{ base: "40px", lg: "64px" }}>
            <ClothesPreview
              title="You might also like"
              // @ts-ignore
              url={`${import.meta.env.VITE_API_URL}?page=1&color=${
                product?.color
              }&limit=`}
              uploadMore={NUM_OF_UPPLOAD_ITEM}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ProductPage;
