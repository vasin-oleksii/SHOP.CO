import { Link, useTheme } from "@chakra-ui/react";

interface ButtonWithoutBorderProps {
  children: React.ReactNode;
  href?: string;
  [key: string]: any;
}

const ButtonWithoutBorder = ({
  children,
  href = "#",
  ...proprs
}: ButtonWithoutBorderProps) => {
  const theme = useTheme();

  return (
    <Link
      href={href}
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
