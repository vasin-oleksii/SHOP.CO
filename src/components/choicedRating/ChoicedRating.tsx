import { StarIcon } from "@chakra-ui/icons";
import { HStack } from "@chakra-ui/react";
import { useState } from "react";

const ChoicedRating = ({
  setNumSelectedStar,
  numSelectedStar,
}: {
  numSelectedStar: number;
  setNumSelectedStar: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [numHoveredStar, setNumHoveredStar] = useState<number | null>(null);

  return (
    <HStack onMouseLeave={() => setNumHoveredStar(null)}>
      {Array.from({ length: 5 }).map((_, i) => {
        const isHovered = numHoveredStar !== null && i <= numHoveredStar;
        const isSelected = i <= numSelectedStar;

        return (
          <StarIcon
            key={i}
            color={isHovered || isSelected ? "#FFC633" : "grey"}
            onMouseEnter={() => setNumHoveredStar(i)}
            onClick={() => setNumSelectedStar(i)}
            cursor="pointer"
          />
        );
      })}
    </HStack>
  );
};

export default ChoicedRating;
