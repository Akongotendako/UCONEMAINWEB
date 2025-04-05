import { Box, HStack, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import Header from './Header'
import Description from './Description'
import TShirt from '../../../assets/t-shirt.jpeg'

const Hero = () => {
  return (
    <HStack rounded="md" borderColor="#FFF" borderWidth="1px" p="5">

      <VStack align="flex-start">
        <Header/>
        <Description/>
      </VStack>

      <Image src={TShirt} w="37.5rem" h="31.5rem" fit="cover" rounded="lg"/>
    </HStack>
  )
}

export default Hero