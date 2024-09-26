import { Box, CloseButton, Container, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import ButtonWithoutBorder from "../buttons/ButtonWithoutBorder";

interface PropositionProps {
  title: string;
  buttonText: string;
  [key: string]: string;
}

const Proposition = ({ title, buttonText, ...props }: PropositionProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => setIsVisible((prevState) => !prevState);

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
            onClick={handleClose}
            right="100px"
            display={{ base: "none", md: "block" }}
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default Proposition;
