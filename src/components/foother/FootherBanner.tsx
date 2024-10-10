import { EmailIcon } from "@chakra-ui/icons";
import {
  BoxProps,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import ButtonRound from "../common/buttons/ButtonRound";

interface FootherBannerProps extends BoxProps {
  title: string;
}

const FootherBanner = ({ title, ...props }: FootherBannerProps) => {
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
          />
        </InputGroup>
        <ButtonRound
          colorBtn="white"
          w="100%"
          borderColor="black"
          mt={{ base: "12px", xl: "14px" }}
          fontSize={{ base: "sm", xl: "md" }}
          type="submit"
        >
          Subscribe to Newsletter
        </ButtonRound>
      </FormControl>
    </Flex>
  );
};

export default FootherBanner;
