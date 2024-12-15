import {
  Text,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useToast,
} from "@chakra-ui/react";
import ButtonRound from "../../../components/common/buttons/ButtonRound";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ShowSuccessful from "./ShowSuccessful";
import NumberFlow from "@number-flow/react";

type Inputs = {
  name: string;
  email: string;
};

const FormPayment = ({ totalForPay }: { totalForPay: number }) => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const [showSuccessful, setShowSuccessful] = useState(false);

  const onSumbit = async (data: Inputs) => {
    try {
      setIsLoading(true);
      const post = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({ ...data, totalForPay }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      setIsLoading(false);
      toast({
        title: "Bill was sended",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      if (post.ok) {
        setShowSuccessful(true);
      }
      reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Divider />

      <Heading fontSize={{ base: "26px", md: "30px" }}>
        Billing Form: 👇
      </Heading>
      <Divider />

      <form onSubmit={handleSubmit(onSumbit)}>
        <FormControl id="payer-name">
          <FormLabel htmlFor="payer-name">Your name</FormLabel>
          <Input
            id="payer-name"
            placeholder="name.."
            {...register("name", {
              required: { value: true, message: "Is required" },
              minLength: { value: 3, message: "Need more then 3 symbols" },
              maxLength: { value: 150, message: "Need less then 150 symbols" },
            })}
            isInvalid={errors.name !== undefined}
            errorBorderColor="red"
          ></Input>
          <Text color="red">{errors.name?.message}</Text>
        </FormControl>
        <FormControl id="payer-mail" mt="12px">
          <FormLabel htmlFor="payer-mail">Your email</FormLabel>
          <Input
            id="payer-mail"
            placeholder="name@gmail.com"
            type="email"
            {...register("email", {
              required: { value: true, message: "Is required" },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
            isInvalid={errors.email !== undefined}
            errorBorderColor="red"
          ></Input>
          <Text color="red">{errors.email?.message}</Text>
        </FormControl>

        <Flex w="100%" mt="24px">
          <ButtonRound
            colorBtn={"black"}
            w="100%"
            type="submit"
            isLoading={isLoading}
          >
            <Flex align="center" gap="10px">
              <Text>Create Invoice</Text>

              <NumberFlow
                value={totalForPay}
                format={{ currency: "USD", style: "currency" }}
              />
            </Flex>
          </ButtonRound>
        </Flex>
      </form>

      {showSuccessful && <ShowSuccessful />}
    </>
  );
};

export default FormPayment;
