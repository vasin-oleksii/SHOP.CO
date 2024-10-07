import { Link, LinkProps } from "@chakra-ui/react";

interface ButtonWithoutBorderProps extends LinkProps {
  children: React.ReactNode;
  href?: string;
}

const LinkWithoutBorder = ({
  children,
  href = "#",
  ...props
}: ButtonWithoutBorderProps) => {
  return (
    <Link
      href={href}
      _hover={{ textDecoration: "none", color: "greyText" }}
      textDecoration="underline"
      fontWeight={500}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkWithoutBorder;
