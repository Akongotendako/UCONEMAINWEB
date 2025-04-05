import productStore from "@/zustand/product/productStore";
import { Input, Text, Textarea, VStack } from "@chakra-ui/react";
import React from "react";

const InputFields = ({type}) => {
  const { productName, description, price, stock, discount, setField } =
    productStore();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setField(name, value);
  };

  const placeholder = {
    productName: "Enter the product name",
    description: "Type anything...",
    price: "Enter the original price",
    stock: "Enter the available stock",
    discount: "Enter the discount (optional)",
  };

  const label = {
    productName: "Product name",
    description: "Description",
    price: "Price",
    stock: "Stock",
    discount: "Discount",
  };

  const value = {
    productName,
    description,
    price,
    stock,
    discount,
  };

  return (
    <VStack align="start" mt="7" w="100%">
      <Text textStyle="lg" color="#FFF" variant="subtle">
        {label[type]}
      </Text>
      {type === "description" ? (
        <Textarea
          name={type}
          bg="#243647"
          color="#FFF"
          variant="subtle"
          size="lg"
          value={value[type] || ""}
          placeholder={placeholder[type]}
          onChange={handleChange}
          autoresize="none"
        />
      ) : (
        <Input
          name={type}
          bg="#243647"
          color="#FFF"
          variant="subtle"
          size="lg"
          value={value[type] || ""}
          placeholder={placeholder[type]}
          onChange={handleChange}
        />
      )}
    </VStack>
  );
};

export default InputFields;
