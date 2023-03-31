import { Flex, Center, Text, Box } from "@chakra-ui/react";

const Movie = ({ data, loading }) => {

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (!data) return null;
  return (
    <Box maxW='sm' mt={[3, 8]}>
      <Box>Movie Category:{data.data.Genre
}</Box>
      <Box>
        <Flex
          color="white"
          minWidth="max-content"
          alignItems="flex-start"
          gap="10"
        >
          <Center w={{base:"150px",md:"300px",lg:"400px"}} h={{base:"150px"}} bg="black" rounded="md" mb={20}>
            <Text> {data.data.Title}</Text>
          </Center>
        </Flex>
      </Box>
    </Box>
  );
};
export default Movie;
