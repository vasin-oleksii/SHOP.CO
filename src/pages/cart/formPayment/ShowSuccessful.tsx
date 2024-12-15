import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Divider, Text } from "@chakra-ui/react";

const ShowSuccessful = () => {
  return (
    <Box>
      <Divider />
      <Text mt="12px">
        Thank you! We’ve received and processed your details and the check. If
        we need anything further, we’ll let you know.
        <CheckCircleIcon ml="10px" />
      </Text>
    </Box>
  );
};

export default ShowSuccessful;
