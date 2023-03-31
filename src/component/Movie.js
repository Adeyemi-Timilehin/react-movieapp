import {Box,Image } from "@chakra-ui/react";

const Movie = ({ data, loading }) => {
return(
  <Box>
  {( loading)?<h1>Loading...</h1>:((data)&&<Box maxW="sm" mt={[3, 8]}>
  <Box>Movie Category:{data.data.Genre}</Box>
  <Image src={data.data.Poster} alt={data.data.Title}/>
  {/* <Square
    size={{ base: "100px", lg: "300px" }}
    bg="purple.700"
    color="white"
    p={4}
  >
    <Center>
     <h2>Title: {data.data.Title}</h2>
     </Center>{" "} 
  </Square> */}
</Box>)}
  </Box>
)

};
export default Movie;
