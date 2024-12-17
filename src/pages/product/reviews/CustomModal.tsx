import {
  Flex,
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
  comment: string;
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
  } = useForm<Inputs>();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Write the review</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit((e: Inputs) => console.log(e))}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="My name..."
                {...register("name", {
                  required: { value: true, message: "Is required" },
                  minLength: { value: 3, message: "Need more than 3 symbols" },
                  maxLength: {
                    value: 150,
                    message: "Need less than 150 symbols",
                  },
                })}
              />
              {errors.name?.message}
            </FormControl>
            <FormControl mt="12px">
              <FormLabel>Comment</FormLabel>
              <Textarea placeholder="Your things..." resize="none" />
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
