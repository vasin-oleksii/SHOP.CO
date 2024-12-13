import { Box, Flex, Text } from "@chakra-ui/react";
import NumberFlow from "@number-flow/react";

const OrederLine = ({
  title,
  value,
  color,
  accentText,
}: {
  title: string;
  value: number;
  color: "red" | "black";
  accentText?: boolean;
}) => {
  return (
    <Flex justify="space-between" align="center" width="100%">
      <Box>
        <Text
          fontSize={{ base: "16px", md: "20px" }}
          color={accentText ? "black" : "greyText"}
        >
          {title}
        </Text>
      </Box>
      <Box fontSize={{ base: "16px", md: "20px" }}>
        <NumberFlow
          value={value}
          style={{ color: color, fontWeight: 700 }}
          format={{
            style: "currency",
            currency: "USD",
            trailingZeroDisplay: "stripIfInteger",
          }}
        />
      </Box>
    </Flex>
  );
};

export default OrederLine;
