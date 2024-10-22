import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";

interface GroupInputsProps {
  children: React.ReactElement;
  title: string;
}

const GroupInputs = ({ children, title }: GroupInputsProps) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <Box cursor="pointer">
      <Flex
        align="center"
        justify="space-between"
        width="100%"
        onClick={() => setIsShow((prevState) => !prevState)}
      >
        <Heading fontSize="lg">{title}</Heading>
        <Box>{isShow ? <ChevronDownIcon /> : <ChevronRightIcon />}</Box>
      </Flex>

      {isShow && children}
    </Box>
  );
};

export default GroupInputs;
