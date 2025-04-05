import { Text } from "@chakra-ui/react";
import React from "react";

const Name = ({name}) => {
  return (
    <Text color="#FFFFFF80" my="5" textStyle="lg">
      {name}
    </Text>
  );
};

export default Name;
