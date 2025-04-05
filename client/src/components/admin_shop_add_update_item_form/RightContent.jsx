import productStore from "@/zustand/product/productStore";
import React from "react";
import { Button, Flex, Text, VStack } from "@chakra-ui/react";
import Images from "./Images";
import Sizes from "./Sizes";
import Dropdown from "./Dropdown";
import { generalToast } from "@/utils/GeneralToast";

const RightContent = ({ type, id }) => {
  const { handleProductSubmission, handleProductUpdate, clearAllProperties } =
    productStore();

  const handleTheSubmissionOfProduct = async () => {
    if (type === "update") {
      const response = await handleProductUpdate(id);
      generalToast({data: response, clearAllProperties: clearAllProperties})
    } else {
      const response = await handleProductSubmission();
      generalToast({data: response, clearAllProperties: clearAllProperties})
    }
  };

  

  return (
    <Flex w="55%" direction="column" gap="5">
      {/** Upload images */}
      <VStack
        w="100%"
        borderColor="#FFF"
        borderWidth="1px"
        rounded="xl"
        p="5 !important"
        align="start"
      >
        {/** Title */}
        <Text color="#FFF" textStyle="xl">
          Upload Images
        </Text>

        {/** Images */}
        <Images />
      </VStack>

      {/** Sizes and categories */}
      <VStack
        borderColor="#FFF"
        p="5 !important"
        w="100%"
        borderWidth="1px"
        rounded="xl"
        align="start"
      >
        {/** Title */}
        <Text color="#FFF" textStyle="xl">
          Size and Category
        </Text>

        {/** Size field */}
        <Sizes />

        {/** Category field */}
        <Dropdown />

        {/** Add product button */}
        <Button
          mt="4 !important"
          w="100%"
          bg="#2985E5"
          _hover={{ bg: "#121A21", borderColor: "#FFF" }}
          onClick={handleTheSubmissionOfProduct}
        >
          {type === "update" ? "Save Changes" : " Add Product"}
        </Button>
      </VStack>
    </Flex>
  );
};

export default RightContent;
