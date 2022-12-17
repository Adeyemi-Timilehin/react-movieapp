import { Box,Text } from "@chakra-ui/react";
import background from "../assets/img/rec.png"
import classes from './Header.module.css'
const Header = () => {
    return(
        <>
        <Box bg="gray.900" className={classes.rectangle} color="white" p={3}>
          <Text fontSize="lg" className={classes.head}>MyTestApp</Text>
        </Box>
      
        <Box className={classes.article}>
        <img  src={background} className={classes.picture} alt="background" w="100"/>
        <Box className={classes.header}><Text className={classes.text}>Watch something incredible</Text ></Box>
        
          </Box>

      </>
    )

};
export default Header;
