import { Box,Text,Center  } from "@chakra-ui/react";
import background from "../assets/img/rec.png"
import { Image } from '@chakra-ui/react';
const Header = () => {
    return(
        <>
        <Box bg="gray.900" color="white" p={3}>
          <Text fontSize="xlg" >MyTestApp</Text>
        </Box>
      
        <Box>
        <Image boxSize="sm" objectFit='cover'  src={background}  alt="background" w="100%"/>
        <Center pos="absolute" top={{ base:'170px', lg:'200px'}} left= {{ base: '50px', md: '200px', lg: '450px'   }} fontSize='2em' color="#fff" >Watch something incredible</Center>
        
          </Box>

      </>
    )

};
export default Header;
