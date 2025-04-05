import { HStack } from '@chakra-ui/react'
import React from 'react'
import LeftContent from '@/components/admin_shop_add_update_item_form/LeftContent';
import RightContent from '@/components/admin_shop_add_update_item_form/RightContent';

const AdminShopAddItem = () => {
  return (
    <HStack width="100%" align="start" gap="5">
        <LeftContent/>
        <RightContent/>
    </HStack>
  );
}

export default AdminShopAddItem