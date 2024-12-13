import InputIconLeft from "../../../components/common/inputs/InputIconLeft";
import { ArrowForwardIcon, AtSignIcon } from "@chakra-ui/icons";

import ButtonRound from "../../../components/common/buttons/ButtonRound";
import { Flex, Text } from "@chakra-ui/react";

const FormCheckout = ({
  discoundCode,
  isSubmit,
  setDiscoundCode,
  setIsSumbit,
}: {
  discoundCode: string;
  isSubmit: boolean;
  setDiscoundCode: (value: string) => void;
  setIsSumbit: (value: boolean) => void;
}) => {
  return (
    <Flex gap="24px" flexDir="column">
      <Flex gap="12px">
        <InputIconLeft
          valueInput={discoundCode}
          onChange={(e) => setDiscoundCode(e.target.value)}
          placeholder="Add promo code"
          bg="greyLight"
          borderRadius="100%"
        >
          <AtSignIcon color="greyText" />
        </InputIconLeft>

        <ButtonRound
          colorBtn="black"
          p="14.5px 39px"
          onClick={() => setIsSumbit(true)}
        >
          Apply
        </ButtonRound>
      </Flex>
      {isSubmit && discoundCode.toLowerCase() === "free" && (
        <Text color="green" fontWeight="700" mt="-10px">
          Now is Free ^_^
        </Text>
      )}
      {isSubmit && discoundCode.toLowerCase() !== "free" && (
        <Text color="red" fontWeight="700" mt="-10px">
          Doesn't exist
        </Text>
      )}
      <Flex w="100%">
        <ButtonRound colorBtn={"black"} w="100%" p="20.5px 0px">
          Go to Checkout
          <ArrowForwardIcon ml="12px" />
        </ButtonRound>
      </Flex>
    </Flex>
  );
};

export default FormCheckout;
