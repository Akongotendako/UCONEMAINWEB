import GeneralInformation from '@/components/admin-profile/general-information/GeneralInformation';
import ProfileSection from '@/components/admin-profile/profile-section/ProfileSection';
import { Box, HStack } from '@chakra-ui/react'
import React from 'react'

const AdminProfile = () => {
  return (
    <Box p="5">
      <HStack gap="5" align="self-start">
        <ProfileSection/>
        <GeneralInformation/>
      </HStack>
    </Box>
  );
}

export default AdminProfile