import productStore from '@/zustand/product/productStore';
import { VStack, Text, Box, Icon, Input } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";

const Dropdown = () => {
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const {setField, category} = productStore();
  
    const toggle = () => {
      setToggleDropdown(!toggleDropdown);
    };
  
    const listOfTypes = () => {
      return [
        {
          id: 1,
          item: "T-shirt",
        },
        {
          id: 2,
          item: "Uniform",
        },
        {
          id: 3,
          item: "Lanyard",
        },
      ];
    };
  
    return (
      <VStack align="start" mt="7 !important" w="100%">
        <Text textStyle="lg" color="#FFF" variant="subtle">
          Category
        </Text>
        <Box w="100%" position="relative">
          <Input
            bg="#243647"
            color="#FFF"
            variant="subtle"
            size="lg !important"
            placeholder="Choose category"
            readOnly
            value={category}
          />
          <Icon
            position="absolute"
            as={RiArrowDropDownLine}
            size="xl"
            color="#FFF"
            right="5px"
            top="50%"
            transform="translateY(-50%)"
            onClick={toggle}
          />
  
          {/** Drop down */}
          <VStack
            position="absolute"
            zIndex="100"
            rounded="md"
            bg="#243647"
            w="100%"
            left="0"
            top="50px"
            display={toggleDropdown ? "flex" : "none"}
            py="4 !important"
            px="3 !important"
            color="#FFF"
            gap="5"
            align="start"
          >
            {listOfTypes().map((item) => (
              <Box
                w="100%"
                cursor="pointer"
                _hover={{ color: "#94ADC7" }}
                key={item.id}
                onClick={() => {
                  setField("category", item.item);
                  toggle();
                }}
              >
                {item.item}
              </Box>
            ))}
          </VStack>
        </Box>
      </VStack>
    );
}

export default Dropdown