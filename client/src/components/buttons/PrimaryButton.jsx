import { Button } from "@chakra-ui/react";
import React from "react";

const PrimaryButton = ({ children, width, mt }) => {
  return (
    <Button
      w={width || "full"}
      bg="#2985E5"
      mt={mt || "10"}
      _hover={{ bg: "#121A21", borderColor: "#FFF" }}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
