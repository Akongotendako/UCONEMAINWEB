import { ROUTES } from "@/routes/routes";
import { Button, Dialog, Flex } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RemoveDialog from "./RemoveDialog";
import productStore from "@/zustand/product/productStore";

const ButtonContainer = ({ _id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { deleteProduct } = productStore();

  const onOpen = () => setIsOpen(true);

  const handleDeleteProduct = async () => {
    
    const response = await deleteProduct(_id);
    console.log(`response mo diha ${response}`)
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(ROUTES.ADMIN.ADMIN_SHOP.UPDATE_ITEM.replace(":id", _id));
  };
  return (
    <Dialog.Root>
      <Flex
        w="100%"
        justify="space-between"
        align="center"
        direction="row"
        gap="5"
        mt="10 !important"
      >
        <Button
          flex={1}
          bg="#121A21"
          borderColor="#FFF"
          _hover={{ bg: "#2985E5", borderColor: "#121A21" }}
          onClick={handleNavigation}
        >
          Update
        </Button>
        <Button
          flex={1}
          bg="#2985E5"
          _hover={{ bg: "#121A21", borderColor: "#FFF" }}
          onClick={onOpen}
        >
          Remove
        </Button>

        <RemoveDialog
          isOpen={isOpen}
          onConfirm={handleDeleteProduct}
          onCancel={handleCancel}
        />
      </Flex>
    </Dialog.Root>
  );
};

export default ButtonContainer;
