import { Box } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminShopMain = () => {
  return (
    <Box p="5" w="100%">
        <Outlet/>
    </Box>
  )
}

export default AdminShopMain