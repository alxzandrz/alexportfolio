import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (

    <Box align="center" opacity={0.4} fontSize="sm">
        <p align="center">
        And special thanks to Takuya Matsuyama for the template.
        </p >
      &copy; {new Date().getFullYear()} Takuya Matsuyama. All Rights Reserved.
    </Box>
  )
}

export default Footer
