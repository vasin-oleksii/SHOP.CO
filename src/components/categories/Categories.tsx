import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";

const Categories = () => {
  return (
    <Box pt="80px">
      <Container>
        <Box padding="71px 64px" backgroundColor="grey" borderRadius="40px">
          <Heading>BROWSE BY dress STYLE</Heading>
          <Grid>
            <GridItem>
              <Text>Casual</Text>
            </GridItem>
            <GridItem>
              <Text>Formal</Text>
            </GridItem>
            <GridItem>
              <Text>Party</Text>
            </GridItem>
            <GridItem>
              <Text>Gym</Text>
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Categories;
