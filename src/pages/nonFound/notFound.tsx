import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Flex height="50vh" align="center" textAlign="center">
      <Flex flexDirection="column" width="100%">
        <Heading>Soory 😿 we did'nt found this page</Heading>
        <Link to={"/"}>
          <Button mt="20px">
            <Text>Return to home page 🩵</Text>
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default NotFoundPage;
