import { Link, useTheme } from "@chakra-ui/react";

const ButtonWithoutBorder = ({
  children,
  ...proprs
}: {
  children: string;
  [key: string]: string;
}) => {
  const theme = useTheme();

  return (
    <Link
      href="#"
      _hover={{ textDecoration: "none", color: theme.colors.greyText }}
      textDecoration="underline"
      fontWeight={500}
      {...proprs}
    >
      {children}
    </Link>
  );
};

export default ButtonWithoutBorder;
