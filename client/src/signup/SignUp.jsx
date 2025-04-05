import React from 'react'
import { Flex } from '@chakra-ui/react';
import Logo from '@/components/logo/Logo';
import MainCard from '@/components/card/MainCard';

const SignUp = () => {
  return (
    <Flex w="100vw" h="100%" align="center" justify="center" mH="100vh">
      {/** Logo Container */}
      <Logo />

      {/** Card */}
      <MainCard
        title={"Welcome Back"}
        desc={
          "See what's new at Uc Merch! Explore our latest arrivals and campus gear."
        }
        type={"signup"}
        checkboxContent={"Agree terms and conditions"}
      />
    </Flex>
  );
}

export default SignUp