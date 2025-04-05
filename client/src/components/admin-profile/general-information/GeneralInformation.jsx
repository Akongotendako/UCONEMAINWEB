import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import InputField from "./InputField.jsx";
import SaveButton from "./SaveButton.jsx";

const GeneralInformation = () => {
  return (
    <Box w="70%" rounded="md" borderColor="#FFF" borderWidth="1px" p="5">
      <Text color="#FFF" textStyle="xl">
        General Information
      </Text>

      <HStack w="100%" gap="10" justify="space-between" mt="8">
        <InputField
          text={"First Name"}
          formType={"profile"}
          name={"firstName"}
          typeOfField={"text"}
        />

        <InputField
          text={"Last Name"}
          formType={"profile"}
          name={"lastName"}
          typeOfField={"text"}
        />
      </HStack>

      <HStack w="100%" gap="10" justify="space-between" mt="8">
        <InputField
          text={"Email"}
          formType={"signin"}
          name={"email"}
          typeOfField={"email"}
        />

        <InputField
          text={"Password"}
          formType={"signin"}
          name={"password"}
          typeOfField={"password"}
        />
      </HStack>

      <Box w="48%" mt="8">
        <InputField
          text={"Phone Number"}
          formType={"profile"}
          name={"phoneNumber"}
          typeOfField={"text"}
        />
      </Box>

      <SaveButton />
    </Box>
  );
};

export default GeneralInformation;
