import { Box, Flex, Grid, GridItem, Img } from "@chakra-ui/react";

import cavinKlein from "../../assets/logos/CavinKlein.svg";
import gucci from "../../assets/logos/Gucci.svg";
import prada from "../../assets/logos/Prada.svg";
import vese from "../../assets/logos/Vese.svg";
import zara from "../../assets/logos/Zara.svg";

import cavinKleinMini from "../../assets/logos/GroupMini.svg";
import gucciMini from "../../assets/logos/Group.svg";
import pradaMini from "../../assets/logos/pradaMini.svg";
import veseMini from "../../assets/logos/Group.svg";
import zaraMini from "../../assets/logos/zaraMini.svg";

const BannerLogos = () => {
  const photos = [vese, zara, gucci, prada, cavinKlein];
  const photosMini = [veseMini, zaraMini, gucciMini, pradaMini, cavinKleinMini];

  return (
    <Flex
      backgroundColor="black"
      py="43px"
      alignItems="center"
      justify="center"
      display={{ base: "flex", lg: "block" }}
    >
      <Grid
        templateColumns={{ base: "repeat(3, 1fr)", lg: "repeat(5, 1fr)" }}
        templateRows="1fr"
        justifyItems="center"
        textAlign="center"
        display={{ base: "none", lg: "grid" }}
      >
        {photos.map((photo, i) => (
          <GridItem display="flex" key={i}>
            <Img src={photo} />
          </GridItem>
        ))}
      </Grid>

      <Box display={{ base: "grid", lg: "none" }}>
        <Flex alignItems="center" justifyContent="center">
          {photosMini.map((photo, i) => {
            const addPadding = i === 0 ? false : true;

            if (i <= 2) {
              return (
                <Box display="flex" key={i} pl={addPadding ? "32px" : ""}>
                  <Img src={photo} />
                </Box>
              );
            }
          })}
        </Flex>
        <Flex alignItems="center" justifyContent="center" mt="20px">
          {photosMini.map((photo, i) => {
            const addPadding = i === 3 ? false : true;

            if (i > 2) {
              return (
                <Box display="flex" key={i} pl={addPadding ? "32px" : ""}>
                  <Img src={photo} />
                </Box>
              );
            }
          })}
        </Flex>
      </Box>
    </Flex>
  );
};

export default BannerLogos;
