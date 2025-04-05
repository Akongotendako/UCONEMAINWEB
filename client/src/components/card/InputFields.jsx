import React, { useState } from "react";
import { VStack, Input, Text, Box, Icon } from "@chakra-ui/react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa6";
import userStore from "@/zustand/user/userStore";

const InputFields = ({ type }) => {
  const { setField, signup, signin } = userStore();

  const formType = type === "signin" ? signin : signup;

  console.log(formType)

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const showPassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const showConfirmPassword = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const handleEmail = (e) => {
    setField(type, "email", e.target.value);
  };

  const handlePassword = (e) => {
    setField(type, "password", e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setField(type, "confirmPassword", e.target.value);
  };

  return (
    <VStack align="self-start" gap="5" mt="10 !important">
      {/** Email */}
      <VStack w="100%" align="self-start">
        <Text textStyle="1xl" fontWeight="medium" color="#FFF">
          Email
        </Text>

        <Input
          placeholder="Enter your email"
          type="email"
          bg="#243647"
          color="#FFF"
          variant="subtle"
          pl="15 !important"
          size="lg !important"
          _placeholder={{ color: "#FFFFFF80" }}
          onChange={handleEmail}
          value={formType.email}
        />
      </VStack>

      {/** Password */}
      <VStack w="100%" align="self-start">
        <Text textStyle="1xl" fontWeight="medium" color="#FFF">
          Password
        </Text>

        <Box w="100%" position="relative">
          <Input
            placeholder="Enter your password"
            type={isPasswordVisible ? "text" : "password"}
            color="#FFF"
            bg="#243647"
            variant="subtle"
            pl="15 !important"
            size="lg !important"
            _placeholder={{ color: "#FFFFFF80" }}
            onChange={handlePassword}
            value={formType.password}
          />

          {isPasswordVisible ? (
            <Icon
              textStyle="md"
              color="#FFF"
              position="absolute"
              right="5"
              top="50%"
              transform="translateY(-50%)"
              onClick={showPassword}
              cursor="pointer"
            >
              {<FaRegEye />}
            </Icon>
          ) : (
            <Icon
              textStyle="md"
              color="#FFF"
              position="absolute"
              right="5"
              top="50%"
              transform="translateY(-50%)"
              onClick={showPassword}
              cursor="pointer"
            >
              {<FaEyeSlash />}
            </Icon>
          )}
        </Box>
      </VStack>

      {type === "signup" && (
        <VStack w="100%" align="self-start">
          <Text textStyle="1xl" fontWeight="medium" color="#FFF">
            Confirm Password
          </Text>

          <Box w="100%" position="relative">
            <Input
              placeholder="Enter your confirm password"
              type={isConfirmPasswordVisible ? "text" : "password"}
              bg="#243647"
              color="#FFF"
              variant="subtle"
              pl="15 !important"
              size="lg !important"
              _placeholder={{ color: "#FFFFFF80" }}
              onChange={handleConfirmPassword}
              value={formType.confirmPassword}
            />

            {isConfirmPasswordVisible ? (
              <Icon
                textStyle="md"
                color="#FFF"
                position="absolute"
                right="5"
                top="50%"
                transform="translateY(-50%)"
                onClick={showConfirmPassword}
                cursor="pointer"
              >
                {<FaRegEye />}
              </Icon>
            ) : (
              <Icon
                textStyle="md"
                color="#FFF"
                position="absolute"
                right="5"
                top="50%"
                transform="translateY(-50%)"
                onClick={showConfirmPassword}
                cursor="pointer"
              >
                {<FaEyeSlash />}
              </Icon>
            )}
          </Box>
        </VStack>
      )}
    </VStack>
  );
};

export default InputFields;
