import {
  Box,
  Flex,
  Heading,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import { CATEGORY } from "../../../constants/Filtes";
import DividerCustom from "../../../components/common/divider/DividerCustom";

const InfoCardSkelet = () => {
  const { COLORS, SIZE } = CATEGORY;

  return (
    <Flex
      flexDirection="column"
      ml={{ base: "0", md: "29px", lg: "39px" }}
      mt="20px"
    >
      <Heading fontSize={{ base: "24px", lg: "40px" }}>
        <Skeleton height="60px" width="70%" />
        <Skeleton height="60px" width="90%" mt="10px" />
      </Heading>
      <Flex mt={{ base: "26px", lg: "16px" }} gap="10px">
        {[...new Array(5)].map((_, i) => (
          <SkeletonCircle key={i} height="30px" width="30px" />
        ))}
        <Skeleton height="30px" width="25%" />
      </Flex>

      <HStack mt={{ base: "12px", lg: "14px" }}>
        <Skeleton height="40px" width="15%" />
        <Skeleton height="40px" width="30%" />
      </HStack>
      <SkeletonText noOfLines={2} spacing={2} skeletonHeight="30px" mt="20px" />
      <DividerCustom />

      <Box mt="24px">
        <Skeleton height="30px" width="40%" />

        <HStack mt="16px">
          {COLORS.map((_, i) => {
            return <SkeletonCircle key={i} height="30px" width="30px" />;
          })}
        </HStack>
      </Box>

      <DividerCustom />

      <Box mt="24px">
        <Skeleton height="30px" width="40%" />

        <HStack mt="16px">
          {SIZE.map((_, i) => {
            return (
              <Skeleton
                key={i}
                height="40px"
                width="80px"
                borderRadius="62px"
              />
            );
          })}
        </HStack>
      </Box>

      <DividerCustom />
      <Box mt="24px">
        <Flex width="100%" gap="10px">
          <Skeleton height="60px" width="30%" borderRadius="62px" />
          <Skeleton height="60px" width="60%" borderRadius="62px" />
        </Flex>
      </Box>
    </Flex>
  );
};

export default InfoCardSkelet;
