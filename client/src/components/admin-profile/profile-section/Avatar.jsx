import { Image } from "@chakra-ui/react";
import React from "react";
import Profile from '../../../assets/profile.png'
import userStore from "@/zustand/user/userStore";

const Avatar = () => {

  const {profile} = userStore();

  return (
    <Image
      src={profile.profilePic.url === "" ? Profile : profile.profilePic.url}
      alt="Profile"
      boxSize="150px"
      fit="cover"
      borderRadius="full"
    />
  );
};

export default Avatar;
