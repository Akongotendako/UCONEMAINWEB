import React from "react";
import { VStack, Button } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import userStore from "@/zustand/user/userStore";
import { generalToast } from "@/utils/GeneralToast";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/routes/routes";

const Credentials = ({ type }) => {
  const { signUp, clearAllProperties, signIn } = userStore();
  const navigate = useNavigate()

  const handleSubmission = async () => {
    if (type === "signup") {
      console.log("hello")
      const response = await signUp();
      generalToast({ data: response, clearAllProperties: clearAllProperties});
    } else {
      const response = await signIn();
      generalToast({data: response, clearAllProperties: clearAllProperties});
      setTimeout(() => {
        handleNavigation(response);
      }, 3000);
    }
  };


  const handleNavigation = (response) => {
    if(response.data.response.role === "admin") {
      localStorage.setItem("id", response.data.response._id)
      navigate(ROUTES.ADMIN.ADMIN_DASHBOARD);
    } else {
      localStorage.setItem("id", response.data.response._id)
      navigate(ROUTES.USER.USER_DASHBOARD);
    }
  };

  return (
    <VStack w="100%" mt="10 !important" gap="5">
      <Button
        w="100%"
        bg="#2985E5"
        _hover={{ bg: "#121A21", borderColor: "#FFF" }}
        onClick={handleSubmission}
      >
        {type === "signin" ? "SIGN IN" : "SIGN UP"}
      </Button>
      <Button
        variant="outline"
        w="100%"
        color="#FFF"
        _hover={{ bg: "#2985E5", borderColor: "transparent" }}
      >
        <FcGoogle />
        {type === "signin" ? "SIGN IN WITH GOOGLE" : "SIGN UP WITH GOOGLE"}
      </Button>
    </VStack>
  );
};

export default Credentials;
