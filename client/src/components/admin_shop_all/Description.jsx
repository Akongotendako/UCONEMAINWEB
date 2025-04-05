import { Text } from '@chakra-ui/react'
import React from 'react'


const Description = ({description}) => {
  return (
    <Text lineClamp="3" color="#FFF" mt="3 !important">{description}</Text>
  )
}

export default Description