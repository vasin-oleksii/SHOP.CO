import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
} from "@chakra-ui/react";

interface InputIconLeftProps extends InputProps {
  bgInput?: string;
  colorInput?: string;
  valueInput: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputIconLeft = ({
  maxWidth,
  display,
  placeholder,
  children,
  bgInput,
  colorInput,
  valueInput,
  onChange,
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
        value={valueInput}
        onChange={onChange}
      />
    </InputGroup>
  );
};

export default InputIconLeft;
