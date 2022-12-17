import { Flex, Center, Text, Box } from "@chakra-ui/react";
import classes from "./Movie.module.css";
const Movie = ({ data, loading }) => {
  console.log(data);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <Box className={classes.movie}>
      <Box className={classes.movieCat}>Movie Category:{data.data.Genre
}</Box>
      <Box>
        <Flex
          color="white"
          minWidth="max-content"
          alignItems="flex-start"
          gap="10"
        >
          <Center w="300px" h="300px" bg="black" rounded="md">
            <Text> {data.data.Title}</Text>
          </Center>
        </Flex>
      </Box>
    </Box>
  );
};
export default Movie;
