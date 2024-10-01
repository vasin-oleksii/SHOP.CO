import { Box, Container, useTheme, VStack } from "@chakra-ui/react";
import ClothesPreview from "../common/ClothesPreview";

const Catalogs = () => {
  const theme = useTheme();

  return (
    <Box mt="73px">
      <Container maxW={theme.breakpoints.xl}>
        <VStack>
          <Box>
            <ClothesPreview />
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Catalogs;
