import userStore from "@/zustand/user/userStore";
import { Button } from "@chakra-ui/react";
import React from "react";

const SaveButton = () => {
  const { updateProfile } = userStore();
  const handleSubmission = () => {
    updateProfile(localStorage.getItem("id"))
  };

  return (
    <Button
      mt="12"
      w="full"
      bg="#2985E5"
      _hover={{ bg: "#121A21", borderColor: "#FFF" }}
      onClick={handleSubmission}
    >
      Save changes
    </Button>
  );
};

export default SaveButton;
