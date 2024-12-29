import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title> Error 404</title>
        <meta name="description" content="Error sorry" />
      </Helmet>
      <Flex height="100vh" align="center" textAlign="center">
        <Flex flexDirection="column" width="100%">
          <Heading>Soory 😿 we did'nt found this page</Heading>
          <Link to={"/"}>
            <Button mt="20px">
              <Text>Return to home page 🩵</Text>
            </Button>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default NotFoundPage;
