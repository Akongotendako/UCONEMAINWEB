import { Container, Box, HStack } from "@chakra-ui/react";
import React from "react";
import Logo from "../logo/Logo";
import LinkButtons from "./LinkButtons";
import AccountButtons from "./AccountButtons";

const NavBar = ({role}) => {
  return (
    <HStack
      borderColor="#FFF"
      borderBottomWidth="1px"
      w="100%"
      bg="#121A21"
      position="sticky"
      top="0"
      left="0"
      zIndex="1000"
      align="center"
      justify="space-between"
      p="5"
    >

      {/** Logo */}
      <Logo isCancel={true}/>


      {/** Link buttons */}
      <LinkButtons role={role}/>

      {/** Accounts */}
      <AccountButtons/>
    </HStack>
  );
};

export default NavBar;
