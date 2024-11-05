import { CheckIcon } from "@chakra-ui/icons";
import { GridItem } from "@chakra-ui/react";

interface ColorOptionProps {
  color: string;
  isSelected: boolean;
  onClick: () => void;
}

const ColorOption = ({ color, isSelected, onClick }: ColorOptionProps) => (
  <GridItem
    background={color}
    height="37px"
    width="37px"
    borderRadius="100%"
    borderWidth="1px"
    borderColor="rgba(0, 0, 0, 0.1)"
    onClick={onClick}
    display="flex"
    alignItems="center"
    justifyContent="center"
    cursor="pointer"
  >
    {isSelected && (
      <CheckIcon
        color={color === "white" || color === "grey" ? "black" : "white"}
      />
    )}
  </GridItem>
);

export default ColorOption;
