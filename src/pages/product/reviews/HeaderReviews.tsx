import {
  Box,
  Flex,
  HStack,
  Img,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import settingsBlack from "../../../assets/icons/settingsBlack.svg";
import ButtonRound from "../../../components/common/buttons/ButtonRound";
import useScreenWidth from "../../../components/shared/hooks/useScreenWidth";
import { useState } from "react";
import CustomModal from "./CustomModal";

const HeaderReviews = ({ totlaReviews }: { totlaReviews: number }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const { isMobile } = useScreenWidth();
  const [showSelect, setShowSelect] = useState(!isMobile);
  const handleShowSelect = () => {
    setShowSelect((state) => !state);
  };

  return (
    <Flex
      justify="space-between"
      align="center"
      mt={{ base: "16px", md: "24px" }}
    >
      <Flex align="center">
        <Text
          fontSize={{ base: "14px", sm: "20px", md: "24px" }}
          fontWeight={700}
        >
          All Reviews
        </Text>
        <Text
          ml="8px"
          mt="6px"
          fontSize={{ base: "14px", sm: "20px", md: "24px" }}
          color="greyText"
        >{`(${totlaReviews})`}</Text>
      </Flex>
      <HStack spacing="10px">
        <Box
          background="greyLight"
          borderRadius="50%"
          _hover={{ opacity: 0.6 }}
          onClick={handleShowSelect}
        >
          <Img
            src={settingsBlack}
            p={{ base: "8px", md: "12px" }}
            cursor="pointer"
          />
        </Box>
        {!isMobile && showSelect && (
          <Box>
            <Select
              placeholder="Latest"
              borderRadius="62px"
              background="greyLight"
              border="none"
            ></Select>
          </Box>
        )}

        {isMobile && showSelect ? (
          <Box>
            <Select
              placeholder="Latest"
              borderRadius="62px"
              background="greyLight"
              border="none"
              value="latest"
            >
              <option value="best">Best</option>
              <option value="low">Low</option>
            </Select>
          </Box>
        ) : (
          <ButtonRound
            colorBtn="black"
            p={{ base: "12px 16px", md: "14.5px 30px" }}
            fontSize={{ base: "12px", sm: "16px" }}
            border="1px solid black"
            onClick={onOpen}
          >
            Write a Review
          </ButtonRound>
        )}
      </HStack>

      <CustomModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default HeaderReviews;
