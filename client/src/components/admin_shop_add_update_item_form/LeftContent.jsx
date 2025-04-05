import { Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import InputFields from "./InputFields";

const LeftContent = () => {
  return (
    <VStack w="45%" gap="5">
      {/** Genral information */}
      <Flex
        borderLeftColor="#FFF"
        borderWidth="1px"
        rounded="xl"
        p="5 !important"
        direction="column"
        w="100%"
      >
        {/** Title */}
        <Text textStyle="xl" color="#FFF">
          General Information
        </Text>

        {/** Product name field */}
        <InputFields type={"productName"} />

        {/** Description field */}
        <InputFields type={"description"} />
      </Flex>

      {/** Stock and pricing */}
      <Flex
        align="start"
        borderColor="#FFF"
        borderWidth="1px"
        w="100%"
        p="5 !important"
        rounded="xl"
        direction="column"
      >
        <Text textStyle="xl" color="#FFF">
          Stock and Pricing
        </Text>

        {/** Price field */}
        <InputFields type={"price"} />

        {/** Stock field */}
        <InputFields type={"stock"} />

        {/** discount field */}
        <InputFields type={"discount"} />
      </Flex>
    </VStack>
  );
};

export default LeftContent;
