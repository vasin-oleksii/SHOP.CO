import { Box, Flex, Img, Skeleton } from "@chakra-ui/react";
import SkeletonOnFetch from "../../../components/common/skelets/SkeletonOnFetch";

const GallerySkelet = () => {
  return (
    <Flex
      width="100%"
      height="100%"
      flexDir={{ base: "column-reverse", lg: "row" }}
    >
      <Flex
        flexDir={{ base: "row", lg: "column" }}
        justify={{ base: "center", lg: "initial" }}
        mt={{ base: "12px", lg: "0px" }}
        height={{ base: "100px", lg: "100%" }}
      >
        <SkeletonOnFetch
          numOfSkeletons={3}
          skeletItem={
            <Box
              cursor="pointer"
              borderRadius="22px"
              width={{ base: "100px", lg: "100px", xl: "130px" }}
              height={{ base: "100px", lg: "210px" }}
              mt={{
                base: "0px",
                lg: "14px",
              }}
              ml={{ base: "13px", lg: "0px" }}
            >
              <Skeleton width="100%" height="100%" borderRadius="20px" />
            </Box>
          }
        />
      </Flex>
      <Box
        ml={{ base: "", lg: "14px" }}
        height={{ base: "400px", lg: "100%" }}
        width="100%"
      >
        <Skeleton width="100%" height="98%" borderRadius="20px" mt="15px" />
      </Box>
    </Flex>
  );
};

export default GallerySkelet;
