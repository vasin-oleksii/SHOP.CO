import { Alert, AlertIcon, Box } from "@chakra-ui/react";

const ErrorMessage = ({ name }: { name: string }) => {
  return (
    <Box>
      <Alert status="error" fontSize="xl">
        <AlertIcon />
        {name}
      </Alert>
    </Box>
  );
};

export default ErrorMessage;
