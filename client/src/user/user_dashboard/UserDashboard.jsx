import NavBar from "@/components/nav_bar/NavBar";
import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";

const UserDashboard = () => {
  return (
    <Flex w="100%" h="100%" position="relative" direction="column">
      <NavBar role={"user"}/>
      <Box flex="1" overflow="auto">
        <Outlet />
      </Box>
    </Flex>
  );
};

export default UserDashboard;
