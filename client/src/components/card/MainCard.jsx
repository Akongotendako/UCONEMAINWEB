import { Box } from "@chakra-ui/react";
import React from "react";
import TitleAndDesc from "./TitleAndDesc";
import InputFields from "./InputFields";
import Credentials from "./Credentials";
import LoginAndSignUpDestination from "./LoginAndSignUpDestination";
import CheckboxAndForgotPassword from "./CheckboxAndForgotPassword";

const MainCard = ({ title, desc, type, checkboxContent }) => {
  return (
    <Box
      borderWidth="1px"
      borderColor="#FFF"
      rounded="12px"
      p="20px"
      w="40%"
    >
      {/** Title and description */}
      <TitleAndDesc title={title} desc={desc} />

      {/** Input fields */}
      <InputFields type={type}/>

      {/** Check box */}
      <CheckboxAndForgotPassword type={type} checkboxContent={checkboxContent}/>

      {/** Credentials */}
      <Credentials type={type}/>

      {/** Sign up link or asking a user if they have sign in their credentials */}
      <LoginAndSignUpDestination type={type}/>
    </Box>
  );
};

export default MainCard;
