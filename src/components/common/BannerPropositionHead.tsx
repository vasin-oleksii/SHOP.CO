import { Box, CloseButton, Container, Flex, Text } from "@chakra-ui/react";

import LinkWithoutBorder from "./links/LinkWithoutBorder";
import { Link } from "react-router-dom";
import { useState } from "react";

interface BannerPropositionHeadProps {
  title: string;
  buttonText: string;
  isVisible: boolean;
  bg: string;
  color: string;
  toggleBanner: any;
  borderWidth?: string;
  borderColor?: string;
}

const BannerPropositionHead = ({
  title,
  buttonText,
  isVisible,
  toggleBanner,
  ...props
}: BannerPropositionHeadProps) => {
  const [isClicked, setIsClicked] = useState(false);
  if (!isVisible || isClicked) return null;

  return (
    <Box padding="10px 0px" {...props} position="relative">
      <Container>
        <Flex
          alignItems="center"
          justifyContent="center"
          fontSize={{ base: "xs", sm: "sm" }}
        >
          <Text>{title}</Text>
          <Link to="/cart" onClick={() => setIsClicked(true)}>
            <LinkWithoutBorder marginLeft="5px">{buttonText}</LinkWithoutBorder>
          </Link>
          <CloseButton
            size="md"
            position="absolute"
            onClick={() => toggleBanner()}
            right="100px"
            display={{ base: "none", md: "block" }}
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default BannerPropositionHead;
