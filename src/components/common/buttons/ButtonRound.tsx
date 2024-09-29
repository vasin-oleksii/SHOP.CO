import { Button, Box, useTheme } from "@chakra-ui/react";

interface ButtonRoundProps {
  children: React.ReactNode;
  colorBtn: "black" | "white";
  [key: string]: any;
}

const ButtonRound = ({ children, colorBtn, ...proprs }: ButtonRoundProps) => {
  const theme = useTheme();
  let colorBg = "";
  let colorText = "";

  switch (colorBtn) {
    case "black":
      colorBg = theme.colors.black;
      colorText = theme.colors.white;
      break;
    case "white":
      colorBg = theme.colors.white;
      colorText = theme.colors.black;
      break;
  }

  return (
    <Box>
      <Button
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
