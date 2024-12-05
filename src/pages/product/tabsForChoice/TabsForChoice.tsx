import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Reviews from "../reviews/Reviews";
import { ProductState } from "../ProductPage";

const selected = {
  color: "black",
  fontWeight: 700,
  borderBottom: "2px solid black",
};

const TabsForChoice = ({ product }: { product: ProductState | undefined }) => {
  const textFaq =
    product &&
    `The product "${product.title}" is available for ${
      product.old_price
        ? `$${product.price} (previously $${product.old_price})`
        : `$${product.price}`
    }. It has a rating of ${product.rating} out of 5, comes in "${
      product.color
    }" color and "${product.size}" size. ${product.description}`;

  return (
    <Box mt={{ base: "50px", md: "80px" }}>
      <Tabs align="center" defaultIndex={1}>
        <TabList justifyContent="space-between">
          <Tab w="33%" _selected={selected}>
            Product Details
          </Tab>
          <Tab w="33%" _selected={selected}>
            Rating & Reviews
          </Tab>
          <Tab w="33%" _selected={selected}>
            FAQs
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>{product && product.description}</TabPanel>
          <TabPanel>
            <Reviews />
          </TabPanel>
          <TabPanel>{textFaq}</TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default TabsForChoice;
