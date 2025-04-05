"use client";

import { Box, HStack, Icon, RatingGroup } from "@chakra-ui/react";
import React from "react";
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";

const Rating = () => {
  const stars = [
    { id: 1, star: IoStar },
    { id: 2, star: IoStar },
    { id: 3, star: IoStar },
    { id: 4, star: IoStar },
    { id: 5, star: IoStarHalf },
  ];

  return (
    <HStack>
      {stars.map((star) => (
        <Icon as={star.star} key={star.id} color="yellow"/>
      ))}
    </HStack>
  );
};

export default Rating;
