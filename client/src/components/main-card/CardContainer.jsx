import { Box } from '@chakra-ui/react'
import React from 'react'

const CardContainer = ({children, width}) => {
  return (
    <Box rounded="md" borderWidth="1px" borderColor="#FFF" p="5" w={width || "full"}>
        {children}
    </Box>
  );
}

export default CardContainer