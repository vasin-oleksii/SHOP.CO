import { Box, CloseButton, Container, Flex, Text } from "@chakra-ui/react";

import ButtonWithoutBorder from "./buttons/ButtonWithoutBorder";

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
          <ButtonWithoutBorder marginLeft="5px">
            {buttonText}
          </ButtonWithoutBorder>
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
