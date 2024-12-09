import { Box, Container, Heading } from "@chakra-ui/react";
import CrumbLink from "../../components/common/CrumbLink";
import { useLocation } from "react-router-dom";

const CartPage = () => {
  const { pathname } = useLocation();
  return (
    <Box>
      <Container maxW="container.xl">
        <Box>
          <Box mt={{ base: "20px", md: "24px" }}>
            <CrumbLink pathname={pathname} />
          </Box>
          <Heading
            fontSize={{ base: "32px", lg: "40px" }}
            mt={{ base: "11px", lg: "28px" }}
          >
            Your cart
          </Heading>
        </Box>
        
      </Container>
    </Box>
  );
};

export default CartPage;
