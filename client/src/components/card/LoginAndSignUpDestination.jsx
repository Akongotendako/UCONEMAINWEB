import React from "react";
import {Link as ReactRouterLink} from 'react-router-dom'
import { HStack, Text, Link } from "@chakra-ui/react";
import { ROUTES } from "@/routes/routes";

const LoginAndSignUpDestination = ({type}) => {

   const handleNavigation = () => {
      return type === "signin" ? ROUTES.SIGN_UP : ROUTES.BASE_URL
   }; 

  return (
    <HStack mt="3 !important">
      <Text color="#FFF">
        {type === "signin"
          ? "Don't have an account yet?"
          : "Already have an account?"}
      </Text>
      <Link
        as={ReactRouterLink}
        to={handleNavigation()}
        color="#94ADC7"
      >
        {type === "signin" ? "Sign up" : "Sign in"}
      </Link>
    </HStack>
  );
};

export default LoginAndSignUpDestination;
