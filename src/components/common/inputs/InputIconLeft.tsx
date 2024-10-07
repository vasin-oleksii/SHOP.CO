import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
} from "@chakra-ui/react";

interface InputIconLeftProps extends InputProps {
  maxWidth?: string;
  display?: string | { base?: string; md?: string; lg?: string };
  placeholder?: string;
  children?: any;
  bgInput?: string;
  colorInput?: string;
}

const InputIconLeft = ({
  maxWidth,
  display,
  placeholder,
  children,
  bgInput,
  colorInput,
  ...props
}: InputIconLeftProps) => {
  return (
    <InputGroup maxWidth={maxWidth} display={display} {...props}>
      <InputLeftElement
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Button variant="ghost" borderRadius="100%" colorScheme="gray">
          {children}
        </Button>
      </InputLeftElement>
      <Input
        type="string"
        placeholder={placeholder}
        bg={bgInput}
        borderRadius="62px"
        color={colorInput}
      />
    </InputGroup>
  );
};

export default InputIconLeft;
