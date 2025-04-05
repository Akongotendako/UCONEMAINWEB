import { Flex, HStack, Image, Separator, Text } from "@chakra-ui/react";
import React from "react";
import Description from "./Description";
import Rating from "./Rating";
import ButtonContainer from "./ButtonContainer";

const Card = ({ productName, images, price, description, _id }) => {
  

  return (
    <Flex
      borderColor="#FFF"
      borderWidth="1px"
      rounded="xl"
      p="5"
      direction="column"
    >
      {/** Image */}
      <Image src={images[0].url} rounded="md" maxH="200px" objectFit="cover" />

      {/** title and price */}
      <HStack justify="space-between" mt="7 !important" textStyle="xl">
        <Text color="#FFF">{productName}</Text>
        <Text color="#94ADC7">{`₱ ${price}`}</Text>
      </HStack>

      {/** rating */}
      <Rating />

      {/** Description */}
      <Description description={description} />

      {/** Separator */}
      <Separator mt="10 !important" />

      {/** remove button */}
      <ButtonContainer _id={_id}/>
    </Flex>
  );
};

export default Card;
