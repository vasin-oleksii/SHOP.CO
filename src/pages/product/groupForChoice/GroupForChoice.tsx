import {
  Box,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

const GroupForChoice = () => {
  const selected = {
    color: "black",
    fontWeight: 700,
    borderBottom: "2px solid black",
  };

  return (
    <Box mt={{ base: "50px", md: "80px" }}>
      <Tabs align="center">
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
          <TabPanel>2</TabPanel>
          <TabPanel>3</TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default GroupForChoice;
