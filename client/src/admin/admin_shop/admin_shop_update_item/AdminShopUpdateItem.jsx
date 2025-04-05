import LeftContent from "@/components/admin_shop_add_update_item_form/LeftContent";
import RightContent from "@/components/admin_shop_add_update_item_form/RightContent";
import productStore from "@/zustand/product/productStore";
import { HStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";

const AdminShopUpdateItem = () => {
  const adminShopAddItemRef = useRef(false);
  const { id } = useParams();
  const { getProduct } = productStore();

  useEffect(() => {
    if (!adminShopAddItemRef.current) {
      getProduct(id);
      adminShopAddItemRef.current = true;
    }
  });

  return (
    <HStack width="100%" align="start" gap="5">
      <LeftContent />
      <RightContent type="update" id={id}/>
    </HStack>
  );
};

export default AdminShopUpdateItem;
