import InputIconLeft from "../../../components/common/inputs/InputIconLeft";
import { ArrowForwardIcon, AtSignIcon } from "@chakra-ui/icons";

import ButtonRound from "../../../components/common/buttons/ButtonRound";
import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import FormPayment from "../formPayment/FormPayment";

const FormCheckout = ({
  discoundCode,
  isSubmit,
  setDiscoundCode,
  setIsSumbit,
  totalProductsLength,
}: {
  discoundCode: string;
  totalProductsLength: number;
  isSubmit: boolean;
  setDiscoundCode: (value: string) => void;
  setIsSumbit: (value: boolean) => void;
}) => {
  const [showPayment, setShowPayment] = useState<boolean>(false);

  if (showPayment && totalProductsLength) {
    return <FormPayment />;
  }

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
        <ButtonRound
          colorBtn="black"
          w="100%"
          p="20.5px 0px"
          onClick={() => setShowPayment((state) => !state)}
        >
          Go to Checkout
          <ArrowForwardIcon ml="12px" />
        </ButtonRound>
      </Flex>
    </Flex>
  );
};

export default FormCheckout;
