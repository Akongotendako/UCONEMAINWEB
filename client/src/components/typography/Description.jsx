import { Text } from '@chakra-ui/react';
import React from 'react'

const Description = ({children, mt}) => {
  return (
    <Text color="#FFFFFF80" textStyle="lg" mt={mt || "5"}>{children}</Text>
  );
}

export default Description