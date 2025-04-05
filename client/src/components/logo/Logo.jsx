import React from "react";
import UcMerchLogo from "../../assets/shopping-cart.png";
import { HStack, Image, Text } from "@chakra-ui/react";

const Logo = ({isCancel = false}) => {
  return (
    <HStack position={isCancel ? "" : "absolute"} top="20px" left="20px">
      <Image
        height="50px"
        width="50px"
        fit="cover"
        src={UcMerchLogo}
        alt="Uc merch logo"
      />
      <Text fontSize="1.5rem" color="#FFF">
        UC Merch
      </Text>
    </HStack>
  );
};

export default Logo;
