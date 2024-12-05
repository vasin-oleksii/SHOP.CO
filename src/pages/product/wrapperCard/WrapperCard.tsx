import { Grid } from "@chakra-ui/react";

const WrapperCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid
      templateColumns={{ base: "minmax(100px, 430px)", md: "50% 50%" }}
      mt={{ base: "23px", lg: "39px" }}
      justifyContent="center"
    >
      {children}
    </Grid>
  );
};

export default WrapperCard;
