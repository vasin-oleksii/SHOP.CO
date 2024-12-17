import {
  Text,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import ButtonRound from "../../../components/common/buttons/ButtonRound";
import ChoicedRating from "../../../components/choicedRating/ChoicedRating";
import { useForm } from "react-hook-form";

type Inputs = {
  name: string;
  reviev: string;
  rating: number;
};

const CustomModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const handlePostData = (data: Inputs) => {
    console.log(data);
    reset();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Write the review</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(handlePostData)}>
            <FormControl>
              <FormLabel color={errors.name !== undefined ? "red" : "black"}>
                Name
              </FormLabel>
              <Input
                placeholder="My name..."
                isInvalid={errors.name !== undefined}
                errorBorderColor="red"
                {...register("name", {
                  required: { value: true, message: "Is required" },
                  minLength: { value: 3, message: "Need more than 3 symbols" },
                  maxLength: {
                    value: 150,
                    message: "Need less than 150 symbols",
                  },
                })}
              />

              <Text color="red">{errors.name?.message}</Text>
            </FormControl>
            <FormControl mt="12px">
              <FormLabel color={errors.reviev !== undefined ? "red" : "black"}>
                Reviev
              </FormLabel>
              <Textarea
                placeholder="Your things..."
                resize="none"
                isInvalid={errors.reviev !== undefined}
                errorBorderColor="red"
                {...register("reviev", {
                  required: { value: true, message: "Is required" },
                  minLength: {
                    value: 15,
                    message: "Need more than 15 symbols",
                  },
                  maxLength: {
                    value: 150,
                    message: "Need less than 150 symbols",
                  },
                })}
              />
              <Text color="red">{errors.reviev?.message}</Text>
            </FormControl>
            <FormControl mt="12px">
              <FormLabel>Rating</FormLabel>
              <ChoicedRating />
            </FormControl>

            <ButtonRound colorBtn="black" w="100%" mt="24px" type="submit">
              Submit
            </ButtonRound>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
