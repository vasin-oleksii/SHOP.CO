import { Button, Box, ButtonProps } from "@chakra-ui/react";

interface ButtonRoundProps extends ButtonProps {
  children: React.ReactNode;
  colorBtn: "black" | "white";
}

const ButtonRound = ({ children, colorBtn, ...proprs }: ButtonRoundProps) => {
  let colorBg = "";
  let colorText = "";

  switch (colorBtn) {
    case "black":
      colorBg = "black";
      colorText = "white";
      break;
    case "white":
      colorBg = "white";
      colorText = "black";
      break;
  }

  return (
    <Box>
      <Button
        data-testid="ButtonRound"
        background={colorBg}
        color={colorText}
        borderRadius="62px"
        fontWeight={500}
        fontSize="md"
        {...proprs}
        _hover={{
          background: colorText,
          color: colorBg,
          border: `1px solid ${colorBtn}`,
        }}
      >
        {children}
      </Button>
    </Box>
  );
};

export default ButtonRound;
