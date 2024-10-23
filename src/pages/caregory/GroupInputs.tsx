import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useCategoryState } from "../../store/useCategoryState";

interface GroupInputsProps {
  children: React.ReactElement;
  title: string;
  category: string;
}

const GroupInputs = ({ children, title, category = "" }: GroupInputsProps) => {
  const { parametrsOfSearch } = useCategoryState();

  const [isShow, setIsShow] = useState(
    parametrsOfSearch[category as keyof typeof parametrsOfSearch]?.length > 0
  );

  useEffect(() => {
    if (
      parametrsOfSearch[category as keyof typeof parametrsOfSearch]?.length > 0
    ) {
      setIsShow(true);
    }
  }, [parametrsOfSearch]);

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
