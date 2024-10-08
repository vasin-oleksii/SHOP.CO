import {
  HStack,
  VStack,
  Flex,
  Box,
  Skeleton,
  SkeletonText,
  SkeletonCircle,
} from "@chakra-ui/react";

const CardPreviewSkelet = () => {
  const generateSkeletonCircles = (numOfCircles: number): JSX.Element[] => {
    const circles: JSX.Element[] = [];
    for (let i = 0; i < numOfCircles; i++) {
      circles.push(<SkeletonCircle size="5" key={i} />);
    }
    return circles;
  };

  return (
    <VStack overflow="hidden" alignItems="start">
      <Box maxW={{ base: "200px", md: "300px" }}>
        <Skeleton
          height={{ base: "200px", md: "300px" }}
          width={{ base: "200px", md: "300px" }}
          borderRadius="20px"
        />
      </Box>

      <SkeletonText
        width={{ base: "150px", md: "250px" }}
        skeletonHeight="4"
        height="20px"
        mt="18px"
        noOfLines={1}
      />

      <HStack>{generateSkeletonCircles(5)}</HStack>
      <Flex alignItems="center">
        <SkeletonText
          width={{ base: "50px", md: "100px" }}
          skeletonHeight="4"
          height="20px"
          mt="4px"
          noOfLines={1}
        />
      </Flex>
    </VStack>
  );
};

export default CardPreviewSkelet;
