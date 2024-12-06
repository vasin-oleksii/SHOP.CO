import {
  Flex,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  VStack,
} from "@chakra-ui/react";

const ReviewSkelet = () => {
  const generateSkeletonCircles = (numOfCircles: number): JSX.Element[] => {
    const circles: JSX.Element[] = [];
    for (let i = 0; i < numOfCircles; i++) {
      circles.push(<SkeletonCircle height="20px" width="20px" key={i} />);
    }
    return circles;
  };

  return (
    <VStack overflow="hidden" alignItems="start" p="20px">
      <HStack>{generateSkeletonCircles(5)}</HStack>

      <Flex alignItems="center" width="100%">
        <Skeleton width="30%" height="20px" />
        <SkeletonCircle height="20px" width="20px" ml="10px" />
      </Flex>
      <Flex width="100%">
        <SkeletonText
          mt={2}
          width="100%"
          skeletonHeight="15px"
          noOfLines={4}
          textAlign="left"
        />
      </Flex>
      <Flex width="100%">
        <Skeleton mt={2.5} width="80%" height="20px" />
      </Flex>
    </VStack>
  );
};

export default ReviewSkelet;
