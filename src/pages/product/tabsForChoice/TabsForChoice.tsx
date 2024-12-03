import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Reviews from "../reviews/Reviews";

const TabsForChoice = () => {
  const selected = {
    color: "black",
    fontWeight: 700,
    borderBottom: "2px solid black",
  };

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
          <TabPanel>1</TabPanel>
          <TabPanel>
            <Reviews />
          </TabPanel>
          <TabPanel>3</TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default TabsForChoice;
