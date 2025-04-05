import productStore from "@/zustand/product/productStore";
import { Box, Grid } from "@chakra-ui/react";
import React from "react";

const Sizes = () => {
  const { setSizes, sizes } = productStore();

  const listOfSizes = [
    { id: 1, size: "Small" },
    { id: 2, size: "Medium" },
    { id: 3, size: "Large" },
    { id: 4, size: "Extra Large" },
  ];

  const boxStyles = (size) => ({
    borderColor: "#FFF",
    borderWidth: sizes.includes(size) ? "0" : "1px",
    borderRadius: "5px",
    height: "150px",
    color: "#FFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    background: sizes.includes(size) ? "#2985E5" : "transparent",
  });

  return (
    <Grid templateColumns="repeat(5, 1fr)" gap="5" w="100%">
      {listOfSizes.map((size) => (
        <Box
          style={boxStyles(size.size)}
          key={size.id}
          onClick={() => setSizes(size.size)}
        >
          {size.size}
        </Box>
      ))}
    </Grid>
  );
};

export default Sizes;
