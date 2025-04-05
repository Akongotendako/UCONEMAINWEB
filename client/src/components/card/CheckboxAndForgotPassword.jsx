import React from 'react'
import { HStack, Checkbox, Link } from '@chakra-ui/react'

const CheckboxAndForgotPassword = ({type, checkboxContent}) => {
  return (
    <HStack justify="space-between" w="100%" mt="3 !important">
      <Checkbox.Root
        icon={null}
        _checked={{
          "& .chakra-checkbox__control": {
            bg: "#94ADC7",
          },
        }}
        iconColor="transparent"
      >
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <Checkbox.Label color="#FFF">{checkboxContent}</Checkbox.Label>
      </Checkbox.Root>

      {type === "login" && (
        <Link color="#94ADC7">forgot password?</Link>
      )}
    </HStack>
  )
}

export default CheckboxAndForgotPassword