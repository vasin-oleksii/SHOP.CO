import { EmailIcon } from "@chakra-ui/icons";
import {
  BoxProps,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import ButtonRound from "../common/buttons/ButtonRound";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface FootherBannerProps extends BoxProps {
  title: string;
}

const FootherBanner = ({ title, ...props }: FootherBannerProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (dataForPost: { email: string }) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",

        {
          method: "POST",
          body: JSON.stringify(dataForPost),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();

      console.log(result);
      setIsLoading(false);
      reset();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Flex
      {...props}
      background="black"
      borderRadius="20px"
      p={{ base: "32px 24px", lg: "41px 64px" }}
      justifyContent="space-between"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
    >
      <Heading
        color="white"
        maxW="550px"
        fontSize={{ base: "2xl", xl: "4xl-custom" }}
        textAlign={{ base: "center", md: "left" }}
      >
        {title}
      </Heading>

      <FormControl
        maxW={{ base: "310px", xl: "340px" }}
        mt={{ base: "32px", md: "0px" }}
      >
        <form onSubmit={handleSubmit((data: any) => onSubmit(data))}>
          <InputGroup>
            <InputLeftElement>
              <EmailIcon color="greyText" />
            </InputLeftElement>
            <Input
              type="email"
              borderRadius="62px"
              placeholder="Enter your email address"
              color="greyText"
              background="white"
              fontSize={{ base: "sm", xl: "md" }}
              {...register("email", {
                required: { value: true, message: "This required" },
                minLength: {
                  value: 3,
                  message: "Min length exceeded",
                },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
            />
          </InputGroup>
          {errors.email && errors.email.message && (
            <Text color="red" position="absolute" top="-25%">
              👇 {errors.email.message.toString()}
            </Text>
          )}
          <ButtonRound
            colorBtn="white"
            w="100%"
            borderColor="black"
            mt={{ base: "12px", xl: "14px" }}
            fontSize={{ base: "sm", xl: "md" }}
            type="submit"
            isLoading={isLoading}
          >
            Subscribe to Newsletter
          </ButtonRound>
        </form>
      </FormControl>
    </Flex>
  );
};

export default FootherBanner;
