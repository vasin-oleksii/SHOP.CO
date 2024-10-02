import { Text, Heading, Image, HStack, VStack } from "@chakra-ui/react";
import StarRatings from "./StarRatings";

interface CardPreviewProps {
  title: string;
  images: [key: string];
  price: number;
}

const CardPreview = ({ title, images, price }: CardPreviewProps) => {
  const soldOutLink =
    "https://st2.depositphotos.com/3259079/45453/v/600/depositphotos_454535022-stock-illustration-sorry-temporarily-out-stock-sign.jpg";
  const randomRating = Math.floor(Math.random() * 5 + 1);

  return (
    <VStack maxW="300px" alignItems="start">
      {images.map((img, i) => {
        img = img.replace("[", "");
        img = img.replace("]", "");
        img = img.replace('"', "");
        if (i === 0)
          //! change
          return (
            <Image
              src={img}
              fallbackSrc={soldOutLink}
              boxSize="300px"
              borderRadius="20px"
              key={i}
            />
          );
      })}
      <Heading
        fontSize={{ base: "md", lg: "lg" }}
        pt="18px"
        noOfLines={1}
        maxW="300px"
        textOverflow="ellipsis"
      >
        {title}
      </Heading>
      <HStack>
        <StarRatings rating={randomRating} />
      </HStack>
      <Text fontSize={{ base: "lg", lg: "xl" }} fontWeight="bold">
        ${price}
      </Text>
    </VStack>
  );
};

export default CardPreview;
