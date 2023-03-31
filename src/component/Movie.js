import { Flex, Box, Square, Center } from "@chakra-ui/react";

const Movie = ({ data, loading }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (!data) return null;
  return (
    <Box maxW="sm" mt={[3, 8]}>
      <Box>Movie Category:{data.data.Genre}</Box>
      <Square
        size={{ base: "100px", lg: "300px" }}
        bg="purple.700"
        color="white"
      >
        <Center>{data.data.Title}</Center>{" "}
      </Square>
    </Box>
  );
};
export default Movie;
