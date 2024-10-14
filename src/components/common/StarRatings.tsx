import { Text, Flex, Img } from "@chakra-ui/react";
import star from "../../assets/stars/star.svg";
import starHalf from "../../assets/stars/starHalf.svg";

const StarRatings = ({
  rating,
  ratingMax,
  starBig,
}: {
  rating: number;
  ratingMax?: number;
  starBig?: boolean;
}) => {
  const allStart = [];

  for (let i = 1; i <= rating; i++) {
    allStart.push(star);
  }

  if (!Number.isInteger(rating)) {
    allStart.push(starHalf);
  }
  return (
    <Flex alignItems="center">
      {allStart.map((star, i) => (
        <Img
          src={star}
          alt="star"
          key={i}
          boxSize={
            starBig
              ? { base: "20px", lg: "22px" }
              : { base: "15px", lg: "18px" }
          }
        />
      ))}
      {ratingMax && <Text ml="13px">{`${rating} / ${ratingMax} `}</Text>}
    </Flex>
  );
};

export default StarRatings;
