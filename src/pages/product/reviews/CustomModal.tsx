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
  useToast,
} from "@chakra-ui/react";

import ButtonRound from "../../../components/common/buttons/ButtonRound";
import ChoicedRating from "../../../components/choicedRating/ChoicedRating";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { format } from "date-fns";
import { useReviewsState } from "../../../store/useReviewsState";

type Inputs = {
  name: string;
  review: string;
  rating: number;
};

const CustomModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [numSelectedStar, setNumSelectedStar] = useState<number>(3);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const { addNewReview } = useReviewsState();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const handlePostData = async (data: Inputs) => {
    try {
      setIsLoading(true);
      const dateNow = format(new Date(), "yyyy-MM-dd");
      const newItemReview = {
        ...data,
        rating: numSelectedStar + 1,
        date: dateNow,
      };
      // @ts-ignore
      const post = await fetch(`${import.meta.env.VITE_API_REVIEWS}`, {
        method: "POST",
        body: JSON.stringify(newItemReview),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setIsLoading(false);
      if (post.ok) {
        toast({
          title: "☺️ Your data was sent!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        onClose();

        addNewReview(newItemReview);
      }
    } catch (e) {
      console.log(e);
    }
    reset();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent p="10px 0 35px 0">
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
              <FormLabel color={errors.review !== undefined ? "red" : "black"}>
                Review
              </FormLabel>
              <Textarea
                placeholder="Your things..."
                resize="none"
                isInvalid={errors.review !== undefined}
                errorBorderColor="red"
                {...register("review", {
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
              <Text color="red">{errors.review?.message}</Text>
            </FormControl>
            <FormControl mt="12px">
              <FormLabel>Rating</FormLabel>
              <ChoicedRating
                numSelectedStar={numSelectedStar}
                setNumSelectedStar={setNumSelectedStar}
              />
            </FormControl>

            <ButtonRound
              colorBtn="black"
              w="100%"
              mt="24px"
              type="submit"
              isLoading={isLoading}
            >
              Submit
            </ButtonRound>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
