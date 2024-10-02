import { Text, Flex, Img } from "@chakra-ui/react";
import star from "../../assets/stars/star.svg";
import starHalf from "../../assets/stars/starHalf.svg";

const StarRatings = ({ rating }: { rating: number }) => {
  const allStart = [];

  for (let i = 1; i <= rating; i++) {
    allStart.push(star);
  }

  if (!Number.isInteger(rating)) {
    allStart.push(starHalf);
  }
  return (
    <Flex>
      {allStart.map((star, i) => (
        <Img src={star} alt="star" key={i} />
      ))}
      <Text ml="13px">{rating.toFixed(1)} / 5</Text>
    </Flex>
  );
};

export default StarRatings;
