import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useCategoryState } from "../../store/useCategoryState";

interface LocalData {
  category: string;
  color: string;
  size: string;
  style: string;
  title: string;
  price: string;
}
interface GroupInputsProps {
  children: React.ReactElement;
  title: string;
  category: string;
  localData: LocalData;
}

const GroupInputs = ({
  children,
  title,
  category = "",
  localData,
}: GroupInputsProps) => {
  const { parametrsOfSearch } = useCategoryState();

  const [isShow, setIsShow] = useState(
    parametrsOfSearch[category as keyof typeof parametrsOfSearch]?.length > 0 ||
      localData[category as keyof LocalData]?.length > 0
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
        onClick={(e) => {
          setIsShow((prevState) => !prevState);
          e.stopPropagation();
        }}
      >
        <Heading fontSize="lg">{title}</Heading>
        <Box>{isShow ? <ChevronDownIcon /> : <ChevronRightIcon />}</Box>
      </Flex>

      {isShow && children}
    </Box>
  );
};

export default GroupInputs;
