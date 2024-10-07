import { Box, CloseButton, Container, Flex, Text } from "@chakra-ui/react";

import LinkWithoutBorder from "./links/LinkWithoutBorder";

interface BannerPropositionHeadProps {
  title: string;
  buttonText: string;
  isVisible: boolean;
  bg: string;
  color: string;
  toggleBanner: any;
}

const BannerPropositionHead = ({
  title,
  buttonText,
  isVisible,
  toggleBanner,
  ...props
}: BannerPropositionHeadProps) => {
  if (!isVisible) return null;

  return (
    <Box padding="10px 0px" {...props} position="relative">
      <Container>
        <Flex
          alignItems="center"
          justifyContent="center"
          fontSize={{ base: "xs", sm: "sm" }}
        >
          <Text>{title}</Text>
          <LinkWithoutBorder marginLeft="5px">{buttonText}</LinkWithoutBorder>
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
