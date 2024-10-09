import {
  HStack,
  VStack,
  Flex,
  SkeletonText,
  SkeletonCircle,
} from "@chakra-ui/react";

const ReviewSkeleton = () => {
  const generateSkeletonCircles = (numOfCircles: number): JSX.Element[] => {
    const circles: JSX.Element[] = [];
    for (let i = 0; i < numOfCircles; i++) {
      circles.push(<SkeletonCircle size="5" key={i} />);
    }
    return circles;
  };

  return (
    <VStack overflow="hidden" alignItems="start">
      <HStack>{generateSkeletonCircles(5)}</HStack>

      <Flex alignItems="center">
        <SkeletonText
          width={{ base: "50px", md: "100px" }}
          skeletonHeight="4"
          height="20px"
          mt="8px"
          noOfLines={1}
        />
      </Flex>
      <SkeletonText
        width={{ base: "150px", md: "250px" }}
        skeletonHeight="4"
        height="60px"
        mt="4px"
        noOfLines={4}
      />
    </VStack>
  );
};

export default ReviewSkeleton;
