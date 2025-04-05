import Hero from '@/components/user-home/hero/Hero';
import { Box } from '@chakra-ui/react';
import React from 'react'

const UserHome = () => {
  return (
    <Box p="5" w="full">
      <Hero/>
    </Box>
  );
}

export default UserHome