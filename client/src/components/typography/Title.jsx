import { Text } from "@chakra-ui/react";
import React from "react";

const Title = ({ children, textStyle, mt }) => {
  return (
    <Text color="#FFF" textStyle={textStyle || "xl"} mt={mt || "10"}>
      {children}
    </Text>
  );
};

export default Title;
