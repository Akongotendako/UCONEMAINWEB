import { Box, HStack, Spinner } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Avatar from "./Avatar";
import Name from "./Name";
import ChangeButton from "./ChangeButton";
import userStore from "@/zustand/user/userStore";

const ProfileSection = () => {
  const { fetchProfile, profile } = userStore();

  useEffect(() => {
    fetchProfile(localStorage.getItem("id"));
  }, []);

  return (
    <Box borderColor="#FFF" borderWidth="1px" rounded="md" w="30%" p="5">
      <HStack w="full" justify="center">
        <Avatar />
      </HStack>
      <Name name={`${profile.firstName} ${profile.lastName}`} />
      <ChangeButton />
    </Box>
  );
};

export default ProfileSection;
