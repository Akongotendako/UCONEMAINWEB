import productStore from "@/zustand/product/productStore";
import { Grid } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Card from "./Card";

const GridContainer = () => {
  const { getAllProducts, products } = productStore();
  const count = useRef(false);

  useEffect(() => {
    getAllProducts();
    count.current += 1;
    console.log(`current ${count.current}`)
  }, [getAllProducts]);
  

  return (
    <Grid w="100%" templateColumns="repeat(3, 1fr)" gap="5">
      {products.map((product) => (
        <Card
          images={product.images}
          productName={product.productName}
          price={product.price}
          description={product.description}
          key={product._id}
          _id={product._id}
        />
      ))}
    </Grid>
  );
};

export default GridContainer;
