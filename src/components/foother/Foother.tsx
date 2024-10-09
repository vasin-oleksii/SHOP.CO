import { Box, Container } from "@chakra-ui/react";
import FootherBanner from "./FootherBanner";

const Foother = () => {
  return (
    <Box mt={{ base: "40px", lg: "80px" }}>
      <Container maxW="container.xl">
        <FootherBanner title="STAY UPTO DATE ABOUT OUR LATEST OFFERS" />
      </Container>
    </Box>
  );
};

export default Foother;
