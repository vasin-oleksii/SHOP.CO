import { Button, ButtonProps } from "@chakra-ui/react";

interface ButtonFilter extends ButtonProps {
  isBig?: boolean;
  text: string;
}

const ButtonFilter = ({ isBig, text, onClick, isActive }: ButtonFilter) => {
  return (
    <Button
      p={isBig ? "12px 24px" : "10px 20px"}
      background="greyLight"
      display="inline-block"
      borderRadius="62px"
      color="greyText"
      _hover={{ color: "white", background: "greyText" }}
      _active={{ color: "white", background: "black" }}
      fontWeight="500"
      fontSize={isBig ? { base: "sm", md: "md" } : { base: "sm" }}
      onClick={onClick}
      isActive={isActive}
    >
      {text}
    </Button>
  );
};

export default ButtonFilter;
