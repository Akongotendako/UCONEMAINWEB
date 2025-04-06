import CardContainer from "@/components/main-card/CardContainer";
import Description from "@/components/typography/Description";
import Title from "@/components/typography/Title";
import { Box, HStack, Image, VStack } from "@chakra-ui/react";
import React from "react";
import TShirt from '../../assets/t-shirt.jpeg'
import PrimaryButton from "@/components/buttons/PrimaryButton";

const UserHome = () => {
  return (
    <Box p="5" w="full">
      {/** Hero section */}
      <CardContainer>
        <HStack gap="10" w="full">
          <VStack align="flex-start">
            <Title textStyle={"2xl"}>UC Merch</Title>
            <Description mt={"2"}>
              Skip the long walks and social media searches! Discover the latest
              products for students, order online, and pick up at your
              department hassle-free.
            </Description>
            <PrimaryButton width={"56"}>Shop Now</PrimaryButton>
          </VStack>
          <Image src={TShirt} height="500px" rounded="sm"/>
        </HStack>
      </CardContainer>

      {/** Categories */}
      <Title>Categories</Title>
    </Box>
  );
};

export default UserHome;
