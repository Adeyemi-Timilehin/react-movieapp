import { Box,Text,AbsoluteCenter  } from "@chakra-ui/react";
import background from "../assets/img/rec.png"
import { Image } from '@chakra-ui/react';
const Header = () => {
    return(
        <>
        <Box bg="gray.900" color="white" p={3}>
          <Text fontSize="xlg" >MyTestApp</Text>
        </Box>
      
        <Box position='relative'>
        <Image boxSize="sm" objectFit='cover'  src={background}  alt="background" w="100%"/>

        <AbsoluteCenter axis='both' fontSize={{base:"2em",lg:"3em"}} color="#fff" >Watch something incredible</AbsoluteCenter>
        
          </Box>

      </>
    )

};
export default Header;
