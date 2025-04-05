import React from "react";
import { VStack, Text } from "@chakra-ui/react";



const TitleAndDesc = ({title, desc}) => {
  return (
    <VStack align="center">
      <Text color="#FFF" textStyle="2xl">
        {title}
      </Text>
      <Text color="#94ADC7">{desc}</Text>
    </VStack>
  );
};

export default TitleAndDesc;
