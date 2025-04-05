import NavBar from "@/components/nav_bar/NavBar";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <Flex w="100%" h="100%" position="relative" direction="column">
      <NavBar />
      <Box flex="1" overflow="auto">
        <Outlet />
      </Box>
    </Flex>
  );
};

export default AdminDashboard;
