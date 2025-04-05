import userStore from "@/zustand/user/userStore";
import { Input, Text, VStack, Box, Icon } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa6";

const InputField = ({ text, formType, name, typeOfField }) => {
  const { setField, profile, signin } = userStore();
  const [isPassword, setIsPassword] = useState(false);

  const passwordVisibility = () => setIsPassword(!isPassword);

  const typeOfForm = formType === "profile" ? profile : signin;

  console.log(`type of form ${name}`);

  const handleChange = (e, name) => {
    setField(formType, name, e.target.value);
  };

  const placeholders = {
    firstName: "Enter your first name",
    lastName: "Enter your last name",
    email: "Enter your email",
    password: "Enter your password",
    phoneNumber: "Enter your phone number",
  };

  const handleType = () => {
    if (typeOfField === "password") {
      return isPassword ? "text" : "password";
    }

    return typeOfField;
  };

  return (
    <VStack gap="2" align="flex-start" w="full">
      <Text color="#FFF">{text}</Text>
      <Box w="full" position={typeOfField === "password" ? "relative" : ""}>
        <Input
          w="full"
          type={handleType()}
          placeholder={placeholders[name]}
          name={name}
          bg="#243647"
          color="#FFF"
          variant="subtle"
          pl="15"
          size="lg"
          _placeholder={{ color: "#FFFFFF80" }}
          onChange={(e) => handleChange(e, name)}
          value={typeOfForm[name]}
        />
        {typeOfField === "password" && (
          <Icon
            color="#FFFFFF80"
            as={isPassword ? FaRegEye : FaEyeSlash}
            position="absolute"
            right="5"
            top="50%"
            transform="translateY(-50%)"
            onClick={passwordVisibility}
            cursor="pointer"
          />
        )}
      </Box>
    </VStack>
  );
};

export default InputField;
