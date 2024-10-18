import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";

interface GroupInputsProps {
  children: React.ReactElement;
  title: string;
}

const GroupInputs = ({ children, title }: GroupInputsProps) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <Box>
      <Flex
        align="center"
        justify="space-between"
        width="100%"
        onClick={() => setIsShow((prevState) => !prevState)}
      >
        <Heading fontSize={{ base: "", lg: "lg" }}>{title}</Heading>
        <Box>
          <ChevronRightIcon />
        </Box>
      </Flex>

      {isShow && { ...children }}
    </Box>
  );
};

export default GroupInputs;
