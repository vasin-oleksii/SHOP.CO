import { Box, Heading } from "@chakra-ui/react";

import CrumbLink from "../../components/common/CrumbLink";
import { useLocation } from "react-router-dom";

const HeadingCart = () => {
  const { pathname } = useLocation();

  return (
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
  );
};

export default HeadingCart;
