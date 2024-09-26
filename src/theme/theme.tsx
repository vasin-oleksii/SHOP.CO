import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `"Roboto", sans-serif`,
    body: `"Roboto", sans-serif`,
  },
  colors: {
    black: "#000000",
    greyLight: "#F0F0F0",
    grey: "#F2F0F1",
    white: "#FFFFFF",
    greyText: "#6c6b6b",
    red: "#FF3333",
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "20px",
    xl: "24px",
    "2xl": "30px",
    "2xl-custom": "32px",
    "3xl": "36px",
    "4xl-custom": "40px",
    "4xl": "48px",
    "5xl": "64px",
  },
  breakpoints: {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
  },
});

export default theme;
